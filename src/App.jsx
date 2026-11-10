import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0E0F0F] text-[#F2F2EC] selection:bg-[#E09F2F] selection:text-[#0E0F0F]">
      {/* Accessible skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#E09F2F] focus:text-[#0E0F0F] focus:font-mono focus:text-xs focus:rounded focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Persistent Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
      </main>

      {/* Footer & Contact */}
      <Contact />
    </div>
  );
}

