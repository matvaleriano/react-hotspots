import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  RenderResult,
} from '@testing-library/react';
import { getByTestId } from '@testing-library/dom';
import Hotspot from '.';
import { Provider } from 'components/Context';

let wrapper: RenderResult;

const id = new Date().toISOString();

const baseProps = {
  id,
  position: {
    left: 0,
    top: 0,
  },
};

beforeEach(() => {
  wrapper = render(
    <Provider>
      <Hotspot {...baseProps} />
    </Provider>
  );
});

afterEach(cleanup);

test('should initially show hotspotInfo', () => {
  const hotspotInfo = getByTestId(wrapper.container, `hotspotInfo-${id}`);
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
