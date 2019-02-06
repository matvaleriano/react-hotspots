import styled from 'styled-components';
import { HOTSPOT_SIZE } from './constants';

const StyledHotspot = styled.button`
  box-sizing: border-box;
  width: ${HOTSPOT_SIZE}px;
  height: ${HOTSPOT_SIZE}px;
  position: absolute;
  ${({ top = 0 }) => `top: ${top - (HOTSPOT_SIZE / 2)}px;`}
  ${({ left = 0 }) => `left: ${left - (HOTSPOT_SIZE / 2)}px;`}
  background-color: rgba(255, 0, 0, .5);
  cursor: pointer;
  border-radius: 50%;
  border: 0;
  box-shadow: 0px 0px 0px 3px #fff,
    0px 0px 0px 6px rgba(255,0,0,.5);
  transition: all .3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export default StyledHotspot;
