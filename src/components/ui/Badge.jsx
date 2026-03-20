/**
 * Badge component with pulse animation option
 * @param {Object} props
 * @param {React.ReactNode} props.children - Badge content
 * @param {boolean} [props.pulse=false] - Enable pulse animation
 * @param {string} [props.className] - Additional classes
 * @param {'sm'|'md'} [props.size='md'] - Badge size
 */
import { cn } from '@/utils/cn';

export function Badge({
  children,
  pulse = false,
  className,
  size = 'md',
}) {
  const sizes = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-1.5 text-sm',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full bg-surface border border-border',
        sizes[size],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
        </span>
      )}
      <span className="text-muted">{children}</span>
    </span>
  );
}
