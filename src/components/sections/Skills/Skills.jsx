/**
 * Skills section with infinite marquee
 */
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { SKILLS_ROW_1, SKILLS_ROW_2 } from '@/constants/skills';
import { MarqueeRow } from './MarqueeRow';

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionTitle subtitle="Tecnologias que utilizo no dia a dia">
        Minhas Skills
      </SectionTitle>

      <div className="space-y-4">
        <MarqueeRow skills={SKILLS_ROW_1} direction="left" delay={0} />
        <MarqueeRow skills={SKILLS_ROW_2} direction="right" delay={200} />
      </div>
    </SectionWrapper>
  );
}
