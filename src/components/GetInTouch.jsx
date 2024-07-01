import { IoMailOpenOutline } from "react-icons/io5"
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { RxCross2 } from "react-icons/rx"
import { useState } from 'react'

function Terminvereinbarung() {
    const [showPopup, setShowPopup] = useState(false)

    const handleButtonClick = () => {
        setShowPopup(true)
    }

    const handlePopupClose = () => {
        setShowPopup(false)
    }

    const handleSendMail = () => {
        window.location.href = 'mailto:work.simona.wurst@gmail.com?subject=Get%In%Touch';
    }

    return (
        <>
            <button className="termin-sticky-button" onClick={handleButtonClick}>
                Get in Touch
            </button>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                    <button onClick={handlePopupClose} className="popup-button">
                                <RxCross2 />
                            </button>
                        <div className="popup-content-hero">
                            <h2>Get in Touch</h2>
                           
                        </div>
                        <p>If you like to book a class or have any question, don't hestitate to ask. We'd love to hear from you!</p>
                        <div className="footer-icons">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="news-icon">
                                <FaInstagram size={40} />
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="news-icon">
                                <FaFacebook size={40} />
                            </a>
                            <button onClick={handleSendMail} className="popup-button-mail">
                            <IoMailOpenOutline
                            size={40} 
                                className="news-icon"/>
                        </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Terminvereinbarung