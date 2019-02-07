import { useState, useEffect } from 'react';

const useResize = (el = document.body) => {
  const [size, setSize] = useState({
    width: el.offsetWidth,
    height: el.offsetHeight,
  });

  const handleResize = () => {
    setSize({
      width: el.offsetWidth,
      height: el.offsetHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
};

export default useResize;
