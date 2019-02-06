import React from 'react';
import StyledHeader from './styled';
import Nav from '../Nav';
import NavLink from '../Nav/Link';

const Header = () => (
  <StyledHeader>
    <Nav>
      <NavLink
        href="https://github.com/mathvaleriano/react-hotspots"
        target="_blank"
      >
        GitHub
      </NavLink>
      <NavLink
        href="https://www.linkedin.com/in/mathvaleriano/"
        target="_blank"
      >
        LinkedIn
      </NavLink>
      <NavLink
        href="https://twitter.com/mathvaleriano"
        target="_blank"
      >
        Twitter
      </NavLink>
    </Nav>
  </StyledHeader>
);

export default Header;
