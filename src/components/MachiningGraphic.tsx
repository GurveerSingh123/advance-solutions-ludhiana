/**
 * Hand-drawn technical illustration of a VMC/CNC milling operation:
 * spindle + end mill cutting a workpiece on a machine table, drawn in a
 * blueprint/CAD style. Pure SVG — no external image request, scales
 * perfectly on every screen.
 */
export function MachiningGraphic({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 460"
      className={className}
      role="img"
      aria-label="Technical illustration of a VMC end mill machining a metal component on a machine table"
    >
      <defs>
        <linearGradient id="as-steel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#39414d" />
          <stop offset="50%" stopColor="#232a33" />
          <stop offset="100%" stopColor="#161b21" />
        </linearGradient>
        <linearGradient id="as-gold-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f2d091" />
          <stop offset="55%" stopColor="#e0b463" />
          <stop offset="100%" stopColor="#a97c34" />
        </linearGradient>
        <linearGradient id="as-part" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4b5563" />
          <stop offset="55%" stopColor="#2c333d" />
          <stop offset="100%" stopColor="#1b2027" />
        </linearGradient>
        <radialGradient id="as-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e0b463" stopOpacity="0.42" />
          <stop offset="100%" stopColor="#e0b463" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* blueprint frame + ticks */}
      <g stroke="#e0b463" strokeOpacity="0.28" fill="none" strokeWidth="1">
        <rect x="14" y="14" width="492" height="432" rx="4" />
        <path d="M14 44h16M14 84h16M14 124h16M490 44h16M490 84h16M490 124h16" />
        <path d="M60 14v16M100 14v16M140 14v16M60 430v16M100 430v16M140 430v16" />
      </g>

      {/* spindle head + tool holder */}
      <g className="animate-spindle">
        <rect x="196" y="42" width="128" height="94" rx="6" fill="url(#as-steel)" />
        <rect
          x="196"
          y="42"
          width="128"
          height="94"
          rx="6"
          fill="none"
          stroke="#4a545f"
          strokeWidth="1.5"
        />
        <rect x="212" y="60" width="96" height="8" rx="4" fill="#e0b463" fillOpacity="0.75" />
        <rect x="212" y="78" width="62" height="6" rx="3" fill="#8a94a1" fillOpacity="0.5" />

        {/* holder taper */}
        <path d="M232 136 L288 136 L272 186 L248 186 Z" fill="url(#as-steel)" stroke="#4a545f" strokeWidth="1.5" />
        <rect x="243" y="186" width="34" height="18" rx="2" fill="#39414d" stroke="#4a545f" />

        {/* end mill */}
        <rect x="250" y="204" width="20" height="86" rx="2" fill="url(#as-gold-grad)" />
        <g stroke="#7a5a24" strokeOpacity="0.65" strokeWidth="2" strokeLinecap="round">
          <path d="M252 216 L268 232" />
          <path d="M252 236 L268 252" />
          <path d="M252 256 L268 272" />
        </g>
        <path d="M250 290 L260 300 L270 290 Z" fill="#f2d091" />
      </g>

      {/* cutting glow */}
      <circle cx="260" cy="298" r="46" fill="url(#as-glow)" />

      {/* chips */}
      <g fill="#f2d091">
        <rect x="272" y="288" width="7" height="3" rx="1.5" opacity="0.9">
          <animate
            attributeName="opacity"
            values="0;0.9;0"
            dur="2.4s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 26 -26"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="238" y="290" width="6" height="3" rx="1.5" opacity="0.8">
          <animate
            attributeName="opacity"
            values="0;0.8;0"
            dur="2.9s"
            begin="0.7s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; -24 -22"
            dur="2.9s"
            begin="0.7s"
            repeatCount="indefinite"
          />
        </rect>
      </g>

      {/* workpiece being machined */}
      <g>
        <path
          d="M150 300 H370 V352 H150 Z"
          fill="url(#as-part)"
          stroke="#5a6674"
          strokeWidth="1.5"
        />
        {/* machined pocket */}
        <path d="M232 300 H288 V318 H232 Z" fill="#0f1318" stroke="#e0b463" strokeOpacity="0.5" />
        {/* drilled holes */}
        <g fill="#0f1318" stroke="#6b7686">
          <circle cx="180" cy="326" r="9" />
          <circle cx="340" cy="326" r="9" />
        </g>
        {/* top chamfer highlight */}
        <path d="M150 300 H370" stroke="#8c98a7" strokeOpacity="0.7" strokeWidth="2" />
      </g>

      {/* clamps */}
      <g fill="#39414d" stroke="#5a6674" strokeWidth="1.5">
        <path d="M118 306 H154 V330 H118 Z" />
        <path d="M366 306 H402 V330 H366 Z" />
      </g>

      {/* machine table */}
      <g>
        <path d="M92 352 H428 V382 H92 Z" fill="url(#as-steel)" stroke="#4a545f" strokeWidth="1.5" />
        <g stroke="#0e1216" strokeWidth="4" strokeLinecap="round">
          <path d="M112 367 H196" />
          <path d="M216 367 H304" />
          <path d="M324 367 H408" />
        </g>
        <path d="M72 382 H448 V398 H72 Z" fill="#191e25" stroke="#3a4350" />
      </g>

      {/* dimension line */}
      <g stroke="#e0b463" strokeOpacity="0.55" fill="none" strokeWidth="1">
        <path d="M150 420 H370" />
        <path d="M150 412 v16M370 412 v16" />
      </g>
      <text
        x="260"
        y="440"
        textAnchor="middle"
        fill="#e0b463"
        fillOpacity="0.75"
        fontSize="13"
        fontFamily="'Barlow Condensed', sans-serif"
        letterSpacing="2.5"
      >
        AS ENGINEERED TO DRAWING
      </text>

      {/* axis marker */}
      <g
        stroke="#e0b463"
        strokeOpacity="0.6"
        fill="none"
        strokeWidth="1.4"
        strokeLinecap="round"
      >
        <path d="M436 96 v-42M436 96 h42" />
        <path d="M436 54 l-5 8M436 54 l5 8" />
        <path d="M478 96 l-8 -5M478 96 l-8 5" />
      </g>
      <text
        x="452"
        y="46"
        fill="#e0b463"
        fillOpacity="0.7"
        fontSize="12"
        fontFamily="'Barlow Condensed', sans-serif"
      >
        Z
      </text>
      <text
        x="486"
        y="112"
        fill="#e0b463"
        fillOpacity="0.7"
        fontSize="12"
        fontFamily="'Barlow Condensed', sans-serif"
      >
        X
      </text>
    </svg>
  )
}
