import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import { auth } from '../firebase/firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Title from '../components/ui/Title';
import Container from '../components/ui/Container';
import Popup from '../components/ui/Popup';

function LoginPage() {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function login({ email, password }) {
    signInWithEmailAndPassword(email, password).then(() => {
      if (user) navigate('/');
      // else console.warn(error);
    });
  }

  return (
    <>
      {loading && <Popup type="info">Loading...</Popup>}
      {error && <Popup type="error">{error.code}</Popup>}
      <Container className="tac">
        <Title fz={4} className="mb20">
          Login
        </Title>
        <LoginForm onLogin={login} />
      </Container>
    </>
  );
}

export default LoginPage;
