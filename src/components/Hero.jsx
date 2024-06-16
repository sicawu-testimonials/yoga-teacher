import { Link } from "react-router-dom"
import logo from "../images/logo.png"
import ScrollLink from './ScrollLink'


function Hero() {
    return (
        <>
            <div className="hero">
                <nav className="navbar">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} />
                        </Link>
                    </div>
                    <div className="navbar-anchorlinks">
                        <ScrollLink to="/" activeclassname="active">Home</ScrollLink>
                        <ScrollLink to="#therapie">Therapien</ScrollLink>
                        <ScrollLink to="#unser-team">Unser Team</ScrollLink>
                        <ScrollLink to="#karriere">Karriere</ScrollLink>
                        <ScrollLink to="#news">News</ScrollLink>
                    </div>
                </nav>
                <h1 className="hero-headline">Heilen in diskreter und entspannter Atmosphäre</h1>
            </div>
        </>
    )
}

export default Hero