/**
 * HOC for scroll-triggered animations
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {number} [props.delay=0] - Animation delay in ms
 * @param {string} [props.className] - Additional classes
 * @param {string} [props.as='div'] - HTML element to render
 */
import { useInView } from '@/hooks/useInView';
import { cn } from '@/utils/cn';

export function AnimatedSection({
  children,
  delay = 0,
  className,
  as: Component = 'div',
}) {
  const { ref, inView } = useInView();

  return (
    <Component
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn('animate-on-scroll', inView && 'visible', className)}
    >
      {children}
    </Component>
  );
}
