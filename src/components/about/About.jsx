import React from 'react'
import '../about/About.css'
import picBanner from '../../assets/banner_pic.png'

function About() {
  return (
    <div className='about-container' >
      <div className='about_img_container'>
        <img alt='banner_picture' src={picBanner} className="banner_pic"/>
      </div>
      <div className='about_welcome_container'>
        <h2 className='about_welcome_title'>Welcome to William Hunt, DDS PA!</h2>
      </div>
      <div className='about_paragraph'>
        <h3>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</h3>
      </div>
    </div>
  )
}

export default About