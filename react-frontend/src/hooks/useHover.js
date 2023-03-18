import { useState, useEffect } from 'react';

export default function useHover(ref) {
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => setHover(true);

  const onMouseLeave = () => setHover(false);

  useEffect(() => {
    if (!ref.current) return;

    const current = ref.current;

    current.addEventListener('mouseenter', onMouseEnter);
    current.addEventListener('mousemove', onMouseEnter);
    current.addEventListener('mouseleave', onMouseLeave);

    return () => {
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [hover, ref]);

  return [hover];
}
