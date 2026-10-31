import { useEffect, useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import '../navbar/Nav.css'

const icon = `${process.env.PUBLIC_URL}/favicon.svg`

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])


    return (
        <header className="site-nav">
            <a id="home" className="brand" href="#Home" aria-label="William Hunt Dentistry home">
                <img alt='' src={icon} className="dentalicon"/>
                <span className="brand-copy"><strong>William Hunt, DDS</strong><small>Family Dentistry · Forest City, NC</small></span>
            </a>
        <nav id="primary-navigation" className={menuOpen ? 'responsive_nav' : ''} aria-label="Main navigation">
            <a href="#Home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#About" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#Services" onClick={() => setMenuOpen(false)}>Dental Services</a>
            <a href="#Contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <button type="button" aria-label="Close navigation" className='navbar-btn nav-close-btn' onClick={() => setMenuOpen(false)} >
                <FaTimes />
            </button>
        </nav>
            <a href="tel:828-245-3206" className="nav-cta">Call our office</a>
            <button type="button" aria-label="Open navigation" aria-expanded={menuOpen} aria-controls="primary-navigation" className='navbar-btn nav-open-btn' onClick={() => setMenuOpen(true)} >
                <FaBars />
            </button>
        </header>
    )
}

export default Nav
