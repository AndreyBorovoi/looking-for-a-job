import { useEffect, useState } from 'react';

export const useVisibility = (id: string, threshold: number = 0.5) => {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    let options = {
      root: null,
      threshold: threshold,
    };

    const callback = (entries: any, observer: any) => {
      if (entries[0].isIntersecting) {
        setVisibility(true);
      }
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(document.getElementById(id) as Element);
    return () => {
      observer.disconnect();
    };
  }, [id, threshold]);

  return visibility;
};
