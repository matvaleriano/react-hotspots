import React from 'react';
import { render, cleanup, RenderResult } from '@testing-library/react';
import { getByTestId, getByText } from '@testing-library/dom';
import HotspotInfo from '.';

let wrapper: RenderResult;

const baseProps = {
  id: new Date().toISOString(),
  position: {
    left: 0,
    top: 0,
  },
};

beforeEach(() => {
  wrapper = render(<HotspotInfo {...baseProps} />);
});

afterEach(cleanup);

test('should render a input:text', () => {
  const { container } = wrapper;
  const input = getByTestId(
    container,
    'hotspotInfoInputText'
  ) as HTMLInputElement;
  expect(input).not.toBeNull();
  expect(input.placeholder).toEqual('Insert title here');
  expect(input.name).toEqual('title');
});

test('should render a textare', () => {
  const { container } = wrapper;
  const textarea = getByTestId(
    container,
    'hotspotInfoTextarea'
  ) as HTMLTextAreaElement;
  expect(textarea).not.toBeNull();
  expect(textarea.placeholder).toEqual('Insert description here');
  expect(textarea.name).toEqual('description');
});

test('should render a submit button', () => {
  const { container } = wrapper;
  const submit = getByText(container, 'Save') as HTMLButtonElement;
  expect(submit).not.toBeNull();
});
