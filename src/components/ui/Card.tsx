import { cn } from '../../utils/cn'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
	className?: string
	hoverable?: boolean
	onClick?: () => void
}

const Card = ({
	children,
	className,
	hoverable = false,
	onClick,
	...props
}: CardProps) => {
	return (
		<div
			className={cn(
				'bg-surface border border-outline rounded-lg p-6 text-ink',
				hoverable &&
					'transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(91, 63, 140,0.25)] cursor-pointer',
				className,
			)}
			{...props}
		>
			{children}
		</div>
	)
}

export default Card
