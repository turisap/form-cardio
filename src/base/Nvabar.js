import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  margin: 0 auto;
  margin-top: 100px;

  ul {
    margin: 0;
    padding: 0;
    height: 50px;
    display: grid;
    grid-template-columns: repeat(5, 100px);
    background: ${props => props.theme.dark_background};
  }

  li {
    list-style-type: none;
    display: grid;
    justify-content: stretch;
    align-items: center;
    border-right: ${props => props.theme.black_border};
    padding: 10px;
  }

  a {
    text-decoration: none;
    font-size: 14px;
    text-align: center;
    color: ${props => props.theme.text_on_dark};
    text-transform: uppercase;
  }

  a:hover {
    color: ${props => props.theme.text_on_dark_hover};
  }

  .navlink--active {
    color: #7a2121;
  }
`;

const NavBar = () => {
  return (
    <StyledNav className="navbar__container">
      <ul>
        <li>
          <NavLink to="/">
            <a href="#">Home</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" activeClassName="navlink--active">
            SignUP
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-us" activeClassName="navlink--active">
            Contact us
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export { NavBar as default };
