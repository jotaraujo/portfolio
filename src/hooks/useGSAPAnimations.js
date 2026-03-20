/**
 * Hook for GSAP entrance animations
 * Provides modern scroll-triggered animations
 */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Animate elements on scroll with various effects
 * @param {Object} options
 * @param {string} options.selector - CSS selector for elements to animate
 * @param {string} [options.animation='fadeUp'] - Animation type: fadeUp, fadeIn, slideLeft, slideRight, scale, stagger
 * @param {number} [options.start='top 85%'] - ScrollTrigger start position
 * @param {number} [options.duration=0.8] - Animation duration
 * @param {number} [options.delay=0] - Initial delay
 * @param {number} [options.stagger=0.1] - Stagger delay between elements
 * @param {boolean} [options.once=true] - Run animation only once
 * @returns {React.RefObject}
 */
export function useGSAPAnimations(options = {}) {
  const {
    selector = '[data-gsap]',
    animation = 'fadeUp',
    start = 'top 85%',
    duration = 0.8,
    delay = 0,
    stagger = 0.1,
    once = true,
  } = options;

  const containerRef = useRef(null);
  const triggersRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);
    if (elements.length === 0) return;

    // Set initial states based on animation type
    const setInitialState = (el) => {
      switch (animation) {
        case 'fadeUp':
          gsap.set(el, { opacity: 0, y: 40 });
          break;
        case 'fadeDown':
          gsap.set(el, { opacity: 0, y: -40 });
          break;
        case 'fadeIn':
          gsap.set(el, { opacity: 0 });
          break;
        case 'slideLeft':
          gsap.set(el, { opacity: 0, x: 40 });
          break;
        case 'slideRight':
          gsap.set(el, { opacity: 0, x: -40 });
          break;
        case 'scale':
          gsap.set(el, { opacity: 0, scale: 0.8 });
          break;
        case 'rotate':
          gsap.set(el, { opacity: 0, rotation: -10 });
          break;
        default:
          gsap.set(el, { opacity: 0, y: 40 });
      }
    };

    // Apply initial states
    elements.forEach(setInitialState);

    // Define final animation state
    const getFinalState = () => {
      switch (animation) {
        case 'fadeUp':
        case 'fadeDown':
          return { opacity: 1, y: 0, duration, delay };
        case 'fadeIn':
          return { opacity: 1, duration, delay };
        case 'slideLeft':
        case 'slideRight':
          return { opacity: 1, x: 0, duration, delay };
        case 'scale':
          return { opacity: 1, scale: 1, duration, delay };
        case 'rotate':
          return { opacity: 1, rotation: 0, duration, delay };
        default:
          return { opacity: 1, y: 0, duration, delay };
      }
    };

    // Create ScrollTrigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start,
        once,
      },
    });

    const finalState = getFinalState();

    if (elements.length > 1 && animation === 'stagger') {
      tl.to(elements, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        delay,
        ease: 'power2.out',
      });
    } else if (elements.length > 1) {
      tl.to(elements, {
        ...finalState,
        stagger,
        ease: 'power2.out',
      });
    } else {
      tl.to(elements, {
        ...finalState,
        ease: 'power2.out',
      });
    }

    // Store trigger for cleanup
    if (tl.scrollTrigger) {
      triggersRef.current.push(tl.scrollTrigger);
    }

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
      tl.kill();
    };
  }, [selector, animation, start, duration, delay, stagger, once]);

  return containerRef;
}

/**
 * Hook for hero entrance animations (runs on mount)
 * @param {Object} options
 * @param {boolean} [options.stagger=true] - Use stagger effect
 * @param {number} [options.staggerDelay=0.15] - Stagger delay
 * @returns {React.RefObject}
 */
export function useHeroAnimations(options = {}) {
  const { stagger = true, staggerDelay = 0.15 } = options;
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll('[data-hero-animate]');
    if (elements.length === 0) return;

    // Set initial state
    gsap.set(elements, { opacity: 0, y: 30 });

    // Animate in
    const tl = gsap.timeline({ delay: 0.2 });

    if (stagger && elements.length > 1) {
      tl.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: staggerDelay,
        ease: 'power3.out',
      });
    } else {
      tl.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }

    return () => {
      tl.kill();
    };
  }, [stagger, staggerDelay]);

  return containerRef;
}

/**
 * Hook for parallax effect on scroll
 * @param {number} [speed=0.5] - Parallax speed (0-1)
 * @returns {React.RefObject}
 */
export function useParallax(speed = 0.5) {
  const elementRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const tween = gsap.to(element, {
      y: () => window.innerHeight * speed * 0.5,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    triggerRef.current = tween.scrollTrigger;

    return () => {
      if (triggerRef.current) {
        triggerRef.current.kill();
      }
      tween.kill();
    };
  }, [speed]);

  return elementRef;
}

export default useGSAPAnimations;
