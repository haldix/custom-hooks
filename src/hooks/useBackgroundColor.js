import { useEffect } from 'react';

// https://www.youtube.com/watch?v=5JSigy8E6vk

const useBackgroundColor = (color = 'green') => {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'f') {
        document.body.style.backgroundColor = color;
      } else {
        document.body.style.backgroundColor = 'white';
      }
    };

    window.addEventListener('keyup', handler);

    return () => {
      window.removeEventListener('keyup', handler);
      document.body.style.backgroundColor = 'white';
    };
  }, [color]);
};

export default useBackgroundColor;
