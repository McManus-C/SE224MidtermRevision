import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { QUESTIONS } from '../data';
import { QuizCard } from '../components/QuizCard';
import { AppState, ConfidenceLevel, Question } from '../types';
import { isDue } from '../services/spacedRepetition';

interface QuizSessionProps {
  state: AppState;
  onUpdateProgress: (questionId: string, correct: boolean, confidence: ConfidenceLevel) => void;
}

export const QuizSession: React.FC<QuizSessionProps> = ({ state, onUpdateProgress }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const topicId = searchParams.get('topic');
  const mode = searchParams.get('mode');

  const [sessionQueue, setSessionQueue] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let qList = QUESTIONS;
    
    // Filter by topic if present
    if (topicId) {
      qList = qList.filter(q => q.topicId === topicId);
    }

    // Filter by mode
    if (mode === 'due') {
      qList = qList.filter(q => {
        const prog = state.progress[q.id];
        return !prog || isDue(prog);
      });
    }

    // Shuffle and limit (Interleaving logic simple implementation)
    // For mixed practice, we might take 10 randoms
    const shuffled = [...qList].sort(() => 0.5 - Math.random());
    setSessionQueue(shuffled.slice(0, 15)); // Cap at 15 for a session
  }, [topicId, mode]);

  const handleCardComplete = (isCorrect: boolean, confidence: ConfidenceLevel) => {
    if (isCorrect) setScore(s => s + 1);
    
    // Update global state immediately (Spaced Repetition)
    onUpdateProgress(sessionQueue[currentIndex].id, isCorrect, confidence);
  };

  const handleNext = () => {
    if (currentIndex < sessionQueue.length - 1) {
      setCurrentIndex(c => c + 1);
    } else {
      setFinished(true);
    }
  };

  if (sessionQueue.length === 0) {
    return (
      <div className="max-w-md mx-auto mt-20 text-center p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">All Caught Up!</h2>
        <p className="text-gray-600 mb-6">No questions fit the current criteria or you are up to date with your spaced repetition.</p>
        <Link to="/" className="text-primary font-medium hover:underline">Return Home</Link>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="max-w-md mx-auto mt-20 bg-white shadow-lg rounded-xl p-8 text-center border-t-4 border-primary">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Session Complete!</h2>
        <div className="text-6xl font-black text-primary mb-2">{Math.round((score / sessionQueue.length) * 100)}%</div>
        <p className="text-gray-500 mb-8">You got {score} out of {sessionQueue.length} correct.</p>
        
        <div className="space-y-3">
          <Link to="/" className="block w-full bg-primary text-white py-3 rounded-md font-medium hover:bg-teal-800 transition">
            Back to Dashboard
          </Link>
          <Link to="/exam" className="block w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-md font-medium hover:bg-gray-50 transition">
            New Session
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6 flex justify-between items-center text-sm text-gray-500">
        <span>Question {currentIndex + 1} of {sessionQueue.length}</span>
        <span>Mode: {topicId ? 'Topic Focus' : 'Mixed Practice'}</span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
        <div 
          className="bg-primary h-2.5 rounded-full transition-all duration-300" 
          style={{ width: `${((currentIndex) / sessionQueue.length) * 100}%` }}
        ></div>
      </div>

      <QuizCard 
        // Force remount on new question to reset internal state
        key={sessionQueue[currentIndex].id} 
        question={sessionQueue[currentIndex]} 
        onComplete={handleCardComplete}
        showNext={true}
        onNext={handleNext}
      />
    </div>
  );
};