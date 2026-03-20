/**
 * Individual skill pill
 * @param {Object} props
 * @param {string} props.name - Skill name
 * @param {string} props.emoji - Skill emoji
 * @param {string} props.color - Accent color
 */
import { cn } from '@/utils/cn';

export function SkillPill({ name, emoji, color }) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 px-4 py-2 rounded-full',
        'bg-surface border border-border',
        'transition-all duration-300',
        'hover:border-accent hover:shadow-glow',
        'whitespace-nowrap'
      )}
      style={{ '--tw-border-opacity': 0.3 }}
    >
      <span className="text-lg">{emoji}</span>
      <span className="font-mono text-sm text-text">{name}</span>
    </div>
  );
}
