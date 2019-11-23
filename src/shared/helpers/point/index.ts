const handlePoint = (isPointing: boolean = false) => (event: MouseEvent) => {
  const fn = isPointing ? 'add' : 'remove';
  const target = event.target as HTMLElement;
  target.classList[fn]('is-pointed');
};

export const pointElement = handlePoint(true);
export const dontPointElement = handlePoint(false);

export default handlePoint;
