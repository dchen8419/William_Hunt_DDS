import React from 'react'
import '../about/About.css'
import picBanner from '../../assets/banner_pic.png'
import useScrollReveal from '../../hooks/useScrollReveal'

function About() {
  const imageReveal = useScrollReveal()
  const copyReveal = useScrollReveal()

  return (
    <section id="About" className='about-container'>
      <div ref={imageReveal.ref} className={`about_img_container scroll-reveal ${imageReveal.isVisible ? 'is-visible' : ''}`}>
        <img alt='Dr. William Hunt, dentist in Forest City, North Carolina' src={picBanner} className="about_pic"/>
      </div>
      <div ref={copyReveal.ref} className={`about-copy scroll-reveal ${copyReveal.isVisible ? 'is-visible' : ''}`}>
        <span className="section-kicker">A hometown practice</span>
        <h2 className='about_welcome_title'>Dental care rooted<br /><em>in Forest City.</em></h2>
        <p className='about_paragraph'>
          Welcome to the website of Dr. William (Bill) Hunt, D.D.S., P.A.! A proud native of Forest City, Dr. Hunt has been dedicated to providing quality dental care to his community for more than 40 years.
        </p>
        <p className='about_paragraph'>
          After earning his Doctor of Dental Surgery degree from the UNC-Chapel Hill School of Dentistry in 1978, Dr. Hunt began a lifelong career serving patients throughout North Carolina. In addition to his work in private practice, he has shared his knowledge and experience as an instructor at Asheville-Buncombe Technical Community College.
        </p>
        <p className='about_paragraph'>
          Throughout his career, Dr. Hunt has remained committed to excellence in dentistry, maintaining the highest ethical standards, and continually expanding his knowledge through lifelong learning. His dedication to the community extends beyond the dental office through his volunteer work on the dental bus, where he helps bring essential dental care to individuals and families in need.
        </p>
        <p className='about_paragraph'>
          Whether welcoming you into his practice or serving the community through volunteer work, Dr. Hunt believes everyone deserves compassionate, personalized dental care. Your health, comfort, and well-being are always his priority.
        </p>
        <a className="about-link" href="#Contact">Contact the office <span>→</span></a>
      </div>
    </section>
  )
}

export default About
