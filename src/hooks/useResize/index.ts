import { useState, useEffect, useCallback } from 'react';

const useResize = (
  el: HTMLElement = document.documentElement
): { width: number; height: number } => {
  const [size, setSize] = useState({
    width: el.clientWidth,
    height: el.clientHeight,
  });

  const handleResize = useCallback((): void => {
    setSize({
      width: el.clientWidth,
      height: el.clientHeight,
    });
  }, [el]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return size;
};

export default useResize;
