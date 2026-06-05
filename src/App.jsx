import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Vision from './components/sections/Vision'
import Academic from './components/sections/Academic'
import Timeline from './components/sections/Timeline'
import Gallery from './components/sections/Gallery'
import Footer from './components/layout/Footer'

function App() {
  const isVideoPlaying = useSelector((state) => state.video?.isPlaying)

  return (
    <div className="bg-dark min-h-screen text-white font-body relative overflow-x-hidden">
      
      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <main>
        <Hero />
        <Vision />
        <Academic />
        <Timeline />
        <Gallery />
        <Footer />
      </main>
    </div>
  )
}

export default App
