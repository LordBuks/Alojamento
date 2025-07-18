import { createContext, useContext, useEffect, useState } from 'react';
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  createUserWithEmailAndPassword 
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    try {
      // Mock login para teste - aceita qualquer email/senha
      if (email && password) {
        const mockUser = {
          uid: 'mock-user-id',
          email: email,
          displayName: 'Usuário Teste'
        };
        setCurrentUser(mockUser);
        return { user: mockUser };
      }
      throw new Error('Email ou senha inválidos');
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      setCurrentUser(null);
    } catch (error) {
      throw error;
    }
  };

  const register = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    // Mock auth state - simula usuário não logado inicialmente
    setLoading(false);
  }, []);

  const value = {
    currentUser,
    login,
    logout,
    register,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

