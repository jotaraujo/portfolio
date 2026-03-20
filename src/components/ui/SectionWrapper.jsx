/**
 * Consistent section wrapper with padding and max-width
 * @param {Object} props
 * @param {string} [props.id] - Section ID for navigation
 * @param {React.ReactNode} props.children - Section content
 * @param {string} [props.className] - Additional classes
 */
import { cn } from '@/utils/cn';

export function SectionWrapper({ id, children, className }) {
  return (
    <section
      id={id}
      className={cn('py-24 px-4 sm:px-6 lg:px-8', className)}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
