import React from 'react'
import ProfileSection from './ProfileSection'
import CenterSection from './CenterSection'
import RightSection from './RightSection'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <ProfileSection />
        <CenterSection />
        <RightSection />
      </div>
    </section>
  )
}

export default HeroSection
