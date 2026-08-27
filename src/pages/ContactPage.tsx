import { PageHeader } from '../components/PageHeader'
import { Contact } from '../components/Contact'

export function ContactPage() {
  return (
    <>
      <PageHeader
        crumb="Contact"
        eyebrow="Contact"
        title={
          <>
            Let&apos;s Manufacture Your <span className="text-gold">Requirement</span>
          </>
        }
        intro="Have a drawing, sample or custom component requirement? Contact Advance Solutions to discuss your machining and manufacturing requirement."
      />
      <Contact hideHeading />
    </>
  )
}
