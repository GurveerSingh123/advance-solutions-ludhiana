import { ArrowRight, Bike, Car, Factory, Settings, Sprout, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section, SectionHeading } from '../ui/Section'
import { ButtonLink } from '../ui/Button'
import { ROUTES } from '../../lib/pages'

const INDUSTRIES: { title: string; Icon: LucideIcon }[] = [
  { title: 'Automotive', Icon: Car },
  { title: 'Bicycle & Cycle', Icon: Bike },
  { title: 'Agricultural', Icon: Sprout },
  { title: 'Industrial Machinery', Icon: Factory },
  { title: 'Engineering', Icon: Settings },
  { title: 'Custom', Icon: Wrench },
]

export function IndustriesTeaser() {
  return (
    <Section className="bg-ink-800">
      <SectionHeading
        eyebrow="Where We Work"
        align="center"
        title={
          <>
            Industries We <span className="text-gold">Serve</span>
          </>
        }
      />

      <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-steel-700 bg-steel-700 sm:grid-cols-3 lg:grid-cols-6">
        {INDUSTRIES.map(({ title, Icon }) => (
          <li
            key={title}
            className="group flex flex-col items-center justify-center gap-2.5 bg-steel-900 px-3 py-7 text-center transition-colors duration-200 hover:bg-steel-800"
          >
            <Icon
              className="h-6 w-6 text-gold transition-transform duration-300 group-hover:scale-110"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <span className="font-display text-sm font-bold tracking-[0.1em] text-mist uppercase">
              {title}
            </span>
          </li>
        ))}
      </ul>

      <div className="reveal mt-9 flex justify-center">
        <ButtonLink href={ROUTES.industries} variant="outline" size="md">
          Explore Industries
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
      </div>
    </Section>
  )
}
