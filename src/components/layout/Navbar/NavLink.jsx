/**
 * Navigation link with active state
 * @param {Object} props
 * @param {string} props.href - Target section ID
 * @param {string} props.children - Link text
 * @param {boolean} [props.isActive=false] - Active state
 * @param {() => void} [props.onClick] - Click handler
 */
import { cn } from '@/utils/cn';

export function NavLink({ href, children, isActive, onClick }) {
  return (
    <a
      href={`#${href}`}
      onClick={onClick}
      className={cn(
        'relative px-3 py-2 text-sm font-medium transition-colors duration-300',
        isActive ? 'text-text' : 'text-muted hover:text-text'
      )}
    >
      {children}
      <span
        className={cn(
          'absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent rounded-full transition-all duration-300',
          isActive ? 'w-6 opacity-100' : 'w-0 opacity-0'
        )}
      />
    </a>
  );
}
