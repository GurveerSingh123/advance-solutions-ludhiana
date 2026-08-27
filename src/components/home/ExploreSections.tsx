import { ArrowRight, Boxes, Building2, Cog, Mail, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section, SectionHeading } from '../ui/Section'
import { ROUTES } from '../../lib/pages'

/**
 * The home page's only content section: a signpost to the rest of the site.
 *
 * Blurbs here are deliberately written fresh — the detail, cards and lists
 * live on their own pages and are not repeated here.
 */
const DESTINATIONS: {
  title: string
  blurb: string
  href: string
  Icon: LucideIcon
  featured?: boolean
}[] = [
  {
    title: 'Manufacturing',
    blurb:
      'The heart of what we do. See what a job looks like from your drawing to a finished part in your hand.',
    href: ROUTES.manufacturing,
    Icon: Cog,
    featured: true,
  },
  {
    title: 'Services',
    blurb:
      'Ten capabilities, from design and programming to drilling, fabrication and shop-floor systems.',
    href: ROUTES.services,
    Icon: Boxes,
    featured: true,
  },
  {
    title: 'Industries',
    blurb: 'The sectors we already supply parts to around Ludhiana.',
    href: ROUTES.industries,
    Icon: Building2,
  },
  {
    title: 'About',
    blurb: 'How we work, and why customers deal with us directly.',
    href: ROUTES.about,
    Icon: Users,
  },
  {
    title: 'Contact',
    blurb: 'Phone, WhatsApp, email and where to find the workshop.',
    href: ROUTES.contact,
    Icon: Mail,
  },
]

export function ExploreSections() {
  return (
    <Section grid className="bg-ink">
      <SectionHeading
        eyebrow="Where To Start"
        title={
          <>
            Tell Us What You Need <span className="text-gold">Made</span>
          </>
        }
        intro="Most jobs begin the same way — a drawing, a worn-out part, or a rough idea of a component that has to be produced. Pick whichever fits what you have."
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {DESTINATIONS.map(({ title, blurb, href, Icon, featured }, i) => (
          <li
            key={title}
            className={`reveal ${featured ? 'sm:col-span-1 lg:col-span-1' : ''}`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <a
              href={href}
              className={`group flex h-full flex-col rounded-sm border p-7 transition-[border-color,transform,background-color] duration-300 hover:-translate-y-1 ${
                featured
                  ? 'border-gold/40 bg-gradient-to-br from-steel-800 to-steel-900 hover:border-gold'
                  : 'border-steel-700 bg-steel-900 hover:border-gold/60 hover:bg-steel-800'
              }`}
            >
              <Icon
                className="h-8 w-8 text-gold transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.4}
                aria-hidden="true"
              />
              <h3 className="mt-5 font-display text-xl font-bold tracking-wide text-mist uppercase">
                {title}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-mist-dim">{blurb}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-semibold tracking-[0.16em] text-gold uppercase">
                View
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
