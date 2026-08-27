import { Hero } from '../components/Hero'
import { CapabilityStrip } from '../components/CapabilityStrip'
import { AboutTeaser } from '../components/home/AboutTeaser'
import { ServicesTeaser } from '../components/home/ServicesTeaser'
import { ManufacturingTeaser } from '../components/home/ManufacturingTeaser'
import { IndustriesTeaser } from '../components/home/IndustriesTeaser'
import { CtaBand } from '../components/CtaBand'

export function HomePage() {
  return (
    <>
      <Hero />
      <CapabilityStrip />
      <AboutTeaser />
      <ServicesTeaser />
      <ManufacturingTeaser />
      <IndustriesTeaser />
      <CtaBand />
    </>
  )
}
