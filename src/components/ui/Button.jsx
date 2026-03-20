/**
 * Polymorphic Button component with variants
 * @param {Object} props
 * @param {React.ElementType} [props.as='button'] - Component to render
 * @param {'filled'|'ghost'|'outline'} [props.variant='filled'] - Button style
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Button size
 * @param {boolean} [props.loading=false] - Loading state
 * @param {React.ReactNode} [props.leftIcon] - Icon before text
 * @param {React.ReactNode} [props.rightIcon] - Icon after text
 * @param {React.ReactNode} props.children - Button content
 * @param {string} [props.className] - Additional CSS classes
 */
import { cn } from '@/utils/cn';
import { Spinner } from './Spinner';

export function Button({
  as: Component = 'button',
  variant = 'filled',
  size = 'md',
  loading = false,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  ...rest
}) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 focus-ring disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    filled: 'bg-accent text-white hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25',
    ghost: 'bg-transparent text-text hover:bg-surface',
    outline: 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <Component
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && <Spinner size="sm" className="mr-1" />}
      {!loading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      {children}
      {!loading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </Component>
  );
}
