import { cn } from '../../utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'ghost'
	type?: 'button' | 'submit' | 'reset'
	children: React.ReactNode
	className?: string
}

const variantStyles: Record<'primary' | 'ghost', string> = {
	primary:
		'bg-primary hover:bg-primary-light text-ink transition-all duration-200 cursor-pointer',
	ghost:
		'bg-transparent text-muted hover:text-ink border border-outline hover:border-primary transition-all duration-200 cursor-pointer',
}

const Button = ({
	variant = 'primary',
	type = 'button',
	children,
	className,
	...props
}: ButtonProps) => {
	return (
		<button
			type={type}
			className={cn(
				'font-mono uppercase tracking-wider text-xs px-6 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary',
				variantStyles[variant],
				className,
			)}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
