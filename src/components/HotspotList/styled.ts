import styled from 'styled-components';

const StyledHotspotsList = styled.article`
  display: flex;
  flex-flow: column nowrap;
  width: 90vw;
  max-width: 600px;
  margin: 0 auto;

  @media screen and (min-width: 440px) {
    width: 60vh;
  }
`;

export default StyledHotspotsList;
