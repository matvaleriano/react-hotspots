import React, { useContext } from 'react';
import Context from '../Context';
import { Box, Button, Flex, Text } from 'rebass';

const HotspotsList = () => {
  const {
    state: { hotspots, isPointing },
    actions: { deleteHotspot, toggleIsPointing },
  } = useContext(Context);

  return (
    <Box
      width={[1, 0.5, 0.25]}
      px={[3, 0, 0]}
      mx="auto"
      mt={5}
      fontSize={2}
      sx={{ textAlign: 'center' }}
    >
      <Button
        variant="primary"
        disabled={isPointing}
        onClick={() => toggleIsPointing(true)}
        fontSize={3}
      >
        New Hotspot
      </Button>
      {hotspots.map(({ title, id }, index) => (
        <Flex flexWrap="nowrap" key={id} alignItems="center" cellSpacing={2}>
          <Box py={3}>
            <Button bg="tomato" mr={2} onClick={() => deleteHotspot(id)}>
              Delete
            </Button>
          </Box>
          <Box py={3}>
            <Text as="strong">{title || `Hotspot #${index + 1}`}</Text>
          </Box>
        </Flex>
      ))}
      {hotspots.length === 0 && (
        <Box py={3}>
          <Text>
            Click in <strong>New Hotspot</strong> and select an element of site
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default HotspotsList;
