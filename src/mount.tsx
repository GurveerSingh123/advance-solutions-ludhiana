import { StrictMode, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import { Layout } from './components/Layout'
import './index.css'

/** Boots one page into #root, wrapped in the shared chrome. */
export function mount(page: ReactNode) {
  const el = document.getElementById('root')
  if (!el) throw new Error('#root not found')

  createRoot(el).render(
    <StrictMode>
      <Layout>{page}</Layout>
    </StrictMode>,
  )
}
