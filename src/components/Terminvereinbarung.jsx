import Calendar from "/img/Calendar.png"
import { useState } from 'react'

function Terminvereinbarung() {
    const [showPopup, setShowPopup] = useState(false);
    const handleButtonClick = () => {
        setShowPopup(true)
    }

    const handlePopupClose = () => {
        setShowPopup(false)
    }
    return (
        <>
            <button className="termin-sticky-button" onClick={handleButtonClick}>
                Termin vereinbaren
                <img src={Calendar} alt="Kalender Icon" />
            </button>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                    <h2>Jetzt Termin vereinbaren</h2>
                    <p>Hier gibt's noch nischts zu sehen, keine Input fields nix nada.</p>
                    <button onClick={handlePopupClose}>Bis dahin: Popup schließen</button>
                </div>
                </div>
            )}
        </>
    )
}

export default Terminvereinbarung