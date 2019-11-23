import { pointElement, dontPointElement } from '.';

test('should point element', () => {
  const div = document.createElement('div');
  div.onmouseover = pointElement;
  div.dispatchEvent(new Event('mouseover'));
  expect(div.classList.contains('is-pointed')).toBeTruthy();
});

test('should remove class is-pointed from element', () => {
  const div = document.createElement('div');
  div.classList.add('is-pointed');
  div.onmouseleave = dontPointElement;
  div.dispatchEvent(new Event('mouseleave'));
  expect(div.classList.contains('is-pointed')).toBeFalsy();
});
