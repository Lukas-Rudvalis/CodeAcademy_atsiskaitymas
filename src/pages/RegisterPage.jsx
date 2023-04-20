import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

function RegisterPage() {
  function register({ email, password }) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log('user ===', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn('register fail', errorMessage);
        // ..
      });
  }

  return (
    <div>
      <RegisterForm onRegister={register} />
    </div>
  );
}

export default RegisterPage;
