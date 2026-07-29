import type React from 'react'

interface MarqueeProps {
	children: React.ReactNode
	className?: string
	speed?: number
	reverse?: boolean
}

export const Marquee: React.FC<MarqueeProps> = ({
	children,
	className = '',
	speed = 30,
	reverse = false,
}) => {
	return (
		<div className={`w-full overflow-hidden z-10 ${className}`}>
			<div className="relative flex max-w-full overflow-hidden py-4">
				<div
					className="flex w-max animate-marquee gap-4 pr-4"
					style={
						{
							'--duration': `${speed}s`,
							animationDirection: reverse ? 'reverse' : 'normal',
						} as React.CSSProperties
					}
				>
					{children}
					{children}
				</div>
			</div>
		</div>
	)
}

export default Marquee
