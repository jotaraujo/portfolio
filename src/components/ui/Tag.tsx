import type React from 'react'
import { cn } from '../../utils/cn'

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  icon?: React.ReactNode
  variant?: 'default' | 'primary' | 'success'
  className?: string
}

const variantStyles: Record<'default' | 'primary' | 'success', string> = {
  default: 'bg-transparent text-ink hover:text-ink transition-colors',
  primary: 'bg-transparent text-ink font-semibold',
  success: 'bg-transparent text-accent',
}

const Tag = ({
  children,
  icon,
  variant = 'default',
  className,
  ...props
}: TagProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 font-mono text-md sm:text-ink font-medium py-1 px-3 transition-colors duration-200 cursor-default select-none whitespace-nowrap',
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {icon && <span className="flex items-center justify-center shrink-0">{icon}</span>}
      {children}
    </span>
  )
}

export default Tag
