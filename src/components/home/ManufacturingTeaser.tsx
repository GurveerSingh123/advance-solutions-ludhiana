import {
  ArrowRight,
  Box,
  ClipboardList,
  Cog,
  FileBox,
  Package,
  Ruler,
  ScanSearch,
  ScrollText,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section, SectionHeading } from '../ui/Section'
import { ButtonLink } from '../ui/Button'
import { ROUTES } from '../../lib/pages'

const INPUTS: { label: string; Icon: LucideIcon }[] = [
  { label: 'CAD Files', Icon: FileBox },
  { label: 'Drawings', Icon: ScrollText },
  { label: 'Samples', Icon: Box },
  { label: 'Dimensions', Icon: Ruler },
]

const WORKFLOW: { step: string; label: string; Icon: LucideIcon }[] = [
  { step: '01', label: 'Requirement', Icon: ClipboardList },
  { step: '02', label: 'CAD / CAM', Icon: FileBox },
  { step: '03', label: 'Machining', Icon: Cog },
  { step: '04', label: 'Inspection', Icon: ScanSearch },
  { step: '05', label: 'Finished Component', Icon: Package },
]

export function ManufacturingTeaser() {
  return (
    <Section grid className="bg-ink">
      <SectionHeading
        eyebrow="Core Capability"
        align="center"
        title={
          <>
            Send Us a Drawing. <span className="text-gold">Get a Component.</span>
          </>
        }
        intro="Give us a CAD file, an engineering drawing, a physical sample or just the dimensions — we work out how to produce it."
      />

      <ul className="reveal mt-10 flex flex-wrap justify-center gap-3">
        {INPUTS.map(({ label, Icon }) => (
          <li
            key={label}
            className="flex items-center gap-2.5 rounded-sm border border-steel-700 bg-steel-900/70 px-4 py-2.5"
          >
            <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} aria-hidden="true" />
            <span className="font-display text-sm font-bold tracking-wide text-mist uppercase">
              {label}
            </span>
          </li>
        ))}
      </ul>

      <div className="reveal mt-10 rounded-sm border border-steel-700 bg-gradient-to-b from-steel-900 to-ink-800 p-6 sm:p-10">
        <h3 className="text-center font-display text-sm font-semibold tracking-[0.26em] text-gold uppercase">
          How a Component Is Produced
        </h3>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
          {WORKFLOW.map(({ step, label, Icon }, i) => (
            <li key={step} className="relative">
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

      <div className="reveal mt-9 flex justify-center">
        <ButtonLink href={ROUTES.manufacturing} variant="primary" size="lg">
          See What We Can Machine
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </ButtonLink>
      </div>
    </Section>
  )
}
