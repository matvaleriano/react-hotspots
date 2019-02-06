import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  position: relative;

  &:before {
    content: '';
    transform: rotate(45deg);
    border: 1px solid rgba(0,0,0,0.1);
    border-bottom: 0;
    border-right: 0;
    position: absolute;
    background: #fff;
    top: -.5rem;
    left: 0;
    right: 0;
    margin: auto;
    width: 1rem;
    height: 1rem;
  }
`;

export default Wrapper;
