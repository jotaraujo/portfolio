/**
 * Project technology tag
 * @param {Object} props
 * @param {string} props.children - Tag text
 */
export function ProjectTag({ children }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-mono rounded-full bg-accent/10 text-accent border border-accent/20">
      {children}
    </span>
  );
}
