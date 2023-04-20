import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import styled from 'styled-components';

function Header() {
  return (
    <SHeader className="mb20">
      <Container className="flex">
        <NavLink to={'/'}>
          <img src="/logo.png" alt="logo" />
        </NavLink>
        <Nav>
          <NavLink to={'/'}>Shops</NavLink>
          <NavLink to={'/add'}>Add Shop</NavLink>
          <NavLink to={'/register'}>Register</NavLink>
          <NavLink to={'/login'}>
            <HeaderButton>Login</HeaderButton>
          </NavLink>
          <HeaderButton>Logout</HeaderButton>
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

const Nav = styled.nav`
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: 600;

  > a:hover {
    text-decoration: underline;
  }
`;

const HeaderButton = styled(Button)`
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
