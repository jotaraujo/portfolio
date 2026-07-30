/** Navbar height offset for smooth scroll (py-4 + py-2.5 + spacing) */
const NAVBAR_OFFSET = 80

/**
 * Smooth-scrolls to a section by href with navbar offset.
 *
 * @example
 * onClick={(e) => { e.preventDefault(); scrollTo('#sobre') }}
 */
export function scrollTo(href: string) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (!el) return

  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET

  window.scrollTo({ top, behavior: 'smooth' })
}
