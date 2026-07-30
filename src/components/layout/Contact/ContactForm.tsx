import { useState, useRef, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import emailjs from '@emailjs/browser'
import Button from '../../ui/Button'
import FormField from './FormField'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? ''
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? ''

interface FormState {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const INITIAL_FORM: FormState = { name: '', email: '', message: '' }

function validate({ name, email, message }: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!name.trim()) errors.name = 'Nome é obrigatório'
  if (!email.trim()) {
    errors.email = 'Email é obrigatório'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Email inválido'
  }
  if (!message.trim()) errors.message = 'Mensagem é obrigatória'
  return errors
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  )
  const formRef = useRef<HTMLFormElement>(null!)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const validation = validate(form)
    if (Object.keys(validation).length > 0) {
      setErrors(validation)
      return
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus('error')
      return
    }

    setStatus('sending')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      setStatus('sent')
      setForm(INITIAL_FORM)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
          <Send size={20} className="text-accent" />
        </div>
        <p className="font-mono text-sm text-ink">Mensagem enviada com sucesso!</p>
        <p className="font-sans text-xs text-muted max-w-xs">
          Obrigado pelo contato. Responderei assim que possível.
        </p>
        <Button variant="ghost" onClick={() => setStatus('idle')}>
          Enviar outra
        </Button>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
      noValidate
    >
      <FormField
        label="Nome"
        name="name"
        value={form.name}
        onChange={handleChange}
        error={errors.name}
        required
        placeholder="Seu nome"
      />

      <FormField
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        error={errors.email}
        required
        placeholder="seu@email.com"
      />

      <FormField
        label="Mensagem"
        name="message"
        type="textarea"
        value={form.message}
        onChange={handleChange}
        error={errors.message}
        required
        placeholder="Sua mensagem..."
      />

      {status === 'error' && (
        <p className="font-mono text-xs text-error">
          Erro ao enviar. Verifique as credenciais do EmailJS ou tente novamente.
        </p>
      )}

      <Button
        variant="primary"
        type="submit"
        disabled={status === 'sending'}
        className="flex items-center gap-2 self-start"
      >
        <Send size={14} />
        <span>{status === 'sending' ? 'Enviando...' : 'Enviar'}</span>
      </Button>
    </form>
  )
}
