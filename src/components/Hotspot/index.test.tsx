import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  RenderResult,
} from '@testing-library/react';
import { getByTestId } from '@testing-library/dom';
import Hotspot from '.';

let wrapper: RenderResult;

const baseProps = {
  id: new Date().toISOString(),
  position: {
    left: 0,
    top: 0,
  },
};

beforeEach(() => {
  wrapper = render(<Hotspot {...baseProps} />);
});

afterEach(cleanup);

test('should initially show hotspotInfo', () => {
  const hotspotInfo = getByTestId(wrapper.container, 'hotspotInfo');
  expect(hotspotInfo).not.toBeNull();
});

test('should show a spot', () => {
  const spot = getByTestId(wrapper.container, 'spot');
  expect(spot).not.toBeNull();
});

test('should hide hotspotInfo when click on spot', async () => {
  const spot = getByTestId(wrapper.container, 'spot');
  fireEvent.click(spot);
  expect(() => getByTestId(wrapper.container, 'hotspotInfo')).toThrow();
});

test('should initially hide hotspotInfos', () => {
  const { container } = render(
    <Hotspot {...baseProps} title="title" description="description" />
  );
  expect(() => getByTestId(container, 'hotspotInfo')).toThrow();
});
