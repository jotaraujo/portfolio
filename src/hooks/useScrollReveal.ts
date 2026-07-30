import { useRef } from 'react'
import { gsap } from '../lib/gsap'

interface ScrollRevealOptions {
	from?: gsap.TweenVars
	to?: gsap.TweenVars
	trigger?: string | Element
	start?: string
	end?: string
	toggleActions?: string
	scrub?: boolean | number
}

export const useScrollReveal = <T extends HTMLElement>(
	options: ScrollRevealOptions = {},
) => {
	const ref = useRef<T>(null!)

	const animate = (overrides?: gsap.TweenVars) => {
		const el = ref.current
		if (!el) return

		const from = options.from ?? { y: 40, opacity: 0 }
		const to = options.to ?? { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }

		gsap.fromTo(el, from, {
			...to,
			...overrides,
			scrollTrigger: {
				trigger: options.trigger || el,
				start: options.start ?? 'top 80%',
				end: options.end ?? 'top 20%',
				toggleActions: options.toggleActions ?? 'play none reverse',
				scrub: options.scrub,
			},
		})
	}

	return { ref, animate }
}
