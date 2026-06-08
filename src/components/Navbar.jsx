import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-cream border-b border-navy/10' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="/" className="text-3xl font-display text-navy tracking-tighter">
          NK<span className="text-coral">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          <a href="#projects" className="text-sm font-medium text-navy/50 hover:text-navy transition-colors">Work</a>
          <a href="#skills" className="text-sm font-medium text-navy/50 hover:text-navy transition-colors">Stack</a>
          <a href="#achievements" className="text-sm font-medium text-navy/50 hover:text-navy transition-colors">Press</a>
          <a href="#contact" className="text-sm font-medium text-navy/50 hover:text-navy transition-colors">Contact</a>
        </nav>
        <a href="mailto:nagakuchivaripalli@gmail.com" className="hidden md:inline-flex text-sm font-medium text-coral border-2 border-coral px-5 py-2.5 hover:bg-coral hover:text-cream transition-all duration-300">
          Email ↗
        </a>
        <button className="md:hidden text-sm font-medium text-navy border-2 border-navy px-4 py-2">
          Menu
        </button>
      </div>
    </header>
  )
}