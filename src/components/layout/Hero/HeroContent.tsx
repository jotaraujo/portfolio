import { ArrowRight, Download } from 'lucide-react'
import { GitHubLight, LinkedIn } from 'developer-icons'
import Button from '../../ui/Button'
import Tag from '../../ui/Tag'
import avatar from '../../../assets/profile.png'
import curriculo from '../../../assets/curriculo.pdf'

export default function HeroContent() {
  return (
    <div className="relative z-10 min-h-dvh grid grid-cols-1 lg:grid-cols-[auto_1fr] items-center gap-10 lg:gap-16 px-6 sm:px-12 lg:px-16 max-w-6xl mx-auto">
      {/* Avatar */}
      <div className="flex justify-center lg:justify-end pt-28 lg:pt-0">
        <div className="w-50 h-50 lg:w-70 lg:h-70 rounded-md overflow-hidden ring-1 ring-primary/20 bg-surface">
          <img
            src={avatar}
            alt="João Paulo Araújo - Desenvolvedor Frontend"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5 pb-20 lg:pb-0">
        <Tag
          variant="success"
          className="bg-surface-raised text-muted rounded-sm"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Disponível para novos desafios
        </Tag>

        <h1 className="font-mono text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-tight">
          Engenharia de Interfaces <br />
          <span className="text-primary">Modernas &amp; Performáticas</span>
        </h1>

        <p className="font-sans text-muted text-sm max-w-2xl leading-relaxed">
          Desenvolvedor Frontend especializado em construir aplicações web
          modernas, com foco em arquitetura limpa em React/TypeScript, alta
          performance e experiência de usuário impecável.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a href="#projetos">
            <Button variant="primary" className="flex items-center gap-2">
              <span>Ver Projetos</span>
              <ArrowRight size={14} />
            </Button>
          </a>
          <a href={curriculo} download>
            <Button variant="ghost" className="flex items-center gap-2">
              <Download size={14} />
              <span>Currículo</span>
            </Button>
          </a>
          <a href="#contato">
            <Button variant="ghost">Fale Comigo</Button>
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6 mt-4 pt-4 text-muted">
          <a
            href="https://github.com/jotaraujo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono hover:text-ink transition-colors"
          >
            <GitHubLight size={30} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/joaofonsecaraujo/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono hover:text-ink transition-colors"
          >
            <LinkedIn size={30} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  )
}
