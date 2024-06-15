import { Routes, Route, Link } from "react-router-dom"


import Hero from "./components/Hero"
import Therapien from "./components/Therapien"
import UnserTeam from "./components/UnserTeam"
import Karriere from "./components/Karriere"
import News from "./components/News"
import Footer from "./components/Footer"
import NotFound from "./components/NotFound"
import Terminvereinbarung from "./components/Terminvereinbarung"



function App() {

  return (
    <>
      <Hero />
      <Terminvereinbarung />
      <Therapien />
      <UnserTeam />
      <Karriere />
      <News />
      <Footer />
    </>
  )
}

export default App
