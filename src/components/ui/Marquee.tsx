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
      <div className="relative flex max-w-[90vw] mx-auto overflow-hidden py-5">
        <div
          className="flex w-max animate-marquee hover:[animation-play-state:paused]"
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
