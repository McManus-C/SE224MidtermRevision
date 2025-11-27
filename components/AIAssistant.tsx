import React, { useState, useRef, useEffect } from 'react';
import { askAI } from '../services/ai';
import { useLocation } from 'react-router-dom';
import { ChatMessage } from '../types';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Determine context from URL
  const getContext = () => {
    const path = location.pathname;
    if (path.startsWith('/topics/')) {
      return { topicId: path.split('/')[2] };
    }
    return undefined;
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    
    const newHistory: ChatMessage[] = [...messages, { role: 'user', text: userMsg }];
    setMessages(newHistory);
    setIsLoading(true);

    const context = getContext();
    const answer = await askAI(newHistory, context);

    setMessages((prev) => [...prev, { role: 'assistant', text: answer }]);
    setIsLoading(false);
  };

  // Helper for "Explain this" contextual prompt
  const handlePromptClick = (prompt: string) => {
    const newHistory: ChatMessage[] = [...messages, { role: 'user', text: prompt }];
    setMessages(newHistory);
    setIsLoading(true);
    
    const context = getContext();
    askAI(newHistory, context).then(answer => {
         setMessages((prev) => [...prev, { role: 'assistant', text: answer }]);
         setIsLoading(false);
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      <div 
        className={`pointer-events-auto bg-white rounded-lg shadow-2xl w-80 sm:w-96 flex flex-col transition-all duration-300 transform origin-bottom-right mb-4 border border-gray-200 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none h-0 overflow-hidden'
        }`}
        style={{ maxHeight: '600px', height: '500px' }}
      >
        <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
          <div>
            <h3 className="font-bold">AI Tutor</h3>
            <p className="text-xs text-teal-100">Ask about {getContext()?.topicId ? 'this topic' : 'sports nutrition'}</p>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white hover:bg-teal-700 rounded p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 mt-10">
              <p className="mb-4 text-sm">👋 Hi! I'm your study assistant.</p>
              <div className="space-y-2">
                <button 
                  onClick={() => handlePromptClick(getContext()?.topicId ? "Explain the key concept of this topic simply" : "What are the core foundations of sports nutrition?")}
                  className="block w-full text-xs bg-white border border-gray-300 rounded px-3 py-2 hover:bg-gray-100 text-left transition-colors"
                >
                  {getContext()?.topicId ? "Explain this topic simply" : "Explain core foundations"}
                </button>
                <button 
                  onClick={() => handlePromptClick("Give me a quick quiz question regarding this")}
                  className="block w-full text-xs bg-white border border-gray-300 rounded px-3 py-2 hover:bg-gray-100 text-left transition-colors"
                >
                  Test me with a question
                </button>
              </div>
            </div>
          )}
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] rounded-lg px-3 py-2 text-sm whitespace-pre-wrap ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-br-none' 
                    : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 rounded-bl-none shadow-sm flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-gray-200 rounded-b-lg flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button 
            type="submit" 
            disabled={!input.trim() || isLoading}
            className="bg-primary text-white p-2 rounded-md hover:bg-teal-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform rotate-90" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409 5 5 0 115.917 0 1 1 0 001.169-1.409l-7-14z" />
            </svg>
          </button>
        </form>
      </div>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto bg-primary hover:bg-teal-800 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center ${isOpen ? 'rotate-90 opacity-0 hidden' : 'rotate-0 opacity-100'}`}
        aria-label="Open AI Tutor"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  );
};