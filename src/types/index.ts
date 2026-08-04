export interface NavLink {
	label: string
	href: string
}

export interface Project {
	id: string
	title: string
	subtitle: string
	img?: string
	overview: string
	result: string
	featured: boolean
	tags: string[]
	demoUrl: string | null
	githubUrl: string
}
