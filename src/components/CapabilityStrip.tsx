import { Boxes, Cog, DraftingCompass, Ruler, Settings2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const CAPABILITIES: { label: string; Icon: LucideIcon }[] = [
  { label: 'CAD Design', Icon: DraftingCompass },
  { label: 'CAM Programming', Icon: Settings2 },
  { label: 'VMC Machining', Icon: Cog },
  { label: 'Custom Manufacturing', Icon: Boxes },
  { label: 'Precision Components', Icon: Ruler },
]

export function CapabilityStrip() {
  return (
    <section
      aria-label="Core capabilities"
      className="relative border-y border-steel-800 bg-steel-900/70"
    >
      <div className="bg-hatch pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
      <ul className="relative mx-auto grid w-full max-w-7xl grid-cols-2 gap-px overflow-hidden px-0 sm:grid-cols-3 lg:grid-cols-5">
        {CAPABILITIES.map(({ label, Icon }) => (
          <li
            key={label}
            className="group flex flex-col items-center justify-center gap-2.5 bg-ink-800/80 px-4 py-7 text-center transition-colors duration-200 hover:bg-steel-800 sm:py-8"
          >
            <Icon
              className="h-6 w-6 text-gold transition-transform duration-300 group-hover:scale-110 sm:h-7 sm:w-7"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <span className="font-display text-sm font-semibold tracking-[0.14em] text-mist uppercase sm:text-base">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
