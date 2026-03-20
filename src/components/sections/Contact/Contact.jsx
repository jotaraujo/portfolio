/**
 * Contact section with form and info
 */
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

export function Contact() {
  return (
    <SectionWrapper id="contato">
      <SectionTitle subtitle="Vamos conversar sobre seu próximo projeto">
        Contato
      </SectionTitle>

      <div className="grid lg:grid-cols-2 gap-12">
        <ContactInfo />

        <AnimatedSection delay={200}>
          <ContactForm />
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
