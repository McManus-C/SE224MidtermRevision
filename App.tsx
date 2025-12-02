import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { TopicDetail } from './pages/TopicDetail';
import { QuizSession } from './pages/QuizSession';
import { Foundations } from './pages/Foundations';
import { AIAssistant } from './components/AIAssistant';
import { AppState, UserProgressItem, ConfidenceLevel } from './types';
import { getInitialProgress, updateProgress } from './services/spacedRepetition';
import { TOPICS } from './data';

const App: React.FC = () => {
  // Load state from local storage or default
  const [appState, setAppState] = useState<AppState>(() => {
    try {
      const saved = localStorage.getItem('sportsNutriRevise_v2'); // Incremented version to ensure clean slate if needed or use migration logic
      return saved ? JSON.parse(saved) : { progress: {} };
    } catch(e) {
      return { progress: {} };
    }
  });

  // Persist state
  useEffect(() => {
    localStorage.setItem('sportsNutriRevise_v2', JSON.stringify(appState));
  }, [appState]);

  const handleProgressUpdate = (questionId: string, correct: boolean, confidence: ConfidenceLevel) => {
    setAppState(prev => {
      const currentItem = prev.progress[questionId] || getInitialProgress(questionId);
      const updatedItem = updateProgress(currentItem, correct, confidence);
      return {
        progress: {
          ...prev.progress,
          [questionId]: updatedItem
        }
      };
    });
  };

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans text-gray-900 pb-20 selection:bg-teal-100">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard state={appState} />} />
            <Route path="/foundations" element={<Foundations />} />
            <Route path="/topics" element={<TopicList />} />
            <Route path="/topics/:id" element={<TopicDetail />} />
            <Route path="/exam" element={<QuizSession state={appState} onUpdateProgress={handleProgressUpdate} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <AIAssistant />
      </div>
    </Router>
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