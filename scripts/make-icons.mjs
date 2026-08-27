/**
 * One-off generator for the raster app icons in public/.
 *
 * An SVG favicon alone is not enough: iOS needs a PNG apple-touch-icon,
 * and many icon fetchers (search engines, chat unfurlers, hosting
 * dashboards) only read favicon.ico or PNG. All of them are derived from
 * the same traced logo path so they can never drift apart.
 *
 * Outputs are committed, so this is NOT part of the build. Re-run only when
 * the logo changes (after scripts/trace-logo.mjs):
 *
 *   npm i -D sharp png-to-ico && node scripts/make-icons.mjs && npm un sharp png-to-ico
 */
import { readFileSync, writeFileSync } from 'node:fs'
import sharp from 'sharp'
import pngToIco from 'png-to-ico'

const BG = '#0A0B0D'
const GOLD = '#E0B463'

const traced = readFileSync('scripts/logo-traced.svg', 'utf8')
const d = traced.match(/ d="([^"]+)"/)?.[1]
const [, vbW, vbH] = traced.match(/viewBox="0 0 (\d+) (\d+)"/).map(Number)
if (!d) throw new Error('could not read the traced logo path')

/**
 * Square icon with the mark centred.
 * @param size    pixel size
 * @param cover   fraction of the width the mark occupies
 * @param radius  corner radius in px (0 = full-bleed square)
 */
function iconSvg(size, cover, radius) {
  const scale = (size * cover) / vbW
  const x = (size - vbW * scale) / 2
  const y = (size - vbH * scale) / 2
  const bg =
    radius > 0
      ? `<rect width="${size}" height="${size}" rx="${radius}" fill="${BG}"/>`
      : `<rect width="${size}" height="${size}" fill="${BG}"/>`
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">` +
      bg +
      `<g transform="translate(${x.toFixed(2)},${y.toFixed(2)}) scale(${scale.toFixed(5)})">` +
      `<path fill="${GOLD}" fill-rule="evenodd" d="${d}"/></g></svg>`,
  )
}

// Render well above the target then downsample, for clean antialiasing.
// The explicit resize matters: `density` alone scales the raster past `size`.
const png = (size, cover, radius) =>
  sharp(iconSvg(size, cover, radius), { density: 384 })
    .resize(size, size, { fit: 'cover' })
    .png({ compressionLevel: 9, palette: true })
    .toBuffer()

// favicon.ico — rounded, the sizes Windows/browsers actually pick from
const icoSizes = [16, 32, 48]
const icoPngs = await Promise.all(
  icoSizes.map((s) => png(s, 0.86, Math.round(s * 0.19))),
)
writeFileSync('public/favicon.ico', await pngToIco(icoPngs))

// iOS home screen — must be PNG, square and opaque; iOS rounds it itself
writeFileSync('public/apple-touch-icon.png', await png(180, 0.8, 0))

// Android / PWA
writeFileSync('public/icon-192.png', await png(192, 0.82, 34))
writeFileSync('public/icon-512.png', await png(512, 0.82, 90))
// Maskable icons get cropped to a circle, so keep the mark inside the safe zone
writeFileSync('public/icon-maskable-512.png', await png(512, 0.6, 0))

writeFileSync(
  'public/site.webmanifest',
  JSON.stringify(
    {
      name: 'Advance Solutions',
      short_name: 'Advance Solutions',
      description:
        'CAD/CAM, VMC machining, CNC solutions and custom mechanical component manufacturing in Ludhiana, Punjab.',
      start_url: '/',
      display: 'browser',
      background_color: BG,
      theme_color: BG,
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
        {
          src: '/icon-maskable-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    null,
    2,
  ) + '\n',
)

console.log('wrote favicon.ico, apple-touch-icon.png, icon-192/512, maskable, manifest')
