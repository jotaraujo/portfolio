/**
 * Project card with hover effects
 * @param {Object} props
 * @param {string} props.title - Project title
 * @param {string} props.description - Project description
 * @param {string[]} props.tags - Technology tags
 * @param {string} props.gradient - Gradient class for preview
 * @param {string} props.demoUrl - Demo link
 * @param {string} props.githubUrl - GitHub link
 */
import { Card } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ProjectTag } from './ProjectTag';
import { cn } from '@/utils/cn';

export function ProjectCard({
  title,
  description,
  tags,
  gradient,
  demoUrl,
  githubUrl,
  delay,
}) {
  return (
    <AnimatedSection delay={delay}>
      <Card className="h-full flex flex-col group">
        {/* Project preview */}
        <div className={cn(
          'h-48 rounded-lg mb-6 bg-gradient-to-br',
          gradient,
          'flex items-center justify-center'
        )}>
          <span className="text-4xl font-display font-bold text-white/90">
            {title[0]}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-display font-bold text-text mb-2">
            {title}
          </h3>
          <p className="text-muted text-sm mb-4 flex-1">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <ProjectTag key={tag}>{tag}</ProjectTag>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              Ver Demo
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 rounded-lg border border-border text-muted text-sm font-medium hover:border-accent hover:text-text transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </Card>
    </AnimatedSection>
  );
}
