import styled from 'styled-components';
import { darken } from 'polished'
import { GREY } from '../../shared/colors';

const Title = styled.h1`
  background-color: ${GREY};
  color: ${darken(0.35, GREY)};
  font-size: 1.4rem;
  padding: 1rem;
`;

export default Title;
