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
        gradientFrom="#7B5FB8"
        gradientTo="#5B3F8C"
        glowColor="#120F17"
      />
    </div>
  )
}
