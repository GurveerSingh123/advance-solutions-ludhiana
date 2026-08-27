import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost' | 'whatsapp'
type Size = 'md' | 'lg'

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
  size?: Size
  children: ReactNode
  /** Adds target/rel for links that leave the site. */
  external?: boolean
}

const base =
  'inline-flex items-center justify-center gap-2.5 font-semibold tracking-wide uppercase font-display transition-[transform,background-color,border-color,color,box-shadow] duration-200 rounded-sm select-none active:translate-y-px'

/*
 * Filled variants use the dimmed `-solid` tokens and a soft, wide glow rather
 * than a bright halo — the glow reads as depth without the eye strain a
 * saturated full-width button causes on a dark page. Both keep dark text for
 * contrast (gold ~7.4:1, green ~6.1:1).
 */
const variants: Record<Variant, string> = {
  primary:
    'bg-gold-solid text-ink hover:bg-gold-solid-hover shadow-[0_8px_28px_-14px_rgba(198,154,79,0.55)] hover:shadow-[0_10px_32px_-12px_rgba(198,154,79,0.7)]',
  outline:
    'border border-steel-600 text-mist hover:border-gold hover:text-gold bg-steel-900/40 hover:bg-steel-800/70',
  ghost: 'text-mist hover:text-gold',
  whatsapp:
    'bg-wa text-ink hover:bg-wa-hover shadow-[0_8px_28px_-14px_rgba(31,168,85,0.55)] hover:shadow-[0_10px_32px_-12px_rgba(31,168,85,0.7)]',
}

const sizes: Record<Size, string> = {
  md: 'text-sm px-5 py-2.5',
  lg: 'text-base px-7 py-3.5 sm:text-lg',
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  external = false,
  className = '',
  children,
  ...props
}: ButtonLinkProps) {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <a
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...externalProps}
      {...props}
    >
      {children}
    </a>
  )
}
