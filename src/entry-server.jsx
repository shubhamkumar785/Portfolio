// Used only at build time to pre-render the page into static HTML (see scripts/prerender.js).
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export { projects, contact } from './data'
export { faqs } from './components/FaqSection'

export const render = () =>
  renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
