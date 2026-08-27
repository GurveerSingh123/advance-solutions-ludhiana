import { PageHeader } from '../components/PageHeader'
import { Services } from '../components/Services'
import { Process } from '../components/Process'
import { CtaBand } from '../components/CtaBand'

export function ServicesPage() {
  return (
    <>
      <PageHeader
        crumb="Services"
        eyebrow="What We Do"
        title={
          <>
            Engineering &amp; Manufacturing <span className="text-gold">Services</span>
          </>
        }
        intro="From design and programming through to machined, finished components — supported by fabrication and industrial solutions for the shop floor."
      />
      <Services hideHeading />
      <Process />
      <CtaBand />
    </>
  )
}
