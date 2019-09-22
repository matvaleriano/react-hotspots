import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../../Context';
import StyledHotspotInfo from './styled';
import Title from './Title';
import Text from './Text';
import Wrapper from './Wrapper';
import InputText from '../../Input/Text';
import Textarea from '../../Textarea';
import Button from '../../Button';

const HotspotInfo = ({ id, left, text, title, top }) => {
  const { updateHotspot } = useContext(Context);
  const [updatedTitle, setTitle] = useState(title);
  const [updatedText, setText] = useState(text);

  return (
    <StyledHotspotInfo left={left} top={top}>
      <Wrapper>
        {title && text ? (
          <>
            <Title>{title}</Title>
            <Text>{text}</Text>
          </>
        ) : (
          <>
            <InputText
              name="title"
              placeholder="Insert title here"
              maxlength="52"
              value={updatedTitle}
              onChange={({ target: { value } }) => setTitle(value)}
            />
            <Textarea
              name="text"
              placeholder="Insert description here"
              maxlength="280"
              onChange={({ target: { value } }) => setText(value)}
            />
            <Button
              type="submit"
              brand
              size="large"
              onClick={() =>
                updateHotspot({
                  id,
                  text: updatedText,
                  title: updatedTitle,
                })
              }
            >
              Save
            </Button>
          </>
        )}
      </Wrapper>
    </StyledHotspotInfo>
  );
};

HotspotInfo.propTypes = {
  id: PropTypes.string.isRequired,
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
