import React, { useContext } from 'react';
import StyledHotspotAdd from './styled';
import Context from '../Context';
import Button from '../Button';

const HotspotAdd = () => {
  const {
    isPointing,
    startPointing
  } = useContext(Context);

  return (
    <StyledHotspotAdd>
      <Button
        type="button"
        brand
        size="largest"
        radius="35"
        disabled={isPointing}
        onClick={startPointing}
      >
        Create Hotspot
      </Button>
    </StyledHotspotAdd>
  )
};

export default HotspotAdd;
