import {
  Box,
  ClipboardList,
  Cog,
  FileBox,
  MessageCircle,
  Package,
  Ruler,
  ScanSearch,
  ScrollText,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section, SectionHeading } from './ui/Section'
import { ButtonLink } from './ui/Button'
import { LINKS } from '../lib/business'
import { ROUTES } from '../lib/pages'

const INPUTS: { label: string; note: string; Icon: LucideIcon }[] = [
  { label: 'CAD Files', note: 'STEP, IGES, DWG or native models', Icon: FileBox },
  { label: 'Engineering Drawings', note: 'Dimensioned prints or sketches', Icon: ScrollText },
  { label: 'Physical Samples', note: 'An existing part to work from', Icon: Box },
  { label: 'Dimensions', note: 'Sizes and features you need', Icon: Ruler },
  { label: 'Component Requirements', note: 'Tell us what the part must do', Icon: ClipboardList },
]

const WORKFLOW: { step: string; label: string; Icon: LucideIcon }[] = [
  { step: '01', label: 'Requirement', Icon: ClipboardList },
  { step: '02', label: 'CAD / CAM', Icon: FileBox },
  { step: '03', label: 'Machining', Icon: Cog },
  { step: '04', label: 'Inspection', Icon: ScanSearch },
  { step: '05', label: 'Finished Component', Icon: Package },
]

/** `hideHeading` suppresses the section heading when the page already has one. */
export function Manufacturing({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <Section id="manufacturing" grid className="bg-ink">
      {!hideHeading && (
        <SectionHeading
          eyebrow="Core Capability"
          align="center"
          title={
            <>
              Custom <span className="text-gold">VMC Machining</span> &amp; Component
              Manufacturing
            </>
          }
          intro="Send us what you have. We work out how the component can be produced and machine it where the geometry is suited to VMC/CNC work."
        />
      )}

      {/* What you can send us */}
      <ul
        className={`${hideHeading ? '' : 'mt-12'} grid gap-4 sm:grid-cols-2 lg:grid-cols-5`}
      >
        {INPUTS.map(({ label, note, Icon }, i) => (
          <li
            key={label}
            className="reveal group relative flex flex-col rounded-sm border border-steel-700 bg-steel-900/70 p-5 transition-colors duration-200 hover:border-gold/60 hover:bg-steel-800"
            style={{ transitionDelay: `${i * 55}ms` }}
          >
            <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} aria-hidden="true" />
            <h3 className="mt-3.5 font-display text-base font-bold tracking-wide text-mist uppercase">
              {label}
            </h3>
            <p className="mt-1.5 text-sm text-mist-faint">{note}</p>
          </li>
        ))}
      </ul>

      {/* Workflow */}
      <div className="reveal mt-14 rounded-sm border border-steel-700 bg-gradient-to-b from-steel-900 to-ink-800 p-6 sm:p-10">
        <h3 className="text-center font-display text-sm font-semibold tracking-[0.26em] text-gold uppercase">
          How a Component Is Produced
        </h3>

        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
          {WORKFLOW.map(({ step, label, Icon }, i) => (
            <li key={step} className="relative">
              {/* connector line on large screens */}
              {i < WORKFLOW.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-8 left-[calc(50%+2.25rem)] hidden h-px w-[calc(100%-4.5rem)] bg-gradient-to-r from-gold/60 to-gold/10 lg:block"
                />
              )}
              <div className="flex flex-col items-center text-center">
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold/45 bg-ink">
                  <Icon className="h-7 w-7 text-gold" strokeWidth={1.4} aria-hidden="true" />
                  <span className="absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-gold font-display text-xs font-bold text-ink">
                    {step}
                  </span>
                </span>
                <span className="mt-4 font-display text-base font-bold tracking-[0.1em] text-mist uppercase">
                  {label}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="reveal mt-10 flex flex-col items-center gap-5 text-center">
        <p className="max-w-2xl text-base leading-relaxed text-mist-dim sm:text-lg">
          Share your drawing or sample and we will tell you honestly whether the component
          is something we can machine for you.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={LINKS.whatsapp} variant="whatsapp" size="lg" external>
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Send Your Drawing
          </ButtonLink>
          <ButtonLink href={ROUTES.contact} variant="outline" size="lg">
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}
