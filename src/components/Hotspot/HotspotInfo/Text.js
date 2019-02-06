import styled from 'styled-components';
import { darken } from 'polished';
import { GREY } from '../../../shared/colors';

const Text = styled.p`
  font-size: 1rem;
  color: ${darken(0.35, GREY)};
  font-weight: 100;
`;

export default Text;
