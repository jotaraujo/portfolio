import { X } from 'lucide-react'

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
		<button
			onClick={onClick}
			className={`relative w-9 h-9 rounded-full flex items-center justify-center focus:outline-none select-none ${className}`}
			aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
		>
			{isOpen ? (
				<X size={20} className='text-ink' />
			) : (
				<div className='flex flex-col items-center justify-between w-5 h-4'>
					<span className='w-5 h-0.5 bg-ink rounded-full block origin-center' />
					<span className='w-5 h-0.5 bg-ink rounded-full block origin-center' />
					<span className='w-5 h-0.5 bg-ink rounded-full block origin-center' />
				</div>
			)}
		</button>
	)
}

export default SideMenuButton
