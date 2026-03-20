/**
 * About section - Bio and stats
 */
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AboutText } from './AboutText';
import { AboutCards } from './AboutCards';
import { StatsGrid } from './StatsGrid';

export function About() {
  return (
    <SectionWrapper id="sobre" className="bg-surface/50">
      <SectionTitle subtitle="Conheça um pouco sobre minha jornada">
        Sobre Mim
      </SectionTitle>

      <AboutText />
      <AboutCards />
      <StatsGrid />
    </SectionWrapper>
  );
}
