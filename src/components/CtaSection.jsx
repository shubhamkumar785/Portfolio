import React, { Suspense, lazy, useEffect, useState } from 'react'
import { projects } from '../data'
// The contact page is only downloaded when someone actually opens it
const ContactSection = lazy(() => import('./ContactSection'))
import { OPEN_CONTACT_FORM } from '../contactForm'

// Coloured strokes around the heading: offset from centre (px), angle, colour.
const strokes = [
  [-78, -305, 75, '#4b5ab5'],
  [-84, -247, 70, '#b44fd6'],
  [62, -250, -70, '#c8c43a'],
  [-148, -215, 55, '#5cbf6a'],
  [159, -199, -60, '#d9534f'],
  [-292, -132, 30, '#d9534f'],
  [-267, -33, 5, '#5cbf6a'],
  [-214, -24, 0, '#5cbf6a'],
  [-278, 163, -25, '#d9534f'],
  [-152, 225, -55, '#4a8fe7'],
  [22, 215, 85, '#e8874a'],
  [91, 251, 65, '#6b7a3a'],
  [96, 189, 55, '#5fc3b5'],
  [71, 143, 60, '#5fc3b5'],
  [174, 195, 30, '#e3c53a'],
  [300, -60, -15, '#4a8fe7'],
  [260, 90, 40, '#b44fd6'],
]

const preloadContact = () => import('./ContactSection')

const CtaSection = () => {
  const [open, setOpen] = useState(false)

  // The form page is pushed onto history so the browser/phone back button closes it.
  const openForm = () => {
    window.history.pushState({ contactForm: true }, '', '#contact-form')
    setOpen(true)
  }

  const closeForm = () => {
    if (window.history.state?.contactForm) window.history.back()
    else setOpen(false)
  }

  useEffect(() => {
    window.addEventListener(OPEN_CONTACT_FORM, openForm)
    return () => window.removeEventListener(OPEN_CONTACT_FORM, openForm)
  }, [])

  useEffect(() => {
    if (!open) return
    document.body.classList.add('no-scroll')
    const onPop = () => setOpen(false)
    const onKey = (e) => e.key === 'Escape' && closeForm()
    window.addEventListener('popstate', onPop)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('no-scroll')
      window.removeEventListener('popstate', onPop)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <section className="cta reveal" id="hire">
      <div className="cta-strokes" aria-hidden="true">
        {strokes.map(([x, y, r, c], i) => (
          <span
            key={i}
            className={`cta-stroke ${Math.abs(y) < 150 ? 'cta-stroke--near' : ''}`}
            style={{ '--x': x, '--y': y, '--r': `${r}deg`, '--c': c, '--d': `${(i % 6) * 0.04}s`, '--f': `${3.2 + (i % 5) * 0.6}s` }}
          >
            <i />
          </span>
        ))}
      </div>

      <div className="cta-inner">
        <h2 className="cta-title">Let's Build Together</h2>
        <p className="cta-sub">
          Have a project, a backend that needs work, or a role you think I'd fit?
          Fill in a short form and I'll get back to you within a day.
        </p>

        <button type="button" className="cta-btn" onClick={openForm} onPointerEnter={preloadContact} onFocus={preloadContact}>
          Fill the Form <span className="btn-arrow" aria-hidden="true">→</span>
        </button>

        <div className="cta-proof">
          <span className="cta-avatars" aria-hidden="true">
            {projects.slice(0, 6).map((p) => (
              <img key={p.title} src={p.image.thumb} alt="" width="26" height="26" loading="lazy" decoding="async" />
            ))}
          </span>
          <span>{projects.length} projects shipped so far</span>
        </div>
      </div>

      {open && (
        <div className="form-page" role="dialog" aria-modal="true" aria-label="Contact form">
          <div className="form-page-bar">
            <button type="button" className="form-page-back" onClick={closeForm}>
              <span aria-hidden="true">←</span> Back
            </button>
          </div>
          <Suspense fallback={<div className="form-page-loading" aria-busy="true" />}>
            <ContactSection />
          </Suspense>
        </div>
      )}
    </section>
  )
}

export default CtaSection
