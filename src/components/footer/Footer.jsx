import React from 'react'
import '../footer/Footer.css'

function Footer() {
    return (
        <footer id="Contact" className='footer-container'>
            <ul className='footer-information'>
                <div className='footer-contact-container'>
                    <div className='footer-container-item footer-container-contact'>
                        <h3>Address</h3>
                        <a href='https://goo.gl/maps/Qkx3bvWBcKN29rfUA'>
                            <p>127 E Trade St # 100</p>
                            <p>Forest City, NC 28043</p>
                        </a>
                        <br />
                        <h4>Phone Number:</h4>
                        <a href="tel:828-245-3206">(828)245-3206</a>
                    </div>
                    <div className='footer-container-item footer-container-hours'>
                        <h4>Open Monday - Thursday</h4>
                        <p>Hours</p>
                        <p>8:00 AM - 5:00 PM</p>
                    </div>
                </div>
                <h5 className='footer-copyright'>Luna DC Media LLC</h5>
            </ul>
        </footer>
    )
}

export default Footer