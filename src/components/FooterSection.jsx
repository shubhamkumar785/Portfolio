import React from 'react'
import resumePdf from '../assets/images/resume.pdf'

const FooterSection = () => {
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
              <li><a href="#home" className="footer-col-link">Home</a></li>
              <li><a href="#about" className="footer-col-link">About Me</a></li>
              <li><a href="#projects" className="footer-col-link">Projects</a></li>
              <li><a href="#services" className="footer-col-link">Services</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col-heading">SERVICES</h4>
            <ul className="footer-col-list">
              <li><a href="#services" className="footer-col-link">Backend Development</a></li>
              <li><a href="#services" className="footer-col-link">System Design</a></li>
              <li><a href="#services" className="footer-col-link">Web Application</a></li>
              <li><a href="#services" className="footer-col-link">Cloud Engineering</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-heading">CONTACT</h4>
            <ul className="footer-col-list footer-contact-list">
              <li className="footer-contact-item">
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
                <a href="mailto:shubhammpathak566@gmail.com" className="footer-col-link">shubhammpathak566@gmail.com</a>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </span>
                <a href="tel:+917858024086" className="footer-col-link">+91 7858024086</a>
              </li>
            </ul>
          </div>
        </div>


        {/* Copyright */}
        <div className="footer-copyright">
          <span>© 2025 Shubham Kumar. All rights reserved.</span>
        </div>

      </div>
    </section>
  )
}

export default FooterSection
