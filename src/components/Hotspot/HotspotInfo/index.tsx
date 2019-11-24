import React, { useContext, useState } from 'react';
import { Button } from 'rebass';
import Context from '../../Context';
import StyledHotspotInfo from './styled';
import Title from './Title';
import Text from './Text';
import Wrapper from './Wrapper';
import InputText from '../../Input/Text';
import Textarea from '../../Textarea';
import { Hotspot } from 'shared/types/hotspot';

const HotspotInfo = ({
  id,
  description,
  position: { left = 0, top = 0 },
  title,
}: Hotspot) => {
  const {
    actions: { editHotspot },
  } = useContext(Context);
  const [updatedTitle, setTitle] = useState(title);
  const [updatedDescription, setDescription] = useState(description);

  return (
    <StyledHotspotInfo left={left} top={top}>
      <Wrapper>
        {title && description ? (
          <>
            <Title>{title}</Title>
            <Text>{description}</Text>
          </>
        ) : (
          <>
            <InputText
              name="title"
              placeholder="Insert title here"
              value={updatedTitle}
              onChange={({ target: { value } }) => setTitle(value)}
            />
            <Textarea
              name="description"
              placeholder="Insert description here"
              onChange={({ target: { value } }) => setDescription(value)}
            />
            <Button
              variant="primary"
              type="submit"
              size="large"
              onClick={() =>
                editHotspot({
                  id,
                  description: updatedDescription,
                  position: { left, top },
                  title: updatedTitle,
                })
              }
              fontSize={2}
            >
              Save
            </Button>
          </>
        )}
      </Wrapper>
    </StyledHotspotInfo>
  );
};

export default HotspotInfo;
