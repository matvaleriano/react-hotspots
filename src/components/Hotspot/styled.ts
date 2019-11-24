import styled from 'styled-components';
import { HOTSPOT_SIZE } from './constants';
import { HotspotPosition } from 'shared/types/hotspot';

export const Spot = styled.button`
  box-sizing: border-box;
  width: ${HOTSPOT_SIZE}px;
  height: ${HOTSPOT_SIZE}px;
  position: absolute;
  ${({ top = 0 }: HotspotPosition): string =>
    `top: ${top - HOTSPOT_SIZE / 2}px;`}
  ${({ left = 0 }: HotspotPosition): string =>
    `left: ${left -
      HOTSPOT_SIZE / 2}px;`}
  background-color: rgba(255, 0, 0, .5);
  cursor: pointer;
  border-radius: 50%;
  border: 0;
  box-shadow: 0px 0px 0px 1.5px #fff, 0px 0px 0px 3px rgba(255, 0, 0, 0.5);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
