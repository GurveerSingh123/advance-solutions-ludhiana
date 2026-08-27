import { Hero } from '../components/Hero'
import { CapabilityStrip } from '../components/CapabilityStrip'
import { ExploreSections } from '../components/home/ExploreSections'

/**
 * Deliberately short. The home page makes the pitch and points onward — the
 * service cards, industry cards, workflow and contact details live on their
 * own pages and are not repeated here.
 */
export function HomePage() {
  return (
    <>
      <Hero />
      <CapabilityStrip />
      <ExploreSections />
    </>
  )
}
