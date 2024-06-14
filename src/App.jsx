import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Therapien from "./components/Therapien"
import UnserTeam from "./components/UnserTeam"
import Karriere from "./components/Karriere"
import News from "./components/News"
import Footer from "./components/Footer"
import NotFound from "./components/NotFound"


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Hero} />
        <Route path="/" hash="#Therapien" component={Therapien} />
        <Route path="/" hash="#UnserTeam" component={UnserTeam} />
        <Route path="/" hash="#Karriere" component={Karriere} />
        <Route path="/" hash="#News" component={News} />
        <Route path="*" component={NotFound} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
