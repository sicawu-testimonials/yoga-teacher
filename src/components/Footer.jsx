import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { PiFlowerLotus } from "react-icons/pi"


function Footer() {
    return (
        <div id="footer" className="footer">
            <div className="footer-logo">
                <PiFlowerLotus size={50} color='white' />
            </div>
            <h3 className="footer-text">Join the Crew!</h3>
            <div className="footer-icons">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                    <FaInstagram size={30} />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                    <FaFacebook size={30} />
                </a>
            </div>
        </div>
    )
}

export default Footer