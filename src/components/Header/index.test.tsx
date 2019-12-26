import React from 'react';
import { render, cleanup, RenderResult } from '@testing-library/react';
import { getByText, getByTestId } from '@testing-library/dom';
import Header from '.';

let wrapper: RenderResult;

beforeEach(() => {
  wrapper = render(<Header />);
});

afterEach(cleanup);

test('should have a heading', () => {
  expect(getByText(wrapper.container, 'Hotspots')).not.toBeNull();
});

test.each`
  linkId
  ${'github-link'}
  ${'linkedin-link'}
  ${'twitter-link'}
`('should have $linkId link', ({ linkId }) => {
  expect(getByTestId(wrapper.container, linkId)).not.toBeNull();
});
