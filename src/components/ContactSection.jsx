import React, { useState } from 'react'

// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwyhLNPY6WfvP8-F_wZM171Ub0229Bgi33BmX6dn6kBf4tLuUCCS35Q_jBuFSuHewe_/exec"

const ContactSection = ({ isFullPage }) => {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [errors, setErrors] = useState({})

  // Service options list
  const serviceOptions = [
    'Backend Development',
    'Full Stack Development',
    'API Design & Development',
    'Maintenance & Support',
    'AI Integration',
    'Database Design'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    // Validate Email - must contain @gmail.com
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!formData.email.includes('@gmail.com')) {
      newErrors.email = 'Email must be a Gmail address (@gmail.com)'
    }

    // Validate Phone - must be exactly 10 digits
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else {
      const phoneDigits = formData.phone.replace(/\D/g, '') // Remove non-digits
      if (phoneDigits.length !== 10) {
        newErrors.phone = 'Phone number must be exactly 10 digits'
      }
    }

    // Validate Service
    if (!formData.service) {
      newErrors.service = 'Please select a service'
    }

    // Validate Message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Validate form before submission
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Clean phone number - keep only digits
      const cleanPhone = formData.phone.replace(/\D/g, '')

      // Create form data with the exact parameter names expected by Apps Script
      const formBody = new URLSearchParams({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: cleanPhone,
        service: formData.service,
        message: formData.message.trim(),
      })

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      })

      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
      setErrors({})
      setSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Unable to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNewMessage = () => {
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <section className={`contact-section ${isFullPage ? 'contact-full-page' : ''}`} id="contact">
        <div className="contact-shell">
          <div className="contact-success">
            <div className="contact-success-icon">✓</div>
            <h3 className="contact-success-title">Message Received!</h3>
            <p className="contact-success-desc">
              Thank you for reaching out. I've received your message and will get back to you within 24 hours.
            </p>
            <button className="contact-success-btn" onClick={handleNewMessage}>
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`contact-section ${isFullPage ? 'contact-full-page' : ''} inverted-reveal-scroller`} id="contact">
      <div className="contact-shell">
        <div className="contact-header reveal-up">
          <span className="contact-kicker">CONTACT</span>
          <h2 className="contact-heading">LET&apos;S TALK</h2>
          <p className="contact-description">
            Share a few details and I will get back to you about your project, backend system, or AI integration.
          </p>
        </div>

        <form className="contact-form reveal-up delay-2" onSubmit={handleSubmit} noValidate>
          <div className="contact-field">
            <label htmlFor="contact-name">Name *</label>
            <input 
              id="contact-name" 
              name="name" 
              type="text" 
              placeholder="Your full name" 
              value={formData.name}
              onChange={handleChange}
              required 
              style={errors.name ? { borderColor: '#ff5722' } : {}}
            />
            {errors.name && (
              <span style={{ color: '#ff5722', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                {errors.name}
              </span>
            )}
          </div>

          <div className="contact-field">
            <label htmlFor="contact-service">Service *</label>
            <select
              id="contact-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                border: errors.service ? '1.5px solid #ff5722' : '1.5px solid rgba(45, 45, 45, 0.16)',
                borderRadius: '12px',
                background: '#fbf8f1',
                color: '#2d2d2d',
                fontFamily: 'inherit',
                fontSize: '15px',
                lineHeight: '1.45',
                padding: '13px 14px',
                outline: 'none',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
                cursor: 'pointer'
              }}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <span style={{ color: '#ff5722', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                {errors.service}
              </span>
            )}
          </div>

          <div className="contact-field">
            <label htmlFor="contact-email">Email *</label>
            <input 
              id="contact-email" 
              name="email" 
              type="email" 
              placeholder="your@gmail.com" 
              value={formData.email}
              onChange={handleChange}
              required 
              style={errors.email ? { borderColor: '#ff5722' } : {}}
            />
            {errors.email && (
              <span style={{ color: '#ff5722', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                {errors.email}
              </span>
            )}
          </div>

          <div className="contact-field">
            <label htmlFor="contact-phone">Phone Number *</label>
            <input 
              id="contact-phone" 
              name="phone" 
              type="tel" 
              placeholder="10-digit phone number" 
              value={formData.phone}
              onChange={handleChange}
              maxLength="10"
              required 
              style={errors.phone ? { borderColor: '#ff5722' } : {}}
            />
            {errors.phone && (
              <span style={{ color: '#ff5722', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                {errors.phone}
              </span>
            )}
          </div>

          <div className="contact-field contact-field-full">
            <label htmlFor="contact-message">Message *</label>
            <textarea 
              id="contact-message" 
              name="message" 
              rows="5" 
              placeholder="Type your message" 
              value={formData.message}
              onChange={handleChange}
              required
              style={errors.message ? { borderColor: '#ff5722' } : {}}
            ></textarea>
            {errors.message && (
              <span style={{ color: '#ff5722', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                {errors.message}
              </span>
            )}
          </div>

          <button 
            className="contact-submit" 
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
