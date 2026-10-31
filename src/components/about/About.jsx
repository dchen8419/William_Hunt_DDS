import React from 'react'
import '../about/About.css'
import picBanner from '../../assets/banner_pic.png'

function About() {
  return (
    <section id="About" className='about-container'>
      <div className='about_img_container'>
        <img alt='Dr. William Hunt, dentist in Forest City, North Carolina' src={picBanner} className="about_pic"/>
      </div>
      <div className="about-copy">
        <span className="section-kicker">A hometown practice</span>
        <h2 className='about_welcome_title'>Dental care rooted<br /><em>in Forest City.</em></h2>
        <p className='about_paragraph'>
          A Forest City native, Dr. William (Bill) Hunt has cared for the community for more than 40 years. After graduating from the UNC-Chapel Hill School of Dentistry in 1978, he began serving patients throughout North Carolina with a commitment to high standards, strong ethics, and continually advancing his knowledge. Today, he uses Cone Beam Computed Tomography (CBCT) as part of his practice. His commitment to his neighbors reaches beyond the office, too: Dr. Hunt volunteers on the dental bus, helping bring dental care to people in the community who need it. You can trust that your dental health matters to him.
        </p>
        <a className="about-link" href="#Contact">Contact the office <span>→</span></a>
      </div>
    </section>
  )
}

export default About
