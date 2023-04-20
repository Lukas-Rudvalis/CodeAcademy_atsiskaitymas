import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import { auth } from '../firebase/firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

function LoginPage() {
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function login({ email, password }) {
    signInWithEmailAndPassword(email, password).then(() => {
      console.log('logged in');
    });
  }

  return (
    <div>
      {loading && <p>loading</p>}
      {error && <p>{error.message}</p>}
      <LoginForm onLogin={login} />
    </div>
  );
}

export default LoginPage;
