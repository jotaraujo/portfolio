import { ExternalLink } from 'lucide-react'
import { GitHubLight } from 'developer-icons'
import Button from '../../ui/Button'

interface ProjectLinksProps {
	githubUrl: string
	demoUrl: string | null
}

export default function ProjectLinks({
	githubUrl,
	demoUrl,
}: ProjectLinksProps) {
	return (
		<div className='flex items-center gap-3 mt-auto pt-4'>
			{demoUrl && (
				<a href={demoUrl} target='_blank' rel='noopener noreferrer'>
					<Button
						variant='primary'
						className='flex items-center gap-1.5 text-xs'
					>
						<ExternalLink size={13} />
						<span>Ver Projeto</span>
					</Button>
				</a>
			)}
			{githubUrl && (
				<a
					href={githubUrl}
					target='_blank'
					rel='noopener noreferrer'
					className='font-mono text-xs text-muted hover:text-ink transition-colors flex items-center gap-1.5'
				>
					<GitHubLight size={15} />
					<span>GitHub</span>
				</a>
			)}
		</div>
	)
}
