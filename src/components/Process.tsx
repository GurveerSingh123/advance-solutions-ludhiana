import { ArrowRight } from 'lucide-react'
import { Section, SectionHeading } from './ui/Section'
import { ButtonLink } from './ui/Button'
import { ROUTES } from '../lib/pages'

const STEPS = [
  {
    step: '01',
    title: 'Share Requirement',
    body: 'Send your drawing, CAD file, sample or dimensions and tell us what the component needs to do.',
  },
  {
    step: '02',
    title: 'Design / CAD-CAM',
    body: 'We prepare or refine the model and work out the machining approach and programming.',
  },
  {
    step: '03',
    title: 'Machine & Manufacture',
    body: 'The component is machined on VMC/CNC equipment, with fabrication or allied work where required.',
  },
  {
    step: '04',
    title: 'Deliver Finished Component',
    body: 'The finished part is checked and handed over, ready for use or assembly.',
  },
]

export function Process() {
  return (
    <Section grid className="bg-ink">
      <SectionHeading
        eyebrow="How It Works"
        align="center"
        title={
          <>
            A Simple, Clear <span className="text-gold">Process</span>
          </>
        }
      />

      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map(({ step, title, body }, i) => (
          <li
            key={step}
            className="reveal group relative overflow-hidden rounded-sm border border-steel-700 bg-steel-900 p-7 transition-colors duration-200 hover:border-gold/60"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-4 right-3 font-display text-7xl font-bold text-steel-800 transition-colors duration-300 group-hover:text-gold/15"
            >
              {step}
            </span>
            <span className="relative font-display text-sm font-bold tracking-[0.24em] text-gold">
              {step}
            </span>
            <h3 className="relative mt-3 font-display text-xl font-bold tracking-wide text-mist uppercase">
              {title}
            </h3>
            <p className="relative mt-2.5 text-sm leading-relaxed text-mist-dim">{body}</p>
          </li>
        ))}
      </ol>

      <div className="reveal mt-10 flex flex-col items-center gap-5 text-center">
        <p className="font-display text-xl font-semibold tracking-wide text-mist uppercase sm:text-2xl">
          Have a drawing or sample? Let&apos;s discuss your requirement.
        </p>
        <ButtonLink href={ROUTES.contact} variant="primary" size="lg">
          Get a Quote
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </ButtonLink>
      </div>
    </Section>
  )
}
