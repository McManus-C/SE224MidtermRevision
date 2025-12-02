import React from 'react';
import { Link } from 'react-router-dom';
import { TOPICS, QUESTIONS } from '../data';
import { AppState } from '../types';
import { isDue } from '../services/spacedRepetition';

interface DashboardProps {
  state: AppState;
}

export const Dashboard: React.FC<DashboardProps> = ({ state }) => {
  const totalQuestions = QUESTIONS.length;
  const questionsPracticed = Object.keys(state.progress).length;
  
  const dueCount = QUESTIONS.filter(q => {
    const prog = state.progress[q.id];
    return !prog || isDue(prog);
  }).length;

  const getTopicMastery = (topicId: string) => {
    const topicQs = QUESTIONS.filter(q => q.topicId === topicId);
    if (topicQs.length === 0) return 0;
    
    let totalBox = 0;
    topicQs.forEach(q => {
      const prog = state.progress[q.id];
      if (prog) totalBox += prog.box;
    });
    
    // Max box is 5. Normalized mastery score 0-100
    return Math.round((totalBox / (topicQs.length * 5)) * 100);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">SE224 Applied Sports Nutrition Revision Guide</h1>
          <p className="mt-1 text-gray-500 font-medium">By Dr Chris McManus</p>
        </div>
        <div className="mt-4 md:mt-0">
           <Link to="/topics" className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-teal-800 transition-colors">
             Browse Topics
           </Link>
        </div>
      </div>

      {/* Intro / How-to Guide */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
           <span className="bg-teal-100 text-teal-800 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide mr-2">Start Here</span>
           How to use this revision guide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          <Link to="/foundations" className="flex flex-col items-start p-4 rounded-lg bg-gray-50 border border-gray-100 hover:bg-gray-100 hover:shadow-sm transition-all group">
            <div className="bg-teal-100 text-teal-700 p-2 rounded-lg mb-3 group-hover:bg-teal-200 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <h3 className="font-bold text-gray-900 text-sm group-hover:text-primary">1. Foundations</h3>
            <p className="text-xs text-gray-600 mt-1 mb-3">Master the key terms and building blocks.</p>
            <span className="text-xs font-bold text-primary mt-auto">Go to Foundations &rarr;</span>
          </Link>

          <Link to="/topics" className="flex flex-col items-start p-4 rounded-lg bg-gray-50 border border-gray-100 hover:bg-gray-100 hover:shadow-sm transition-all group">
            <div className="bg-blue-100 text-blue-700 p-2 rounded-lg mb-3 group-hover:bg-blue-200 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
            </div>
            <h3 className="font-bold text-gray-900 text-sm group-hover:text-blue-700">2. Topic Mastery</h3>
            <p className="text-xs text-gray-600 mt-1 mb-3">Read summaries and full detailed notes.</p>
            <span className="text-xs font-bold text-primary mt-auto">View Topics &rarr;</span>
          </Link>

          <div className="flex flex-col items-start p-4 rounded-lg bg-gray-50 border border-gray-100 cursor-default">
            <div className="bg-amber-100 text-amber-700 p-2 rounded-lg mb-3">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            </div>
            <h3 className="font-bold text-gray-900 text-sm">3. AI Tutor</h3>
            <p className="text-xs text-gray-600 mt-1">Stuck? Use the button in the bottom right to ask questions.</p>
            <span className="text-xs text-gray-400 mt-auto pt-2">Available anytime ↘️</span>
          </div>

          <Link to="/exam" className="flex flex-col items-start p-4 rounded-lg bg-gray-50 border border-gray-100 hover:bg-gray-100 hover:shadow-sm transition-all group">
            <div className="bg-green-100 text-green-700 p-2 rounded-lg mb-3 group-hover:bg-green-200 transition-colors">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="font-bold text-gray-900 text-sm group-hover:text-green-700">4. Test Yourself</h3>
            <p className="text-xs text-gray-600 mt-1 mb-3">Try the Exam Mode to simulate real questions.</p>
            <span className="text-xs font-bold text-primary mt-auto">Start Exam &rarr;</span>
          </Link>

        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow rounded-xl p-5 border border-gray-100">
          <dt className="text-sm font-medium text-gray-500 truncate">Questions Due Review</dt>
          <dd className="mt-1 text-3xl font-bold text-secondary">{dueCount}</dd>
          <div className="mt-4">
            <Link to="/exam?mode=due" className="text-sm font-bold text-accent hover:text-sky-700 flex items-center">
              Start Review Session 
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow rounded-xl p-5 border border-gray-100">
          <dt className="text-sm font-medium text-gray-500 truncate">Course Progress</dt>
          <dd className="mt-1 text-3xl font-bold text-gray-900">
            {Math.round((questionsPracticed / totalQuestions) * 100)}%
          </dd>
          <p className="mt-1 text-xs text-gray-400 font-medium">{questionsPracticed} / {totalQuestions} questions practiced</p>
        </div>

        <div className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow rounded-xl p-5 border border-gray-100">
          <dt className="text-sm font-medium text-gray-500 truncate">Quick Practice</dt>
          <dd className="mt-1 text-lg font-bold text-gray-700">Mixed Mode</dd>
          <div className="mt-4">
            <Link to="/exam" className="text-sm font-bold text-primary hover:text-teal-800 flex items-center">
              Start Mock Exam 
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Foundations Banner - Redesigned for clickability */}
      <div className="relative isolate bg-gradient-to-br from-teal-700 to-teal-900 rounded-xl shadow-lg mb-8 text-white overflow-hidden">
        {/* Background Blob - strictly behind */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl pointer-events-none z-0"></div>
        
        {/* Content Wrapper - strictly above */}
        <div className="relative z-10 px-6 py-8 sm:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:pr-8">
             <h2 className="text-2xl font-bold">Start with the Foundations</h2>
             <p className="mt-2 text-teal-100 text-sm sm:text-base">Master key terms like <strong>Glycogen</strong>, <strong>AMPK</strong>, and <strong>Oxidative Phosphorylation</strong>. Understanding these building blocks makes the complex topics much easier.</p>
          </div>
          <div className="mt-6 md:mt-0 flex-shrink-0">
             <Link 
               to="/foundations" 
               className="relative z-20 inline-flex items-center justify-center bg-white text-teal-900 font-bold py-3 px-6 rounded-lg hover:bg-teal-50 transition-colors shadow-md"
             >
               Open Key Terms &rarr;
             </Link>
          </div>
        </div>
      </div>

      {/* Topics List */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Topic Mastery</h2>
      </div>
      <div className="bg-white shadow-sm border border-gray-200 sm:rounded-xl overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {TOPICS.map(topic => {
            const mastery = getTopicMastery(topic.id);
            return (
              <li key={topic.id} className="group hover:bg-gray-50 transition-colors">
                <Link to={`/topics/${topic.id}`} className="block">
                  <div className="px-4 py-5 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-base font-bold text-primary truncate group-hover:text-teal-800">{topic.title}</p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${
                          mastery > 70 ? 'bg-green-100 text-green-800' : 
                          mastery > 30 ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {mastery}% Mastery
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          {topic.description}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-400 sm:mt-0">
                         <span className="group-hover:translate-x-1 transition-transform">View &rarr;</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};