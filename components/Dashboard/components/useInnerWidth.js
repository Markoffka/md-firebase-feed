import { useEffect, useState } from 'react';

export function useInnerWidth () {
  const [width, setWidth] = useState(0);

  const resize = (e) => {
    setWidth(e.target.innerWidth);
  };

  useEffect(() => {
    if (window)
      window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return [width];
}
