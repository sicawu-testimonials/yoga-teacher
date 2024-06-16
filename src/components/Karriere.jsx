import ArrowRight from "/img/Arrow-Right.png"
import Physiotherapeut from "/img/vorderansicht-des-osteopathischen-therapeuten-der-die-schulter-der-patientin-prueft.png"
import { Link } from "react-router-dom"


function Karriere() {
    return (
        <>
            <div id="karriere">
                <h2>Werde Teil des Teams!</h2>
            </div>
            <div className="karriere-container">
                <div>
                    <img src={Physiotherapeut} alt="Jobs Physiotherapeut prüft Patientins Schulter" />
                </div>
                <div className="karriere-container-right">
                    <h2>Karriere auf dem Petrisberg</h2>
                    <p>Wir bieten das komplette Spektrum aller bewährten Behandlungsmethoden an und richten uns nach dem aktuellen Stand der medizinischen Erkenntnisse in der Rehabilitation und der Sporttherapie.</p>
                    <div className="karriere-buttons">
                        <Link to="/#karriere" className="no-underline">
                            <button>Physiotherapeut (M/W/D), Vollzeit
                                <img src={ArrowRight} alt="Grüner Pfeil rechts" />
                            </button>
                        </Link>
                        <Link to="/#karriere"className="no-underline"> 
                            <button>Physiotherapeut (M/W/D), Teilzeit
                                <img src={ArrowRight} alt="Grüner Pfeil rechts" />
                            </button>
                        </Link>
                        <Link to="/#karriere"className="no-underline">
                            <button>Physiotherapeut (M/W/D), Hausbesuche
                                <img src={ArrowRight} alt="Grüner Pfeil rechts" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Karriere