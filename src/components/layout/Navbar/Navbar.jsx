/**
 * Main navbar with glassmorphism effect
 */
import { useState } from 'react';
import { useScroll } from '@/contexts/ScrollContext';
import { useTheme } from '@/contexts/ThemeContext';
import { NAV_LINKS } from '@/constants/navigation';
import { scrollTo } from '@/utils/scrollTo';
import { cn } from '@/utils/cn';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const { isScrolled, activeSection } = useScroll();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollTo(sectionId);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
          isScrolled
            ? 'py-3 glass shadow-lg shadow-black/5'
            : 'py-5 bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, 'inicio')}
              className="flex items-center gap-2 text-text hover:text-accent transition-colors"
            >
              <span className="text-2xl font-display font-bold">
                <span className="text-accent">&lt;/</span>
                Dev
                <span className="text-accent">/></span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.id}
                  href={link.id}
                  isActive={activeSection === link.id}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-muted hover:text-text hover:bg-surface transition-colors focus-ring"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 24.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg text-muted hover:text-text hover:bg-surface transition-colors focus-ring"
                aria-label="Open menu"
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={NAV_LINKS}
        activeSection={activeSection}
      />
    </>
  );
}
