/**
 * Contact information with social links
 */
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SocialLinks } from '@/components/layout/Footer/SocialLinks';

export function ContactInfo() {
  const contactDetails = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'jpaulofonseca99@gmail.com',
      href: 'mailto:jpaulofonseca99@gmail.com',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Localização',
      value: 'Rio de Janeiro, Brasil',
    },
  ];

  return (
    <AnimatedSection className="space-y-8">
      <div className="space-y-6">
        {contactDetails.map((detail) => (
          <div key={detail.label} className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-surface border border-border text-accent">
              {detail.icon}
            </div>
            <div>
              <p className="text-sm text-muted">{detail.label}</p>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="text-text hover:text-accent transition-colors"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-text">{detail.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-border">
        <p className="text-sm text-muted mb-4">Ou conecte-se comigo nas redes:</p>
        <SocialLinks iconClassName="w-6 h-6" />
      </div>
    </AnimatedSection>
  );
}
