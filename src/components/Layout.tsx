import type { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { WhatsAppFloat } from './WhatsAppFloat'
import { useReveal } from '../hooks/useReveal'

export function Layout({ children }: { children: ReactNode }) {
  useReveal()

  return (
    <>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
