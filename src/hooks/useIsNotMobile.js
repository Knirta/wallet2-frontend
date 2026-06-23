import { useState, useEffect } from 'react';

export function useIsNotMobile(breakpoint = '768px') {
  const [isNotMobile, setIsNotMobile] = useState(
    () => window.matchMedia(`(min-width: ${breakpoint})`).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint})`);
    const handleChange = e => {
      setIsNotMobile(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [breakpoint]);

  return isNotMobile;
}
