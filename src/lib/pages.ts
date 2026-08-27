/**
 * The site's pages, in one place.
 *
 * Consumed twice: by the nav/footer at runtime, and by vite.config.ts at
 * build time to generate each page's <head> and register it as a build
 * entry. Keep this file browser-safe — no Node imports.
 */

export const SITE_URL = 'https://advance-solutions-ludhiana.vercel.app'

export type PageKey =
  | 'home'
  | 'about'
  | 'services'
  | 'manufacturing'
  | 'industries'
  | 'contact'
  | 'notFound'

export type PageMeta = {
  /** Public URL path. */
  path: string
  /** HTML file, relative to the project root. */
  file: string
  /** Label in the nav, omitted for pages that are not listed. */
  nav?: string
  /** <title>, without the site-name suffix. */
  title: string
  description: string
  /** Short label used in breadcrumbs. */
  crumb?: string
}

export const PAGES: Record<PageKey, PageMeta> = {
  home: {
    path: '/',
    file: 'index.html',
    nav: 'Home',
    title:
      'Advance Solutions | CAD/CAM, VMC Machining & Custom Manufacturing in Ludhiana',
    description:
      'Advance Solutions provides CAD/CAM, VMC machining, CNC solutions and custom mechanical component manufacturing in Ludhiana, Punjab.',
  },
  about: {
    path: '/about/',
    file: 'about/index.html',
    nav: 'About',
    crumb: 'About',
    title: 'About | Advance Solutions, Ludhiana',
    description:
      'Advance Solutions turns drawings, CAD files, samples and stated requirements into finished mechanical components. Engineering-led custom manufacturing in Ludhiana, Punjab.',
  },
  services: {
    path: '/services/',
    file: 'services/index.html',
    nav: 'Services',
    crumb: 'Services',
    title: 'Services | CAD/CAM, VMC & CNC Machining | Advance Solutions',
    description:
      'CAD and CAM solutions, VMC machining, CNC machine solutions, fabrication, deep hole drilling, pneumatic air pipe and industrial lubrication solutions in Ludhiana.',
  },
  manufacturing: {
    path: '/manufacturing/',
    file: 'manufacturing/index.html',
    nav: 'Manufacturing',
    crumb: 'Manufacturing',
    title: 'Custom VMC Machining & Component Manufacturing | Advance Solutions',
    description:
      'Send a CAD file, drawing, sample or dimensions and Advance Solutions can manufacture the component where it suits VMC/CNC machining. Ludhiana, Punjab.',
  },
  industries: {
    path: '/industries/',
    file: 'industries/index.html',
    nav: 'Industries',
    crumb: 'Industries',
    title: 'Industries We Serve | Advance Solutions, Ludhiana',
    description:
      'Machined components for automotive, bicycle and cycle parts, agricultural equipment, industrial machinery and general engineering across Ludhiana and Punjab.',
  },
  contact: {
    path: '/contact/',
    file: 'contact/index.html',
    nav: 'Contact',
    crumb: 'Contact',
    title: 'Contact | Advance Solutions, Ludhiana — 98887-78788',
    description:
      'Contact Advance Solutions in Ludhiana to discuss a machining or manufacturing requirement. Call 98887-78788, message on WhatsApp or email us.',
  },
  notFound: {
    path: '/404.html',
    file: '404.html',
    title: 'Page Not Found | Advance Solutions',
    description: 'The page you are looking for does not exist.',
  },
}

/** Every page, in build order. */
export const PAGE_KEYS = Object.keys(PAGES) as PageKey[]

/** Pages shown in the header and footer navigation, in order. */
export const NAV_KEYS: PageKey[] = [
  'home',
  'about',
  'services',
  'manufacturing',
  'industries',
  'contact',
]

export const NAV_LINKS = NAV_KEYS.map((key) => ({
  key,
  label: PAGES[key].nav!,
  href: PAGES[key].path,
}))

export const ROUTES = {
  home: PAGES.home.path,
  about: PAGES.about.path,
  services: PAGES.services.path,
  manufacturing: PAGES.manufacturing.path,
  industries: PAGES.industries.path,
  contact: PAGES.contact.path,
} as const

/** True when `href` is the page currently being viewed. */
export function isCurrentPath(href: string, pathname: string): boolean {
  const norm = (p: string) => (p.endsWith('/') ? p : `${p}/`)
  return norm(pathname) === norm(href)
}
