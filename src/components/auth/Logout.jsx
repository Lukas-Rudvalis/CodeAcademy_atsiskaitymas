import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase/firebase';
import Button from '../ui/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();
  function logoutFire() {
    signOut(auth)
      .then(() => {
        navigate('/login');
        console.log('logged out');
      })
      .catch((error) => {
        // An error happened.
        console.warn(error);
      });
  }

  return <LogoutButton onClick={logoutFire}>Logout</LogoutButton>;
}

const LogoutButton = styled(Button)`
  background-color: var(--brown);
  border: 1px solid var(--brown);
  font-size: 16px;
  text-transform: none;
  letter-spacing: 0;

  &:hover {
    background-color: var(--brown-hover);
    border-color: var(--brown-hover);
  }
`;

export default Logout;
