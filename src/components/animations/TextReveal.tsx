'use client'

import { useRef, useMemo } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../../lib/gsap'
import { cn } from '../../utils/cn'

interface TextRevealProps {
  /** Texto a ser animado */
  text: string
  /** Elemento HTML do container */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  /** Modo de fragmentação */
  mode?: 'chars' | 'words' | 'lines'
  /** Atraso entre cada fragmento (segundos) */
  stagger?: number
  /** Duração da animação de cada fragmento */
  duration?: number
  /** Delay geral antes de começar */
  delay?: number
  className?: string
  /** Posição do ScrollTrigger start */
  start?: string
}

type Fragment = { value: string; isSpace: boolean }

function splitFragments(text: string, mode: 'chars' | 'words' | 'lines'): Fragment[] {
  switch (mode) {
    case 'chars':
      return text.split('').map((ch) => ({ value: ch, isSpace: /^\s$/.test(ch) }))
    case 'words': {
      const parts = text.split(/(\s+)/).filter(Boolean)
      return parts.map((part) => ({ value: part, isSpace: /^\s+$/.test(part) }))
    }
    case 'lines':
      return text.split('\n').map((line) => ({ value: line, isSpace: false }))
    default:
      return [{ value: text, isSpace: false }]
  }
}

/**
 * TextReveal — anima texto com stagger por fragmento via ScrollTrigger.
 *
 * Cada palavra/caractere/linha aparece com slide-up + fade,
 * escalonado para um efeito de "revelação" suave.
 *
 * @example
 * <TextReveal
 *   text="Olá, mundo!"
 *   as="h2"
 *   mode="words"
 *   stagger={0.04}
 * />
 */
export default function TextReveal({
  text,
  as: Tag = 'p',
  mode = 'words',
  stagger = 0.04,
  duration = 0.5,
  delay = 0,
  className,
  start = 'top 85%',
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null!)
  const fragments = useMemo(() => splitFragments(text, mode), [text, mode])

  useGSAP(() => {
    const el = containerRef.current
    if (!el) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) return

    const targets = el.querySelectorAll<HTMLElement>('.tr-fragment-inner')
    if (!targets.length) return

    gsap.fromTo(
      targets,
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration,
        stagger,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start,
        },
      },
    )
  }, [text, mode, stagger, duration, delay, start])

  return (
    <Tag
      ref={containerRef as never}
      className={cn(
        mode === 'lines' ? 'flex flex-col' : 'inline-flex flex-wrap',
        className,
      )}
    >
      {fragments.map((f, i) =>
        f.isSpace ? (
          <span key={i} className="inline-block">
            &nbsp;
          </span>
        ) : (
          <span
            key={i}
            className={cn(
              'inline-block overflow-hidden',
              mode === 'lines' && 'block',
            )}
          >
            <span className="tr-fragment-inner inline-block">
              {f.value}
              {mode === 'words' && i < fragments.length - 1 && (
                <span className="inline-block w-[0.25em]" />
              )}
            </span>
          </span>
        ),
      )}
    </Tag>
  )
}
