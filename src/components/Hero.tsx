import { ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { ButtonLink } from './ui/Button'
import { MachiningGraphic } from './MachiningGraphic'
import { BUSINESS, LINKS } from '../lib/business'
import { ROUTES } from '../lib/pages'

const HIGHLIGHTS = ['CAD / CAM', 'VMC Machining', 'CNC Solutions', 'Custom Components']

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden scroll-mt-20 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28"
    >
      {/* backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(115%_85%_at_78%_10%,#1b2028_0%,#0a0b0d_58%)]" />
        <div className="bg-grid absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_65%_35%,black_5%,transparent_72%)]" />
        <div className="absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="bg-hatch absolute inset-x-0 bottom-0 h-24 opacity-40" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* copy */}
        <div className="reveal is-visible">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] text-gold uppercase sm:text-xs">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
            Ludhiana, Punjab
          </span>

          <h1 className="mt-6 text-4xl leading-[1.03] font-bold text-mist uppercase sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            Precision Engineering &amp;{' '}
            <span className="text-gold-gradient">VMC Manufacturing</span> Solutions
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-mist-dim sm:text-lg">
            CAD/CAM design, VMC machining and custom manufacturing for automotive,
            bicycle, agricultural and industrial components.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <ButtonLink href={ROUTES.contact} variant="primary" size="lg">
              Get a Quote
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={LINKS.whatsapp} variant="whatsapp" size="lg" external>
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp Us
            </ButtonLink>
          </div>

          <a
            href={LINKS.tel}
            className="group mt-7 inline-flex items-center gap-3 text-mist transition-colors hover:text-gold"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-steel-600 bg-steel-900/60 transition-colors group-hover:border-gold">
              <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-mist-faint uppercase">
                Call
              </span>
              <span className="font-display text-xl font-bold tracking-wide sm:text-2xl">
                {BUSINESS.phoneDisplay}
              </span>
            </span>
          </a>

          <ul className="mt-9 flex flex-wrap gap-x-5 gap-y-2.5 border-t border-steel-800 pt-6">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-xs font-medium tracking-[0.12em] text-mist-faint uppercase sm:text-sm"
              >
                <span aria-hidden="true" className="h-1 w-1 rotate-45 bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* illustration */}
        <div className="reveal is-visible relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative rounded-sm border border-steel-700 bg-steel-900/60 p-3 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.95)] sm:p-5">
            <div
              aria-hidden="true"
              className="absolute -top-px -left-px h-8 w-8 border-t-2 border-l-2 border-gold"
            />
            <div
              aria-hidden="true"
              className="absolute -right-px -bottom-px h-8 w-8 border-r-2 border-b-2 border-gold"
            />
            <MachiningGraphic className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
