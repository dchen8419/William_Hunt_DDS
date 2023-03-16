import React from 'react'
import '../footer/Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
            <ul className='footer-information'>
                <div className='footer-contact-container'>
                    <div className='footer-container-item footer-container-contact'>
                        <h4>Contact</h4>
                        <h5>Address</h5>
                        <p>Street Address</p>
                        <p>City, State, Zip</p>
                        <h5>Contact for Hiring</h5>
                        <p>Phone Number</p>
                    </div>
                    <div className='footer-container-item footer-container-hours'>
                        <h3>Open 4 days</h3>
                        <p>Hours</p>
                        <p>Hours of operation</p>
                    </div>
                </div>
                <h5 className='footer-copyright'>David Chen Luna Media LLC</h5>
            </ul>
        </div>
  )
}

export default Footer