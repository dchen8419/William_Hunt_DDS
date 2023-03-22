import React from 'react'
import './Header.css'
import { HiPhone } from 'react-icons/hi'
import { ImLocation } from 'react-icons/im'
import { SlCalender } from 'react-icons/sl'

function Header() {
    return (
        <div className='header-container'>
            <div className='header-location'> 
                <span className='icon'><ImLocation /></span>
                <span className='text'>Forest City, NC</span>
            </div>
            <div className='header-appointment'> 
                <span className='icon'><SlCalender /></span>
                <span className='text'>Request Your Appointment</span>
            </div>
            <div className='header-phone'> 
                <span className='icon'><HiPhone /></span>
                <span className='text'>828-245-3206</span>
            </div>
        </div>
    )
}

export default Header