import { ArrowRight, Phone } from 'lucide-react'
import { ButtonLink } from '../components/ui/Button'
import { BUSINESS, LINKS } from '../lib/business'
import { NAV_LINKS, ROUTES } from '../lib/pages'

export function NotFoundPage() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_0%,#1b2028_0%,#0a0b0d_60%)]" />
        <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_55%_20%,black_10%,transparent_75%)]" />
      </div>

      <div className="mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
        <p className="font-display text-6xl font-bold text-gold sm:text-7xl">404</p>
        <h1 className="mt-4 text-3xl leading-tight font-bold text-mist uppercase sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-5 text-base leading-relaxed text-mist-dim sm:text-lg">
          That page does not exist. If you were looking for a machining or manufacturing
          requirement, call us directly and we will help.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={ROUTES.home} variant="primary" size="lg">
            Back to Home
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href={LINKS.tel} variant="outline" size="lg">
            <Phone className="h-5 w-5" aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </ButtonLink>
        </div>

        <nav aria-label="Site pages" className="mt-12 border-t border-steel-800 pt-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-display text-sm font-semibold tracking-widest text-mist-dim uppercase transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
