import {useRef} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import '../navbar/Nav.css'
import icon from '../../assets/dentist_icon.png'

function Nav() {
    const navRef = useRef();
    const home = useRef(null);
    const about = useRef(null);
    const contact = useRef(null);

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
            )
    }

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };

    return (
        <header>
            <div id="home">
                <img alt='dentalicon' src={icon} className="dentalicon"/>
            </div>
        <nav ref={navRef}>
            <a href="#Home" onClick={()=> scrollToSection(home)} >Home</a>
            <a href="#About" onClick={()=> scrollToSection(about)}>About</a>
            <a href="#Contact" onClick={()=> scrollToSection(contact)}>Contact</a>
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