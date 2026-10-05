import React from 'react'
// 560px WebP: sharp at the enlarged (hover/tap) size on 2x screens, ~1/20th of the original PNG
import heroImage from '../assets/images/shubham-kumar.png?w=560&format=webp'
import PaytmLogo from './PaytmLogo'

const HeroSection = () => {
  return (
    <section className="hero" id="top">
      <div className="container hero-center">
        <h1 className="hero-title">
          <span className="sr-only">Shubham Kumar, Software Developer at Paytm. </span>
          <span className="line"><span className="load-up" style={{ '--i': 0 }}>Making sure your payment goes through.</span></span>
        </h1>

        <div className="meet load-in" style={{ '--i': 2 }} tabIndex={0} aria-label="Photo of Shubham Kumar">
          <img src={heroImage} alt="Shubham Kumar" width="560" height="840" fetchPriority="high" decoding="async" />
          <span className="meet-pill"><span className="on-hover">hover</span><span className="on-touch">tap</span> to meet me</span>
        </div>

        <p className="hero-lines load-in" style={{ '--i': 3 }}>
          <span>Backend taught me how to make systems scale.</span>{' '}
          <span>Gen AI is teaching me how to make them think.</span>{' '}
          <span>Now a software developer at Paytm.</span>
        </p>
      </div>

      <div className="logo-row load-in" style={{ '--i': 5 }}>
        <PaytmLogo />
      </div>
    </section>
  )
}

export default HeroSection
