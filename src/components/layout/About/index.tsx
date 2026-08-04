import Section from '../Section'
import Reveal from '../../animations/Reveal'
import Terminal from './Terminal'
import type { TerminalLine } from './Terminal'

const terminalLines: TerminalLine[] = [
  { text: 'whoami', type: 'prompt' },
  { text: 'João Paulo Araújo — Frontend Developer', type: 'output' },
  { text: 'cat /etc/location', type: 'prompt' },
  { text: 'Brasil · RJ', type: 'output' },
  { text: 'cat skills.txt', type: 'prompt' },
  {
    text: 'React · TypeScript · TailwindCSS · GSAP · TanStack Query',
    type: 'output',
  },
  { text: 'echo $CURRENT_FOCUS', type: 'prompt' },
  {
    text: 'Arquitetura de componentes · Performance · UI Engineering',
    type: 'output',
  },
]

const FOCUS_AREAS = [
  'Arquitetura de Componentes',
  'Performance Web',
  'UI Engineering',
  'TypeScript',
]

export default function About() {
  return (
    <Section id="sobre" title="Sobre">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Coluna esquerda — texto + focos */}
        <div className="flex flex-col gap-6">
          <Reveal direction="up">
            <p className="font-sans text-muted leading-relaxed max-w-[65ch]">
              Antes de qualquer acabamento, resolvo a estrutura. Assim em todos
              os meus projetos: a lógica vem primeiro, e a componentização é
              refinada em seguida, peça por peça, até cada componente ter um
              motivo pra existir.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <div className="flex flex-wrap gap-2">
              {FOCUS_AREAS.map((area) => (
                <span
                  key={area}
                  className="font-mono text-xs text-muted bg-surface-raised px-3 py-1.5 rounded-sm tracking-wider"
                >
                  {area}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Coluna direita — terminal interativo */}
        <Reveal direction="up" delay={0.2}>
          <Terminal lines={terminalLines} />
        </Reveal>
      </div>
    </Section>
  )
}
