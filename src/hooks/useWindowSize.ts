import { useEffect, useState } from 'react';

type WindowSidesType = {
  windowWidth: number | null;
  windowHeight: number | null;
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSidesType>({
    windowWidth: null,
    windowHeight: null,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { windowWidth, windowHeight } = windowSize;

  return {
    windowWidth,
    windowHeight,
  };
};

export { useWindowSize };
