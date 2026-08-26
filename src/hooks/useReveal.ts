import { useEffect } from 'react'

const READY_CLASS = 'reveal-ready'
/** Safety net: if the observer never reports, show everything anyway. */
const FAILSAFE_MS = 2500

/**
 * Progressive scroll-reveal.
 *
 * Content is fully visible by default. Only once we know we can animate
 * (IntersectionObserver present, motion not reduced) do we opt the document
 * into the hidden-then-reveal styles — so a failure here can never leave the
 * page blank. A timer reveals anything still hidden as a final guard.
 */
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement
    const revealAll = () => {
      root.classList.remove(READY_CLASS)
      document
        .querySelectorAll<HTMLElement>('.reveal')
        .forEach((node) => node.classList.add('is-visible'))
    }

    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    if (nodes.length === 0) return

    const canAnimate =
      typeof IntersectionObserver !== 'undefined' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!canAnimate) {
      revealAll()
      return
    }

    root.classList.add(READY_CLASS)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    nodes.forEach((node) => observer.observe(node))

    const failsafe = window.setTimeout(() => {
      const stillHidden = document.querySelectorAll('.reveal:not(.is-visible)')
      // Nothing has been revealed at all -> the observer is not reporting.
      if (stillHidden.length === nodes.length) {
        observer.disconnect()
        revealAll()
      }
    }, FAILSAFE_MS)

    return () => {
      window.clearTimeout(failsafe)
      observer.disconnect()
    }
  }, [])
}
