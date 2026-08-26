import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CapabilityStrip } from './components/CapabilityStrip'
import { About } from './components/About'
import { Services } from './components/Services'
import { Manufacturing } from './components/Manufacturing'
import { Industries } from './components/Industries'
import { ComponentsWeMake } from './components/ComponentsWeMake'
import { WhyUs } from './components/WhyUs'
import { Process } from './components/Process'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <CapabilityStrip />
        <About />
        <Services />
        <Manufacturing />
        <Industries />
        <ComponentsWeMake />
        <WhyUs />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
