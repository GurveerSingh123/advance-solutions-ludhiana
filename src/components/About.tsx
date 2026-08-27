import { Section, SectionHeading } from './ui/Section'

/**
 * Prose only. The capability points that used to sit beside this text
 * duplicated the Why Us list further down the same page, so they were removed
 * and Why Us is now the single place those points are made.
 */
export function About({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <Section id="about" grid className="bg-ink">
      {!hideHeading && (
        <SectionHeading
          eyebrow="About Advance Solutions"
          title={
            <>
              Engineering Solutions Built{' '}
              <span className="text-gold">Around Your Requirements</span>
            </>
          }
        />
      )}

      <div
        className={`reveal ${hideHeading ? '' : 'mt-6'} max-w-3xl space-y-5 text-base leading-relaxed text-mist-dim sm:text-lg`}
      >
        <p>
          Advance Solutions is a mechanical engineering and manufacturing setup based in
          Ludhiana, Punjab. We work with customers to convert drawings, CAD designs, samples
          and stated requirements into finished mechanical components.
        </p>
        <p>
          Every enquiry begins with the requirement itself. We look at the component, its
          features and how it needs to be produced, then handle the design and CAM
          programming and machine the part on VMC/CNC equipment where the geometry is suited
          to it.
        </p>
        <p>
          Alongside machining, we support customers with fabrication work, deep hole
          drilling, machinery and equipment solutions, pneumatic air pipe work and industrial
          lubrication solutions — practical answers to the problems that come up on a shop
          floor.
        </p>
      </div>
    </Section>
  )
}
