/**
 * Hero section - Landing area with GSAP animations
 */
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { HeroBadge } from './HeroBadge';
import { HeroActions } from './HeroActions';
import { HeroAvatar } from './HeroAvatar';
import { HeroBlobs } from './HeroBlobs';

export function Hero() {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const actionsRef = useRef(null);
  const avatarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for hero entrance
      const tl = gsap.timeline({ delay: 0.3 });

      // Badge animation - fade down
      tl.from(badgeRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      });

      // Title animation - split effect
      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.3');

      // Description animation
      tl.from(descRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
      }, '-=0.5');

      // Actions animation - scale up
      tl.from(actionsRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
      }, '-=0.4');

      // Avatar animation - slide from right with rotation
      tl.from(avatarRef.current, {
        x: 60,
        opacity: 0,
        rotation: 5,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.8');

      // Floating animation for avatar
      gsap.to(avatarRef.current, {
        y: -10,
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background blobs */}
      <HeroBlobs />

      <div ref={containerRef} className="relative grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left">
          <div ref={badgeRef}>
            <HeroBadge />
          </div>

          <div ref={titleRef}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-text mb-6 leading-tight">
              Desenvolvedor
              <br />
              <span className="text-accent">Web</span> Iniciante
            </h1>
          </div>

          <div ref={descRef}>
            <p className="text-lg sm:text-xl text-muted mb-8 max-w-xl mx-auto lg:mx-0">
              Criando interfaces modernas e performáticas com React e TailwindCSS.
              Apaixonado por aprender e construir experiências web incríveis.
            </p>
          </div>

          <div ref={actionsRef}>
            <HeroActions />
          </div>
        </div>

        {/* Avatar */}
        <div ref={avatarRef} className="flex justify-center lg:justify-end">
          <HeroAvatar />
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Hero;