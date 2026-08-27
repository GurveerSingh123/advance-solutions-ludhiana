import { ArrowRight, ArrowUpRight, Boxes, Cog } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section, SectionHeading } from '../ui/Section'
import { ButtonLink } from '../ui/Button'
import { ROUTES } from '../../lib/pages'

const CORE: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: 'VMC Machining',
    body: 'Vertical machining centre work for milling, pocketing, drilling and profiling of mechanical components, worked from your drawing or CAD model.',
    Icon: Cog,
  },
  {
    title: 'Custom Component Manufacturing',
    body: 'Components manufactured to your drawing, CAD file, sample or dimensions — automotive, cycle, agricultural, industrial and general engineering parts.',
    Icon: Boxes,
  },
]

const OTHERS = [
  'CAD Solutions',
  'CAM Solutions',
  'CNC Machine Solutions',
  'Fabrication Works',
  'Deep Hole Drilling',
  'Machinery & Equipment',
  'Pneumatic Air Pipe Solutions',
  'Industrial Lubrication Solutions',
]

export function ServicesTeaser() {
  return (
    <Section className="bg-ink-800">
      <SectionHeading
        eyebrow="What We Do"
        title={
          <>
            Our Core <span className="text-gold">Capabilities</span>
          </>
        }
        intro="Two services sit at the centre of what we do. Everything else supports them."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {CORE.map(({ title, body, Icon }, i) => (
          <article
            key={title}
            className="reveal group relative overflow-hidden rounded-sm border border-gold/40 bg-gradient-to-br from-steel-800 to-steel-900 p-7 transition-colors duration-300 hover:border-gold sm:p-9"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl transition-colors duration-300 group-hover:bg-gold/20"
            />
            <Icon className="h-10 w-10 text-gold" strokeWidth={1.4} aria-hidden="true" />
            <h3 className="mt-5 text-2xl font-bold tracking-wide text-mist uppercase sm:text-3xl">
              {title}
            </h3>
            <p className="relative mt-3.5 text-sm leading-relaxed text-mist-dim sm:text-base">
              {body}
            </p>
            <a
              href={ROUTES.contact}
              className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold tracking-[0.16em] text-gold uppercase transition-colors hover:text-gold-bright"
            >
              Discuss your part
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>

      <div className="reveal mt-6 rounded-sm border border-steel-700 bg-steel-900/60 p-6 sm:p-8">
        <h3 className="font-display text-sm font-semibold tracking-[0.24em] text-gold uppercase">
          Also Available
        </h3>
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2.5">
          {OTHERS.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-mist-dim"
            >
              <span aria-hidden="true" className="h-1 w-1 rotate-45 bg-gold" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-7">
          <ButtonLink href={ROUTES.services} variant="primary" size="md">
            View All Services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}
