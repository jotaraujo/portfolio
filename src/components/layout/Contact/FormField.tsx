import { cn } from '../../../utils/cn'

interface FormFieldProps {
  label: string
  name: string
  type?: 'text' | 'email' | 'textarea'
  value: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  error?: string
  required?: boolean
  placeholder?: string
}

export default function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  required,
  placeholder,
}: FormFieldProps) {
  const sharedStyles =
    'w-full bg-surface border rounded-sm px-4 py-3 font-sans text-sm text-ink placeholder:text-muted/50 transition-colors duration-200 focus:outline-none focus:ring-1'

  const borderStyles = error
    ? 'border-error focus:border-error focus:ring-error/50'
    : 'border-outline focus:border-primary focus:ring-primary/50'

  const inputElement =
    type === 'textarea' ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        rows={5}
        className={cn(sharedStyles, borderStyles, 'resize-none min-h-[120px]')}
      />
    ) : (
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={cn(sharedStyles, borderStyles)}
      />
    )

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="font-mono text-xs text-muted uppercase tracking-wider"
      >
        {label}
        {required && <span className="text-error ml-1">*</span>}
      </label>
      {inputElement}
      {error && (
        <span className="font-mono text-[0.6875rem] text-error">{error}</span>
      )}
    </div>
  )
}
