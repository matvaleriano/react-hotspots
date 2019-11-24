import styled from 'styled-components';
import { HOTSPOT_SIZE } from '../constants';
import { HotspotPosition } from 'shared/types/hotspot';

const StyledHotspotInfo = styled.article`
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 300px;
  background-color: #fff;
  border-radius: 7px;
  box-shadow: 0px 3px 7px -1px rgba(0, 0, 0, 0.2);
  min-height: 200px;

  animation: appear 0.5s forwards;

  ${({ top = 0 }: HotspotPosition): string =>
    `top: ${top + HOTSPOT_SIZE * 1.5}px;`}
  ${({ left = 0 }: HotspotPosition): string =>
    `left: ${left - 150}px;`}

  @keyframes appear {
    from {
      opacity: 0;
      transform: translateY(-${HOTSPOT_SIZE * 1.5}px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default StyledHotspotInfo;
