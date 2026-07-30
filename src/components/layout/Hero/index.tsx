import HeroBackground from './HeroBackground'
import HeroContent from './HeroContent'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-dvh w-full overflow-hidden">
      <HeroBackground />
      <HeroContent />
    </section>
  )
}
