/**
 * Hook for managing contact form state and validation
 * @returns {Object} Form state and handlers
 */
import { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const validateField = (name, value) => {
  switch (name) {
    case 'name':
      return value.trim().length < 2 ? 'Nome deve ter pelo menos 2 caracteres' : '';
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return !emailRegex.test(value) ? 'Email inválido' : '';
    case 'message':
      return value.trim().length < 10 ? 'Mensagem deve ter pelo menos 10 caracteres' : '';
    default:
      return '';
  }
};

export function useContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  }, [touched]);

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({ name: true, email: true, message: true });

    // Validate all fields
    const newErrors = {
      name: validateField('name', values.name),
      email: validateField('email', values.email),
      message: validateField('message', values.message),
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error !== '')) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Envia o e-mail via EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: values.name,
          email: values.email,
          message: values.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      setValues(initialValues);
      setTouched({});

      // Reseta a mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      // TODO: substituir por um estado de erro no formulário futuramente
      alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
      console.error('EmailJS error:', error);
    } finally {
      // Garante que o loading para independente do resultado
      setIsSubmitting(false);
    }
  }, [values]);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSuccess(false);
  }, []);

  return {
    values,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  };
}
