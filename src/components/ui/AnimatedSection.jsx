/**
 * HOC for scroll-triggered GSAP animations
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {string} [props.animation='fadeUp'] - Animation type: fadeUp, fadeDown, fadeIn, slideLeft, slideRight, scale, rotate
 * @param {number} [props.delay=0] - Animation delay in seconds
 * @param {number} [props.duration=0.8] - Animation duration
 * @param {string} [props.className] - Additional classes
 * @param {string} [props.as='div'] - HTML element to render
 * @param {string} [props.start='top 85%'] - ScrollTrigger start position
 */
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/utils/cn';

gsap.registerPlugin(ScrollTrigger);

export function AnimatedSection({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 0.8,
  className,
  as: Component = 'div',
  start = 'top 85%',
}) {
  const elementRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state based on animation type
    const initialStates = {
      fadeUp: { opacity: 0, y: 40 },
      fadeDown: { opacity: 0, y: -40 },
      fadeIn: { opacity: 0 },
      slideLeft: { opacity: 0, x: 40 },
      slideRight: { opacity: 0, x: -40 },
      scale: { opacity: 0, scale: 0.8 },
      rotate: { opacity: 0, rotation: -10, scale: 0.9 },
    };

    const finalStates = {
      fadeUp: { opacity: 1, y: 0 },
      fadeDown: { opacity: 1, y: 0 },
      fadeIn: { opacity: 1 },
      slideLeft: { opacity: 1, x: 0 },
      slideRight: { opacity: 1, x: 0 },
      scale: { opacity: 1, scale: 1 },
      rotate: { opacity: 1, rotation: 0, scale: 1 },
    };

    gsap.set(element, initialStates[animation] || initialStates.fadeUp);

    const tween = gsap.to(element, {
      ...(finalStates[animation] || finalStates.fadeUp),
      duration,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start,
        once: true,
      },
    });

    triggerRef.current = tween.scrollTrigger;

    return () => {
      if (triggerRef.current) {
        triggerRef.current.kill();
      }
      tween.kill();
    };
  }, [animation, delay, duration, start]);

  return (
    <Component
      ref={elementRef}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}

export default AnimatedSection;
