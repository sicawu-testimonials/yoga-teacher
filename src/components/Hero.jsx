import { Link } from "react-router-dom"
import { useState } from "react"
import logo from "../images/logo.png"
import ScrollLink from './ScrollLink'


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
                            <img src={logo} className="logo" />
                        </Link>
                    </div>
                    <div className="navbar-anchorlinks">
                        <ScrollLink to="" activeclassname="active">Home</ScrollLink>
                        <ScrollLink to="#therapie">Therapien</ScrollLink>
                        <ScrollLink to="#unser-team">Unser Team</ScrollLink>
                        <ScrollLink to="#karriere">Karriere</ScrollLink>
                        <ScrollLink to="#news">News</ScrollLink>
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
                                    <ScrollLink to="#therapie">Therapien</ScrollLink>
                                    <ScrollLink to="#unser-team">Unser Team</ScrollLink>
                                    <ScrollLink to="#karriere">Karriere</ScrollLink>
                                    <ScrollLink to="#news">News</ScrollLink>
                                    <button className="burger-menu-schliessen" 
                                    onClick={handleMenuClose}>X</button>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
                <h1 className="hero-headline">Heilen in diskreter und entspannter Atmosphäre</h1>
            </div>
        </>
    )
}

export default Hero