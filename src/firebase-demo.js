// Configuração de demonstração para testar a interface sem Firebase real
// Esta é apenas uma simulação para demonstrar a funcionalidade

// Mock Firebase configuration
const firebaseConfig = {
  apiKey: "demo-api-key",
  authDomain: "demo-project.firebaseapp.com",
  projectId: "demo-project",
  storageBucket: "demo-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "demo-app-id",
  measurementId: "demo-measurement-id"
};

// Mock Firebase services para demonstração
export const auth = {
  currentUser: { uid: 'demo-user', email: 'demo@example.com' },
  onAuthStateChanged: (callback) => {
    // Simula usuário logado após 1 segundo
    setTimeout(() => {
      callback({ uid: 'demo-user', email: 'demo@example.com' });
    }, 1000);
    return () => {}; // unsubscribe function
  },
  signInWithEmailAndPassword: () => Promise.resolve({ user: { uid: 'demo-user' } }),
  signOut: () => Promise.resolve()
};

export const db = {
  // Mock Firestore
};

export const storage = {
  // Mock Storage
};

export default { auth, db, storage };

