import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './services/firebase';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { TopicDetail } from './pages/TopicDetail';
import { QuizSession } from './pages/QuizSession';
import { Foundations } from './pages/Foundations';
import { Login } from './pages/Login';
import { AIAssistant } from './components/AIAssistant';
import { AdBanner } from './components/AdBanner';
import { AppState, UserProgressItem, ConfidenceLevel } from './types';
import { getInitialProgress, updateProgress } from './services/spacedRepetition';
import { TOPICS } from './data';

// Component to handle authenticated routes
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) return <div className="h-screen flex items-center justify-center bg-slate-50 text-gray-500">Loading...</div>;
  
  if (!user) {
    return <Login />;
  }

  return <>{children}</>;
};

const AuthenticatedApp: React.FC = () => {
  const { user, geminiApiKey } = useAuth();
  const [appState, setAppState] = useState<AppState>({ progress: {} });
  const [dataLoaded, setDataLoaded] = useState(false);

  // Load progress from Firestore when user changes, fallback to local storage if permissions fail
  useEffect(() => {
    if (!user) return;

    const loadData = async () => {
      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setAppState(docSnap.data() as AppState);
        } else {
          // Initialize empty state in DB
          // Note: This might fail if rules aren't set up, caught below
          await setDoc(docRef, { progress: {} });
        }
      } catch (err) {
        console.warn("Firestore access failed (likely permissions), falling back to local storage:", err);
        // Fallback to local storage so the app still works for the user
        try {
          const saved = localStorage.getItem('sportsNutriRevise_v2'); 
          if (saved) {
            setAppState(JSON.parse(saved));
          }
        } catch (e) {
          console.error("Local storage load error", e);
        }
      } finally {
        setDataLoaded(true);
      }
    };

    loadData();
  }, [user]);

  // Persist state to Firestore on change (debounced slightly or direct)
  const saveToFirestore = async (newState: AppState) => {
    // 1. Always save to LocalStorage as a backup/cache
    localStorage.setItem('sportsNutriRevise_v2', JSON.stringify(newState));

    // 2. Try saving to Firestore
    if (!user) return;
    try {
      await setDoc(doc(db, "users", user.uid), newState, { merge: true });
    } catch (err) {
      // If permissions fail, we just rely on LocalStorage and don't crash
      console.warn("Could not sync to cloud (check Firestore rules). Data saved locally.");
    }
  };

  const handleProgressUpdate = (questionId: string, correct: boolean, confidence: ConfidenceLevel) => {
    setAppState(prev => {
      const currentItem = prev.progress[questionId] || getInitialProgress(questionId);
      const updatedItem = updateProgress(currentItem, correct, confidence);
      const newState = {
        progress: {
          ...prev.progress,
          [questionId]: updatedItem
        }
      };
      
      saveToFirestore(newState);
      return newState;
    });
  };

  if (!dataLoaded) {
    return <div className="h-screen flex items-center justify-center bg-slate-50 text-gray-500">Syncing progress...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-900 pb-24 selection:bg-teal-100 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Dashboard state={appState} />} />
          <Route path="/foundations" element={<Foundations />} />
          <Route path="/topics" element={<TopicList />} />
          <Route path="/topics/:id" element={<TopicDetail />} />
          <Route path="/exam" element={<QuizSession state={appState} onUpdateProgress={handleProgressUpdate} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      
      <AdBanner />
      
      {/* Pass the key if it exists, otherwise AI component handles prompt */}
      {geminiApiKey && <AIAssistant />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <ProtectedRoute>
          <AuthenticatedApp />
        </ProtectedRoute>
      </Router>
    </AuthProvider>
  );
};

// Simple Topic List Component
const TopicList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Revision Topics</h1>
        <p className="text-gray-500">Select a topic to review notes or practice questions.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TOPICS.map(topic => (
          <div key={topic.id} className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow rounded-xl border border-gray-100 flex flex-col h-full">
            <div className="px-5 py-5 flex-1">
              <h3 className="text-lg font-bold text-gray-900 truncate mb-2">
                {topic.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                {topic.description}
              </p>
            </div>
            <div className="bg-gray-50 px-5 py-3 border-t border-gray-100 mt-auto flex justify-between items-center">
               <span className="text-xs text-gray-500 font-medium">{topic.learningObjectives.length} Objectives</span>
               <Link to={`/topics/${topic.id}`} className="text-primary hover:text-teal-800 font-bold text-sm flex items-center">
                  Study 
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;