import React, { useState } from 'react';
import { GLOSSARY, TOPICS } from '../data';
import { Link } from 'react-router-dom';
import { askAI } from '../services/ai';
import { ChatMessage } from '../types';

export const Foundations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);
  const [aiResponse, setAiResponse] = useState<Record<string, string>>({});
  const [loadingAi, setLoadingAi] = useState<string | null>(null);

  // Group terms by category
  const categories = ['All', ...Array.from(new Set(GLOSSARY.map(t => t.category)))];

  const filteredTerms = GLOSSARY.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => a.term.localeCompare(b.term));

  const handleAskAI = async (e: React.MouseEvent, termId: string) => {
    e.stopPropagation(); // Prevent toggling the card
    setLoadingAi(termId);
    
    const term = GLOSSARY.find(t => t.id === termId);
    if (!term) return;

    // Single shot query, but matching the new signature
    const history: ChatMessage[] = [
      { role: 'user', text: `Explain the term "${term.term}" in simple sports nutrition terms and give me a practical example.` }
    ];

    const answer = await askAI(history, { termId });
    
    setAiResponse(prev => ({ ...prev, [termId]: answer }));
    setLoadingAi(null);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Foundations & Key Concepts</h1>
        <p className="mt-2 text-gray-600 max-w-2xl">
          Master the core vocabulary and concepts before diving into deep revision. 
          Use this glossary to understand the building blocks of Level 5 Sports Nutrition.
        </p>
      </div>

      {/* Controls */}
      <div className="bg-white shadow rounded-lg p-4 mb-8 flex flex-col md:flex-row gap-4 sticky top-20 z-10 border border-gray-100">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search terms (e.g., Glycogen, ATP)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-primary focus:border-primary outline-none"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {filteredTerms.map(term => (
          <div 
            key={term.id} 
            className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 ${
              expandedTerm === term.id ? 'ring-2 ring-primary shadow-md' : 'hover:shadow-md'
            }`}
          >
            <div 
              className="p-5 cursor-pointer h-full flex flex-col"
              onClick={() => setExpandedTerm(expandedTerm === term.id ? null : term.id)}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">{term.term}</h3>
                <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {term.category}
                </span>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                {term.definition}
              </p>
              
              {expandedTerm === term.id ? (
                <div className="mt-2 pt-4 border-t border-gray-100 animate-fade-in space-y-4">
                  
                  {term.analogy && (
                     <div className="bg-purple-50 p-3 rounded-md border border-purple-100">
                      <p className="text-xs text-purple-900 font-bold uppercase mb-1">Analogy</p>
                      <p className="text-sm text-purple-800 italic">"{term.analogy}"</p>
                    </div>
                  )}

                  <div className="bg-amber-50 p-3 rounded-md border border-amber-100">
                    <p className="text-xs text-amber-900 font-bold uppercase mb-1">Sports Example</p>
                    <p className="text-sm text-amber-800">{term.example}</p>
                  </div>
                  
                  {term.relatedTopicIds.length > 0 && (
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold mb-2">Related Topics:</p>
                      <div className="flex flex-wrap gap-2">
                        {term.relatedTopicIds.map(tid => {
                          const topic = TOPICS.find(t => t.id === tid);
                          return topic ? (
                            <Link 
                              key={tid} 
                              to={`/topics/${tid}`}
                              className="text-xs bg-teal-50 text-primary px-2 py-1 rounded hover:bg-teal-100 border border-teal-100"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {topic.title}
                            </Link>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}

                  {/* AI Interaction within card */}
                  <div className="pt-2">
                    {!aiResponse[term.id] ? (
                      <button 
                        onClick={(e) => handleAskAI(e, term.id)}
                        disabled={loadingAi === term.id}
                        className="w-full text-sm flex items-center justify-center gap-2 text-primary border border-primary/30 hover:bg-teal-50 py-2 rounded-md transition-colors"
                      >
                         {loadingAi === term.id ? (
                           <span>Asking AI...</span>
                         ) : (
                           <>
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                             Ask AI to explain further
                           </>
                         )}
                      </button>
                    ) : (
                      <div className="bg-gray-50 p-3 rounded-md text-sm border border-gray-200">
                        <p className="font-semibold text-gray-700 mb-1">AI Explanation:</p>
                        <p className="text-gray-600 whitespace-pre-wrap">{aiResponse[term.id]}</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                 <div className="mt-auto pt-2 flex justify-center text-gray-400">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                 </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500 text-lg">No terms found matching your search.</p>
          <button 
            onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
            className="mt-4 text-primary font-medium hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};