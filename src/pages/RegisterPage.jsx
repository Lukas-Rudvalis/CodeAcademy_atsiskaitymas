import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import { auth } from '../firebase/firebase';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Title from '../components/ui/Title';
import Container from '../components/ui/Container';

function RegisterPage() {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  function register({ email, password }) {
    createUserWithEmailAndPassword(email, password).then(() => {
      navigate('/');
      console.log('reg success');
      console.log('user ===', user);
    });
  }

  return (
    <Container className="tac">
      <Title fz={4} className="mb20">
        Register
      </Title>
      <RegisterForm onRegister={register} />
    </Container>
  );
}

export default RegisterPage;
