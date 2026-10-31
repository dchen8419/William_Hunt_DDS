import React from 'react'
import '../footer/Footer.css'
import { HiPhone } from 'react-icons/hi'
import { ImLocation } from 'react-icons/im'

function Footer() {
    return (
        <footer id="Contact" className='footer-container'>
            <div className="footer-inner">
                <div className="footer-top">
                    <div>
                        <span className="section-kicker">We’re here for you</span>
                        <h2>Let’s take care<br />of your smile.</h2>
                    </div>
                    <a className="footer-call" href="tel:828-245-3206">Call (828) 245-3206 <span>↗</span></a>
                </div>
                <div className='footer-contact-container'>
                    <div className='footer-container-item footer-container-contact'>
                        <h3>{React.createElement(ImLocation)} Find us</h3>
                        <a href='https://goo.gl/maps/Qkx3bvWBcKN29rfUA' target="_blank" rel="noreferrer">
                            <p>127 E Trade St # 100</p>
                            <p>Forest City, NC 28043</p>
                        </a>
                    </div>
                    <div className='footer-container-item footer-container-hours'>
                        <h3>Office hours</h3>
                        <p><strong>Monday – Thursday</strong><br />8:00 AM – 5:00 PM</p>
                        <p>Friday – Sunday · Closed</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>© {new Date().getFullYear()} William Hunt, DDS PA</span>
                    <a href="tel:828-245-3206">{React.createElement(HiPhone)} (828) 245-3206</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
