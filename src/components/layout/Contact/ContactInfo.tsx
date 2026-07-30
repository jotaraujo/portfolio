import { Mail, MapPin } from 'lucide-react'
import { GitHubLight, LinkedIn } from 'developer-icons'

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jpaulofonseca99@gmail.com',
    href: 'mailto:jpaulofonseca99@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'Brasil · RJ',
    href: null,
  },
] as const

const SOCIAL_LINKS = [
  {
    Icon: GitHubLight,
    label: 'GitHub',
    href: 'https://github.com/jotaraujo',
  },
  {
    Icon: LinkedIn,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/joaofonsecaraujo/',
  },
] as const

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        {CONTACT_DETAILS.map((item) => {
          const content = (
            <div key={item.label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-surface-raised flex items-center justify-center shrink-0">
                <item.icon size={15} className="text-muted" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[0.6875rem] text-muted uppercase tracking-wider">
                  {item.label}
                </span>
                <span className="font-sans text-sm text-ink">{item.value}</span>
              </div>
            </div>
          )

          if (item.href) {
            return (
              <a
                key={item.label}
                href={item.href}
                className="group block"
              >
                {content}
              </a>
            )
          }

          return content
        })}
      </div>

      <div className="h-px bg-border/50" />

      <div className="flex flex-col gap-3">
        <span className="font-mono text-[0.6875rem] text-muted uppercase tracking-wider">
          Redes
        </span>
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-muted hover:text-ink transition-colors"
            >
              <Icon size={20} />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
