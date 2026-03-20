/**
 * Marquee row wrapper
 * @param {Object} props
 * @param {Array} props.skills - Skills array
 * @param {'left'|'right'} props.direction - Direction
 * @param {number} props.delay - Animation delay
 */
import { MarqueeTrack } from './MarqueeTrack';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function MarqueeRow({ skills, direction = 'left', delay = 0 }) {
  return (
    <AnimatedSection delay={delay}>
      <div className="py-2">
        <MarqueeTrack items={skills} direction={direction} />
      </div>
    </AnimatedSection>
  );
}
