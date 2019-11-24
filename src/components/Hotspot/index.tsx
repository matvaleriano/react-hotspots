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
  const needToSetInfos = !title && !description;
  const [isShowingInfo, setIsShowingInfo] = useState(() => needToSetInfos);
  return (
    <>
      <S.Spot
        data-testid="spot"
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
    </>
  );
};

export default Hotspot;
