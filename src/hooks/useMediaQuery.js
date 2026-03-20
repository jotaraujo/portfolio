/**
 * Hook for responsive media queries
 * @param {string} query - CSS media query
 * @returns {boolean} Whether the media query matches
 */
import { useState, useEffect } from 'react';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const updateMatch = () => {
      setMatches(media.matches);
    };

    // Initial check
    updateMatch();

    // Modern browsers
    if (media.addEventListener) {
      media.addEventListener('change', updateMatch);
      return () => media.removeEventListener('change', updateMatch);
    }
    // Legacy support
    media.addListener(updateMatch);
    return () => media.removeListener(updateMatch);
  }, [query]);

  return matches;
}
