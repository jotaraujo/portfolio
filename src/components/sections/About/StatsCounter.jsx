/**
 * Animated stats counter
 * @param {Object} props
 * @param {number} props.value - Target value
 * @param {string} props.suffix - Suffix to display
 * @param {string} props.label - Counter label
 * @param {number} props.delay - Animation delay
 */
import { useInView } from '@/hooks/useInView';
import { useCounter } from '@/hooks/useCounter';

export function StatsCounter({ value, suffix, label, delay }) {
  const { ref, inView } = useInView();
  const count = useCounter(value, 1500, inView);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl font-display font-bold text-accent mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-muted text-sm sm:text-base">{label}</div>
    </div>
  );
}
