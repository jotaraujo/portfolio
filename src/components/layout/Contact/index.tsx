import Section from '../Section'
import Reveal from '../../animations/Reveal'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

export default function Contact() {
  return (
    <Section id="contato" title="Contato">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20">
        <Reveal direction="up">
          <ContactForm />
        </Reveal>

        <Reveal direction="up" delay={0.15}>
          <ContactInfo />
        </Reveal>
      </div>
    </Section>
  )
}
