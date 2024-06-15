import Calendar from "/img/Calendar.png"

function Terminvereinbarung() {
    return (
        <>
            <button className="termin-sticky-button">
                Terminvereinbarung
                <img src={Calendar} alt="Kalender Icon" />
            </button>
        </>
    )
}

export default Terminvereinbarung