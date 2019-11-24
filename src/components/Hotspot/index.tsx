import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import * as S from './styled';
import HotspotInfo from '../HotspotInfo';
import { Hotspot as Props } from 'shared/types/hotspot';

const Hotspot: React.SFC<Props> = ({
  id,
  description,
  position,
  title,
}: Props) => {
  const [isShowingInfo, setIsShowingInfo] = useState(!title && !description);

  return ReactDOM.createPortal(
    <>
      <S.Spot
        onClick={(): void => {
          setIsShowingInfo(!isShowingInfo);
        }}
        {...position}
      />
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
