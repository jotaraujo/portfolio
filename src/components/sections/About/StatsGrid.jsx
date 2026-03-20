/**
 * Stats counter grid
 */
import { STATS } from '@/constants/stats';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { StatsCounter } from './StatsCounter';

export function StatsGrid() {
  return (
    <AnimatedSection delay={400}>
      <div className="grid grid-cols-3 gap-4 sm:gap-8 p-6 sm:p-8 rounded-2xl bg-surface border border-border">
        {STATS.map((stat, index) => (
          <StatsCounter
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            delay={index * 100}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}
