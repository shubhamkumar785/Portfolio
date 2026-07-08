import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import DesignGallerySection from './components/DesignGallerySection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'
import './styles/portfolio.css'

function App() {
  const [showContactPage, setShowContactPage] = useState(false)

  const handleContactClick = () => {
    setShowContactPage(true)
    window.scrollTo(0, 0)
  }

  const handleBackClick = () => {
    setShowContactPage(false)
    window.scrollTo(0, 0)
  }

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
      {showContactPage ? (
        <div className="contact-page-view">
          <Header onContactClick={handleContactClick} showContactPage={showContactPage} onBackClick={handleBackClick} />
          <button className="back-button" onClick={handleBackClick}>
            ← Back
          </button>
          <ContactSection isFullPage={true} />
        </div>
      ) : (
        <>
          <Header onContactClick={handleContactClick} showContactPage={showContactPage} />
          <HeroSection />
          <DesignGallerySection />
          <ProjectsSection />
          <ServicesSection />
          <FooterSection />
        </>
      )}
    </div>
  )
}

export default App
