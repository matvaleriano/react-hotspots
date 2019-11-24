export const removePointStyleFromElements = (): void => {
  const elements = document.getElementsByClassName('is-pointed');
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.classList.remove('is-pointed');
  }
};

export const pointElement = (event: MouseEvent): void => {
  removePointStyleFromElements();
  const { x, y } = event;
  const element = document.elementFromPoint(x, y) as HTMLElement;
  element.classList.add('is-pointed');
};
