import { useEffect, useState } from 'react';

export default function useHide(ref, initialState = false) {
  const [isHide, setHide] = useState(initialState);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const hideOnClickOutside = (e) => {
      if (ref.current && !e.composedPath().includes(ref.current)) {
        setHide(false);
      }
    };
    const hideOnEscape = (e) => {
      if (e.key === 'Escape') {
        setHide(false);
      }
    };
    document.addEventListener('keyup', hideOnEscape, true);
    document.addEventListener('click', hideOnClickOutside, true);
    return () => {
      document.removeEventListener('keyup', hideOnEscape, true);
      document.removeEventListener('click', hideOnClickOutside, true);
    };
  }, [isHide]);

  return [isHide, setHide];
}
