/**
 * Footer navigation links
 */
import { NAV_LINKS } from '@/constants/navigation';
import { scrollTo } from '@/utils/scrollTo';

export function FooterNav() {
  return (
    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
      {NAV_LINKS.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={(e) => {
            e.preventDefault();
            scrollTo(link.id);
          }}
          className="text-muted hover:text-text transition-colors duration-300 text-sm"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
