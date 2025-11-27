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
      {/* Header Title */}
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

      {/* HOW TO USE GUIDE - Explicitly Added Here */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-teal-100 text-teal-800 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide mr-2">Start Here</span>
          How to use this guide
        </h2>
        
        <div className="grid gap-6 md:grid-cols-4">
          {/* Step 1 */}
          <Link to="/foundations" className="group relative rounded-lg border border-teal-100 bg-teal-50/50 p-5 hover:bg-teal-50 hover:shadow-md transition-all">
            <div className="absolute top-4 right-4 text-teal-200 group-hover:text-teal-300">
              <span className="text-4xl font-black opacity-20">1</span>
            </div>
            <div className="mb-3 h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <h3 className="font-bold text-gray-900 group-hover:text-primary">Foundations</h3>
            <p className="mt-1 text-sm text-gray-600">Start by mastering the key terms and concepts.</p>
          </Link>

          {/* Step 2 */}
          <Link to="/topics" className="group relative rounded-lg border border-blue-100 bg-blue-50/50 p-5 hover:bg-blue-50 hover:shadow-md transition-all">
            <div className="absolute top-4 right-4 text-blue-200 group-hover:text-blue-300">
              <span className="text-4xl font-black opacity-20">2</span>
            </div>
            <div className="mb-3 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </div>
            <h3 className="font-bold text-gray-900 group-hover:text-blue-700">Topics & Notes</h3>
            <p className="mt-1 text-sm text-gray-600">Read summaries and detailed study notes.</p>
          </Link>

          {/* Step 3 */}
          <div className="group relative rounded-lg border border-amber-100 bg-amber-50/50 p-5 cursor-default">
            <div className="absolute top-4 right-4 text-amber-200">
              <span className="text-4xl font-black opacity-20">3</span>
            </div>
            <div className="mb-3 h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            </div>
            <h3 className="font-bold text-gray-900">AI Tutor</h3>
            <p className="mt-1 text-sm text-gray-600">Click the button in the bottom right ↘️ to ask questions anytime.</p>
          </div>

          {/* Step 4 */}
          <Link to="/exam" className="group relative rounded-lg border border-purple-100 bg-purple-50/50 p-5 hover:bg-purple-50 hover:shadow-md transition-all">
            <div className="absolute top-4 right-4 text-purple-200 group-hover:text-purple-300">
              <span className="text-4xl font-black opacity-20">4</span>
            </div>
            <div className="mb-3 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="font-bold text-gray-900 group-hover:text-purple-700">Exam Mode</h3>
            <p className="mt-1 text-sm text-gray-600">Test yourself with mixed questions when you're ready.</p>
          </Link>
        </div>
      </section>

      {/* Progress / Stats Row */}
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

      {/* Foundations Banner - Fixed Clickability */}
      <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-xl shadow-lg overflow-hidden mb-8 text-white relative">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="px-6 py-8 sm:px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="md:pr-8">
             <h2 className="text-2xl font-bold">Start with the Foundations</h2>
             <p className="mt-2 text-teal-100 text-sm sm:text-base">Master key terms like <strong>Glycogen</strong>, <strong>AMPK</strong>, and <strong>Oxidative Phosphorylation</strong>. Understanding these building blocks makes the complex topics much easier.</p>
          </div>
          <div className="mt-6 md:mt-0 flex-shrink-0">
             <Link to="/foundations" className="inline-block bg-white text-teal-900 font-bold py-3 px-6 rounded-lg hover:bg-teal-50 transition-colors shadow-md relative z-20 pointer-events-auto">
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
