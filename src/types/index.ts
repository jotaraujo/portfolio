export interface NavLink {
	label: string
	href: string
}

export interface Project {
	id: string
	title: string
	img?: string
	description: string
	featured: boolean
	tags: string[]
	demoUrl: string | null
	githubUrl: string
}
