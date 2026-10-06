import React from 'react'
import HeroSection from './components/HeroSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import CtaSection from './components/CtaSection'
import FaqSection from './components/FaqSection'
// Services is hidden for now. Re-enable by restoring this import and <ServicesSection /> below.
// import ServicesSection from './components/ServicesSection'
import FooterSection from './components/FooterSection'
import useReveal from './hooks/useReveal'
import './styles/portfolio.css'

function App() {
  useReveal()

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="scroll-progress" aria-hidden="true" />
      <main id="main">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        {/* <ServicesSection /> */}
        <FaqSection />
        <CtaSection />
      </main>
      <FooterSection />
    </>
  )
}

export default App
