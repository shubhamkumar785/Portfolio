import React, { useState } from 'react'
import { openContactForm } from '../contactForm'

const faqs = [
  {
    q: 'Are you available for freelance work?',
    a: 'Yes. I take on a small number of freelance projects at a time so each one gets proper attention. Fill in the contact form with a few details and I\'ll tell you honestly whether I can take it on.',
  },
  {
    q: 'What kind of projects do you take on?',
    a: 'Mostly backend work: REST APIs, microservices, database design and fixing slow or flaky systems. I also build full stack apps with React + Spring Boot, business websites, and AI features like RAG-based assistants.',
  },
  {
    q: 'Which tech stack do you work with?',
    a: 'Java, Spring Boot and microservices on the backend; MySQL, PostgreSQL, MongoDB and Redis for data; Docker and AWS for deployment; React and Node.js on the frontend; Spring AI and LangChain4j for LLM work.',
  },
  {
    q: 'How does a project usually work?',
    a: 'We start with a short call to understand what you need. Then I share the scope, timeline and quote. I build in small milestones with regular updates, deploy it, and hand over everything you need to run it.',
  },
  {
    q: 'Do you offer support after launch?',
    a: 'Yes. Bug fixes, small changes, dependency updates and performance tuning after launch are all part of how I work, so the project doesn\'t fall apart a month later.',
  },
]

const FaqSection = () => {
  const [open, setOpen] = useState(0)

  return (
    <section className="section" id="faq">
      <div className="container faq-grid">
        <aside className="faq-aside reveal">
          <h2 className="work-title">FAQ</h2>
          <p className="work-sub">
            Quick answers to what people usually ask before we work together.
          </p>
          <a href="#contact-form" className="work-cta" onClick={openContactForm}>
            <span className="work-cta-arrow" aria-hidden="true">↳</span> Still curious? Ask me
          </a>
        </aside>

        <ol className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <li
                key={item.q}
                className="faq-item reveal"
                data-open={isOpen}
                style={{ '--stagger': `${Math.min(i, 4) * 0.05}s` }}
              >
                <h3>
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    id={`faq-q-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className="faq-q-text">{item.q}</span>
                    <span className="faq-icon" aria-hidden="true" />
                  </button>
                </h3>
                <div className="faq-a" id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                  <div className="faq-a-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default FaqSection
