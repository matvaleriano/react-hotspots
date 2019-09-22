import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { BRAND, PRIMARY } from '../../shared/colors';

const getThemedColorsStyle = ({ theme, color }) =>
  theme &&
  css`
    background-color: ${color};
    &:hover {
      background-color: ${lighten(0.05, color)};
    }
  `;

const Button = styled.button`
  box-sizing: border-box;
  border: 0;
  cursor: pointer;
  color: ${({ color = '#fff' }) => color};
  font-weigth: ${({ fontWeight = 'normal' }) => fontWeight};
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
  ${({ brand }) =>
    getThemedColorsStyle({
      theme: brand,
      color: BRAND,
    })}
  ${({ primary }) =>
    getThemedColorsStyle({
      theme: primary,
      color: PRIMARY,
    })}
  ${({ radius = 5 }) =>
    css`
      border-radius: ${radius}px;
    `}
  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          font-size: 0.5rem;
          padding: 0.39rem;
        `;
      case 'large':
        return css`
          font-size: 1.1rem;
          padding: 0.7rem;
        `;
      case 'largest':
        return css`
          font-size: 1.8rem;
          padding: 1.1rem;
        `;
      default:
        return css`
          font-size: 0.7rem;
          padding: 0.5rem;
        `;
    }
  }}
`;

export default Button;
