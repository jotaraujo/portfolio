import type { Project } from '../../../types'
import ProjectTags from './ProjectTags'
import ProjectLinks from './ProjectLinks'

export default function FeaturedCard({ project }: { project: Project }) {
	return (
		<div className='bg-surface border border-outline rounded-lg overflow-hidden'>
			<div className='h-0.5 bg-primary' />
			<div className='grid grid-cols-1 md:grid-cols-2'>
				<div className='p-6 sm:p-8'>
					<div className='flex flex-col gap-4'>
						<h3 className='font-mono font-medium text-lg text-ink'>
							{project.title}
						</h3>
						<p className='font-sans text-muted text-sm leading-relaxed max-w-[65ch]'>
							{project.description}
						</p>

						<ProjectTags tags={project.tags} />
						<ProjectLinks
							githubUrl={project.githubUrl}
							demoUrl={project.demoUrl}
						/>
					</div>
				</div>
				{project.img && (
					<div className='relative h-56 md:h-auto overflow-hidden'>
						<img
							src={project.img}
							alt={`Pré-visualização de ${project.title}`}
							className='absolute inset-0 h-full w-full object-cover object-top'
						/>
					</div>
				)}
			</div>
		</div>
	)
}
