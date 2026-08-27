import { Bike, Car, Factory, Settings, Sprout, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section, SectionHeading } from './ui/Section'

const INDUSTRIES: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: 'Automotive',
    body: 'Machined auto components and parts made to supplied drawings, samples or dimensions.',
    Icon: Car,
  },
  {
    title: 'Bicycle & Cycle Components',
    body: 'Cycle parts and fittings for the Ludhiana cycle industry and allied manufacturers.',
    Icon: Bike,
  },
  {
    title: 'Agricultural Equipment',
    body: 'Parts for agricultural machinery, implements and tools used in the field.',
    Icon: Sprout,
  },
  {
    title: 'Industrial Machinery',
    body: 'Machine components, replacement parts and machined items for production equipment.',
    Icon: Factory,
  },
  {
    title: 'Engineering Components',
    body: 'General engineering parts where machined features and defined dimensions are required.',
    Icon: Settings,
  },
  {
    title: 'Custom Manufacturing',
    body: 'One-off and requirement-based components that do not fit a standard catalogue.',
    Icon: Wrench,
  },
]

/** `hideHeading` suppresses the section heading when the page already has one. */
export function Industries({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <Section id="industries" className="bg-ink-800">
      {!hideHeading && (
        <SectionHeading
          eyebrow="Where We Work"
          align="center"
          title={
            <>
              Industries We <span className="text-gold">Serve</span>
            </>
          }
          intro="Ludhiana's manufacturing base runs on machined components. We supply parts across the sectors that need them."
        />
      )}

      <ul
        className={`${hideHeading ? '' : 'mt-12'} grid gap-5 sm:grid-cols-2 lg:grid-cols-3`}
      >
        {INDUSTRIES.map(({ title, body, Icon }, i) => (
          <li
            key={title}
            className="reveal group relative overflow-hidden rounded-sm border border-steel-700 bg-steel-900 p-7 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-gold/60"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div
              aria-hidden="true"
              className="bg-hatch pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-40"
            />
            <span className="relative flex h-13 w-13 items-center justify-center rounded-sm border border-gold/35 bg-gold/10">
              <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <h3 className="relative mt-5 font-display text-xl font-bold tracking-wide text-mist uppercase">
              {title}
            </h3>
            <p className="relative mt-2.5 text-sm leading-relaxed text-mist-dim">{body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
