import {useRef} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import '../navbar/Nav.css'
import icon from '../../assets/dentist_icon.png'

function Nav() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
            )
    }


    return (
        <header>
            <div id="home">
                <img alt='dentalicon' src={icon} className="dentalicon"/>
            </div>
        <nav ref={navRef}>
            <a href="#Home" >Home</a>
            <a href="#About" >About</a>
            <a href="#Contact" >Contact</a>
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