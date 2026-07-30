'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../../lib/gsap'
import { cn } from '../../utils/cn'

interface RevealProps {
  children: React.ReactNode
  /** Direção da entrada — up, down, left, right */
  direction?: 'up' | 'down' | 'left' | 'right'
  /** Delay antes da animação começar (segundos) */
  delay?: number
  /** Duração da animação (segundos) */
  duration?: number
  /** Distância em px que o elemento percorre */
  distance?: number
  /** Se true, anima só uma vez. Se false, reverte ao scrollar para fora */
  once?: boolean
  /** Posição do ScrollTrigger start (ex: 'top 80%') */
  start?: string
  className?: string
}

/**
 * Reveal — anima children com fade + translate via ScrollTrigger.
 *
 * @example
 * <Reveal direction="up" duration={0.8}>
 *   <p>Este texto aparece ao scrollar</p>
 * </Reveal>
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 40,
  once = true,
  start = 'top 85%',
  className,
}: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null!)

  useGSAP(() => {
    const el = containerRef.current
    if (!el) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) return

    const from: gsap.TweenVars = { opacity: 0 }
    const to: gsap.TweenVars = {
      opacity: 1,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: once
          ? 'play none none none'
          : 'play none reverse none',
      },
    }

    switch (direction) {
      case 'up':
        from.y = distance
        to.y = 0
        break
      case 'down':
        from.y = -distance
        to.y = 0
        break
      case 'left':
        from.x = -distance
        to.x = 0
        break
      case 'right':
        from.x = distance
        to.x = 0
        break
    }

    gsap.fromTo(el, from, to)
  }, [direction, delay, duration, distance, once, start])

  return (
    <div ref={containerRef} className={cn(className)}>
      {children}
    </div>
  )
}
