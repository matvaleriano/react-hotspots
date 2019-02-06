import React from 'react';
import PropTypes from 'prop-types';
import StyledHotspotInfo from './styled';
import Title from './Title';
import Text from './Text';
import Wrapper from './Wrapper';
import InputText from '../../Input/Text';
import Textarea from '../../Textarea';
import Button from '../../Button';

const HotspotInfo = ({
  text, title, left, top,
}) => (
  <StyledHotspotInfo left={left} top={top}>
    <Wrapper>
      { title && text
        ? (
          <>
            <Title>{title}</Title>
            <Text>{text}</Text>
          </>
        )
        : (
          <>
            <InputText placeholder="Title" maxlength="52" />
            <Textarea placeholder="Description" maxlength="280" />
            <Button brand size="large">Save</Button>
          </>
        )
      }
    </Wrapper>
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
