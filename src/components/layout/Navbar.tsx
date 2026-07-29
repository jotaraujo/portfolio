import { useState } from 'react'
import { motion } from 'framer-motion'
import { NAV_LINKS } from '../../constants/navigation'
import { cn } from '../../utils/cn'
import Button from '../ui/Button'
import SideMenuButton from '../ui/SideMenuButton'

export const Navbar = () => {
	const [activeTab, setActiveTab] = useState(NAV_LINKS[0].href)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<header className='flex justify-center fixed top-0 left-0 right-0 z-50 py-4 px-6'>
			<div className='flex items-center justify-between w-full max-w-5xl bg-surface/80 border border-outline/60 backdrop-blur-md rounded-full px-6 py-2.5 shadow-lg'>
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
										? 'text-ink font-semibold'
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
					<Button variant='ghost' className='py-2 px-4 text-[11px]'>
						Fale Comigo
					</Button>
				</div>

				{/* Botão Mobile */}
				<div className='md:hidden'>
					<SideMenuButton
						isOpen={mobileMenuOpen}
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					/>
				</div>
			</div>
		</header>
	)
}

export default Navbar
