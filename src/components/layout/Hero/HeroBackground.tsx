import DotField from '../../ui/DotField'

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <DotField
        dotRadius={1.5}
        dotSpacing={14}
        bulgeStrength={67}
        glowRadius={160}
        sparkle={false}
        waveAmplitude={0}
        cursorRadius={500}
        cursorForce={0.1}
        bulgeOnly
        gradientFrom="#A855F7"
        gradientTo="#B497CF"
        glowColor="#120F17"
      />
    </div>
  )
}
