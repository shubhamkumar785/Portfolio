import React, { useState } from 'react'
import resumePdf from '../assets/images/resume.pdf'

const Header = ({ onContactClick, showContactPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  const handleContactClick = (e) => {
    e.preventDefault()
    closeMenu()
    if (onContactClick) {
      onContactClick()
    }
  }

  return (
    <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        aria-controls="site-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className="nav" id="site-navigation">
        {!showContactPage && (
          <>
            <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
            <a href="#services" className="nav-link" onClick={closeMenu}>Services</a>
            <a href="#works" className="nav-link" onClick={closeMenu}>Works</a>
          </>
        )}
        <a href="#contact" className="nav-link" onClick={handleContactClick}>Contact</a>
        <a href={resumePdf} className="resume-button" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
          <span className="download-icon">↓</span>
          Resume
        </a>
      </nav>
    </header>
  )
}

export default Header
