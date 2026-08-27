import { PageHeader } from '../components/PageHeader'
import { About } from '../components/About'
import { WhyUs } from '../components/WhyUs'

export function AboutPage() {
  return (
    <>
      <PageHeader
        crumb="About"
        eyebrow="About Advance Solutions"
        title={
          <>
            Engineering Solutions Built{' '}
            <span className="text-gold">Around Your Requirements</span>
          </>
        }
        intro="A mechanical engineering and manufacturing setup in Ludhiana, Punjab — working from your drawings, CAD files and samples."
      />
      <About hideHeading />
      <WhyUs />
    </>
  )
}
