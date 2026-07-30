export default function ProjectTags({ tags }: { tags: string[] }) {
	return (
		<div className='flex flex-wrap gap-2'>
			{tags.map((tag) => (
				<span
					key={tag}
					className='font-mono text-[0.6875rem] text-muted bg-surface-raised px-2.5 py-1 rounded-sm'
				>
					{tag}
				</span>
			))}
		</div>
	)
}
