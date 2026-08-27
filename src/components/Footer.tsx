import { Mail, MapPin, Phone } from 'lucide-react'
import { Logo } from './ui/Logo'
import { BUSINESS, LINKS } from '../lib/business'
import { NAV_LINKS } from '../lib/pages'

export function Footer() {
  return (
    <footer className="relative border-t border-steel-800 bg-ink">
      <div
        aria-hidden="true"
        className="rule-gold absolute inset-x-0 top-0 h-px opacity-70"
      />
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Logo markClassName="h-11 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist-dim">
              {BUSINESS.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist-faint">
              Mechanical engineering and manufacturing solutions in Ludhiana, Punjab —
              components made to your drawings, CAD files, samples and requirements.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-sm font-bold tracking-[0.24em] text-gold uppercase">
              Navigate
            </h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-mist-dim transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-bold tracking-[0.24em] text-gold uppercase">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href={LINKS.tel}
                  className="text-mist transition-colors hover:text-gold"
                >
                  {BUSINESS.contactPerson} — {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href={LINKS.email}
                  className="break-all text-mist-dim transition-colors hover:text-gold"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <address className="leading-relaxed text-mist-dim not-italic">
                  {BUSINESS.address.line1}, {BUSINESS.address.line2},{' '}
                  {BUSINESS.address.line3}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-steel-800 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-mist-faint sm:text-sm">
            © 2026 Advance Solutions. All Rights Reserved.
          </p>
          <p className="text-xs tracking-[0.18em] text-mist-faint uppercase sm:text-[13px]">
            CAD/CAM · VMC · CNC · Fabrication
          </p>
        </div>
      </div>
    </footer>
  )
}
