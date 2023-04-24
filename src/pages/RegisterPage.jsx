import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import { auth } from '../firebase/firebase';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Title from '../components/ui/Title';
import Container from '../components/ui/Container';
import Popup from '../components/ui/Popup';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  function register({ email, password }) {
    createUserWithEmailAndPassword(email, password).then(() => {
      if (user) navigate('/');
      else console.warn(error);
    });
  }

  return (
    <>
      {loading && <Popup type="info">Loading...</Popup>}
      {error && <Popup type="error">{error.code}</Popup>}
      <Container className="tac">
        <Title fz={4} className="mb20">
          Register
        </Title>
        <RegisterForm onRegister={register} />
      </Container>
    </>
  );
}

export default RegisterPage;
