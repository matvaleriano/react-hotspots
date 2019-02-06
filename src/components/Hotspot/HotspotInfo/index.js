import React from 'react';
import PropTypes from 'prop-types';
import StyledHotspotInfo from './styled';
import Title from './Title';
import Text from './Text';

const HotspotInfo = ({
  text, title, left, top,
}) => (
  <StyledHotspotInfo left={left} top={top}>
    <Title>{title}</Title>
    <Text>{text}</Text>
  </StyledHotspotInfo>
);

HotspotInfo.propTypes = {
  left: PropTypes.number,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  top: PropTypes.number,
};

HotspotInfo.defaultProps = {
  left: 0,
  top: 0,
};

export default HotspotInfo;
