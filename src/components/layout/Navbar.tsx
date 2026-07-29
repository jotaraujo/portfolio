import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV_LINKS } from '../../constants/navigation'
import { cn } from '../../utils/cn'
import Button from '../ui/Button'
import SideMenuButton from '../ui/SideMenuButton'

export const Navbar = () => {
	const [activeTab, setActiveTab] = useState(NAV_LINKS[0].href)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const navRef = useRef<HTMLDivElement>(null)

	// Fechar o menu ao clicar fora do componente Navbar
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (navRef.current && !navRef.current.contains(event.target as Node)) {
				setMobileMenuOpen(false)
			}
		}

		if (mobileMenuOpen) {
			document.addEventListener('mousedown', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [mobileMenuOpen])


	return (
		<header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 flex justify-center">
			<div
				ref={navRef}
				className="relative w-full max-w-5xl flex items-center justify-between bg-surface/80 border border-outline/60 backdrop-blur-md rounded-full px-6 py-2.5 shadow-lg"
			>
				{/* Logo */}
				<a
					href="#hero"
					className="font-mono text-sm font-bold tracking-tight text-ink hover:text-primary transition-colors"
				>
					jota<span className="text-primary">.dev</span>
				</a>

				{/* Tab List Desktop */}
				<nav className="hidden md:flex items-center gap-1 bg-base/50 p-1 rounded-full border border-outline/30">
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
										layoutId="activeTabPill"
										className="absolute inset-0 bg-surface border border-primary/40 rounded-full -z-10 shadow-sm"
										transition={{ type: 'spring', stiffness: 380, damping: 30 }}
									/>
								)}
								{link.label}
							</a>
						)
					})}
				</nav>

				{/* CTA Desktop */}
				<div className="hidden md:block">
					<Button variant="ghost" className="py-2 px-4 text-[11px]">
						Fale Comigo
					</Button>
				</div>

				{/* Botão Mobile */}
				<div className="md:hidden">
					<SideMenuButton
						isOpen={mobileMenuOpen}
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					/>
				</div>

				{/* Dropdown Mobile Compacto Alinhado à Direita */}
				<AnimatePresence>
					{mobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, y: -8, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: -8, scale: 0.95 }}
							transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
							className="absolute top-[calc(100%+12px)] right-0 w-60 md:hidden bg-surface/95 border border-outline/80 backdrop-blur-2xl rounded-2xl p-4 shadow-2xl flex flex-col gap-3 z-50 origin-top-right"
						>
							<nav className="flex flex-col gap-1">
								{NAV_LINKS.map((link) => (
									<a
										key={link.href}
										href={link.href}
										onClick={() => {
											setActiveTab(link.href)
											setMobileMenuOpen(false)
										}}
										className="text-xs font-mono uppercase tracking-wider text-muted hover:text-ink hover:bg-surface-raised transition-all py-2.5 px-3 rounded-lg flex items-center justify-between"
									>
										<span>{link.label}</span>
										<span className="text-primary text-[10px]">→</span>
									</a>
								))}
							</nav>
							<div className="pt-2 border-t border-outline/40">
								<Button
									variant="ghost"
									className="w-full justify-center py-2.5 text-xs"
								>
									Fale Comigo
								</Button>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</header>
	)
}

export default Navbar
