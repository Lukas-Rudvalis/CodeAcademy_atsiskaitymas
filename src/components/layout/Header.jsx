import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import styled from 'styled-components';
import { useAuthCtx } from '../../store/AuthProvider';
import Logout from '../auth/Logout';

function Header() {
  const { isLoggedIn } = useAuthCtx();

  return (
    <SHeader className="mb20">
      <Container className="flex">
        <NavLink to={'/'}>
          <Logo src="/logo.png" alt="logo" />
        </NavLink>
        <Nav>
          {isLoggedIn && <NavLink to={'/'}>Shops</NavLink>}
          {isLoggedIn && <NavLink to={'/add'}>Add Shop</NavLink>}
          {!isLoggedIn && <NavLink to={'/register'}>Register</NavLink>}
          {!isLoggedIn && (
            <NavLink to={'/login'}>
              <LoginButton>Login</LoginButton>
            </NavLink>
          )}
          {isLoggedIn && <Logout />}
        </Nav>
      </Container>
    </SHeader>
  );
}

const SHeader = styled.header`
  padding: 34px 0px;

  .active {
    color: var(--gray);
  }
`;

const Logo = styled.img`
  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: 600;

  > a:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled(Button)`
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

export default Header;
