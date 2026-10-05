import React, { useEffect, useState } from 'react'
import { contact } from '../data'

const istTime = () =>
  new Date().toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })

const topics = [
  'Backend / APIs',
  'Full stack app',
  'Website',
  'AI integration',
  'Job opportunity',
  'Just saying hi',
]

const MAX_MESSAGE = 1000
const emptyForm = { name: '', email: '', topic: '', message: '' }
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

const ContactSection = () => {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [time, setTime] = useState(istTime)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setTime(istTime()), 30000)
    return () => clearInterval(id)
  }, [])

  const update = (name, value) => {
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please add your name.'
    if (form.email && !isEmail(form.email)) next.email = 'That email doesn\'t look right.'
    if (!form.message.trim()) next.message = 'Tell me a little about what you need.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const composeBody = () =>
    `Hi Shubham,\n\n${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`

  const subject = () => (form.topic ? `${form.topic}: from ${form.name}` : `Hello from ${form.name}`)

  // No backend here: the form opens the visitor's mail app with everything pre-filled.
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    window.location.href =
      `mailto:${contact.email}?subject=${encodeURIComponent(subject())}&body=${encodeURIComponent(composeBody())}`
    setSent(true)
  }

  const whatsappHref = () => {
    const text = form.message ? composeBody() : 'Hi Shubham, I found your portfolio and wanted to talk about a project.'
    return `https://wa.me/${contact.phoneRaw}?text=${encodeURIComponent(text)}`
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch (err) {
      window.location.href = `mailto:${contact.email}`
    }
  }

  const rows = [
    {
      label: 'Email',
      value: contact.email,
      action: (
        <button type="button" className={`ct-action ${copied ? 'is-done' : ''}`} onClick={copyEmail}>
          {copied ? 'Copied ✓' : 'Copy'}
        </button>
      ),
    },
    {
      label: 'Phone',
      value: contact.phone,
      action: <a className="ct-action" href={`tel:+${contact.phoneRaw}`}>Call</a>,
    },
    {
      label: 'WhatsApp',
      value: 'Quickest way to reach me',
      action: <a className="ct-action" href={`https://wa.me/${contact.phoneRaw}`} target="_blank" rel="noopener noreferrer">Chat ↗</a>,
    },
    {
      label: 'Based in',
      value: (
        <>
          {contact.location} <span className="ct-time">· {time} IST</span>
        </>
      ),
    },
    {
      label: 'Elsewhere',
      value: (
        <span className="ct-links">
          <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </span>
      ),
    },
  ]

  return (
    <section className="section contact-page">
      <div className="container ct-grid">
        <div className="ct-info reveal">
          <h2 className="work-title">Let's Talk</h2>
          <p className="work-sub ct-sub">
            A project, a backend that needs fixing, or a role you think I'd fit. Write a few lines
            and I'll get back to you, usually within a day.
          </p>

          <ul className="ct-rows">
            {rows.map((row, i) => (
              <li key={row.label} className="ct-row" style={{ '--i': i }}>
                <span className="ct-label">{row.label}</span>
                <span className="ct-value">{row.value}</span>
                {row.action || <span />}
              </li>
            ))}
          </ul>
        </div>

        <div className="ct-form-wrap reveal" style={{ '--stagger': '0.1s' }}>
          {sent ? (
            <div className="ct-sent" role="status">
              <span className="ct-sent-icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <h3 className="ct-sent-title">Almost there, {form.name.split(' ')[0]}.</h3>
              <p className="ct-sent-text">
                Your mail app should have opened with the message ready. Just hit send there.
                If nothing opened, send it on WhatsApp instead.
              </p>
              <div className="ct-actions">
                <a href={whatsappHref()} className="ct-btn" target="_blank" rel="noopener noreferrer">
                  Send on WhatsApp <span className="btn-arrow" aria-hidden="true">→</span>
                </a>
                <button type="button" className="ct-btn ct-btn-ghost" onClick={() => setSent(false)}>
                  Edit message
                </button>
              </div>
            </div>
          ) : (
            <form className="ct-form" onSubmit={handleSubmit} noValidate>
              <div className="ct-field-row">
                <label className={`ct-field ${errors.name ? 'has-error' : ''}`}>
                  <span className="ct-field-label">Your name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    autoComplete="name"
                    placeholder="Jane Doe"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <span className="ct-error">{errors.name}</span>}
                </label>
                <label className={`ct-field ${errors.email ? 'has-error' : ''}`}>
                  <span className="ct-field-label">Email <em>(so I can reply)</em></span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    autoComplete="email"
                    placeholder="jane@company.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <span className="ct-error">{errors.email}</span>}
                </label>
              </div>

              <fieldset className="ct-field">
                <legend className="ct-field-label">What's it about?</legend>
                <div className="ct-chips">
                  {topics.map((t) => (
                    <button
                      key={t}
                      type="button"
                      className="ct-chip"
                      aria-pressed={form.topic === t}
                      onClick={() => update('topic', form.topic === t ? '' : t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </fieldset>

              <label className={`ct-field ${errors.message ? 'has-error' : ''}`}>
                <span className="ct-field-label">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  maxLength={MAX_MESSAGE}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="A few lines about what you need, rough timeline, links…"
                  aria-invalid={!!errors.message}
                />
                <span className="ct-field-foot">
                  {errors.message ? <span className="ct-error">{errors.message}</span> : <span />}
                  <span className="ct-count">{form.message.length}/{MAX_MESSAGE}</span>
                </span>
              </label>

              <div className="ct-actions">
                <button type="submit" className="ct-btn">
                  Send message <span className="btn-arrow" aria-hidden="true">→</span>
                </button>
                <a href={whatsappHref()} className="ct-btn ct-btn-ghost" target="_blank" rel="noopener noreferrer">
                  WhatsApp instead
                </a>
              </div>
              <p className="ct-note">Opens your mail app or WhatsApp with this message filled in. Nothing is stored on this site.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
