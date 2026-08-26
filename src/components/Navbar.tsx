import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { Logo } from './ui/Logo'
import { ButtonLink } from './ui/Button'
import { BUSINESS, LINKS, NAV_LINKS } from '../lib/business'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-sm focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled || open
            ? 'border-b border-steel-700/80 bg-ink/90 backdrop-blur-md'
            : 'border-b border-transparent bg-gradient-to-b from-ink/85 to-transparent'
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"
        >
          <a
            href="#home"
            className="shrink-0 py-3"
            aria-label="Advance Solutions — back to top"
          >
            <Logo markClassName="h-8 w-auto sm:h-9" />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative block px-3.5 py-2 font-display text-[15px] font-semibold tracking-widest text-mist-dim uppercase transition-colors duration-200 hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={LINKS.tel}
              className="flex items-center gap-2 text-sm font-medium text-mist-dim transition-colors hover:text-gold"
            >
              <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
              {BUSINESS.phoneDisplay}
            </a>
            <ButtonLink href="#contact" variant="primary" size="md">
              Get a Quote
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-sm border border-steel-600 text-mist transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          hidden={!open}
          className="border-t border-steel-700/70 bg-ink/95 backdrop-blur-md lg:hidden"
        >
          <ul className="mx-auto flex w-full max-w-7xl flex-col px-5 py-3 sm:px-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-steel-800 py-3.5 font-display text-lg font-semibold tracking-widest text-mist uppercase transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 pt-2 pb-6 sm:px-8">
            <ButtonLink
              href="#contact"
              variant="primary"
              size="lg"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </ButtonLink>
            <ButtonLink href={LINKS.tel} variant="outline" size="lg">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {BUSINESS.phoneDisplay}
            </ButtonLink>
          </div>
        </div>
      </header>
    </>
  )
}
