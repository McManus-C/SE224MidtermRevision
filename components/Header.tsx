import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Header: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { logout } = useAuth();

  const getLinkClass = (path: string) => {
    const base = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
    return location.pathname === path
      ? `${base} bg-primary text-white`
      : `${base} text-gray-600 hover:text-primary hover:bg-gray-100`;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <div className="bg-primary text-white p-1.5 rounded-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">SE224 <span className="text-primary">Revision Guide</span></span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center space-x-2">
            <Link to="/" className={getLinkClass('/')}>Dashboard</Link>
            <Link to="/foundations" className={getLinkClass('/foundations')}>Foundations</Link>
            <Link to="/topics" className={getLinkClass('/topics')}>Topics</Link>
            <Link to="/exam" className={getLinkClass('/exam')}>Exam Mode</Link>
            <button 
              onClick={() => logout()}
              className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
            >
              Sign Out
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-gray-200">
          <div className="pt-2 pb-3 space-y-1 px-4">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`block ${getLinkClass('/')} w-full`}>Dashboard</Link>
            <Link to="/foundations" onClick={() => setMobileMenuOpen(false)} className={`block ${getLinkClass('/foundations')} w-full`}>Foundations</Link>
            <Link to="/topics" onClick={() => setMobileMenuOpen(false)} className={`block ${getLinkClass('/topics')} w-full`}>Topics</Link>
            <Link to="/exam" onClick={() => setMobileMenuOpen(false)} className={`block ${getLinkClass('/exam')} w-full`}>Exam Mode</Link>
            <button 
              onClick={() => logout()}
              className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};