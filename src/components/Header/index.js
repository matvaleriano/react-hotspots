import React from 'react';
import StyledHeader from './styled';
import Nav from '../Nav';
import NavLink from '../Nav/Link';

const Header = () => (
  <StyledHeader>
    <Nav>
      <NavLink>Fake Link 1</NavLink>
      <NavLink>Fake Link 2</NavLink>
      <NavLink>Fake Link 3</NavLink>
      <NavLink>Fake Link 4</NavLink>
    </Nav>
  </StyledHeader>
);

export default Header;
