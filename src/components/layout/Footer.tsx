import { ArrowUp } from 'lucide-react'
import { GitHubLight, LinkedIn } from 'developer-icons'
import { NAV_LINKS } from '../../constants/navigation'
import { scrollTo } from '../../utils/scrollTo'

const SOCIAL = [
	{ Icon: GitHubLight, label: 'GitHub', href: 'https://github.com/jotaraujo' },
	{
		Icon: LinkedIn,
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/joaofonsecaraujo/',
	},
] as const

export default function Footer() {
	return (
		<footer className='border-t border-outline/50 mt-12'>
			{/* Accent bar */}
			<div className='h-0.5 bg-primary/40 w-16 mx-auto -mt-px' />

			<div className='mx-auto max-w-5xl px-6 sm:px-12 lg:px-16 py-12'>
				<div className='grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8'>
					{/* Logo + tagline */}
					<div className='flex flex-col gap-3 items-center sm:items-start text-center sm:text-left'>
						<a
							href='#hero'
							onClick={(e) => {
								e.preventDefault()
								scrollTo('#hero')
							}}
							className='font-mono text-lg font-bold tracking-tight text-ink hover:text-primary transition-colors'
						>
							jota<span className='text-primary'>.dev</span>
						</a>
						<p className='font-sans text-xs text-muted max-w-[30ch] leading-relaxed'>
							Frontend com motivo para existir.
						</p>
					</div>

					{/* Navigation links */}
					<div className='flex flex-col gap-3 items-center sm:items-start'>
						<span className='font-mono text-[0.625rem] text-muted uppercase tracking-[0.12em]'>
							Navegação
						</span>
						<nav className='flex flex-col items-center sm:items-start gap-1.5'>
							{NAV_LINKS.map((link) => (
								<a
									key={link.href}
									href={link.href}
									onClick={(e) => {
										e.preventDefault()
										scrollTo(link.href)
									}}
									className='font-mono text-xs text-muted hover:text-ink transition-colors'
								>
									{link.label}
								</a>
							))}
						</nav>
					</div>

					{/* Social + copyright */}
					<div className='flex flex-col gap-4 items-center sm:items-end justify-between'>
						<div className='flex items-center gap-3'>
							{SOCIAL.map(({ Icon, label, href }) => (
								<a
									key={label}
									href={href}
									target='_blank'
									rel='noopener noreferrer'
									className='w-8 h-8 rounded-sm bg-surface-raised flex items-center justify-center text-muted hover:text-ink hover:bg-surface transition-colors'
									aria-label={label}
								>
									<Icon size={16} />
								</a>
							))}
						</div>

						<a
							href='#hero'
							onClick={(e) => {
								e.preventDefault()
								scrollTo('#hero')
							}}
							className='flex items-center gap-1.5 font-mono text-[0.625rem] text-muted hover:text-ink transition-colors'
						>
							<ArrowUp size={12} />
							<span>Voltar ao topo</span>
						</a>
					</div>
				</div>

				{/* Bottom divider */}
				<div className='border-t border-outline/30 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3'>
					<p className='font-mono text-[0.625rem] text-muted'>
						&copy; {new Date().getFullYear()} João Paulo Araújo
					</p>
					<p className='font-mono text-[0.625rem] text-muted'>
						Design &amp; Código — jota.dev
					</p>
				</div>
			</div>
		</footer>
	)
}
