import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import App from './App'
import Hero from "./components/Hero"
import Philosophy from "./components/Philosophy"
import UnserTeam from "./components/UnserTeam"
import TeacherTraining from "./components/TeacherTraining"
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
          <Link to="/#news">News</Link>
          <Link to="/#philosophy">Philosophy</Link>
          <Link to="/#team">Unser Team</Link>
          <Link to="/#teacher-training">Teacher Training</Link>
        </nav>
        <Route path="/" exact component={Hero} />
        <Route path="/#news" component={News} />
        <Route path="/#philosophy" component={Philosophy} />
        <Route path="/#team" component={UnserTeam} />
        <Route path="/#teacher-training" component={TeacherTraining} />
        <Route path="*" component={NotFound} />
        <Footer />
      </App>
    </BrowserRouter>
  </React.StrictMode>,
)