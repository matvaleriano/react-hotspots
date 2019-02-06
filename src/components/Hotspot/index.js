import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StyledHotspot from './styled';
import HotspotInfo from './HotspotInfo';

const Hotspot = ({
  left, text, title, top,
}) => {
  const [isShowingInfo, setIsShowingInfo] = useState(false);

  const toggleContent = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsShowingInfo(!isShowingInfo);
  };

  return ReactDOM.createPortal(
    <>
      <StyledHotspot
        onClick={toggleContent}
        left={left}
        top={top}
      />
      { isShowingInfo
        && (
        <HotspotInfo
          title={title}
          text={text}
          left={left}
          top={top}
        />
        )
      }
    </>,
    document.body,
  );
};

Hotspot.propTypes = {
  left: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
  top: PropTypes.number,
};

Hotspot.defaultProps = {
  left: 0,
  text: '',
  top: 0,
  title: '',
};

export default Hotspot;
