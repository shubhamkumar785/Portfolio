import React, { useState } from 'react'

const ContactSection = ({ isFullPage }) => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className={`contact-section ${isFullPage ? 'contact-full-page' : ''}`} id="contact">
      <div className="contact-shell">
        <div className="contact-header">
          <span className="contact-kicker">CONTACT</span>
          <h2 className="contact-heading">LET&apos;S TALK</h2>
          <p className="contact-description">
            Share a few details and I will get back to you about your project, backend system, or AI integration.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" placeholder="Your name" required />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" placeholder="your@email.com" required />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-phone">Phone Number</label>
            <input id="contact-phone" name="phone" type="tel" placeholder="+91 00000 00000" required />
          </div>

          <div className="contact-field contact-field-full">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="5" placeholder="Type your message" required></textarea>
          </div>

          <button className="contact-submit" type="submit">Submit</button>

          {submitted && (
            <p className="contact-status">Thanks. Your message details are ready.</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default ContactSection
