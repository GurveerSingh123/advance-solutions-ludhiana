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

const variants: Record<Variant, string> = {
  primary:
    'bg-gold text-ink hover:bg-gold-bright shadow-[0_10px_30px_-12px_rgba(224,180,99,0.7)] hover:shadow-[0_14px_36px_-10px_rgba(224,180,99,0.85)]',
  outline:
    'border border-steel-600 text-mist hover:border-gold hover:text-gold bg-steel-900/40 hover:bg-steel-800/70',
  ghost: 'text-mist hover:text-gold',
  whatsapp:
    'bg-[#1FA855] text-white hover:bg-[#25D366] hover:text-ink shadow-[0_10px_30px_-12px_rgba(37,211,102,0.75)]',
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
