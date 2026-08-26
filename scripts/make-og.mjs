/**
 * One-off generator for public/og-image.png (1200x630 social preview card).
 *
 * The PNG is committed to the repo, so this script is NOT part of the build.
 * Re-run it only when scripts/og-image.svg changes:
 *
 *   npm i -D sharp && node scripts/make-og.mjs && npm un sharp
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const here = dirname(fileURLToPath(import.meta.url))
const svg = readFileSync(join(here, 'og-image.svg'))
const png = await sharp(svg, { density: 144 }).resize(1200, 630).png().toBuffer()

writeFileSync(join(here, '..', 'public', 'og-image.png'), png)
console.log(`og-image.png written (${(png.length / 1024).toFixed(1)} kB)`)
