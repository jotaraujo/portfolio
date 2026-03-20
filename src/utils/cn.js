/**
 * Utility for conditionally joining class names
 * @param {...(string|Object|Array)} inputs - Class names or conditional objects
 * @returns {string} Joined class names
 */
export function cn(...inputs) {
  const classes = [];

  inputs.forEach((input) => {
    if (!input) return;

    if (typeof input === 'string') {
      classes.push(input);
    } else if (Array.isArray(input)) {
      classes.push(cn(...input));
    } else if (typeof input === 'object') {
      Object.entries(input).forEach(([key, value]) => {
        if (value) {
          classes.push(key);
        }
      });
    }
  });

  return classes.join(' ');
}
