'use client';

import { useEffect, useState } from 'react';

const config = { xs: 360, sm: 440, md: 840, lg: 1024, xl: 1200 };
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export default function useResize(size: Size) {
  const [state, setState] = useState(false);

  useEffect(() => {
    const query = `(max-width: ${config[size]}px)`;
    const media = window.matchMedia(query);

    const handleChange = (e: MediaQueryListEvent) => {
      setState(e.matches);
    };

    setState(media.matches);
    media.addEventListener('change', handleChange);

    return () => {
      media.removeEventListener('change', handleChange);
    };
  }, [size]);

  return state;
}
