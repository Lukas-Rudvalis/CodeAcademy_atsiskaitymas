import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import { auth } from '../firebase/firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Title from '../components/ui/Title';
import Container from '../components/ui/Container';

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
    <Container className="tac">
      <Title fz={4} className="mb20">
        Login
      </Title>
      <LoginForm onLogin={login} />
    </Container>
  );
}

export default LoginPage;
