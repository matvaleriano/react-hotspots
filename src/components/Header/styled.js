import styled from 'styled-components';
import { GREY } from '../../shared/colors';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  padding: .5rem;
  margin: 0 2.5vw;
  height: 10vh;
  width: 95vw;
  box-sizing: border-box;
  border-bottom: 1px solid ${GREY};
`;

export default StyledHeader;
