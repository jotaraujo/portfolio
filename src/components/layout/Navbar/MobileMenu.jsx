/**
 * Mobile navigation menu with animated drawer
 * @param {Object} props
 * @param {boolean} props.isOpen - Menu open state
 * @param {() => void} props.onClose - Close handler
 * @param {Array} props.links - Navigation links
 * @param {string} props.activeSection - Currently active section
 */
import { cn } from '@/utils/cn';
import { NavLink } from './NavLink';

export function MobileMenu({ isOpen, onClose, links, activeSection }) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity lg:hidden z-40',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-64 bg-surface border-l border-border',
          'transform transition-transform duration-300 ease-out lg:hidden z-50',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="font-display font-bold text-text">Menu</span>
            <button
              onClick={onClose}
              className="p-2 text-muted hover:text-text transition-colors"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-2 p-4">
            {links.map((link) => (
              <NavLink
                key={link.id}
                href={link.id}
                isActive={activeSection === link.id}
                onClick={onClose}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
