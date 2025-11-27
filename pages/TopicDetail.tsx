import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TOPICS } from '../data';

export const TopicDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const topic = TOPICS.find(t => t.id === id);
  const [showFullNotes, setShowFullNotes] = useState(false);

  if (!topic) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Topic Not Found</h2>
        <p className="mt-2 text-gray-600">The topic you are looking for does not exist.</p>
        <Link to="/topics" className="mt-4 inline-block text-primary hover:underline">Back to Topics</Link>
      </div>
    );
  }

  // Helper to safely render HTML content
  const createMarkup = (html: string) => {
    return { __html: html };
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32">
      <Link to="/topics" className="text-sm text-gray-500 hover:text-gray-900 mb-4 inline-flex items-center">
        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Topics
      </Link>
      
      <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
        <div className="bg-primary px-6 py-8 sm:px-8 relative overflow-hidden">
          <div className="relative z-10">
             <h1 className="text-3xl font-bold text-white tracking-tight">{topic.title}</h1>
             <p className="mt-2 text-teal-100 text-lg">{topic.description}</p>
          </div>
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
        </div>

        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <div className="flex flex-col sm:flex-row gap-3">
             <Link 
               to={`/exam?topic=${topic.id}`}
               className="flex-1 flex items-center justify-center bg-secondary text-white px-4 py-3 rounded-lg font-bold hover:bg-amber-600 transition-colors shadow-sm active:transform active:scale-95"
             >
               <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
               </svg>
               Practice Questions
             </Link>
             <button 
               onClick={() => setShowFullNotes(!showFullNotes)}
               className={`flex-1 flex items-center justify-center border px-4 py-3 rounded-lg font-bold transition-all ${
                 showFullNotes 
                   ? 'bg-gray-800 text-white border-gray-800 shadow-inner' 
                   : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100 shadow-sm'
               }`}
             >
               {showFullNotes ? (
                 <>Hide Full Notes</>
               ) : (
                 <>
                   <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                   </svg>
                   View Full Notes
                 </>
               )}
             </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="px-6 py-6 sm:px-8">
          
          {/* Quick Summary Section - Shown when Full Notes are hidden */}
          {!showFullNotes && (
            <div className="animate-fade-in">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Quick Summary</h2>
              </div>
              
              <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100 shadow-sm mb-8">
                <ul className="space-y-4">
                  {topic.quickSummary?.map((point, i) => (
                    <li key={i} className="flex items-start text-gray-800">
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-accent mt-2 mr-3"></span>
                      <span className="leading-relaxed" dangerouslySetInnerHTML={createMarkup(point)}></span>
                    </li>
                  ))}
                  {(!topic.quickSummary || topic.quickSummary.length === 0) && (
                     <li className="text-gray-500 italic">No summary available.</li>
                  )}
                </ul>
              </div>

              <div>
                 <h3 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">Learning Objectives</h3>
                 <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                  {topic.learningObjectives.map((obj, i) => (
                    <li key={i} className="pl-2"><span className="-ml-2">{obj}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Full Notes Section */}
          {showFullNotes && (
            <div className="animate-fade-in">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">Detailed Notes</h2>
                <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">Read time: ~5 min</span>
              </div>
              
              {topic.fullNotes ? (
                <div 
                  className="prose prose-slate max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-strong:text-gray-900 prose-li:marker:text-primary"
                  dangerouslySetInnerHTML={createMarkup(topic.fullNotes)} 
                />
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                   <p className="text-gray-500 italic">Detailed notes are currently being updated for this topic.</p>
                   <button onClick={() => setShowFullNotes(false)} className="mt-2 text-primary hover:underline">Return to Summary</button>
                </div>
              )}
              
              <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col items-center justify-center space-y-4">
                <p className="text-gray-500 text-sm">Finished reading? Test your knowledge.</p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setShowFullNotes(false)}
                    className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2"
                  >
                    Close Notes
                  </button>
                  <Link 
                    to={`/exam?topic=${topic.id}`}
                    className="bg-primary text-white px-6 py-2 rounded-md font-bold hover:bg-teal-800 shadow-md transition-all"
                  >
                    Start Quiz
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};