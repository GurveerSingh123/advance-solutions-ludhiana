import { PageHeader } from '../components/PageHeader'
import { Manufacturing } from '../components/Manufacturing'
import { ComponentsWeMake } from '../components/ComponentsWeMake'

export function ManufacturingPage() {
  return (
    <>
      <PageHeader
        crumb="Manufacturing"
        eyebrow="Core Capability"
        title={
          <>
            Custom <span className="text-gold">VMC Machining</span> &amp; Component
            Manufacturing
          </>
        }
        intro="Send us what you have. We work out how the component can be produced and machine it where the geometry is suited to VMC/CNC work."
      />
      <Manufacturing hideHeading />
      <ComponentsWeMake />
    </>
  )
}
