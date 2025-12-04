import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { auth } from '../services/firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  geminiApiKey: string | null;
  setGeminiApiKey: (key: string, persist: boolean) => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  geminiApiKey: null,
  setGeminiApiKey: () => {},
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Initialize key from Storage (Local takes precedence if they chose to remember it previously)
  const [geminiApiKey, setGeminiKeyState] = useState<string | null>(() => {
    const local = localStorage.getItem('gemini_api_key');
    const session = sessionStorage.getItem('gemini_api_key');
    return local || session;
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const setGeminiApiKey = (key: string, persist: boolean) => {
    setGeminiKeyState(key);
    if (persist) {
      localStorage.setItem('gemini_api_key', key);
      sessionStorage.removeItem('gemini_api_key'); // Clean up session if moving to local
    } else {
      sessionStorage.setItem('gemini_api_key', key);
      localStorage.removeItem('gemini_api_key'); // Clean up local if switching to temp
    }
  };

  const logout = async () => {
    await signOut(auth);
    // On logout, always clear the Session storage key.
    // We ONLY keep the Local storage key if the user explicitly asked to "Remember" it previously.
    // If they didn't check "Remember", it is only in Session, so this line wipes it.
    sessionStorage.removeItem('gemini_api_key');
    setGeminiKeyState(localStorage.getItem('gemini_api_key')); // Reset state to whatever is persisted (or null)
  };

  const value = {
    user,
    loading,
    geminiApiKey,
    setGeminiApiKey,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};