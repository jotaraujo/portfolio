/**
 * Hero section - Landing area
 */
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { HeroBadge } from './HeroBadge';
import { HeroActions } from './HeroActions';
import { HeroAvatar } from './HeroAvatar';
import { HeroBlobs } from './HeroBlobs';

export function Hero() {
  return (
    <SectionWrapper id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background blobs */}
      <HeroBlobs />

      <div className="relative grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left">
          <AnimatedSection delay={0}>
            <HeroBadge />
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-text mb-6 leading-tight">
              Desenvolvedor
              <br />
              <span className="text-accent">Web</span> Iniciante
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-lg sm:text-xl text-muted mb-8 max-w-xl mx-auto lg:mx-0">
              Criando interfaces modernas e performáticas com React e TailwindCSS.
              Apaixonado por aprender e construir experiências web incríveis.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <HeroActions />
          </AnimatedSection>
        </div>

        {/* Avatar */}
        <AnimatedSection delay={400} className="flex justify-center lg:justify-end">
          <HeroAvatar />
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
