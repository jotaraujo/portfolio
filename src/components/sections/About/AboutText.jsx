/**
 * About section text content
 */
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function AboutText() {
  return (
    <AnimatedSection delay={0}>
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-lg sm:text-xl text-muted leading-relaxed">
          Sou um desenvolvedor web iniciante apaixonado por criar experiências
          digitais memoráveis. Minha jornada na programação comeou com a
          curiosidade de entender como a web funciona, e desde então venho
          mergulhando cada vez mais fundo no ecossistema de desenvolvimento frontend.
        </p>
      </div>
    </AnimatedSection>
  );
}
