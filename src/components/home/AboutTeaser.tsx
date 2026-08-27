import { ArrowRight, FileCode2, MessagesSquare, PencilRuler, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section, SectionHeading } from '../ui/Section'
import { ButtonLink } from '../ui/Button'
import { ROUTES } from '../../lib/pages'

const PILLARS: { title: string; Icon: LucideIcon }[] = [
  { title: 'Custom Manufacturing', Icon: Wrench },
  { title: 'Engineering Understanding', Icon: PencilRuler },
  { title: 'CAD / CAM Capability', Icon: FileCode2 },
  { title: 'Direct Communication', Icon: MessagesSquare },
]

export function AboutTeaser() {
  return (
    <Section grid className="bg-ink">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="About Advance Solutions"
            title={
              <>
                Engineering Solutions Built{' '}
                <span className="text-gold">Around Your Requirements</span>
              </>
            }
          />
          <p className="reveal mt-6 text-base leading-relaxed text-mist-dim sm:text-lg">
            We work with customers to convert drawings, CAD designs, samples and stated
            requirements into finished mechanical components — handling the design, the CAM
            programming and the machining.
          </p>
          <div className="reveal mt-7">
            <ButtonLink href={ROUTES.about} variant="outline" size="md">
              More About Us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {PILLARS.map(({ title, Icon }, i) => (
            <li
              key={title}
              className="reveal flex items-center gap-3 rounded-sm border border-steel-700 bg-steel-900/70 p-4"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Icon className="h-6 w-6 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
              <span className="font-display text-base font-bold tracking-wide text-mist uppercase">
                {title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
