export default function SkillChip({
  name,
  Logo,
}: {
  name: string
  Logo?: React.ComponentType<{ size?: number; className?: string }>
}) {
  return (
    <div className="relative flex items-center justify-start gap-4 mx-16 select-none">
      {Logo && <Logo size={50} className="text-muted shrink-0" />}
      <span className="font-mono text-sm text-muted tracking-wider whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}
