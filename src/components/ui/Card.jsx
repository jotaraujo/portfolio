/**
 * Card component with hover effects
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} [props.className] - Additional classes
 * @param {() => void} [props.onClick] - Click handler
 */
import { cn } from '@/utils/cn';

export function Card({ children, className, onClick }) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-surface border border-border rounded-xl p-6',
        'transition-all duration-300',
        'hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
}
