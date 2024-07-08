import { Routes, Route, Link } from "react-router-dom"

import Hero from "./components/Hero"
import News from "./components/News"
import GoogleMaps from "./components/GoogleMaps"
import Philosophy from "./components/Philosophy"
import UnserTeam from "./components/UnserTeam"
import TeacherTraining from "./components/TeacherTraining"
import Footer from "./components/Footer"
import NotFound from "./components/NotFound"
import Terminvereinbarung from "./components/GetInTouch"

function App() {

  return (
    <>
      <Terminvereinbarung />
      <Hero />
      <News />
      <GoogleMaps />
      <Philosophy />
      <UnserTeam />
      <TeacherTraining />
      <Footer />
    </>
  )
}

export default App
