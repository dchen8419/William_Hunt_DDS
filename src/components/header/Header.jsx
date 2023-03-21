import React from 'react'
import './Header.css'
import { HiPhone } from 'react-icons/hi'
import { ImLocation } from 'react-icons/im'
import { SlCalender } from 'react-icons/sl'

function Header() {
    return (
        <div className='header-container'>
            <div className='header-location'> <ImLocation /> Forest City, NC</div>
            <div className='header-appointment'> <SlCalender /> Request Your Appointment</div>
            <div className='header-phone'> <HiPhone /> 828-245-3206</div>
        </div>
    )
}

export default Header