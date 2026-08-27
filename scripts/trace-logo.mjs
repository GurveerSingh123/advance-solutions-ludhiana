/**
 * One-off: trace the supplied Advance Solutions logo bitmap into vector paths.
 *
 * The owner supplied the mark as a flat single-colour raster (named .svg but
 * actually a PNG). Tracing it gives crisp geometry at any size instead of
 * shipping a bitmap, and lets the site colour it with the theme gold.
 *
 * The traced path is committed inside src/components/ui/Logo.tsx, so this is
 * NOT part of the build. Re-run only if the source artwork changes:
 *
 *   npm i -D sharp potrace && node scripts/trace-logo.mjs <source-image>
 *   npm un sharp potrace
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { promisify } from 'node:util'
import sharp from 'sharp'
import potrace from 'potrace'

const src = process.argv[2]
if (!src) throw new Error('usage: node scripts/trace-logo.mjs <source-image>')

const SCALE = 4 // upscale before tracing so curves come out smooth

// Flatten onto white, crop the empty margin, then upscale.
const base = sharp(src).flatten({ background: '#ffffff' }).trim({ threshold: 20 })
const { info } = await base.toBuffer({ resolveWithObject: true })
const width = info.width * SCALE
const height = info.height * SCALE

const bitmap = await base
  .resize(width, height, { kernel: 'lanczos3' })
  .greyscale()
  .blur(SCALE * 1.5) // soften the source's pixel staircase before thresholding
  .png()
  .toBuffer()

const trace = promisify(potrace.trace)
const traced = await trace(bitmap, {
  // The mark's gold greyscales to ~142 and the background is white, so the
  // cut has to sit between the two.
  threshold: 200,
  turdSize: 20, // drop speckles
  alphaMax: 1.334, // maximum corner smoothing
  optCurve: true,
  optTolerance: 0.8, // fewer, longer curve segments
  turnPolicy: potrace.Potrace.TURNPOLICY_MINORITY,
})

const paths = [...traced.matchAll(/ d="([^"]+)"/g)].map((m) => m[1])
if (paths.length === 0) throw new Error('trace produced no paths')

// Scale back down to the trimmed source size and round, to keep the inlined
// path data small. potrace emits no arcs, so every number is a coordinate.
const round = (n) => {
  const v = Math.round((n / SCALE) * 10) / 10
  return String(v)
}
const d = paths
  .join(' ')
  .replace(/-?\d+(\.\d+)?/g, (m) => round(parseFloat(m)))
  .replace(/\s+/g, ' ')
  .trim()

const vbW = Math.round(width / SCALE)
const vbH = Math.round(height / SCALE)
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vbW} ${vbH}">\n  <path fill="currentColor" fill-rule="evenodd" d="${d}"/>\n</svg>\n`

writeFileSync('scripts/logo-traced.svg', svg)

// Keep the favicon and the social card's mark in sync with the trace.
const FAVICON_BOX = 128
const favScale = (FAVICON_BOX * 0.82) / vbW
writeFileSync(
  'public/favicon.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${FAVICON_BOX} ${FAVICON_BOX}" role="img" aria-label="Advance Solutions">\n` +
    `  <rect width="${FAVICON_BOX}" height="${FAVICON_BOX}" rx="24" fill="#0A0B0D"/>\n` +
    `  <g transform="translate(${((FAVICON_BOX - vbW * favScale) / 2).toFixed(2)},${(
      (FAVICON_BOX - vbH * favScale) /
      2
    ).toFixed(2)}) scale(${favScale.toFixed(4)})">\n` +
    `    <path fill="#E0B463" fill-rule="evenodd" d="${d}"/>\n` +
    `  </g>\n</svg>\n`,
)

const OG_MARK_HEIGHT = 130
const ogScale = OG_MARK_HEIGHT / vbH
const ogMark =
  `<g transform="translate(88,${(170 - OG_MARK_HEIGHT / 2).toFixed(0)}) scale(${ogScale.toFixed(4)})">` +
  `<path fill="url(#gold)" fill-rule="evenodd" d="${d}"/></g>`
const og = readFileSync('scripts/og-image.svg', 'utf8').replace(
  /<!-- mark:start -->[\s\S]*?<!-- mark:end -->/,
  `<!-- mark:start -->${ogMark}<!-- mark:end -->`,
)
writeFileSync('scripts/og-image.svg', og)

console.log(
  `traced ${paths.length} path(s), viewBox 0 0 ${vbW} ${vbH}, ` +
    `${(d.length / 1024).toFixed(1)} kB of path data\n` +
    `updated public/favicon.svg and scripts/og-image.svg`,
)
