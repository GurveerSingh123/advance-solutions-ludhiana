import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'
import { PAGES, PAGE_KEYS, SITE_URL, type PageKey } from './src/lib/pages'

/** Forward slashes everywhere — Vite reports filenames with them even on Windows. */
const slash = (p: string) => p.replace(/\\/g, '/')
const root = slash(fileURLToPath(new URL('.', import.meta.url))).replace(/\/$/, '')
const abs = (path: string) => new URL(path, `${SITE_URL}/`).href

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const BUSINESS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'Advance Solutions',
  description:
    'CAD/CAM solutions, VMC and CNC machining, fabrication and custom mechanical component manufacturing in Ludhiana, Punjab.',
  url: `${SITE_URL}/`,
  telephone: '+919888778788',
  email: 'Advance.solutions@rediffmail.com',
  image: abs('og-image.png'),
  address: {
    '@type': 'PostalAddress',
    streetAddress: '#8905/2-A, St. No. 33, Kot Mangal Singh Nagar',
    addressLocality: 'Ludhiana',
    addressRegion: 'Punjab',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Ludhiana' },
    { '@type': 'State', name: 'Punjab' },
  ],
  knowsAbout: [
    'CAD solutions',
    'CAM solutions',
    'VMC machining',
    'CNC machining',
    'Custom component manufacturing',
    'Fabrication works',
    'Deep hole drilling',
    'Pneumatic air pipe solutions',
    'Industrial lubrication solutions',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    name: 'Baljinder Singh',
    telephone: '+919888778788',
    contactType: 'sales',
    availableLanguage: ['en', 'pa', 'hi'],
  },
}

function breadcrumbJsonLd(key: PageKey) {
  const page = PAGES[key]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      {
        '@type': 'ListItem',
        position: 2,
        name: page.crumb ?? page.nav ?? page.title,
        item: abs(page.path.replace(/^\//, '')),
      },
    ],
  }
}

/** The full <head> for one page. */
function renderHead(key: PageKey): string {
  const page = PAGES[key]
  const url = abs(page.path.replace(/^\//, ''))
  const indexable = key !== 'notFound'
  const jsonLd = key === 'home' ? BUSINESS_JSONLD : indexable ? breadcrumbJsonLd(key) : null

  return `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" sizes="32x32" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="theme-color" content="#0A0B0D" />

    <title>${esc(page.title)}</title>
    <meta name="description" content="${esc(page.description)}" />
    <meta name="author" content="Advance Solutions" />
    ${indexable ? `<link rel="canonical" href="${url}" />` : `<meta name="robots" content="noindex" />`}

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Advance Solutions" />
    <meta property="og:title" content="${esc(page.title)}" />
    <meta property="og:description" content="${esc(page.description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${abs('og-image.png')}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Advance Solutions — CAD/CAM, VMC machining and custom manufacturing, Ludhiana" />
    <meta property="og:locale" content="en_IN" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(page.title)}" />
    <meta name="twitter:description" content="${esc(page.description)}" />
    <meta name="twitter:image" content="${abs('og-image.png')}" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
${jsonLd ? `    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ''}
  `.trim()
}

/**
 * Each page's HTML file is a bare shell containing `<!--@head-->`. This fills
 * that in, so titles, descriptions, canonicals and OG tags all come from
 * src/lib/pages.ts rather than being duplicated across six files.
 */
function pageHead(): Plugin {
  const byFile = new Map(PAGE_KEYS.map((k) => [PAGES[k].file, k]))

  return {
    name: 'advance-solutions:page-head',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        const rel = slash(ctx.filename).replace(`${root}/`, '')
        const key = byFile.get(rel)
        if (!key) {
          console.warn(`[page-head] no metadata for ${rel}; <head> left empty`)
          return html
        }
        return html.replace('<!--@head-->', renderHead(key))
      },
    },
  }
}

export default defineConfig({
  appType: 'mpa',
  plugins: [react(), tailwindcss(), pageHead()],
  build: {
    target: 'es2020',
    cssMinify: true,
    rollupOptions: {
      input: Object.fromEntries(
        PAGE_KEYS.map((key) => [key, fileURLToPath(new URL(PAGES[key].file, import.meta.url))]),
      ),
    },
  },
})
