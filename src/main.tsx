import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { mockData } from './data'
import { validateData } from './data/validate'

if (import.meta.env.DEV) {
  const problems = validateData(mockData)
  if (problems.length) console.warn('Sample data has broken references:\n' + problems.join('\n'))
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
