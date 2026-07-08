import React from 'react'
import officeImage from '../assets/images/office.jpg'
import gitImage from '../assets/images/git.png'

const TravelCollage = () => {
  return (
    <div className="travel-collage">
      <img 
        src={officeImage} 
        alt="Office" 
        className="travel-image-back" 
      />
      <img 
        src={gitImage} 
        alt="Git" 
        className="travel-image-front" 
      />
    </div>
  )
}

export default TravelCollage
