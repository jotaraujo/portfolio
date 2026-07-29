import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV_LINKS } from '../../constants/navigation'
import { cn } from '../../utils/cn'
import Button from '../ui/Button'
import SideMenuButton from '../ui/SideMenuButton'

export const Navbar = () => {
	const [activeTab, setActiveTab] = useState(NAV_LINKS[0].href)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	// Detecção de scroll para trocar o estilo da navbar
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50)
		}
		window.addEventListener('scroll', handleScroll, { passive: true })
		handleScroll()
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// Fechar menu com Escape
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setMobileMenuOpen(false)
		}

		if (mobileMenuOpen) {
			document.addEventListener('keydown', handleKeyDown)
		}

		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [mobileMenuOpen])

	// Travar scroll do body quando menu mobile está aberto
	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
		return () => {
			document.body.style.overflow = ''
		}
	}, [mobileMenuOpen])

	return (
		<header className='fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 flex justify-center'>
			<div
				className={cn(
					'relative w-full max-w-5xl flex items-center justify-between rounded-full px-6 py-2.5 transition-all duration-300',
					scrolled
						? 'bg-surface border border-outline/60 shadow-lg'
						: 'bg-transparent border border-transparent',
				)}
			>
				{/* Logo */}
				<a
					href='#hero'
					className='font-mono text-sm font-bold tracking-tight text-ink hover:text-primary transition-colors'
				>
					jota<span className='text-primary'>.dev</span>
				</a>

				{/* Tab List Desktop */}
				<nav className='hidden md:flex items-center gap-1 bg-base/50 p-1 rounded-full border border-outline/30'>
					{NAV_LINKS.map((link) => {
						const isActive = activeTab === link.href

						return (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setActiveTab(link.href)}
								className={cn(
									'relative px-4 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors duration-200 z-10 select-none',
									isActive
										? 'text-primary'
										: 'text-muted hover:text-ink',
								)}
							>
								{isActive && (
									<motion.div
										layoutId='activeTabPill'
										className='absolute inset-0 bg-surface border border-primary/40 rounded-full -z-10 shadow-sm'
										transition={{ type: 'spring', stiffness: 380, damping: 30 }}
									/>
								)}
								{link.label}
							</a>
						)
					})}
				</nav>

				{/* CTA Desktop */}
				<div className='hidden md:block'>
					<Button variant='ghost'>Fale Comigo</Button>
				</div>

				{/* Botão Mobile */}
				<div className='md:hidden'>
					<SideMenuButton
						isOpen={mobileMenuOpen}
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					/>
				</div>
			</div>

			{/* Menu Mobile Fullscreen */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className='fixed inset-0 z-40 h-dvh bg-base flex flex-col items-center justify-center gap-10'
					>
						<nav className='flex flex-col items-center gap-6'>
							{NAV_LINKS.map((link) => (
								<a
									key={link.href}
									href={link.href}
									onClick={() => {
										setActiveTab(link.href)
										setMobileMenuOpen(false)
									}}
									className={cn(
										'text-xl font-mono uppercase tracking-wider transition-colors',
										activeTab === link.href
											? 'text-primary'
											: 'text-muted hover:text-ink',
									)}
								>
									{link.label}
								</a>
							))}
						</nav>
						<Button variant='ghost' className='text-sm'>
							Fale Comigo
						</Button>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	)
}

export default Navbar
