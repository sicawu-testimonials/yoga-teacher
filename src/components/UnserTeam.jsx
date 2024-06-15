import AnneLotteSchneider from "/img/16.png"
import MarieMohrmannHeinz from "/img/14.png"
import KatharinaBley from "/img/15.png"
import DianeHermeling from "/img/18.png"
import ChristianeOesingmann from "/img/17.png"
import ChristianScholtis from "/img/19.png"
import BarbaraRoensch from "/img/1111.png"
import FlorianLoch from "/img/110.png"
import SophiaKlaes from "/img/112.png"

function UnserTeam() {
    return (
        <>
            <div id="unser-team">
                <h2>Das Team</h2>
                <h2 className="unser-team-subheadline">Mit Herz und Seele dabei</h2>
                <p>Entdecke das Herz unserer Praxis! Hinter jeder erfolgreichen Mission und Behandlung stehen unsere Teammitglieder, die mit Leidenschaft und Fachwissen jeden Tag Herausforderungen meistern. Lernen Sie sie kennen und erfahren Sie, auf welche Behandlungen sie spezialisiert sind.</p>
            </div>
            <div className="unser-team-container"> 
                <div>
                    <img src={AnneLotteSchneider} alt="Anne Lotte Schneider Physiotherapeutin" />
                    <p className="unser-team-container-name">Anne Lotte Schneider</p>
                    <p>Physiotherapeutin</p>
                </div>
                <div className="down">
                    <img src={MarieMohrmannHeinz} alt="Marie Mohrmann-Heinz Physiotherapeutin" />
                    <p className="unser-team-container-name">Marie Mohrmann-Heinz</p>
                    <p>Physiotherapeutin</p>
                </div>
                <div>
                    <img src={KatharinaBley} alt="Katharina Bley Physiotherapeutin" />
                    <p className="unser-team-container-name">Katharina Bley</p>
                    <p>Physiotherapeutin</p>
                </div>
                <div>
                    <img src={DianeHermeling} alt="Diane Hermeling Physiotherapeutin" />
                    <p className="unser-team-container-name">Diane Hermeling</p>
                    <p>Backoffice</p>
                </div>
                <div className="down">
                    <img src={ChristianeOesingmann} alt="Christiane Oesingmann Physiotherapeutin" />
                    <p className="unser-team-container-name">Christiane Oesingmann</p>
                    <p>Physiotherapeutin</p>
                </div>
                <div>
                    <img src={ChristianScholtis} alt="Christian Scholtis Physiotherapeut" />
                    <p className="unser-team-container-name">Christian Scholtis</p>
                    <p>Physiotherapeut</p>
                </div>
                <div>
                    <img src={BarbaraRoensch} alt="Barbara Roensch Physiotherapeutin" />
                    <p className="unser-team-container-name">Barbara Roensch</p>
                    <p>Physiotherapeutin</p>
                </div>
                <div className="down">
                    <img src={FlorianLoch} alt="Florian Loch Physiotherapeut" />
                    <p className="unser-team-container-name">Florian Loch</p>
                    <p>Praxisinhaber</p>
                </div>
                <div>
                    <img src={SophiaKlaes} alt="Sophia Kläs Physiotherapeutin" />
                    <p className="unser-team-container-name">Sophia Kläs</p>
                    <p>Physiotherapeutin</p>
                </div>
            </div>
        </>
    )
}

export default UnserTeam