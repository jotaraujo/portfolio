import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../../../constants/navigation'
import { cn } from '../../../utils/cn'
import Button from '../../ui/Button'
import SideMenuButton from '../../ui/SideMenuButton'
import { scrollTo } from '../../../utils/scrollTo'
import DesktopNav from './DesktopNav'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(NAV_LINKS[0].href)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 flex justify-center">
      <div
        className={cn(
          'relative w-full max-w-5xl flex items-center justify-between rounded-full px-6 py-2.5 transition-all duration-300',
          scrolled
            ? 'bg-surface border border-outline/60 shadow-lg'
            : 'bg-transparent border border-transparent',
        )}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            setActiveTab('#hero')
            scrollTo('#hero')
          }}
          className="font-mono text-sm font-bold tracking-tight text-ink hover:text-primary transition-colors"
        >
          jota<span className="text-primary">.dev</span>
        </a>

        <DesktopNav activeTab={activeTab} onTabChange={setActiveTab} />

        {/* CTA Desktop */}
        <div className="hidden md:block">
          <Button variant="ghost">Fale Comigo</Button>
        </div>

        {/* Botão Mobile */}
        <div className="md:hidden">
          <SideMenuButton
            isOpen={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        activeTab={activeTab}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  )
}
