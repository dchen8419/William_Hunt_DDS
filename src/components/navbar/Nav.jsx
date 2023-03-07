import React from 'react'
import './Nav.css'

function Nav() {
    const onHome = () => {
        window.location.href = '#Home';
    }

    const onAbout = () => {
        window.location.href = "#About";
    }

    const onContact = () => {
        window.location.href = "#Contact";
    } 

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <a className='navbar-logo' href='#Home' aria-hidden="true">
                        W.Hunt, DDS Family Dentistry
                    </a>
                <ul>
                    <li>
                    <a href="#Home" onClick={onHome}>
                        Home
                    </a>
                    </li>
                    <li>
                    <a href="#About" onClick={onAbout}>
                        About
                    </a>
                    </li>
                    <li>
                    <a href="#Contact" onClick={onContact}>
                        Contact
                    </a>
                    </li>
                </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav