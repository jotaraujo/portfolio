/**
 * Hook for tracking scroll position with RAF throttle
 * @returns {number} Current scroll Y position
 */
import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let rafId;
    let currentScrollY = 0;

    const handleScroll = () => {
      currentScrollY = window.scrollY;
    };

    const updateScroll = () => {
      setScrollY(currentScrollY);
      rafId = requestAnimationFrame(updateScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    rafId = requestAnimationFrame(updateScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return scrollY;
}
