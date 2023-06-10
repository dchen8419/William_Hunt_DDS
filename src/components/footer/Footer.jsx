import React from 'react'
import '../footer/Footer.css'

const Footer = () => {
    return (
        <div id="Contact" className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <a href='https://goo.gl/maps/Qkx3bvWBcKN29rfUA'>
                            <h2>Contact</h2>
                                <p>127 E Trade St # 100</p>
                                <p>Forest City, NC 28043</p>
                            <a href="tel:828-245-3206">(828) 245-3206</a>
                        </a>
                    </div>
                    <div className='footer-link-items'>
                        <a href='https://goo.gl/maps/Qkx3bvWBcKN29rfUA'>
                        <h2>Hours</h2>
                        <p>Monday - Thursday</p>
                        <p>8:00 AM - 5:00 PM</p>
                        </a>
                        
                    </div>
                </div>
            </div>
            <section>
                <div>
                    <small className='website-rights'>David Chen &copy;{new Date().getFullYear()} Luna Media LLC</small>
                </div>
            </section>
        </div>
    )
}

export default Footer