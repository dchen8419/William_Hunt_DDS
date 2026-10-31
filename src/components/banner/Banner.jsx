import React from 'react'
import '../../components/banner/Banner.css'

function Banner() {
    return (
        <section className='banner_container'>
            <div className="hero-content">
                <span className="eyebrow"><i /> Caring for Forest City since 1979</span>
                <h1>Healthy smiles,<br /><em>right at home.</em></h1>
                <p>Personal, thoughtful dental care for every stage of life. Get to know a practice built around you.</p>
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
