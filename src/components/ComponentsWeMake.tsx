import { ArrowRight } from 'lucide-react'
import { Section, SectionHeading } from './ui/Section'
import { ROUTES } from '../lib/pages'

const COMPONENTS = [
  { name: 'Auto Parts', note: 'Machined components for automotive applications' },
  { name: 'Cycle Parts', note: 'Bicycle and cycle component machining' },
  { name: 'Agricultural Tool Parts', note: 'Parts for implements and farm equipment' },
  { name: 'Machine Components', note: 'Replacement and production machine parts' },
  { name: 'Custom Brackets', note: 'Mounts, brackets and support components' },
  { name: 'Precision Mechanical Parts', note: 'Parts with defined machined features' },
  { name: 'Fixtures & Tooling Components', note: 'Workholding and tooling elements' },
  { name: 'Other VMC-Machinable Components', note: 'Send the drawing and we will review it' },
]

export function ComponentsWeMake() {
  return (
    <Section grid className="bg-ink">
      <SectionHeading
        eyebrow="Examples"
        title={
          <>
            Components We Can <span className="text-gold">Manufacture</span>
          </>
        }
        intro="A sense of the kind of work we take on. Suitability always depends on the component, so share the details and we will review it with you."
      />

      <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-steel-700 bg-steel-700 sm:grid-cols-2 lg:grid-cols-4">
        {COMPONENTS.map(({ name, note }, i) => (
          <li
            key={name}
            className="group relative flex flex-col justify-between gap-6 bg-steel-900 p-6 transition-colors duration-200 hover:bg-steel-800"
          >
            <span
              aria-hidden="true"
              className="font-display text-3xl font-bold text-steel-600 transition-colors duration-200 group-hover:text-gold/70"
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="font-display text-lg leading-tight font-bold tracking-wide text-mist uppercase">
                {name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-faint">{note}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="reveal mt-10 overflow-hidden rounded-sm border border-gold/40 bg-gradient-to-r from-steel-800 via-steel-900 to-steel-800 p-7 sm:p-10">
        <h3 className="text-2xl leading-tight font-bold text-mist uppercase sm:text-3xl">
          Have a component that needs machining?
        </h3>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-mist-dim">
          Send us the drawing, dimensions or sample and discuss your requirement with us.
        </p>
        <a
          href={ROUTES.contact}
          className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-semibold tracking-[0.16em] text-gold uppercase transition-colors hover:text-gold-bright"
        >
          Get in touch
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </Section>
  )
}
