import React from 'react'
import './Header.css'
import { HiPhone } from 'react-icons/hi'
import { ImLocation } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'



function Header() {
    return (
        <div id="Home" className='header-container'>
            <div className='header-location'> 
                <span className='icon'><a aria-label="Get directions to the office in Forest City" href='https://goo.gl/maps/Qkx3bvWBcKN29rfUA'><ImLocation /></a></span>
                <span className='text'><a href='https://goo.gl/maps/Qkx3bvWBcKN29rfUA'> Forest City, NC</a></span>
            </div>
            <div className='header-appointment'> 
                <span className='icon'><a aria-label="Email William Hunt, DDS PA" href='mailto:images_huntdr@att.net'><MdEmail /></a></span>
                <span className='text'><a href="mailto:images_huntdr@att.net"> Email For Appointment</a></span>
            </div>
            <div className='header-phone'> 
                <span className='icon'><a aria-label="Call William Hunt, DDS PA at 828-245-3206" href="tel:828-245-3206"><HiPhone /></a></span>
                <span className='text'><a href="tel:828-245-3206"> 828-245-3206</a></span>
            </div>
        </div>
    )
}

export default Header
