/**
 * Smooth scroll to element by ID
 * @param {string} elementId - Target element ID
 * @param {number} offset - Optional offset from top (default: 80)
 */
export function scrollTo(elementId, offset = 80) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}
