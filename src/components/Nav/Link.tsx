import styled from 'styled-components';
import { darken } from 'polished';
import { GREY } from '../../shared/colors';

const NavLink = styled.a`
  font-size: 1.2rem;
  color: ${darken(0.25, GREY)};
  cursor: pointer;
  padding: 0 1rem;
`;

export default NavLink;
