import styled from 'styled-components';
import { darken } from 'polished';
import { GREY } from '../../shared/colors';

const Item = styled.article`
  background-color: #fff;
  color: ${darken(0.45, GREY)};
  font-size: 1.4rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${GREY};
`;

export default Item;
