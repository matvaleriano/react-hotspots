import styled from 'styled-components';
import { Card as RCard } from 'rebass';

export const Card = styled(RCard)`
  position: relative;
  width: 100%;

  &:before {
    content: '';
    transform: rotate(45deg);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 0;
    border-right: 0;
    position: absolute;
    background: #fff;
    top: -0.5rem;
    left: 0;
    right: 0;
    margin: auto;
    width: 1rem;
    height: 1rem;
  }
`;
