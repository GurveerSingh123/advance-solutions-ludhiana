import { PageHeader } from '../components/PageHeader'
import { Industries } from '../components/Industries'
import { ComponentsWeMake } from '../components/ComponentsWeMake'
import { CtaBand } from '../components/CtaBand'

export function IndustriesPage() {
  return (
    <>
      <PageHeader
        crumb="Industries"
        eyebrow="Where We Work"
        title={
          <>
            Industries We <span className="text-gold">Serve</span>
          </>
        }
        intro="Ludhiana's manufacturing base runs on machined components. We supply parts across the sectors that need them."
      />
      <Industries hideHeading />
      <ComponentsWeMake />
      <CtaBand />
    </>
  )
}
