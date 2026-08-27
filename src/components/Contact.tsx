import { Mail, MapPin, MessageCircle, Navigation, Phone, User } from 'lucide-react'
import { Section, SectionHeading } from './ui/Section'
import { ButtonLink } from './ui/Button'
import { BUSINESS, LINKS } from '../lib/business'

/** `hideHeading` suppresses the section heading when the page already has one. */
export function Contact({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <Section id="contact" grid className="bg-ink-800">
      {!hideHeading && (
        <SectionHeading
          eyebrow="Contact"
          align="center"
          title={
            <>
              Let&apos;s Manufacture Your <span className="text-gold">Requirement</span>
            </>
          }
          intro="Have a drawing, sample or custom component requirement? Contact Advance Solutions to discuss your machining and manufacturing requirement."
        />
      )}

      <div
        className={`${hideHeading ? '' : 'mt-12'} grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8`}
      >
        {/* details */}
        <div className="reveal min-w-0 rounded-sm border border-steel-700 bg-steel-900/80 p-6 sm:p-9">
          <dl className="space-y-7">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-gold/35 bg-gold/10">
                <User className="h-5 w-5 text-gold" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.2em] text-mist-faint uppercase">
                  Contact Person
                </dt>
                <dd className="mt-1 font-display text-xl font-bold tracking-wide text-mist">
                  {BUSINESS.contactPerson}
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-gold/35 bg-gold/10">
                <Phone className="h-5 w-5 text-gold" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.2em] text-mist-faint uppercase">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href={LINKS.tel}
                    className="font-display text-2xl font-bold tracking-wide text-gold transition-colors hover:text-gold-bright sm:text-3xl"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-gold/35 bg-gold/10">
                <Mail className="h-5 w-5 text-gold" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <dt className="text-[11px] font-semibold tracking-[0.2em] text-mist-faint uppercase">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={LINKS.email}
                    className="text-sm break-all text-mist transition-colors hover:text-gold sm:text-base lg:text-lg"
                  >
                    {BUSINESS.email}
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-gold/35 bg-gold/10">
                <MapPin className="h-5 w-5 text-gold" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.2em] text-mist-faint uppercase">
                  Address
                </dt>
                <dd className="mt-1 text-base leading-relaxed text-mist not-italic">
                  <address className="not-italic">
                    {BUSINESS.address.line1}
                    <br />
                    {BUSINESS.address.line2}
                    <br />
                    {BUSINESS.address.line3}
                  </address>
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            <ButtonLink href={LINKS.tel} variant="primary" size="md">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now
            </ButtonLink>
            <ButtonLink href={LINKS.whatsapp} variant="whatsapp" size="md" external>
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </ButtonLink>
            <ButtonLink href={LINKS.email} variant="outline" size="md">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email Us
            </ButtonLink>
            <ButtonLink href={LINKS.directions} variant="outline" size="md" external>
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Get Directions
            </ButtonLink>
          </div>
        </div>

        {/* map */}
        <div className="reveal min-w-0 overflow-hidden rounded-sm border border-steel-700 bg-steel-900">
          <iframe
            title="Map showing the location of Advance Solutions, Kot Mangal Singh Nagar, Ludhiana"
            src={LINKS.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full border-0 grayscale-[0.35] contrast-[1.05] lg:h-full lg:min-h-[420px]"
          />
        </div>
      </div>
    </Section>
  )
}
