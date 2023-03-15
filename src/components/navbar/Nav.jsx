import {useRef} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import '../navbar/Nav.css'

function Nav() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
            )
    }

    return (
        <header>
        <h3>William Hunt DDS</h3>
        <nav ref={navRef}>
            <a href="/#">Home</a>
            <a href="/#">About</a>
            <a href="/#">Contact</a>
            <button className='navbar-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes />
            </button>
        </nav>
        <button className='navbar-btn' onClick={showNavbar}>
            <FaBars />
        </button>
    </header>
    )
}

export default Nav