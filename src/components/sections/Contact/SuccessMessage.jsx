/**
 * Contact form success message
 */
export function SuccessMessage() {
  return (
    <div className="p-6 rounded-xl bg-success/10 border border-success/20 text-center">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/20 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-success"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h3 className="text-xl font-display font-bold text-text mb-2">
        Mensagem enviada!
      </h3>
      <p className="text-muted">
        Obrigado pelo contato. Responderei em breve.
      </p>
    </div>
  );
}
