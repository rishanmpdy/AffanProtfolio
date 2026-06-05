import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  toggleMenu, 
  closeMenu, 
  selectMenuOpen, 
  selectActiveSection,
  setActiveSection
} from '../../store/slices/navSlice'

const navLinks = [
  { label: 'Overview', href: '#hero', id: 'hero' },
  { label: 'Vision', href: '#vision', id: 'vision' },
  { label: 'Leadership', href: '#timeline', id: 'timeline' },
  { label: 'Gallery', href: '#gallery', id: 'gallery' },
  { label: 'Contact', href: '#contact', id: 'contact' }
]

export default function Navbar() {
  const dispatch = useDispatch()
  const isMenuOpen = useSelector(selectMenuOpen)
  const activeSection = useSelector(selectActiveSection)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    dispatch(closeMenu())
    dispatch(setActiveSection(targetId))
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-dark/95 backdrop-blur-xl py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, 'hero')}
          className="font-display text-lg font-bold tracking-wide text-white hover:text-lime transition-colors duration-300"
        >
          A.R<span className="text-lime">.</span>T
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`font-accent text-[0.65rem] uppercase tracking-[0.25em] font-medium transition-all duration-300 relative py-1 ${
                  isActive ? 'text-lime' : 'text-white/40 hover:text-white/80'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-lime" />
                )}
              </a>
            )
          })}
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => dispatch(toggleMenu())}
          className="md:hidden text-white hover:text-lime focus:outline-none z-50 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 bg-dark/[0.98] z-40 transition-transform duration-400 md:hidden flex flex-col justify-center items-center gap-8 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-7 items-center z-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`font-display text-2xl font-bold tracking-wide transition-colors duration-300 ${
                  isActive ? 'text-lime' : 'text-white/40 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
