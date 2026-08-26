/**
 * Single source of truth for all business / contact details.
 * Update values here and they propagate across the whole site.
 */

export const BUSINESS = {
  name: 'Advance Solutions',
  tagline: 'CAD/CAM • VMC Machining • CNC Solutions • Custom Manufacturing',
  contactPerson: 'Baljinder Singh',
  phoneDisplay: '98887-78788',
  phoneE164: '+919888778788',
  whatsappNumber: '919888778788',
  email: 'Advance.solutions@rediffmail.com',
  address: {
    line1: '#8905/2-A, St. No. 33',
    line2: 'Kot Mangal Singh Nagar',
    line3: 'Ludhiana, Punjab, India',
  },
} as const

export const ADDRESS_QUERY =
  '8905/2-A, St. No. 33, Kot Mangal Singh Nagar, Ludhiana, Punjab, India'

export const WHATSAPP_MESSAGE =
  'Hello Advance Solutions, I would like to discuss a manufacturing/machining requirement.'

export const LINKS = {
  tel: `tel:${BUSINESS.phoneE164}`,
  whatsapp: `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`,
  email: `mailto:${BUSINESS.email}?subject=${encodeURIComponent(
    'Manufacturing / Machining Requirement',
  )}&body=${encodeURIComponent(
    'Hello Advance Solutions,\n\nI would like to discuss the following requirement:\n\n',
  )}`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    ADDRESS_QUERY,
  )}`,
  mapEmbed: `https://www.google.com/maps?q=${encodeURIComponent(
    ADDRESS_QUERY,
  )}&output=embed`,
} as const

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Manufacturing', href: '#manufacturing' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
] as const
