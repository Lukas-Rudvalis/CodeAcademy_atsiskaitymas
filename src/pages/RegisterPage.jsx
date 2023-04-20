import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import { auth } from '../firebase/firebase';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

function RegisterPage() {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  function register({ email, password }) {
    createUserWithEmailAndPassword(email, password).then(() => {
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
