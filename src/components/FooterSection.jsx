import React from 'react'
import resumePdf from '../assets/images/resume.pdf'
import { contact, projects } from '../data'
import { openContactForm } from '../contactForm'

const icons = {
  github: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
  linkedin: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  whatsapp: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z',
  email: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
}

const socials = [
  { name: 'GitHub', href: contact.github, icon: icons.github },
  { name: 'LinkedIn', href: contact.linkedin, icon: icons.linkedin },
  { name: 'WhatsApp', href: `https://wa.me/${contact.phoneRaw}`, icon: icons.whatsapp },
  { name: 'Email', href: `mailto:${contact.email}`, icon: icons.email },
]

const external = { target: '_blank', rel: 'noopener noreferrer' }

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <nav className="footer-col reveal" aria-label="Navigate">
            <h3 className="footer-h">Navigate</h3>
            <a href="#top">Home</a>
            <a href="#experience">Experience</a>
            <a href="#work">Projects</a>
            <a href="#hire">Work with me</a>
            <a href="#faq">FAQ</a>
            <a href="#contact-form" onClick={openContactForm}>Contact form</a>
            <a href={resumePdf} {...external}>Résumé</a>
          </nav>

          <nav className="footer-col reveal" style={{ '--stagger': '0.08s' }} aria-label="Projects">
            <h3 className="footer-h">Projects</h3>
            {projects.map((p) => (
              <a key={p.title} href={p.link} {...external}>{p.title}</a>
            ))}
          </nav>

          <nav className="footer-col reveal" style={{ '--stagger': '0.16s' }} aria-label="Connect">
            <h3 className="footer-h">Connect</h3>
            <a href={contact.github} {...external}>GitHub</a>
            <a href={contact.linkedin} {...external}>LinkedIn</a>
            <a href={`https://wa.me/${contact.phoneRaw}`} {...external}>WhatsApp</a>
            <a href={`mailto:${contact.email}`}>Email</a>
            <a href={`tel:+${contact.phoneRaw}`}>Call</a>
          </nav>

          <div className="footer-side reveal" style={{ '--stagger': '0.24s' }}>
            <div className="footer-top-row">
              <div className="footer-socials">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    title={s.name}
                    {...(s.href.startsWith('http') ? external : {})}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d={s.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-msg">
              <button type="button" className="footer-msg-field" onClick={openContactForm}>
                Have a project in mind?
              </button>
              <button type="button" className="footer-msg-btn" onClick={openContactForm}>
                Message me
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
