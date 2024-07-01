import YogaTeacher from "/img/Yinyasa-teacher-training.jpg"

function UnserTeam() {
    return (
        <>
            <div id="team">
                <h2>Our Team</h2>
                <h2 className="unser-team-subheadline">Meet the Souls Behind</h2>
                <p>Different backgrounds and storys, but what unites us is the same love and passion for yoga, well-being and concious living. Meet our lovely yoga teachers.</p>
            </div>
            <div className="unser-team-container"> 
                <div>
                    <img src={YogaTeacher} alt="Certified Yoga Teacher" />
                    <p className="unser-team-container-name">Simona Wurst</p>
                    <p>Certified Yoga Teacher (50 hrs)</p>
                </div>
                <div className="down">
                    <img src={YogaTeacher} alt="Certified Yoga Teacher" />
                    <p className="unser-team-container-name">Simona Wurst</p>
                    <p>Certified Yoga Teacher (50 hrs)</p>
                </div>
                <div>
                    <img src={YogaTeacher} alt="Certified Yoga Teacher" />
                    <p className="unser-team-container-name">Simona Wurst</p>
                    <p>Certified Yoga Teacher (50 hrs)</p>
                </div>
            </div>
        </>
    )
}

export default UnserTeam