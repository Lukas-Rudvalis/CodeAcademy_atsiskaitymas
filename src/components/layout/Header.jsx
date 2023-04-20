import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <NavLink to={'/'}>Shops</NavLink>
      <NavLink to={'/add'}>Add Shop</NavLink>
      <NavLink to={'/login'}>Login</NavLink>
      <NavLink to={'/register'}>Register</NavLink>
    </div>
  );
}

export default Header;
