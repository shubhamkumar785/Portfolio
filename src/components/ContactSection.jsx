import React, { useState } from 'react'

const ContactSection = ({ isFullPage = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', service: '', email: '', phone: '', message: '' })
  }

  return (
    <section className={`contact-section ${isFullPage ? 'contact-full-page' : ''}`} id="contact">
      <div className="contact-inner">
        <p className="contact-label">CONTACT</p>
        <h2 className="contact-heading">LET'S TALK</h2>
        <p className="contact-subtext">
          Share a few details and I will get back to you about your project,
          backend system, or AI integration.
        </p>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="cf-group">
            <label className="cf-label" htmlFor="cf-name">NAME *</label>
            <input
              id="cf-name"
              className="cf-input"
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="cf-group">
            <label className="cf-label" htmlFor="cf-service">SERVICE *</label>
            <select
              id="cf-service"
              className="cf-input cf-select"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a service</option>
              <option value="backend">Backend Development</option>
              <option value="genai">Gen AI Integration</option>
              <option value="api">REST API Design</option>
              <option value="microservice">Microservices Architecture</option>
              <option value="system-design">System Design</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="cf-group">
            <label className="cf-label" htmlFor="cf-email">EMAIL *</label>
            <input
              id="cf-email"
              className="cf-input"
              type="email"
              name="email"
              placeholder="you@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="cf-group">
            <label className="cf-label" htmlFor="cf-phone">PHONE NUMBER *</label>
            <input
              id="cf-phone"
              className="cf-input"
              type="tel"
              name="phone"
              placeholder="10 digit phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="cf-group">
            <label className="cf-label" htmlFor="cf-message">MESSAGE *</label>
            <textarea
              id="cf-message"
              className="cf-input cf-textarea"
              name="message"
              placeholder="Type your message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
            />
          </div>

          <button className="cf-submit" type="submit">
            {submitted ? '✓ Sent!' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
