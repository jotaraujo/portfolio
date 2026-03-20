/** @file Scroll Context - Global scroll state management */
import { createContext, useContext, useMemo } from 'react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useActiveSection } from '@/hooks/useActiveSection';
import { NAV_LINK_IDS } from '@/constants/navigation';

const ScrollContext = createContext(null);

/**
 * @returns {{ scrollY: number, activeSection: string, isScrolled: boolean }}
 */
export function useScroll() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
}

/**
 * Scroll Provider Component
 * @param {{ children: React.ReactNode }} props
 */
export function ScrollProvider({ children }) {
  const scrollY = useScrollPosition();
  const activeSection = useActiveSection(NAV_LINK_IDS);

  const value = useMemo(() => ({
    scrollY,
    activeSection,
    isScrolled: scrollY > 80,
  }), [scrollY, activeSection]);

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
}

export default ScrollContext;
