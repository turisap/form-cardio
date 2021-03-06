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
    grid-template-columns: repeat(4, 120px);
    background: ${props => props.theme.dark_background};
  }

  li {
    list-style-type: none;
    display: grid;
    align-items: center;
    border-right: ${props => props.theme.black_border};
    padding: 0 10px;
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
          <NavLink to="/">Home</NavLink>
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
        <li>
          <NavLink to="/invoice" activeClassName="navlink--active">
            Invoice
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export { NavBar as default };
