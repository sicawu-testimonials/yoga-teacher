import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { PiFlowerLotus } from "react-icons/pi"


function Footer() {
    return (
        <div id="footer">
            <div className="footer">
                <div>
                    <h3>Where to find us</h3>
                    <p>83 An Thượng 29</p>
                    <p>Bắc Mỹ Phú</p>
                </div>
                <div>
                    <h3>Your Contact</h3>
                    <p>Sweetheart</p>
                    <p>+49 1234 56789</p>
                </div>
                <div>
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
            </div>
            <div className="footer-logo">
                <div >
                    <PiFlowerLotus size={50} color='white' />
                </div>
                <p>© 2024 - The Yoga Shala Company Inc.</p>
            </div>
        </div>
    )
}

export default Footer