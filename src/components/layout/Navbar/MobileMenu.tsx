import { AnimatePresence, motion } from 'framer-motion'
import { NAV_LINKS } from '../../../constants/navigation'
import { cn } from '../../../utils/cn'
import Button from '../../ui/Button'
import { scrollTo } from '../../../utils/scrollTo'

interface MobileMenuProps {
  isOpen: boolean
  activeTab: string
  onClose: () => void
}

export default function MobileMenu({ isOpen, activeTab, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 h-dvh bg-base flex flex-col items-center justify-center gap-10"
        >
          <nav className="flex flex-col items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(link.href)
                  onClose()
                }}
                className={cn(
                  'text-xl font-mono uppercase tracking-wider transition-colors',
                  activeTab === link.href
                    ? 'text-primary'
                    : 'text-muted hover:text-ink',
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button variant="ghost" className="text-sm">
            Fale Comigo
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
