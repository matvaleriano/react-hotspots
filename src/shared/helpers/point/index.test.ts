import { pointElement, removePointStyleFromElements } from '.';

let div: HTMLDivElement;
beforeEach(() => {
  div = document.createElement('div');
  document.body.appendChild(div);
  document.elementFromPoint = (x: number, y: number): HTMLElement | null => {
    if (x === 0 && y === 0) {
      return div;
    } else return null;
  };
});

afterEach(() => {
  div.remove();
});

test('should point element', () => {
  pointElement({ x: 0, y: 0 } as MouseEvent);
  expect(div.classList.contains('is-pointed')).toBeTruthy();
});

test('should remove class is-pointed from element', () => {
  div.classList.add('is-pointed');
  removePointStyleFromElements();
  expect(div.classList.contains('is-pointed')).toBeFalsy();
});
