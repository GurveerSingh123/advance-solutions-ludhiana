import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
  /** Adds the faint engineering grid texture behind the section. */
  grid?: boolean
  as?: 'section' | 'footer' | 'div'
}

export function Section({
  id,
  children,
  className = '',
  grid = false,
  as: Tag = 'section',
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`relative scroll-mt-20 overflow-hidden py-16 sm:py-20 lg:py-28 ${className}`}
    >
      {grid && (
        <div
          aria-hidden="true"
          className="bg-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_78%)]"
        />
      )}
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">{children}</div>
    </Tag>
  )
}

type EyebrowProps = {
  children: ReactNode
  className?: string
}

export function Eyebrow({ children, className = '' }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.28em] text-gold uppercase sm:text-xs ${className}`}
    >
      <span aria-hidden="true" className="h-px w-7 bg-gold/70" />
      {children}
    </span>
  )
}

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  align?: 'left' | 'center'
  className?: string
  /** Heading level — keeps the document outline correct. */
  as?: 'h2' | 'h3'
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  className = '',
  as: Tag = 'h2',
}: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <div
      className={`reveal ${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag className="mt-4 text-3xl leading-[1.08] font-bold text-mist uppercase sm:text-4xl lg:text-5xl">
        {title}
      </Tag>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-mist-dim sm:text-lg">{intro}</p>
      )}
    </div>
  )
}
