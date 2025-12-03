import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { auth } from '../services/firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  geminiApiKey: string | null;
  setGeminiApiKey: (key: string) => void;
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
  const [geminiApiKey, setGeminiKeyState] = useState<string | null>(() => {
    return localStorage.getItem('gemini_api_key');
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const setGeminiApiKey = (key: string) => {
    setGeminiKeyState(key);
    localStorage.setItem('gemini_api_key', key);
  };

  const logout = async () => {
    await signOut(auth);
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