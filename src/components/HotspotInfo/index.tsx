import React, { useContext, useState, ChangeEvent } from 'react';
import { Button, Heading, Text } from 'rebass';
import Context from '../Context';
import * as S from './styled';
import InputText from '../Input/Text';
import Textarea from '../Textarea';
import { Hotspot } from 'shared/types/hotspot';

const HotspotInfo: React.SFC<Hotspot> = ({
  id,
  description,
  position: { left, top },
  title,
}: Hotspot) => {
  const {
    actions: { editHotspot },
  } = useContext(Context);
  const isFilled = title && description;
  const [updatedTitle, setTitle] = useState(title);
  const [updatedDescription, setDescription] = useState(description);

  return (
    <S.Wrapper left={left} top={top}>
      <S.Card fontSize={2} p={2}>
        {isFilled ? (
          <>
            <Heading fontSize={4} mb={2}>
              {title}
            </Heading>
            <Text>{description}</Text>
          </>
        ) : (
          <>
            <InputText
              data-testid="hotspotInfoInputText"
              name="title"
              placeholder="Insert title here"
              value={updatedTitle}
              onChange={({
                target: { value },
              }: ChangeEvent<HTMLInputElement>): void => setTitle(value)}
            />
            <Textarea
              data-testid="hotspotInfoTextarea"
              name="description"
              placeholder="Insert description here"
              onChange={({
                target: { value },
              }: ChangeEvent<HTMLTextAreaElement>): void =>
                setDescription(value)
              }
            />
            <Button
              variant="primary"
              type="submit"
              size="large"
              width={1}
              onClick={(): void =>
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
      </S.Card>
    </S.Wrapper>
  );
};

export default HotspotInfo;
