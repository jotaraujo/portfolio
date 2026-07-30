import Section from '../Section'
import Reveal from '../../animations/Reveal'
import { PROJECTS } from '../../../constants/projects'
import FeaturedCard from './FeaturedCard'
import ProjectCard from './ProjectCard'

export default function Projects() {
	const featured = PROJECTS.find((p) => p.featured)
	const others = PROJECTS.filter((p) => !p.featured)

	return (
		<Section id='projetos' title='Projetos'>
			<div className='flex flex-col gap-10'>
				{featured && (
					<Reveal direction='up'>
						<FeaturedCard project={featured} />
					</Reveal>
				)}

				{others.length > 0 && (
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						{others.map((project) => (
							<Reveal key={project.id} direction='up'>
								<ProjectCard project={project} />
							</Reveal>
						))}
					</div>
				)}
			</div>
		</Section>
	)
}
