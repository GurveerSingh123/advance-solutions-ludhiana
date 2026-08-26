import { Section, SectionHeading } from './ui/Section'

const REASONS = [
  {
    title: 'Engineering-Focused Approach',
    body: 'We start from the component and how it has to be made, not from a fixed product list.',
  },
  {
    title: 'CAD / CAM Support',
    body: 'Design and machining programs are prepared in-house, so your input can be a model, a print or a sample.',
  },
  {
    title: 'Custom Component Manufacturing',
    body: 'Parts are produced to your requirement — including one-off and low-volume mechanical components.',
  },
  {
    title: 'VMC / CNC Machining Capability',
    body: 'Machining on VMC and CNC equipment for components with milled, drilled and profiled features.',
  },
  {
    title: 'Flexible, Requirement-Based Solutions',
    body: 'We adapt the approach to what the job actually needs rather than forcing it into a standard process.',
  },
  {
    title: 'Direct Communication',
    body: 'You speak directly with Advance Solutions about your part, from first enquiry to delivery.',
  },
]

export function WhyUs() {
  return (
    <Section className="bg-ink-800">
      <SectionHeading
        eyebrow="Why Advance Solutions"
        align="center"
        title={
          <>
            Why Customers <span className="text-gold">Work With Us</span>
          </>
        }
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {REASONS.map(({ title, body }, i) => (
          <li
            key={title}
            className="reveal relative rounded-sm border-l-2 border-gold bg-steel-900/70 py-6 pr-6 pl-6 transition-colors duration-200 hover:bg-steel-800"
            style={{ transitionDelay: `${i * 55}ms` }}
          >
            <h3 className="font-display text-lg font-bold tracking-wide text-mist uppercase">
              {title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-mist-dim">{body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
