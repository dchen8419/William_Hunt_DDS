import React from 'react'
import '../about/About.css'
import picBanner from '../../assets/banner_pic.png'

function About() {
  return (
    <div  className='about-container'>
      <div className='about_img_container'>
        <img id="About" alt='about_picture' src={picBanner} className="about_pic"/>
      </div>
      <div  className='about_welcome_container'>
        <h2 className='about_welcome_title'>Welcome to William Hunt, DDS PA!</h2>
      </div>
      <div className='about_paragraph'>
        <h3>
          Dr. William (Bill) Hunt, D.D.S. P.A. has always been interested in providing the best dental care in Forest City 
          for over 40 years. A Forest City native, Dr. Hunt graduated from UNC - Chapel Hill Dental School in 1978.
          He has been serving the North Carolina community ever since. Dr. Hunt is committed to his high standards
          and morals in continuing to pursue knowledge in the cutting edge advancements of dentisty using state-of-the-art
          Cone Beam Computed Tomograph (CBCT). 
          He is very devoted to his community
          serving the dental bus on his free time to provide help for people in need in his local community. 
        </h3>
      </div>
    </div>
  )
}

export default About