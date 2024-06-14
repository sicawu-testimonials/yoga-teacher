import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Link } from 'react-router-dom'
import App from './App'
import Hero from "./components/Hero"
import Therapien from "./components/Therapien"
import UnserTeam from "./components/UnserTeam"
import Karriere from "./components/Karriere"
import News from "./components/News"
import Footer from "./components/Footer"
import NotFound from "./components/NotFound"

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App>
        <nav>
          <Link to="#Hero">Home</Link>
          <Link to="#Therapien">Therapien</Link>
          <Link to="#UnserTeam">Unser Team</Link>
          <Link to="#Karriere">Karriere</Link>
          <Link to="#News">News</Link>
        </nav>
        <Route path="/" exact component={Hero} />
        <Route path="/" hash="#Therapien" component={Therapien} />
        <Route path="/" hash="#UnserTeam" component={UnserTeam} />
        <Route path="/" hash="#Karriere" component={Karriere} />
        <Route path="/" hash="#News" component={News} />
        <Route path="*" component={NotFound} />
        <Footer />
      </App>
    </HashRouter>
  </React.StrictMode>,
)
