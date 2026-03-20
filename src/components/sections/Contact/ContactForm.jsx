/**
 * Contact form with validation
 */
import { useContactForm } from '@/hooks/useContactForm';
import { Button } from '@/components/ui/Button';
import { Spinner } from '@/components/ui/Spinner';
import { FormField } from './FormField';
import { SuccessMessage } from './SuccessMessage';

export function ContactForm() {
  const {
    values,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useContactForm();

  if (isSuccess) {
    return <SuccessMessage />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField
        name="name"
        label="Nome"
        value={values.name}
        error={errors.name}
        required
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <FormField
        name="email"
        label="Email"
        type="email"
        value={values.email}
        error={errors.email}
        required
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <FormField
        name="message"
        label="Mensagem"
        rows={5}
        value={values.message}
        error={errors.message}
        required
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <Button
        type="submit"
        variant="filled"
        size="lg"
        loading={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? (
          <>
            <Spinner size="sm" />
            Enviando...
          </>
        ) : (
          'Enviar Mensagem'
        )}
      </Button>
    </form>
  );
}
