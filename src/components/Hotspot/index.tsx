import React, { useState, useRef, MutableRefObject } from 'react';
import useOutsideClick from '@rooks/use-outside-click';
import * as S from './styled';
import HotspotInfo from '../HotspotInfo';
import { Hotspot as Props } from 'shared/types/hotspot';
import useResize from 'hooks/useResize';

const Hotspot: React.FC<Props> = ({
  id,
  description,
  position,
  title,
  windowSize = { offsetHeight: 0, offsetWidth: 0 },
}: Props) => {
  const needToSetInfos = !title && !description;
  const [isShowingInfo, setIsShowingInfo] = useState(() => needToSetInfos);
  const ref = useRef<HTMLDivElement>(null);

  const { width } = useResize();
  const left = (position.left * width) / windowSize.offsetWidth;

  useOutsideClick(
    ref as MutableRefObject<HTMLDivElement>,
    (): void => setIsShowingInfo(false),
    isShowingInfo
  );

  const spotHandleClick = (): void => {
    setIsShowingInfo(!isShowingInfo);
  };

  return (
    <S.Wrapper left={left} top={position.top}>
      <S.Spot data-testid="spot" onClick={spotHandleClick} {...position} />
      {isShowingInfo && (
        <S.InfoWrapper ref={ref}>
          <HotspotInfo
            id={id}
            title={title}
            description={description}
            position={position}
          />
        </S.InfoWrapper>
      )}
    </S.Wrapper>
  );
};

export default Hotspot;
