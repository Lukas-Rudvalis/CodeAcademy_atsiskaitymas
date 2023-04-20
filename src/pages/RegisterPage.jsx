import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import { auth } from '../firebase/firebase';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

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
    <div>
      {loading && <p>loading</p>}
      {error && <p>{error.message}</p>}
      <RegisterForm onRegister={register} />
    </div>
  );
}

export default RegisterPage;
