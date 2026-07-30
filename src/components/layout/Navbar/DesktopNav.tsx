import { motion } from 'framer-motion'
import { NAV_LINKS } from '../../../constants/navigation'
import { cn } from '../../../utils/cn'
import { scrollTo } from '../../../utils/scrollTo'

interface DesktopNavProps {
  activeTab: string
  onTabChange: (href: string) => void
}

export default function DesktopNav({ activeTab, onTabChange }: DesktopNavProps) {
  return (
    <nav className="hidden md:flex items-center gap-1 bg-base/50 p-1 rounded-full border border-outline/30">
      {NAV_LINKS.map((link) => {
        const isActive = activeTab === link.href

        return (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault()
              onTabChange(link.href)
              scrollTo(link.href)
            }}
            className={cn(
              'relative px-4 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors duration-200 z-10 select-none',
              isActive ? 'text-primary' : 'text-muted hover:text-ink',
            )}
          >
            {isActive && (
              <motion.div
                layoutId="activeTabPill"
                className="absolute inset-0 bg-surface border border-primary/40 rounded-full -z-10 shadow-sm"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            {link.label}
          </a>
        )
      })}
    </nav>
  )
}
