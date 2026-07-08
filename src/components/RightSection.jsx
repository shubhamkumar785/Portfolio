import React from 'react'
import TravelCollage from './TravelCollage'
import ScrollIndicator from './ScrollIndicator'

const RightSection = () => {
  return (
    <div className="right-column">
      <h2 className="question-text">WHO AM I ?</h2>
      
      <p className="intro-description">
        Backend developer by passion, Gen AI explorer by curiosity. I spend my time building scalable applications, designing intelligent systems, and exploring the possibilities of Generative AI.
      </p>
      
      <TravelCollage />
      
      <p className="travel-description">
        Exploring the intersection of backend engineering and artificial intelligence, building secure, scalable, and intelligent solutions.
      </p>
      
      <ScrollIndicator />
    </div>
  )
}

export default RightSection
