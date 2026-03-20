/**
 * Avatar with rotating gradient border and floating badges
 */
import { cn } from '@/utils/cn';

export function HeroAvatar() {
  const floatingBadges = [
    { icon: '⚛️', position: '-top-2 -right-2', delay: '0s' },
    { icon: '💻', position: '-bottom-2 -left-2', delay: '0.5s' },
    { icon: '🚀', position: 'top-1/2 -right-4', delay: '1s' },
  ];

  return (
    <div className="relative">
      {/* Main avatar container */}
      <div className="relative w-64 h-64 lg:w-80 lg:h-80">
        {/* Rotating gradient border */}
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-accent-soft to-accent opacity-75 blur-sm animate-gradient-rot"
          style={{ animationDuration: '8s' }}
        />

        {/* Avatar image container */}
        <div className="absolute inset-1 rounded-full bg-bg overflow-hidden">
          {/* Placeholder avatar */}
          <div className="w-full h-full flex items-center justify-center bg-surface">
            <svg
              className="w-32 h-32 text-muted"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>

        {/* Floating badges */}
        {floatingBadges.map((badge, index) => (
          <div
            key={index}
            className={cn(
              'absolute w-10 h-10 rounded-full bg-surface border border-border',
              'flex items-center justify-center text-xl shadow-lg',
              'animate-float',
              badge.position
            )}
            style={{ animationDelay: badge.delay }}
          >
            {badge.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
