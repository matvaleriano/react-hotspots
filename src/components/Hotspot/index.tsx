import React, { useState, useRef, MutableRefObject } from 'react';
import useOutsideClick from '@rooks/use-outside-click';
import * as S from './styled';
import HotspotInfo from '../HotspotInfo';
import { Hotspot as Props } from 'shared/types/hotspot';

const Hotspot: React.FC<Props> = ({
  id,
  description,
  position,
  title,
}: Props) => {
  const needToSetInfos = !title && !description;
  const [isShowingInfo, setIsShowingInfo] = useState(() => needToSetInfos);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(
    ref as MutableRefObject<HTMLDivElement>,
    (): void => setIsShowingInfo(false),
    isShowingInfo
  );

  const spotHandleClick = (): void => {
    setIsShowingInfo(!isShowingInfo);
  };

  return (
    <>
      <S.Spot data-testid="spot" onClick={spotHandleClick} {...position} />
      {isShowingInfo && (
        <article ref={ref}>
          <HotspotInfo
            id={id}
            title={title}
            description={description}
            position={position}
          />
        </article>
      )}
    </>
  );
};

export default Hotspot;
