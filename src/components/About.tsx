import { FileCode2, MessagesSquare, PencilRuler, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section, SectionHeading } from './ui/Section'

const PILLARS: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: 'Custom Manufacturing',
    body: 'Components are produced to your specification rather than picked from a fixed catalogue.',
    Icon: Wrench,
  },
  {
    title: 'Engineering Understanding',
    body: 'We read the drawing first — geometry, features and machining approach are worked out before we cut.',
    Icon: PencilRuler,
  },
  {
    title: 'CAD / CAM Capability',
    body: 'Design and programming are handled in-house, so a sketch, sample or CAD file can move straight to machining.',
    Icon: FileCode2,
  },
  {
    title: 'Direct Communication',
    body: 'You discuss your requirement directly with us — no layers between you and the people machining the part.',
    Icon: MessagesSquare,
  },
]

/** `hideHeading` suppresses the section heading when the page already has one. */
export function About({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <Section id="about" grid className="bg-ink">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          {!hideHeading && (
            <SectionHeading
              eyebrow="About Advance Solutions"
              title={
                <>
                  Engineering Solutions Built{' '}
                  <span className="text-gold">Around Your Requirements</span>
                </>
              }
            />
          )}

          <div
            className={`reveal ${hideHeading ? '' : 'mt-6'} space-y-5 text-base leading-relaxed text-mist-dim sm:text-lg`}
          >
            <p>
              Advance Solutions is a mechanical engineering and manufacturing setup based
              in Ludhiana, Punjab. We work with customers to convert drawings, CAD designs,
              samples and stated requirements into finished mechanical components.
            </p>
            <p>
              Every enquiry begins with the requirement itself. We look at the component,
              its features and how it needs to be produced, then handle the design and CAM
              programming and machine the part on VMC/CNC equipment where the geometry is
              suited to it.
            </p>
            <p>
              Alongside machining, we support customers with fabrication work, deep hole
              drilling, machinery and equipment solutions, pneumatic air pipe work and
              industrial lubrication solutions — practical answers to the problems that come
              up on a shop floor.
            </p>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:content-center">
          {PILLARS.map(({ title, body, Icon }, i) => (
            <li
              key={title}
              className="reveal group relative rounded-sm border border-steel-700 bg-steel-900/70 p-6 transition-colors duration-200 hover:border-gold/60"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100"
              />
              <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-bold tracking-wide text-mist uppercase">
                {title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-mist-dim">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
