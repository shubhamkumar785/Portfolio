import React, { useState } from 'react'

const ContactSection = ({ isFullPage = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', phone: '', email: '', service: '', message: '' })
  }

  return (
    <section className={`contact-section ${isFullPage ? 'contact-full-page' : ''}`} id="contact">
      <div className="contact-main-wrapper">
        
        {/* Section Header */}
        <div className="contact-section-header">
          <p className="contact-label">CONTACT</p>
          <h2 className="contact-heading">LET'S TALK</h2>
          <p className="contact-subtext">
            Share a few details and I will get back to you about your project, backend system, or AI integration.
          </p>
        </div>

        <div className="c-container">
        
        {/* LEFT COLUMN: 3 Contact Cards + Google Map */}
        <div className="c-left-col">
          {/* 3 Top Cards */}
          <div className="c-cards-grid">
            
            {/* Card 1: Call Us */}
            <div className="c-card">
              <div className="c-card-icon c-icon-blue">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
                </svg>
              </div>
              <h4 className="c-card-title">Call Us</h4>
              <p className="c-card-text">
                Speak directly with me for your project requirements.
              </p>
              <a href="tel:+917858024086" className="c-card-action c-action-blue">
                Call Now
              </a>
            </div>

            {/* Card 2: WhatsApp Us */}
            <div className="c-card">
              <div className="c-card-icon c-icon-green">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h4 className="c-card-title">WhatsApp Us</h4>
              <p className="c-card-text">
                Send your design, requirements, or enquiry directly on WhatsApp.
              </p>
              <a
                href="https://wa.me/917858024086"
                target="_blank"
                rel="noopener noreferrer"
                className="c-card-action c-action-green"
              >
                WhatsApp
              </a>
            </div>

            {/* Card 3: Email Us */}
            <div className="c-card">
              <div className="c-card-icon c-icon-red">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <h4 className="c-card-title">Email Us</h4>
              <p className="c-card-text">
                Send us your requirements and we'll get back to you.
              </p>
              <a href="mailto:shubhammpathak566@gmail.com" className="c-card-action c-action-red">
                Send Email
              </a>
            </div>

          </div>

          {/* Bottom Card: Google Map */}
          <div className="c-map-box">
            <div className="c-map-info">
              <h3 className="c-map-title">Find Us on Map</h3>
              <p className="c-map-address">
                Road number 23, Transport Colony, Adityapur 2, Jamshedpur-831013, Jharkhand, India
              </p>
            </div>
            <div className="c-map-frame-wrapper">
              <iframe
                title="Find Us on Google Map"
                src="https://maps.google.com/maps?q=22.7690412,86.1631232&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Request a Quote Form */}
        <div className="c-right-col">
          <div className="c-form-card">
            <h2 className="c-form-heading">Request a Quote</h2>

            <form className="c-form" onSubmit={handleSubmit} noValidate>
              
              {/* Full Name */}
              <div className="c-form-group">
                <label className="c-label">
                  Full Name <span className="c-req">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="c-input"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone & Email Row */}
              <div className="c-form-row">
                <div className="c-form-group">
                  <label className="c-label">
                    Phone Number <span className="c-req">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="c-input"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="c-form-group">
                  <label className="c-label">
                    Email Address <span className="c-req">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="c-input"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Select Service */}
              <div className="c-form-group">
                <label className="c-label">
                  Select Service <span className="c-req">*</span>
                </label>
                <div className="c-select-wrapper">
                  <select
                    name="service"
                    className="c-input c-select"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Choose a service</option>
                    <option value="Backend Development">Backend Development</option>
                    <option value="Gen AI Integration">Gen AI Integration</option>
                    <option value="REST API Design">REST API Design</option>
                    <option value="Microservices Architecture">Microservices Architecture</option>
                    <option value="System Design">System Design &amp; Architecture</option>
                    <option value="Other">Other Requirement</option>
                  </select>
                </div>
              </div>

              {/* Message / Requirement */}
              <div className="c-form-group">
                <label className="c-label">
                  Message / Requirement <span className="c-req">*</span>
                </label>
                <textarea
                  name="message"
                  className="c-input c-textarea"
                  placeholder="Describe your requirements in detail..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit Button */}
              <button className="c-submit-btn" type="submit">
                {submitted ? '✓ Request Submitted!' : 'Submit Request'}
              </button>

            </form>
          </div>
        </div>

      </div>
      </div>
    </section>
  )
}

export default ContactSection
