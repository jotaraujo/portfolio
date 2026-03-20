/**
 * Hook for detecting when an element enters the viewport
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Trigger threshold (0-1)
 * @param {boolean} options.triggerOnce - Only trigger once
 * @returns {{ ref: React.RefObject, inView: boolean }}
 */
import { useState, useEffect, useRef } from 'react';

export function useInView(options = {}) {
  const { threshold = 0.15, triggerOnce = true } = options;
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, triggerOnce]);

  return { ref, inView };
}
