/**
 * Avatar with rotating gradient border and floating badges
 */
import perfilImg from '@/assets/images/perfil.png';
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
        <div className="absolute inset-1 rounded-full bg-bg overflow-hidden flex items-center justify-center">
          <img 
            src={perfilImg} 
            alt="Foto de Perfil" 
            className="w-full h-full object-cover"
          />
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
