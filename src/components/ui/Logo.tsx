import { LOGO_PATH, LOGO_VIEWBOX } from './logoPath'

type LogoMarkProps = {
  className?: string
}

/**
 * The Advance Solutions "AS" mark, vector-traced from the owner's artwork.
 *
 * Fills with `currentColor` so it picks up the theme gold. The artwork is
 * 350x277, so size it by height and leave the width automatic — setting both
 * would distort it.
 */
export function LogoMark({ className = 'h-10 w-auto' }: LogoMarkProps) {
  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      className={className}
      role="img"
      aria-label="Advance Solutions logo"
    >
      <path fill="currentColor" fillRule="evenodd" d={LOGO_PATH} />
    </svg>
  )
}

type LogoProps = {
  className?: string
  markClassName?: string
}

export function Logo({ className = '', markClassName = 'h-10 w-auto' }: LogoProps) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className={`${markClassName} shrink-0 text-gold`} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-[0.18em] text-mist uppercase sm:text-xl">
          Advance
        </span>
        <span className="font-display text-lg font-bold tracking-[0.18em] text-gold uppercase sm:text-xl">
          Solutions
        </span>
      </span>
    </span>
  )
}
