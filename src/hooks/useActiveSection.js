/**
 * Hook for tracking which section is currently in view
 * @param {string[]} sectionIds - Array of section IDs to track
 * @returns {string} Currently active section ID
 */
import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observers = [];
    const visibilityMap = new Map();

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        visibilityMap.set(entry.target.id, {
          isIntersecting: entry.isIntersecting,
          ratio: entry.intersectionRatio,
        });
      });

      // Find the most visible section
      let maxRatio = 0;
      let mostVisibleSection = '';

      visibilityMap.forEach((data, id) => {
        if (data.isIntersecting && data.ratio > maxRatio) {
          maxRatio = data.ratio;
          mostVisibleSection = id;
        }
      });

      if (mostVisibleSection) {
        setActiveSection(mostVisibleSection);
      }
    };

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(handleIntersection, {
          threshold: [0, 0.25, 0.5, 0.75, 1],
          rootMargin: '-20% 0px -60% 0px',
        });
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
}
