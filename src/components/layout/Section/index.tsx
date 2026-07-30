import { cn } from '../../../utils/cn'
import Reveal from '../../animations/Reveal'

interface SectionProps {
  /** ID da seção para navegação por âncora (#sobre, #skills, ...) */
  id: string
  /** Título da seção (opcional) */
  title?: string
  children: React.ReactNode
  className?: string
  containerClass?: string
  /** Desabilitar animação de entrada via ScrollReveal */
  disableReveal?: boolean
}

/**
 * Section — wrapper semântico de seção do portfólio.
 *
 * Aplica padding vertical de 96px (py-24), max-width 5xl centralizado,
 * e animação de entrada via Reveal. Se `title` for fornecido, renderiza
 * headline no estilo do design system (Geist Mono + accent bar sutil).
 *
 * @example
 * <Section id="sobre" title="Sobre">
 *   <p>Conteúdo da seção</p>
 * </Section>
 */
export default function Section({
  id,
  title,
  children,
  className,
  containerClass,
  disableReveal = false,
}: SectionProps) {
  const content = (
    <section id={id} className={cn('relative py-24', className)}>
      <div
        className={cn('mx-auto max-w-5xl px-6 sm:px-12 lg:px-16', containerClass)}
      >
        {title && (
          <header className="mb-16">
            <h2 className="font-mono font-medium text-ink text-[clamp(1.5rem,3vw,2rem)] leading-tight -tracking-01 text-pretty">
              {title}
            </h2>
            <div className="mt-4 w-12 h-0.5 bg-primary/60 rounded-full" />
          </header>
        )}
        {children}
      </div>
    </section>
  )

  if (disableReveal) return content

  return (
    <Reveal direction="up" distance={48}>
      {content}
    </Reveal>
  )
}
