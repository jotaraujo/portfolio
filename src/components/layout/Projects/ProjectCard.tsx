import type { Project } from '../../../types'
import ProjectTags from './ProjectTags'
import ProjectLinks from './ProjectLinks'

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<div className='bg-surface border border-border rounded-lg p-6 flex flex-col gap-3 transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-[0_0_25px_rgba(91,63,140,0.25)]'>
			<div>
				<h3 className='font-mono font-medium text-[0.9375rem] text-ink'>
					{project.title}
				</h3>
				<p className='font-mono text-xs text-primary mt-0.5'>
					{project.subtitle}
				</p>
			</div>
			<p className='font-sans text-muted text-sm leading-relaxed'>
				{project.overview}
			</p>
			<p className='font-sans text-muted text-sm leading-relaxed'>
				{project.result}
			</p>

			<ProjectTags tags={project.tags} />

			<div className='flex items-center gap-3 pt-3 border-t border-border/50 mt-auto'>
				<ProjectLinks githubUrl={project.githubUrl} demoUrl={project.demoUrl} />
			</div>
		</div>
	)
}
