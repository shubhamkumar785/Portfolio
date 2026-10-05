// Any component can open the contact form page (it lives in CtaSection).
export const OPEN_CONTACT_FORM = 'open-contact-form'

export const openContactForm = (e) => {
  e?.preventDefault()
  window.dispatchEvent(new Event(OPEN_CONTACT_FORM))
}
