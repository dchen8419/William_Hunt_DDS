import React from 'react'
import '../about/About.css'
import picBanner from '../../assets/banner_pic.png'

function About() {
  return (
    <div  className='about-container'>
      <div className='about_img_container'>
        <img id="About" alt='Dr. William Hunt family dentist with over 40 years experience' src={picBanner} className="about_pic"/>
      </div>
      <div  className='about_welcome_container'>
        <h2 className='about_welcome_title'>Welcome to William Hunt, DDS PA!</h2>
      </div>
      <div className='about_paragraph'>
        <h3>
            Welcome to the website of Dr. William (Bill) Hunt, D.D.S. P.A.! 
            Dr. Hunt has been providing exceptional dental care to the Forest City community for over 40 years. 
            A native of Forest City, Dr. Hunt graduated from UNC - Chapel Hill Dental School in 1978 and has been serving 
            the North Carolina community ever since. He is committed to maintaining high standards and morals in his practice 
            and continuously seeks to expand his knowledge in the cutting-edge advancements of dentistry, utilizing state-of-the-art 
            Cone Beam Computed Tomography (CBCT) technology. In addition to his passion for dentistry, 
            Dr. Hunt is very devoted to his local community. He volunteers his time serving on the dental bus to provide care 
            to those in need. With Dr. Hunt, you can trust that your dental health is in good hands. 
        </h3>
      </div>
    </div>
  )
}

export default About