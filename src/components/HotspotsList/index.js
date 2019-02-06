import React, { useContext } from 'react';
import Context from '../Context';
import StyledHotspotsList from './styled';
import Hotspot from '../Hotspot';
import LinkButton from '../Button/Link';
import Title from './Title';
import Item from './Item';

const HotspotsList = () => {
  const {
    hotspots,
    removeHotspot
  } = useContext(Context);

  return (
    <StyledHotspotsList>
      <Title>List of Hotspots</Title>
      {
        hotspots.map(({ title }, index) => (
          <Item key={index.toString()}>
            { title || `Hotspot #${index + 1}`}
            <LinkButton
              size="large"
              onClick={() => removeHotspot(index)}
            >
              Delete
            </LinkButton>
          </Item>
        ))
      }

      { !hotspots.length
        && (
          <Item>
            <p>
              Click in <strong>Create Hotspot</strong> and select a site component
            </p>
          </Item>
        )
      }
    </StyledHotspotsList>
  )
}

export default HotspotsList;
