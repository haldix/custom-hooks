import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const activeStyle = {
    fontWeight: 'bold',
    color: 'mediumorchid',
  };
  return (
    <nav>
      <NavLink exact to='/' activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink exact to='/counter' activeStyle={activeStyle}>
        Counter
      </NavLink>
    </nav>
  );
};

export default NavBar;
