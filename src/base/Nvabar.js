import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <nav className="navbar__container">
      <Link to="signup">SignUP</Link>
      <Link to="/">
        <a href="#">Home</a>
      </Link>
    </nav>
  );
};

export { NavBar as default };
