/**
 * Projects section showcase
 */
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ProjectGrid } from './ProjectGrid';

export function Projects() {
  return (
    <SectionWrapper id="projetos" className="bg-surface/50">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
        <div className="flex-1">
          <SectionTitle subtitle="Alguns dos meus projetos pessoais" align="left">
            Projetos
          </SectionTitle>
        </div>

        <AnimatedSection delay={200}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-accent hover:text-accent-soft transition-colors whitespace-nowrap"
          >
            Ver todos no GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </AnimatedSection>
      </div>

      <ProjectGrid />
    </SectionWrapper>
  );
}
