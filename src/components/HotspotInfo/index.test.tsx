import React from 'react';
import { render, cleanup, RenderResult } from '@testing-library/react';
import { getByTestId, getByText } from '@testing-library/dom';
import HotspotInfo from '.';
import { Provider } from 'components/Context';

let wrapper: RenderResult;

const baseProps = {
  id: new Date().toISOString(),
  position: {
    left: 0,
    top: 0,
  },
};

beforeEach(() => {
  wrapper = render(
    <Provider>
      <HotspotInfo {...baseProps} />
    </Provider>
  );
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

test('should render a title and description', () => {
  const { container, rerender } = wrapper;
  rerender(
    <Provider>
      <HotspotInfo {...baseProps} title="title" description="description" />
    </Provider>
  );

  const title = getByText(container, 'title');
  expect(title).not.toBeNull();

  const description = getByText(container, 'description');
  expect(description).not.toBeNull();
});

test('should not render button, input or textarea', () => {
  const { container, rerender } = wrapper;
  rerender(
    <Provider>
      <HotspotInfo {...baseProps} title="title" description="description" />
    </Provider>
  );

  expect(container.querySelectorAll('input')).toHaveLength(0);
  expect(container.querySelectorAll('textarea')).toHaveLength(0);
  expect(container.querySelectorAll('button')).toHaveLength(0);
});
