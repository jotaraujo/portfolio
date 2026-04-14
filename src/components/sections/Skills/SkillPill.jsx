/**
 * Individual skill pill
 * @param {Object} props
 * @param {string} props.name - Skill name
 * @param {string} props.emoji - Skill emoji
 * @param {string} props.color - Accent color
 */
import { cn } from '@/utils/cn';

export function SkillPill({ name, icon}) {
  return (
    <div
      className={cn(
        'flex items-center justify-center gap-2 px-6 py-2 rounded-full',
        'bg-surface border border-border',
        'transition-all duration-300',
        'hover:border-accent hover:shadow-glow',
        'whitespace-nowrap'
      )}
      style={{ '--tw-border-opacity': 0.3 }}
    >
      <img src={icon} alt={name} width={20} height={20} className='object-contain'/>
      <span className="font-mono text-sm text-text">{name}</span>
    </div>
  );
}
