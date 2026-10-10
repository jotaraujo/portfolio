import { cn } from '../../../utils/cn'
import { PROJECTS } from '../../../constants/projects'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import FeaturedCard from './FeaturedCard'
import ProjectCard from './ProjectCard'
import Reveal from '../../animations/Reveal'
import Section from '../Section'

const TABS: { id: 'personal' | 'freelance'; label: string }[] = [
	{ id: 'personal', label: 'Pessoal' },
	{ id: 'freelance', label: 'Freelance' },
]

// Chunk array into pages of size `pageSize`
function chunkIntoPages<T>(arr: T[], pageSize: number): T[][] {
	const pages: T[][] = []
	for (let i = 0; i < arr.length; i += pageSize) {
		pages.push(arr.slice(i, i + pageSize))
	}
	return pages
}

export default function Projects() {
	const [activeTab, setActiveTab] = useState<'personal' | 'freelance'>('personal')
	const [carouselPage, setCarouselPage] = useState(0)

	const filtered = PROJECTS.filter((p) => p.category === activeTab)
	const pageCount = Math.ceil(filtered.length / 2)

	// Reset carousel page when tab changes
	const handleTabChange = (id: 'personal' | 'freelance') => {
		setActiveTab(id)
		setCarouselPage(0)
	}

	return (
		<Section id='projetos' title='Projetos'>
			<div className='bg-[#0A0A0A] border border-border rounded-lg overflow-hidden font-mono text-sm'>
				{/* Terminal header: traffic-light buttons + tabs */}
				<div className='flex items-center gap-1.5 px-4 py-2.5 bg-surface border-b border-border'>
					<span className='w-2.5 h-2.5 rounded-full bg-error' />
					<span className='w-2.5 h-2.5 rounded-full bg-warning' />
					<span className='w-2.5 h-2.5 rounded-full bg-success' />
					<span className='text-muted text-xs ml-2'>terminal — jota@lab</span>
					<span className='ml-auto' />
					<div className='flex items-center gap-1'>
						{TABS.map(({ id, label }) => {
							const isActive = activeTab === id
							return (
								<button
									key={id}
									onClick={() => handleTabChange(id)}
									aria-selected={isActive}
									aria-label={`Projetos ${label.toLowerCase()}`}
									className={cn(
										'font-mono text-xs px-3 py-1.5 rounded-t-sm transition-all',
										'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 cursor-pointer',
										isActive
											? 'text-ink bg-surface-raised border-b-2 border-primary'
											: 'text-muted hover:text-ink hover:bg-surface-raised/50',
									)}
								>
									{label}
								</button>
							)
						})}
					</div>
				</div>

				{/* Terminal body */}
				<div className='p-4 pt-5 min-h-50'>
					<AnimatePresence mode='wait'>
						{filtered.length === 0 && (
							<motion.div
								key='empty'
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.3 }}
							>
								<p className='text-muted text-xs'>Nenhum projeto nesta categoria.</p>
							</motion.div>
						)}

						{filtered.length === 1 && (
							<motion.div
								key={`single-${filtered[0].id}`}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.3 }}
							>
								<Reveal direction='up'>
									<FeaturedCard project={filtered[0]} />
								</Reveal>
							</motion.div>
						)}

						{filtered.length === 2 && (
							<motion.div
								key='pair'
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.3 }}
								className='grid grid-cols-1 md:grid-cols-2 gap-6'
							>
								{filtered.map((project) => (
									<Reveal key={project.id} direction='up'>
										<ProjectCard project={project} />
									</Reveal>
								))}
							</motion.div>
						)}

						{filtered.length > 2 && (
							<>
								{/* Carousel pages */}
								<AnimatePresence mode='wait'>
									{(() => {
										const pages = chunkIntoPages(filtered, 2)
										const currentPage = pages[carouselPage]
										return (
											<motion.div
												key={`carousel-${carouselPage}`}
												initial={{ opacity: 0, x: 20 }}
												animate={{ opacity: 1, x: 0 }}
												exit={{ opacity: 0, x: -20 }}
												transition={{ duration: 0.3 }}
											>
												{currentPage.length === 2 ? (
													<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
														{currentPage.map((project) => (
															<Reveal key={project.id} direction='up'>
																<ProjectCard project={project} />
															</Reveal>
														))}
													</div>
												) : (
													<Reveal direction='up'>
														<FeaturedCard project={currentPage[0]} />
													</Reveal>
												)}
											</motion.div>
										)
									})()}
								</AnimatePresence>

								{/* Carousel navigation */}
								<div className='flex items-center justify-center gap-4 mt-6'>
									<button
										onClick={() => setCarouselPage((p) => Math.max(0, p - 1))}
										disabled={carouselPage === 0}
										aria-label='Projeto anterior'
										className={cn(
											'flex items-center justify-center w-10 h-10 rounded-full bg-surface-raised border border-border text-ink transition-all',
											'hover:bg-primary/20 hover:border-primary/50',
											'disabled:opacity-30 disabled:cursor-not-allowed',
											'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
										)}
									>
										<ChevronLeft className='w-5 h-5' />
									</button>

									<span className='font-mono text-xs text-muted'>
										{carouselPage + 1} / {pageCount}
									</span>

									<button
										onClick={() => setCarouselPage((p) => Math.min(pageCount - 1, p + 1))}
										disabled={carouselPage === pageCount - 1}
										aria-label='Próximo projeto'
										className={cn(
											'flex items-center justify-center w-10 h-10 rounded-full bg-surface-raised border border-border text-ink transition-all',
											'hover:bg-primary/20 hover:border-primary/50',
											'disabled:opacity-30 disabled:cursor-not-allowed',
											'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
										)}
									>
										<ChevronRight className='w-5 h-5' />
									</button>
								</div>
							</>
						)}
					</AnimatePresence>
				</div>
			</div>
		</Section>
	)
}
