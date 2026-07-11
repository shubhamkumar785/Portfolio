import React, { useState, useEffect } from 'react'
import resumePdf from '../assets/images/resume.pdf'

const FooterSection = () => {
  const [activeLink, setActiveLink] = useState(null)

  // Manage body scroll locking when modal is open
  useEffect(() => {
    if (activeLink) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [activeLink])

  // Manage escape key closing modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveLink(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const linkDetails = {
    // Quick Links
    'Home': {
      title: 'Welcome Home',
      category: 'Quick Navigation',
      description: "Welcome to my engineering portfolio! This landing screen serves as the primary dashboard of my work. It features a high-level visual introduction, my design philosophies, core statistics detailing completed projects, and a quick summary of my technical competencies. Navigating home allows you to view the introductory banner and get an overall impression of my professional profile.",
      actionLabel: 'Go to Hero Section',
      action: () => {
        const el = document.getElementById('home')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        else window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    'About Me': {
      title: 'About Shubham',
      category: 'Quick Navigation',
      description: "Learn more about my professional journey and development mindset. I am a software engineer focused on building secure, performant server-side systems and Generative AI applications. I specialize in designing microservice configurations, writing test suites with Mockito, establishing real-time communication modules, and packaging clean codebases using modern standard container formats.",
      actionLabel: 'Read My Profile',
      action: () => {
        const el = document.getElementById('about') || document.querySelector('.hero-section')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    },
    'Projects': {
      title: 'Explore My Work',
      category: 'Quick Navigation',
      description: "Take a closer look at the actual applications and frameworks I have designed and deployed. This includes E-Zone (an enterprise-grade university portal built on microservices with secure JWT tokens), CampusSetu (a real-time academic utility platform), scalable ecommerce database APIs, swing GUI fee calculators, and Python voice-based AI assistant prototypes.",
      actionLabel: 'View Projects Section',
      action: () => {
        const el = document.getElementById('works') || document.getElementById('projects')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    },
    'Services': {
      title: 'Technical Services',
      category: 'Quick Navigation',
      description: "Discover the professional engineering capabilities I offer. My service profiles cover comprehensive backend microservices development, system design indexing strategies, API rate-limiting structures, database optimization (normalizations, Redis caching layers), continuous deployment pipelines, and custom Large Language Model integrations (RAG, embedding indexing).",
      actionLabel: 'View Services Offered',
      action: () => {
        const el = document.getElementById('services')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    },

    // Services
    'Backend Development': {
      title: 'Backend Engineering',
      category: 'Service Profile',
      description: "I specialize in constructing robust, performant server-side engines utilizing Java, Spring Boot, and MVC controllers. My architectures prioritize clean code separation, secure REST API endpoints, token-based authorization frameworks, WebSocket integration for push events, and strict transactional data safety across relational frameworks.",
      actionLabel: 'Explore Services Section',
      action: () => {
        const el = document.getElementById('services')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    },
    'System Design': {
      title: 'System Architecture',
      category: 'Service Profile',
      description: "Designing high-scale, decoupled database schemas and microservices forms the core of my backend solutions. I focus on creating logical entity relationships, establishing gateway routing, configuring index maps, deploying Redis caches to bypass heavy queries, and balancing loads between relational (MySQL, PostgreSQL) and document (MongoDB) backends.",
      actionLabel: 'Explore Services Section',
      action: () => {
        const el = document.getElementById('services')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    },
    'Web Application': {
      title: 'Full Stack Web Apps',
      category: 'Service Profile',
      description: "Building production-grade web systems involves bridging rich frontend user interfaces with secure backend architectures. I design single-page client structures using React, manage dynamic application states, build responsive layouts that render perfectly on mobile and desktop screens, and integrate them with Java REST APIs.",
      actionLabel: 'Explore Services Section',
      action: () => {
        const el = document.getElementById('services')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    },
    'Cloud Engineering': {
      title: 'Cloud & Container Deployments',
      category: 'Service Profile',
      description: "I standardize deployment environments by packaging services into Docker containers to guarantee absolute consistency across staging and production. I build automated CI/CD validation paths using GitHub Actions and host configurations on AWS cloud modules, ensuring scalable services with high availability.",
      actionLabel: 'Explore Services Section',
      action: () => {
        const el = document.getElementById('services')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    },

    // Contacts
    'India': {
      title: 'Location & Region',
      category: 'Contact Info',
      description: "I am based in India, collaborating with development teams and business partners globally. I utilize git-based collaboration, automated builds, and precise tracking to deliver high-quality code across different timezones, ensuring absolute project visibility and milestone updates.",
      actionLabel: 'Get in Touch',
      action: () => {
        const contactSection = document.getElementById('footer')
        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    },
    'Email': {
      title: 'Email Address',
      category: 'Contact Info',
      description: "For professional inquiries, project collaborations, consulting arrangements, or system design audits, you can contact me directly at shubhammpathak566@gmail.com. I review my mail queue daily and will respond promptly to align on technical specs and project scopes.",
      actionLabel: 'Compose Email',
      action: () => {
        window.location.href = 'mailto:shubhammpathak566@gmail.com'
      }
    },
    'Phone': {
      title: 'Phone & WhatsApp',
      category: 'Contact Info',
      description: "Need to coordinate specs, run a technical consultation, or discuss an urgent codebase request? Feel free to call or drop a WhatsApp message directly at +91 7858024086. I am available for phone conferences and live technical syncs to discuss software strategies.",
      actionLabel: 'Place Call',
      action: () => {
        window.location.href = 'tel:+917858024086'
      }
    }
  }

  const handleLinkClick = (e, key) => {
    e.preventDefault()
    setActiveLink(linkDetails[key])
  }

  const closeModal = () => setActiveLink(null)

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('footer-modal-overlay')) {
      closeModal()
    }
  }

  const handleActionClick = () => {
    if (activeLink && activeLink.action) {
      activeLink.action()
    }
    closeModal()
  }

  return (
    <section className="footer-section" id="footer">
      <div className="footer-inner">

        {/* Top: LET'S WORK Together */}
        <div className="footer-main">
          <div className="footer-center">
            <div className="footer-title-wrap">
              <h2 className="footer-title" style={{ letterSpacing: '8px' }}>LET&apos;S WORK</h2>
              <span className="footer-together">Together</span>
            </div>
          </div>
        </div>

        {/* Main footer columns */}
        <div className="footer-columns">
          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-heading">QUICK LINKS</h4>
            <ul className="footer-col-list">
              <li><a href="#home" className="footer-col-link" onClick={(e) => handleLinkClick(e, 'Home')}>Home</a></li>
              <li><a href="#about" className="footer-col-link" onClick={(e) => handleLinkClick(e, 'About Me')}>About Me</a></li>
              <li><a href="#projects" className="footer-col-link" onClick={(e) => handleLinkClick(e, 'Projects')}>Projects</a></li>
              <li><a href="#services" className="footer-col-link" onClick={(e) => handleLinkClick(e, 'Services')}>Services</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col-heading">SERVICES</h4>
            <ul className="footer-col-list">
              <li><a href="#services" className="footer-col-link" onClick={(e) => handleLinkClick(e, 'Backend Development')}>Backend Development</a></li>
              <li><a href="#services" className="footer-col-link" onClick={(e) => handleLinkClick(e, 'System Design')}>System Design</a></li>
              <li><a href="#services" className="footer-col-link" onClick={(e) => handleLinkClick(e, 'Web Application')}>Web Application</a></li>
              <li><a href="#services" className="footer-col-link" onClick={(e) => handleLinkClick(e, 'Cloud Engineering')}>Cloud Engineering</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-heading">CONTACT</h4>
            <ul className="footer-col-list footer-contact-list">
              <li className="footer-contact-item" style={{ cursor: 'pointer' }} onClick={(e) => handleLinkClick(e, 'India')}>
                <span className="footer-contact-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>India</span>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <a href="mailto:shubhammpathak566@gmail.com" className="footer-col-link" onClick={(e) => handleLinkClick(e, 'Email')}>shubhammpathak566@gmail.com</a>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </span>
                <a href="tel:+917858024086" className="footer-col-link" onClick={(e) => handleLinkClick(e, 'Phone')}>+91 7858024086</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <span>© 2025 Shubham. All rights reserved.</span>
        </div>

      </div>

      {activeLink && (
        <div className="footer-modal-overlay animate-fade-in" onClick={handleOverlayClick}>
          <div className="footer-modal-content animate-slide-up">
            <button className="footer-modal-close" onClick={closeModal} aria-label="Close modal">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="footer-modal-body">
              <span className="footer-modal-kicker">{activeLink.category}</span>
              <h3 className="footer-modal-title">{activeLink.title}</h3>
              <div className="footer-modal-divider"></div>
              <p className="footer-modal-desc">{activeLink.description}</p>
              
              <button className="footer-modal-action-btn" onClick={handleActionClick}>
                {activeLink.actionLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default FooterSection
