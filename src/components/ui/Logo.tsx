type LogoMarkProps = {
  className?: string
}

/**
 * Vector re-creation of the Advance Solutions "AS" monogram from the
 * company visiting card: gold monogram inside a ring, crossed by a bar.
 * Drawn to scale so it never distorts.
 */
export function LogoMark({ className = 'h-9 w-9' }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      role="img"
      aria-label="Advance Solutions logo"
      fill="none"
    >
      <g stroke="currentColor" strokeWidth={7} strokeLinejoin="round">
        <circle cx="64" cy="64" r="40" />
        <path d="M42 88 L62 38 L82 88" />
        <path
          d="M92 46c-6-5-19-4-22 3s9 11 15 15 5 13-3 16-16 1-21-4"
          strokeLinecap="round"
        />
        <path d="M12 76 L116 58" />
      </g>
    </svg>
  )
}

type LogoProps = {
  className?: string
  markClassName?: string
}

export function Logo({ className = '', markClassName = 'h-10 w-10' }: LogoProps) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className={`${markClassName} text-gold shrink-0`} />
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
