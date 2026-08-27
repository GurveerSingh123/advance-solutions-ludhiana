import { ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Eyebrow } from './ui/Section'
import { ROUTES } from '../lib/pages'

type PageHeaderProps = {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  /** Current page name, shown after "Home" in the breadcrumb. */
  crumb: string
}

/**
 * Top band on every page except the home page: clears the fixed navbar and
 * carries the page's single <h1>.
 */
export function PageHeader({ eyebrow, title, intro, crumb }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-steel-800 pt-28 pb-12 sm:pt-32 sm:pb-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_75%_0%,#1b2028_0%,#0a0b0d_60%)]" />
        <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_60%_20%,black_10%,transparent_75%)]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-xs tracking-[0.14em] text-mist-faint uppercase">
            <li>
              <a href={ROUTES.home} className="transition-colors hover:text-gold">
                Home
              </a>
            </li>
            <li aria-hidden="true" className="flex items-center">
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li aria-current="page" className="text-gold">
              {crumb}
            </li>
          </ol>
        </nav>

        <div className="mt-6 max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-3xl leading-[1.05] font-bold text-mist uppercase sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 text-base leading-relaxed text-mist-dim sm:text-lg">{intro}</p>
          )}
        </div>
      </div>
    </section>
  )
}
