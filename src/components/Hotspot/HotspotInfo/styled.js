import styled from 'styled-components';
import { HOTSPOT_SIZE } from '../constants';

const StyledHotspotInfo = styled.article`
  position: absolute;
  ${({ top = 0 }) => `top: ${top + HOTSPOT_SIZE}px;`}
  ${({ left = 0 }) => `left: ${left - HOTSPOT_SIZE}px;`}
  border: 1px solid #000;
  min-width: 100px;
`;

export default StyledHotspotInfo;
