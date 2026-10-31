import React from 'react'
import '../about/About.css'
import picBanner from '../../assets/banner_pic.png'

function About() {
  return (
    <section id="About" className='about-container'>
      <div className='about_img_container'>
        <img alt='The William Hunt dental practice' src={picBanner} className="about_pic"/>
      </div>
      <div className='about-copy'>
        <span className="section-kicker">A hometown practice</span>
        <h2 className='about_welcome_title'>Care that feels<br /><em>close to home.</em></h2>
        <p className='about_paragraph'>
          Dr. William (Bill) Hunt, D.D.S. P.A. has always been interested in providing the best dental care in Forest City 
          for over 40 years. A Forest City native, Dr. Hunt graduated from UNC - Chapel Hill Dental School in 1978.
          He has been serving the North Carolina community ever since. Dr. Hunt is committed to his high standards
          and morals in continuing to pursue knowledge in the cutting edge advancements of dentistry using state-of-the-art
          Cone Beam Computed Tomography (CBCT). He is very devoted to his community, serving the dental bus in his free time to provide help for people in need.
        </p>
        <a className="about-link" href="#Contact">Get in touch <span>→</span></a>
      </div>
    </section>
  )
}

export default About
