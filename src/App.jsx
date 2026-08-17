import React, { useState, useEffect, lazy, Suspense } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import useScrollAnimation from './hooks/useScrollAnimation'
import './styles/portfolio.css'

// Lazy load components that are below the fold
const ServicesSection = lazy(() => import('./components/ServicesSection'))
const ProjectsSection = lazy(() => import('./components/ProjectsSection'))
const ContactSection = lazy(() => import('./components/ContactSection'))
const FooterSection = lazy(() => import('./components/FooterSection'))

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ 
    minHeight: '200px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    color: '#2d2d2d'
  }}>
    Loading...
  </div>
)

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
          <Suspense fallback={<LoadingFallback />}>
            <ContactSection isFullPage={true} />
          </Suspense>
        </div>
      ) : (
        <>
          <Header onContactClick={handleContactClick} showContactPage={showContactPage} />
          <HeroSection />
          <Suspense fallback={<LoadingFallback />}>
            <ProjectsSection />
            <ServicesSection />
            <ContactSection />
            <FooterSection />
          </Suspense>
        </>
      )}
    </div>
  )
}

export default App
