import { FRONTEND_SKILLS, BACKEND_TOOLING_SKILLS } from '../../constants/skills'
import Marquee from '../ui/Marquee'
import Section from './Section'

const SkillChip = ({
  name,
  Logo,
}: {
  name: string
  Logo?: React.ComponentType<{ size?: number; className?: string }>
}) => (
  <div className="relative flex items-center justify-start gap-4 mx-16 select-none">
    {Logo && <Logo size={50} className="text-muted shrink-0" />}
    <span className="font-mono text-sm text-muted tracking-wider whitespace-nowrap">
      {name}
    </span>
  </div>
)

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="relative left-1/2 -translate-x-1/2 w-screen">
        <div className="flex flex-col gap-10">
          <Marquee speed={45}>
            {FRONTEND_SKILLS.map((skill) => (
              <SkillChip key={skill.name} {...skill} />
            ))}
          </Marquee>

          <Marquee speed={50} reverse>
            {BACKEND_TOOLING_SKILLS.map((skill) => (
              <SkillChip key={skill.name} {...skill} />
            ))}
          </Marquee>
        </div>
      </div>
    </Section>
  )
}
