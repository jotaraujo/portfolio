/**
 * Individual about card
 * @param {Object} props
 * @param {string} props.icon - Emoji icon
 * @param {string} props.title - Card title
 * @param {string} props.description - Card description
 * @param {number} props.delay - Animation delay
 */
import { Card } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function AboutCard({ icon, title, description, delay }) {
  return (
    <AnimatedSection delay={delay}>
      <Card className="h-full">
        <div className="text-3xl mb-4">{icon}</div>
        <h3 className="text-lg font-display font-bold text-text mb-2">
          {title}
        </h3>
        <p className="text-muted text-sm leading-relaxed">{description}</p>
      </Card>
    </AnimatedSection>
  );
}
