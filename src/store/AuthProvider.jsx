import { createContext, useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';

const AuthContext = createContext({
  user: {},
  isLoggedIn: false,
  isLoading: false,
});

function AuthProvider({ children }) {
  const [user, isLoading] = useAuthState(auth);
  const isLoggedIn = !!user;
  console.log('user ===', user);

  const authCtx = {
    user,
    isLoading,
    isLoggedIn,
  };
  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
export function useAuthCtx() {
  return useContext(AuthContext);
}
