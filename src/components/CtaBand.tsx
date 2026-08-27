import { ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { ButtonLink } from './ui/Button'
import { BUSINESS, LINKS } from '../lib/business'
import { ROUTES } from '../lib/pages'

type CtaBandProps = {
  title?: string
  body?: string
}

/** Closing conversion band, repeated at the foot of most pages. */
export function CtaBand({
  title = 'Have a drawing or sample?',
  body = "Send us the drawing, dimensions or sample and we'll discuss whether we can machine it for you.",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden border-t border-steel-800 bg-ink-800 py-14 sm:py-20">
      <div className="bg-hatch pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-start gap-7 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl leading-tight font-bold text-mist uppercase sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-mist-dim">{body}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:shrink-0">
          <ButtonLink href={LINKS.whatsapp} variant="whatsapp" size="lg" external>
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            WhatsApp Us
          </ButtonLink>
          <ButtonLink href={LINKS.tel} variant="primary" size="lg">
            <Phone className="h-5 w-5" aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </ButtonLink>
          <ButtonLink href={ROUTES.contact} variant="outline" size="lg">
            Contact
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
