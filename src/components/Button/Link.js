import React from 'react';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { BRAND } from '../../shared/colors';

const LinkButton = styled.button`
  box-sizing: border-box;
  border: 0;
  cursor: pointer;
  text-decoration: underline;
  background-color: transparent;
  color: ${({color = BRAND}) => color};
  font-weigth: ${({ fontWeight = 'normal' }) => fontWeight};
  ${({ width }) => width && css`width: ${width}`}
  ${({ height }) => height && css`height: ${height}`}
  ${({ size }) => {
    switch(size) {
      case 'small':
        return css`
          font-size: .5rem;
          padding: .39rem;
        `
      case 'large':
        return css`
          font-size: 1.1rem;
          padding: .7rem;
        `
      case 'largest':
        return css`
          font-size: 1.8rem;
          padding: 1.1rem;
        `
      default:
        return css`
          font-size: .7rem;
          padding: .5rem;
        `
    }
  }}

  &:hover {
    ${({ color = BRAND }) => `color: ${lighten(.05, color)};`}
  }
`;

export default LinkButton;