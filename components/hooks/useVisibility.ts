import { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

export const useVisibility = (
  id: string,
  threshold: number = 0.5,
  mobileThreshold: number = 0.2
) => {
  const [visibility, setVisibility] = useState(false);
  const isDesktop = useMediaQuery('(min-width:900px)');

  useEffect(() => {
    let options = {
      root: null,
      threshold: isDesktop ? threshold : mobileThreshold,
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
  }, [id, threshold, isDesktop]);

  return visibility;
};
