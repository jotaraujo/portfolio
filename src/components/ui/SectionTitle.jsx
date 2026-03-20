/**
 * Section title with decorative underline
 * @param {Object} props
 * @param {string} props.children - Title text
 * @param {string} [props.subtitle] - Optional subtitle
 * @param {string} [props.className] - Additional classes for title
 * @param {'left'|'center'|'right'} [props.align='center'] - Text alignment
 */
import { cn } from '@/utils/cn';

export function SectionTitle({
  children,
  subtitle,
  className,
  align = 'center',
}) {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const underlineAlign = {
    left: 'mx-0',
    center: 'mx-auto',
    right: 'mx-0 ml-auto',
  };

  return (
    <div className={cn('mb-12', alignStyles[align])}>
      <h2
        className={cn(
          'text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text mb-4',
          className
        )}
      >
        {children}
      </h2>
      <div
        className={cn(
          'h-1 w-24 bg-gradient-to-r from-accent to-accent-soft rounded-full',
          underlineAlign[align]
        )}
      />
      {subtitle && (
        <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
