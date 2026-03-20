/**
 * Hook for animating a counter from 0 to target
 * @param {number} target - Target value
 * @param {number} duration - Animation duration in ms
 * @param {boolean} start - Whether to start the animation
 * @returns {number} Current counter value
 */
import { useState, useEffect, useRef } from 'react';

export function useCounter(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef(null);
  const rafIdRef = useRef(null);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out-cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * target);

      setCount(currentCount);

      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      startTimeRef.current = null;
    };
  }, [target, duration, start]);

  return count;
}
