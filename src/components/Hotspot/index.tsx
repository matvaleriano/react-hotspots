import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import StyledHotspot from './styled';
import HotspotInfo from './HotspotInfo';
import { Hotspot as Props } from 'shared/types/hotspot';

const Hotspot = ({ id, description, position, title }: Props) => {
  const [isShowingInfo, setIsShowingInfo] = useState(!title && !description);

  const toggleContent = () => {
    setIsShowingInfo(!isShowingInfo);
  };

  return ReactDOM.createPortal(
    <>
      <StyledHotspot onClick={toggleContent} {...position} />
      {isShowingInfo && (
        <HotspotInfo
          id={id}
          title={title}
          description={description}
          position={position}
        />
      )}
    </>,
    document.body
  );
};

export default Hotspot;
