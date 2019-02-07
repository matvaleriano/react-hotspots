import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useResize from '../../hooks/useResize';
import StyledHotspot from './styled';
import HotspotInfo from './HotspotInfo';

const Hotspot = ({
  id, left, text, title, top, windowSize,
}) => {
  const { height: currentHeight, width: currentWidth } = useResize();
  const [isShowingInfo, setIsShowingInfo] = useState(!title && !text);

  const toggleContent = () => {
    setIsShowingInfo(!isShowingInfo);
  };

  const currenPositionTop = (currentHeight * top) / windowSize.height;
  const currenPositionLeft = (currentWidth * left) / windowSize.width;

  return ReactDOM.createPortal(
    <>
      <StyledHotspot
        onClick={toggleContent}
        left={currenPositionLeft}
        top={currenPositionTop}
      />
      { isShowingInfo && (
        <HotspotInfo
          id={id}
          title={title}
          text={text}
          left={currenPositionLeft}
          top={currenPositionTop}
        />
      )
      }
    </>,
    document.body,
  );
};

Hotspot.propTypes = {
  id: PropTypes.string.isRequired,
  left: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
  top: PropTypes.number,
  windowSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
};

Hotspot.defaultProps = {
  left: 0,
  text: '',
  top: 0,
  title: '',
};

export default Hotspot;
