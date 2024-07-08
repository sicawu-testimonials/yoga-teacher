import TeacherTraining from "/img/Yoga-meditation.jpg"
import { Link } from "react-router-dom"


function Karriere() {
    return (
        <>
            <div id="teacher-training">
                <h2>Start Your Yoga Teacher Journey Now.</h2>
            </div>
            <div className="karriere-container">
                <div>
                    <img src={TeacherTraining} 
                    className="teacher-training-image"
                    alt="Yoga Teacher with official YTT certificate" />
                </div>
                <div className="karriere-container-rechts">
                    <h2>Yoga Teacher Trainings</h2>
                    <p>It is time to unwind your potential. Take the next step and deepen your practice, gain more knowledge and grow in so many ways. We can't wait to meet you!</p>
                    <div className="karriere-buttons">
                        <Link to="/#karriere" className="no-underline">
                            <button>Vinyasa YTT (200 hrs), May 2025
                            </button>
                        </Link>
                        <Link to="/#karriere"className="no-underline"> 
                            <button>Yin Yoga YTT (200 hrs), May 2025
                            </button>
                        </Link>
                        <Link to="/#karriere"className="no-underline">
                            <button>Breathwork & Meditation, May 2025
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Karriere