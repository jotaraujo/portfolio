import { motion } from 'framer-motion'

interface SideMenuButtonProps {
	isOpen: boolean
	onClick: () => void
	className?: string
}

export const SideMenuButton = ({
	isOpen,
	onClick,
	className = '',
}: SideMenuButtonProps) => {
	return (
		<motion.button
			onClick={onClick}
			className={`relative w-9 h-9 rounded-full flex items-center justify-center focus:outline-none select-none ${className}`}
			whileTap={{ scale: 0.9 }}
			aria-label='Toggle Menu'
		>
			<div className='relative flex flex-col items-center justify-between w-5 h-4'>
				{/* Linha Superior */}
				<motion.span
					className='w-5 h-0.5 bg-ink rounded-full block origin-center'
					animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
				/>
				{/* Linha do Meio */}
				<motion.span
					className='w-5 h-0.5 bg-ink rounded-full block origin-center'
					animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
				/>
				{/* Linha Inferior */}
				<motion.span
					className='w-5 h-0.5 bg-ink rounded-full block origin-center'
					animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
				/>
			</div>
		</motion.button>
	)
}

export default SideMenuButton
