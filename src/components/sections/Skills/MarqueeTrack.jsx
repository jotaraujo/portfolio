/**
 * Marquee track with duplicated items for seamless loop
 * @param {Object} props
 * @param {Array} props.items - Skill items
 * @param {'left'|'right'} props.direction - Scroll direction
 */
import { SkillPill } from './SkillPill';
import { cn } from '@/utils/cn';

export function MarqueeTrack({ items, direction = 'left' }) {
  const animationClass = direction === 'left' ? 'animate-marquee' : 'animate-marquee-rev';

  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="flex overflow-hidden marquee-track">
      <div className={cn('flex gap-4 pr-4', animationClass)}>
        {duplicatedItems.map((skill, index) => (
          <SkillPill
            key={`${skill.name}-${index}`}
            name={skill.name}
            emoji={skill.emoji}
            color={skill.color}
          />
        ))}
      </div>
    </div>
  );
}
