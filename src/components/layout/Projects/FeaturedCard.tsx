import type { Project } from '../../../types'
import ProjectTags from './ProjectTags'
import ProjectLinks from './ProjectLinks'

export default function FeaturedCard({ project }: { project: Project }) {
	return (
		<div className='bg-surface border border-outline rounded-lg overflow-hidden'>
			<div className='h-0.5 bg-primary' />
      
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
		</div>
	)
}
