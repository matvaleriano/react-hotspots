import React, { useContext, useState, ChangeEvent, memo } from 'react';
import { Button, Heading, Text } from 'rebass';
import Context from '../Context';
import * as S from './styled';
import InputText from '../Input';
import Textarea from '../Textarea';
import { Hotspot } from 'shared/types/hotspot';

const HotspotInfo: React.FC<Hotspot> = ({
  id,
  description,
  title,
}: Hotspot) => {
  const {
    actions: { editHotspot },
  } = useContext(Context);
  const isFilled = title && description;
  const [updatedTitle, setTitle] = useState(title || '');
  const [updatedDescription, setDescription] = useState(description || '');

  return (
    <S.Card fontSize={2} p={2} data-testid={`hotspotInfo-${id}`}>
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
            }: ChangeEvent<HTMLTextAreaElement>): void => setDescription(value)}
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
                title: updatedTitle,
              })
            }
            disabled={updatedTitle === ''}
            fontSize={2}
          >
            Save
          </Button>
        </>
      )}
    </S.Card>
  );
};

export default memo(HotspotInfo);
