import { Routes, Route, Link } from "react-router-dom"

import Hero from "./components/Hero"
import Philosophy from "./components/Philosophy"
import UnserTeam from "./components/UnserTeam"
import TeacherTraining from "./components/TeacherTraining"
import News from "./components/News"
import Footer from "./components/Footer"
import NotFound from "./components/NotFound"
import Terminvereinbarung from "./components/GetInTouch"

function App() {

  return (
    <>
      <Terminvereinbarung />
      <Hero />
      <News />
      <Philosophy />
      <UnserTeam />
      <TeacherTraining />
      <Footer />
    </>
  )
}

export default App
