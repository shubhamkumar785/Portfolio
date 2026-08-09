import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'
import useScrollAnimation from './hooks/useScrollAnimation'
import './styles/portfolio.css'

function App() {
  const [showContactPage, setShowContactPage] = useState(false)
  useScrollAnimation()

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

  // Setup Scroll Reveal Intersection Observer
  useEffect(() => {
    const handleObserve = () => {
      const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      }

      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08,
      }

      const observer = new IntersectionObserver(observerCallback, observerOptions)
      const elements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up, .reveal-zoom, .inverted-reveal-scroller, .scroll-fade-in, .scroll-fade-left, .scroll-fade-right')

      elements.forEach((el) => observer.observe(el))
    }

    const timeoutId = setTimeout(handleObserve, 60)
    return () => clearTimeout(timeoutId)
  }, [showContactPage])

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
          <ProjectsSection />
          <ServicesSection />
          <ContactSection />
          <FooterSection />
        </>
      )}
    </div>
  )
}

export default App
