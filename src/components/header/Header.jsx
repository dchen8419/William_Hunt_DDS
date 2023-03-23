import React from 'react'
import './Header.css'
import { HiPhone } from 'react-icons/hi'
import { ImLocation } from 'react-icons/im'
import { SlCalender } from 'react-icons/sl'

function Header() {
    return (
        <div className='header-container'>
            <div className='header-location'> 
                <span className='icon'><a href='https://goo.gl/maps/Qkx3bvWBcKN29rfUA'><ImLocation /></a></span>
                <span className='text'><a href='https://goo.gl/maps/Qkx3bvWBcKN29rfUA'>Forest City, NC</a></span>
            </div>
            <div className='header-appointment'> 
                <span className='icon'><SlCalender /></span>
                <span className='text'>Request Your Appointment</span>
            </div>
            <div className='header-phone'> 
                <span className='icon'><a href="tel:828-245-3206"><HiPhone /></a></span>
                <span className='text'><a href="tel:828-245-3206">828-245-3206</a></span>
            </div>
        </div>
    )
}

export default Header