import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../../../lib/gsap'

export interface TerminalLine {
  text: string
  type?: 'prompt' | 'output'
}

interface TerminalProps {
  lines: TerminalLine[]
}

export default function Terminal({ lines }: TerminalProps) {
  const containerRef = useRef<HTMLDivElement>(null!)
  const linesRef = useRef<(HTMLDivElement | null)[]>([])
  const cursorRef = useRef<HTMLSpanElement>(null!)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
      },
      paused: true,
    })

    lines.forEach((line, i) => {
      const el = linesRef.current[i]
      if (!el) return

      if (line.type === 'prompt') {
        el.innerHTML = `<span class='text-primary'>jota@lab</span>:<span class='text-accent'>~$</span> `
        const outputSpan = document.createElement('span')
        outputSpan.className = 'text-ink'
        el.appendChild(outputSpan)
        tl.to(outputSpan, {
          text: { value: line.text, delimiter: '' },
          duration: Math.max(0.3, line.text.length * 0.025),
          ease: 'none',
        })
      } else {
        el.className = 'text-muted pl-4'
        tl.to(el, {
          text: { value: line.text, delimiter: '' },
          duration: Math.max(0.2, line.text.length * 0.02),
          ease: 'none',
        })
      }

      tl.to({}, { duration: 0.1 })
    })

    // Blinking cursor after all lines
    tl.to(cursorRef.current, {
      opacity: 1,
      duration: 0.01,
    })
    tl.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.6,
      ease: 'none',
    })

    tl.play()
  }, [lines])

  return (
    <div
      ref={containerRef}
      className='w-full bg-[#0A0A0A] rounded-lg border border-border overflow-hidden font-mono text-sm'
    >
      {/* Terminal top bar */}
      <div className='flex items-center gap-1.5 px-4 py-2.5 bg-surface border-b border-border'>
        <span className='w-2.5 h-2.5 rounded-full bg-error' />
        <span className='w-2.5 h-2.5 rounded-full bg-warning' />
        <span className='w-2.5 h-2.5 rounded-full bg-success' />
        <span className='text-muted text-xs ml-2'>terminal — jota@lab</span>
      </div>

      {/* Terminal output */}
      <div className='p-4 pt-5 min-h-50 space-y-1'>
        {lines.map((_, i) => (
          <div
            key={i}
            ref={(el) => { linesRef.current[i] = el }}
            className='min-h-[1.2em]'
          />
        ))}
        <span
          ref={cursorRef}
          className='text-ink opacity-0'
        >
          _
        </span>
      </div>
    </div>
  )
}
