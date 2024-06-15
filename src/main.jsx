import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Link } from 'react-router-dom'
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
    <BrowserRouter>
      <App>
        <nav>
          <Link to="/">Home</Link>
          <Link to="#therapie">Therapien</Link>
          <Link to="#unser-team">Unser Team</Link>
          <Link to="#karriere">Karriere</Link>
          <Link to="#news">News</Link>

        </nav>
        <Route path="/" exact component={Hero} />
        <Route path="/#therapie" component={Therapien} />
        <Route path="/#unser-team" component={UnserTeam} />
        <Route path="/#karriere" component={Karriere} />
        <Route path="/#news" component={News} />
        <Route path="*" component={NotFound} />
        <Footer />
      </App>
    </BrowserRouter>
  </React.StrictMode>,
)