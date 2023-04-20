import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import { auth } from '../firebase/firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function login({ email, password }) {
    signInWithEmailAndPassword(email, password).then(() => {
      navigate('/');
      console.log('logged in');
      console.log('user ===', user);
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
