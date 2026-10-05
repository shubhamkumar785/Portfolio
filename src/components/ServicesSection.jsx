import React, { useEffect, useRef, useState } from 'react'
import { services } from '../data'
import { openContactForm } from '../contactForm'

const ServicesSection = () => {
  const [active, setActive] = useState(null)
  const closeRef = useRef(null)
  const lastTrigger = useRef(null)

  useEffect(() => {
    if (!active) return
    document.body.classList.add('no-scroll')
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('no-scroll')
      window.removeEventListener('keydown', onKey)
      lastTrigger.current?.focus()
    }
  }, [active])

  const open = (service, e) => {
    lastTrigger.current = e.currentTarget
    setActive(service)
  }

  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <header className="section-head reveal">
          <span className="section-tag">// 02 · services</span>
          <h2 className="section-title">What I can help you with</h2>
          <p className="section-sub">
            Freelance or contract work, mostly on the backend. Click any card for the details.
          </p>
        </header>

        <div className="services-grid">
          {services.map((service, index) => (
            <button
              key={service.title}
              type="button"
              className="service reveal"
              style={{ '--stagger': `${(index % 3) * 0.07}s` }}
              onClick={(e) => open(service, e)}
            >
              <span className="service-num">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <span className="service-tags">{service.items.join(' · ')}</span>
              <span className="service-more">details <span aria-hidden="true">→</span></span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="modal-overlay"
          onClick={(e) => e.target === e.currentTarget && setActive(null)}
        >
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button ref={closeRef} className="modal-close" onClick={() => setActive(null)} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <span className="section-tag">// service</span>
            <h3 className="modal-title" id="modal-title">{active.title}</h3>
            <p className="modal-lead">{active.detailedDescription}</p>

            <div className="modal-cols">
              <div>
                <h4 className="modal-h">What that looks like</h4>
                <ul className="modal-list">
                  {active.capabilities.map((cap) => <li key={cap}>{cap}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="modal-h">Tools I reach for</h4>
                <dl className="modal-tech">
                  {active.technologiesDetail.map((tech) => (
                    <div key={tech.name}>
                      <dt>{tech.name}</dt>
                      <dd>{tech.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="modal-foot">
              <ul className="chips">
                {active.items.map((item) => <li key={item} className="chip">{item}</li>)}
              </ul>
              <a href="#contact-form" className="btn btn-small" onClick={(e) => { setActive(null); openContactForm(e) }}>
                Talk about this <span className="btn-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ServicesSection
