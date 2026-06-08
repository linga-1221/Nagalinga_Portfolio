import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}