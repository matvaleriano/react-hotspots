import React from 'react';
import PropTypes from 'prop-types';
import StyledHotspotInfo from './styled';
import Title from './Title';
import Text from './Text';

const HotspotInfo = ({ text, title, left, top }) => (
  <StyledHotspotInfo left={left} top={top}>
    <Title>{title}</Title>
    <Text>{text}</Text>
  </StyledHotspotInfo>
);

HotspotInfo.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default HotspotInfo;
