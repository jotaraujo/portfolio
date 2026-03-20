/**
 * Form field component with label and error
 * @param {Object} props
 * @param {string} props.name - Field name
 * @param {string} props.label - Field label
 * @param {string} props.type - Input type
 * @param {string} props.value - Field value
 * @param {string} [props.error] - Error message
 * @param {boolean} [props.required] - Required field
 * @param {number} [props.rows] - Rows for textarea
 * @param {(e: Event) => void} props.onChange - Change handler
 * @param {(e: Event) => void} props.onBlur - Blur handler
 */
import { cn } from '@/utils/cn';

export function FormField({
  name,
  label,
  type = 'text',
  value,
  error,
  required,
  rows,
  onChange,
  onBlur,
}) {
  const Component = rows ? 'textarea' : 'input';

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-text">
        {label}
        {required && <span className="text-accent">*</span>}
      </label>

      <Component
        id={name}
        name={name}
        type={rows ? undefined : type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        rows={rows}
        className={cn(
          'w-full px-4 py-3 rounded-lg bg-bg border transition-all duration-300',
          'text-text placeholder:text-muted',
          'focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent',
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
            : 'border-border hover:border-accent/50'
        )}
        {...(rows && { rows })}
      />

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
}
