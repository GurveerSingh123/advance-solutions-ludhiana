type LogoMarkProps = {
  className?: string
}

/**
 * Vector re-creation of the Advance Solutions "AS" monogram.
 *
 * Matches the company mark: a ring crossed by a single continuous stroke that
 * forms the S (its top bar running out past the ring on the right) and then
 * flows left as the long bar that doubles as the A's crossbar. Drawn to the
 * original's proportions — the artwork is 300x220, so size it by height and
 * leave the width automatic to avoid distorting it.
 */
export function LogoMark({ className = 'h-10 w-auto' }: LogoMarkProps) {
  return (
    <svg
      viewBox="55 40 300 220"
      className={className}
      role="img"
      aria-label="Advance Solutions logo"
      fill="none"
    >
      {/* ring */}
      <circle
        cx="200"
        cy="150"
        r="95"
        className="stroke-gold-deep"
        strokeWidth={15}
      />
      {/* A + S monogram */}
      <g
        className="stroke-gold"
        strokeWidth={17}
        strokeLinecap="butt"
        strokeLinejoin="round"
      >
        <path
          d="M 339 119
             L 250 129
             C 227 132, 218 146, 236 153
             C 252 159, 271 163, 272 175
             C 273 187, 256 193, 236 194
             L 72 196"
        />
        <path d="M 109 192 L 163 111 L 203 242" />
      </g>
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
      <LogoMark className={`${markClassName} shrink-0`} />
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
