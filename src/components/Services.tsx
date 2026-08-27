import {
  Boxes,
  CircleDot,
  Cog,
  DraftingCompass,
  Droplets,
  Flame,
  Layers,
  Settings2,
  Wind,
  Wrench,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section, SectionHeading } from './ui/Section'
import { ROUTES } from '../lib/pages'

type Service = { title: string; body: string; Icon: LucideIcon }

const CORE_SERVICES: Service[] = [
  {
    title: 'VMC Machining',
    body: 'Vertical machining centre work for milling, pocketing, drilling and profiling of mechanical components. Suited to parts that need repeatable machined features from a drawing or CAD model.',
    Icon: Cog,
  },
  {
    title: 'Custom Component Manufacturing',
    body: 'Components manufactured to your drawing, CAD file, sample or dimensions — automotive, cycle, agricultural, industrial and general engineering parts where the geometry suits VMC/CNC machining.',
    Icon: Boxes,
  },
]

const SERVICES: Service[] = [
  {
    title: 'CAD Solutions',
    body: 'Component and assembly design, drawing preparation and conversion of sketches or samples into workable CAD models.',
    Icon: DraftingCompass,
  },
  {
    title: 'CAM Solutions',
    body: 'Toolpath and machining programming that turns a CAD model into a program the machine can run.',
    Icon: Settings2,
  },
  {
    title: 'CNC Machine Solutions',
    body: 'CNC machining support for mechanical components, along with practical help around CNC machine requirements.',
    Icon: Layers,
  },
  {
    title: 'Fabrication Works',
    body: 'Fabrication solutions for frames, structures and assembled steel work alongside machined components.',
    Icon: Flame,
  },
  {
    title: 'Deep Hole Drilling',
    body: 'Deep hole drilling solutions for components that need long, straight holes beyond ordinary drilling work.',
    Icon: CircleDot,
  },
  {
    title: 'Machinery & Equipment',
    body: 'Solutions around industrial machinery and equipment requirements for workshops and production units.',
    Icon: Wrench,
  },
  {
    title: 'Pneumatic Air Pipe Solutions',
    body: 'Compressed air pipeline solutions for workshops and production floors, planned around your layout.',
    Icon: Wind,
  },
  {
    title: 'Industrial Lubrication Solutions',
    body: 'Lubrication solutions for industrial machines to keep equipment running as intended.',
    Icon: Droplets,
  },
]

/** `hideHeading` suppresses the section heading when the page already has one. */
export function Services({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <Section id="services" className="bg-ink-800">
      {!hideHeading && (
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Engineering &amp; Manufacturing <span className="text-gold">Services</span>
            </>
          }
          intro="From design and programming through to machined, finished components — supported by fabrication and industrial solutions for the shop floor."
        />
      )}

      {/* Core services — visually prominent */}
      <div className={`${hideHeading ? '' : 'mt-12'} grid gap-5 md:grid-cols-2`}>
        {CORE_SERVICES.map(({ title, body, Icon }, i) => (
          <article
            key={title}
            className="reveal group relative overflow-hidden rounded-sm border border-gold/40 bg-gradient-to-br from-steel-800 to-steel-900 p-7 transition-colors duration-300 hover:border-gold sm:p-9"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl transition-opacity duration-300 group-hover:bg-gold/20"
            />
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.24em] text-gold uppercase">
              <span aria-hidden="true" className="h-1 w-1 rotate-45 bg-gold" />
              Core Service
            </span>
            <Icon
              className="mt-5 h-10 w-10 text-gold"
              strokeWidth={1.4}
              aria-hidden="true"
            />
            <h3 className="mt-5 text-2xl font-bold tracking-wide text-mist uppercase sm:text-3xl">
              {title}
            </h3>
            <p className="relative mt-3.5 text-sm leading-relaxed text-mist-dim sm:text-base">
              {body}
            </p>
          </article>
        ))}
      </div>

      {/* Remaining services */}
      <div className="mt-5 grid gap-px overflow-hidden rounded-sm border border-steel-700 bg-steel-700 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map(({ title, body, Icon }) => (
          <article
            key={title}
            className="group relative flex flex-col bg-steel-900 p-6 transition-colors duration-200 hover:bg-steel-800"
          >
            <Icon
              className="h-7 w-7 text-gold transition-transform duration-300 group-hover:scale-110"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h3 className="mt-4 font-display text-lg font-bold tracking-wide text-mist uppercase">
              {title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-mist-dim">{body}</p>
          </article>
        ))}
      </div>

      <p className="reveal mt-8 text-sm text-mist-dim">
        Not sure which one your job needs?{' '}
        <a
          href={ROUTES.contact}
          className="font-semibold text-gold underline underline-offset-4 transition-colors hover:text-gold-bright"
        >
          Talk to us
        </a>
        .
      </p>
    </Section>
  )
}
