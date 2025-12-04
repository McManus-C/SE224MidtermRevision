import React, { useState } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail 
} from 'firebase/auth';
import { auth } from '../services/firebase';
import { useAuth } from '../context/AuthContext';

export const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [rememberKey, setRememberKey] = useState(false); // New state for checkbox
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { setGeminiApiKey, geminiApiKey } = useAuth();

  // Load existing key if available (e.g. from LocalStorage)
  React.useEffect(() => {
    if (geminiApiKey) {
        setApiKeyInput(geminiApiKey);
        setRememberKey(true); // Assume if it loaded, it was remembered
    }
  }, [geminiApiKey]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      
      // Save API Key if entered and valid length
      if (apiKeyInput.trim().length > 10) {
        // Pass the 'rememberKey' boolean to the context
        setGeminiApiKey(apiKeyInput.trim(), rememberKey);
      }
    } catch (err: any) {
      // Clean up firebase error messages
      const msg = err.message.replace('Firebase: ', '').replace('auth/', '');
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      setError("Please enter your email address first.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your inbox.");
      setError(null);
    } catch (err: any) {
      setError(err.message.replace('Firebase: ', ''));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row h-full md:h-auto min-h-[600px]">
        
        {/* Info Side */}
        <div className="md:w-1/2 bg-primary p-8 text-white flex flex-col justify-between">
          <div>
            <div className="bg-white/20 w-fit p-2 rounded-lg mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </div>
            <h1 className="text-3xl font-bold mb-4">SE224 Revision Guide</h1>
            <p className="text-teal-100 mb-6 text-lg">Master Sports Nutrition with spaced repetition, detailed topic notes, and your personal AI tutor.</p>
            <ul className="space-y-3 text-sm text-teal-50">
              <li className="flex items-center"><svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Track your progress across devices</li>
              <li className="flex items-center"><svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Access exam-style questions</li>
              <li className="flex items-center"><svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Use your own Gemini API Key</li>
            </ul>
          </div>
          
          <div className="mt-8 pt-6 border-t border-teal-600">
            <p className="text-xs text-teal-200 font-medium mb-3">By Dr Chris McManus</p>
            
            {/* Disclaimer Box */}
            <div className="bg-teal-800/50 p-3 rounded-lg border border-teal-700 backdrop-blur-sm">
              <p className="text-[10px] leading-relaxed text-teal-100 text-justify">
                <strong>Disclaimer:</strong> This app is a <em>beta version</em>; stability is not guaranteed and errors may occur. 
                It is designed as a <strong>supplement</strong> to your revision methods and does <strong>not</strong> replace attendance at lectures, using Listen Again recordings, or reading the Essential Text.
              </p>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          
          {error && <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-md border border-red-100">{error}</div>}
          {message && <div className="mb-4 p-3 bg-green-50 text-green-700 text-sm rounded-md border border-green-100">{message}</div>}

          <form onSubmit={handleAuth} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {isLogin && (
                <div className="flex justify-end mt-1">
                  <button type="button" onClick={handleResetPassword} className="text-xs text-primary hover:underline">
                    Forgot password?
                  </button>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-gray-100 mt-4">
              <label className="block text-sm font-bold text-gray-800 mb-1">Gemini API Key (Required for AI)</label>
              <p className="text-xs text-gray-500 mb-2">
                Your key is stored <strong>locally on your device</strong>. We do not see or save it on our servers.
              </p>
              
              <div className="bg-red-50 p-3 rounded-md mb-3 text-xs text-red-800 border border-red-100">
                <strong>IMPORTANT:</strong> DO NOT disclose your API Key to anyone. Treat it like a password. If shared, others can use your quota.
              </div>
              
              <div className="bg-blue-50 p-3 rounded-md mb-3 text-xs text-blue-800 border border-blue-100">
                <strong>How to get a key:</strong>
                <ol className="list-decimal list-inside mt-1 space-y-1">
                  <li>Go to <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="underline font-bold hover:text-blue-900">Google AI Studio</a>.</li>
                  <li>Click "Create API Key".</li>
                  <li>Copy the key (starts with "AIza...") and paste it below.</li>
                </ol>
              </div>

              <input 
                type="password" 
                placeholder="AIzaSy..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none font-mono text-sm"
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
              />

              {/* Remember Me Checkbox */}
              <div className="flex items-center mt-2">
                <input
                  id="remember-key"
                  type="checkbox"
                  checked={rememberKey}
                  onChange={(e) => setRememberKey(e.target.checked)}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor="remember-key" className="ml-2 block text-xs text-gray-700">
                  Save API Key on this device (Uncheck if on shared computer)
                </label>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-teal-800 transition-colors shadow-md disabled:opacity-50 mt-6"
            >
              {loading ? 'Processing...' : (isLogin ? 'Log In' : 'Sign Up')}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button 
              onClick={() => { setIsLogin(!isLogin); setError(null); setMessage(null); }} 
              className="text-primary font-bold hover:underline"
            >
              {isLogin ? "Sign Up" : "Log In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};