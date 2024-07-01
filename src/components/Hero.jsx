import { Link } from "react-router-dom"
import { useState } from "react"
import ScrollLink from './ScrollLink'
import { PiFlowerLotus } from "react-icons/pi";


function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleMenuClose = () => {
        setIsMenuOpen(false)
    }
    return (
        <>
            <div className="hero">
                <nav className="navbar">
                    <div id="home">
                        <Link to="/">
                        <PiFlowerLotus size={50} color='white' className="logo"/>
                        </Link>
                    </div>
                    <div className="navbar-anchorlinks">
                        <ScrollLink to="#news">News</ScrollLink>
                        <ScrollLink to="#philosophy">Philosophy</ScrollLink>
                        <ScrollLink to="#team">Team</ScrollLink>
                        <ScrollLink to="#teacher-training">Teacher Training</ScrollLink>
                    </div>
                    <div className="burger-menu">
                        <button className="burger-button" onClick={handleMenuClick}>
                            <span className="burger-bar"></span>
                            <span className="burger-bar"></span>
                            <span className="burger-bar"></span>
                        </button>
                        {isMenuOpen && (
                            <div className="burger-menu-geklickt">
                                <div className="burger-menu-content">
                                    <ScrollLink to="#home">Home</ScrollLink>
                                    <ScrollLink to="#news">News</ScrollLink>
                                    <ScrollLink to="#philosophy">Philosophy</ScrollLink>
                                    <ScrollLink to="#team">Our Team</ScrollLink>
                                    <ScrollLink to="#teacher-training">Teacher Trainings</ScrollLink>
                                    <button className="burger-menu-schliessen" 
                                    onClick={handleMenuClose}>X</button>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
                <h1 className="hero-headline">Unwind & Reconnect. Welcome to Yoga Shala.</h1>
            </div>
        </>
    )
}

export default Hero