import { useState, useEffect, useCallback } from 'react';

const useResize = (el: HTMLElement = document.body): {width: number, height: number} => {
  const [size, setSize] = useState({
    width: el.offsetWidth,
    height: el.offsetHeight,
  });

  const handleResize = useCallback(
    (): void => {
      setSize({
        width: el.offsetWidth,
        height: el.offsetHeight,
      });
    },
    [el],
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return size;
};

export default useResize;
