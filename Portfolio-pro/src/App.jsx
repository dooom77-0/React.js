import Header from './Header/Header.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Skills from './Skills/Skills.jsx'
import Contact from './Contact/Contact.jsx'
import Projects from './Projects/Projects.jsx'
import { useState, useEffect } from 'react'
import { ReactTyped } from 'react-typed'
import './LoadingPage.css'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  if(loading) {
    return (
      <div className="loading-page">
        <div className="spinner"></div>
        <h2><ReactTyped strings={['print("Hello World")']} typeSpeed={40} /></h2>
      </div>
    )
  }
  return (
    <div className="App">
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
    </div>
  )
}

export default App
