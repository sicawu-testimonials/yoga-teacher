import { Link } from "react-router-dom"
import logo from "../images/logo.png"

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
                        <Link to="/" activeclassname="active">Home</Link>
                        <Link to="/#therapie">Therapien</Link>
                        <Link to="/#unser-team">Unser Team</Link>
                        <Link to="/#karriere">Karriere</Link>
                        <Link to="/#news">News</Link>
                    </div>
                </nav>
                <h1 className="hero-headline">Heilen in diskreter und entspannter Atmosphäre</h1>
            </div>
        </>
    )
}

export default Hero