import React from 'react'
import '../../components/banner/Banner.css'

function Banner() {
    return (
        <section className='banner_container'>
            <div className="hero-content">
                <span className="eyebrow"><i /> Caring for Forest City since 1979</span>
                <h1>Trusted dental care<br /><em>in Forest City, NC.</em></h1>
                <p>Dr. William Hunt has cared for the Forest City community since 1979. Call the office to ask about appointments and dental services.</p>
                <div className="hero-actions">
                    <a className="hero-button" href="tel:828-245-3206">Call to schedule <span>↗</span></a>
                    <a className="hero-secondary" href="#Services">Explore our services</a>
                </div>
                <div className="hero-note"><strong>40+</strong><span>years caring for<br />our community</span></div>
            </div>
            <div className="hero-image" role="img" aria-label="A welcoming dental practice" />
            <div className="hero-decoration" aria-hidden="true">✳</div>
        </section>
    )
}

export default Banner
