import React from 'react'
import '../about/About.css'
import picBanner from '../../assets/banner_pic.png'

function About() {
  return (
    <div className='about-container'>
      <div className='about_img_container'>
        <img alt='about_picture' src={picBanner} className="about_pic"/>
      </div>
      <div className='about_welcome_container'>
        <h2 className='about_welcome_title'>Welcome to William Hunt, DDS PA!</h2>
      </div>
      <div className='about_paragraph'>
        <h3>
          Dr. William (Bill) Hunt, DDS PA has always been interested in providing the best dental care in Forest City 
          for over 30 years. A Forest city native, Dr. Bill graduated from UNC - Chapel Hill Dental School in 1978
          and has been serving the North Carolina community ever since. Dr. Bill is committed to his high standards
          and morals in continuing to pursue knowledge in the cutting edge advancements of dentisty. He is very devoted to his community
          serving the dental bus on his free time to provide help for under privilege people in his local community. 
        </h3>
      </div>
    </div>
  )
}

export default About