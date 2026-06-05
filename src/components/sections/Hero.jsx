import React, { useEffect } from 'react'
import Particles from 'react-tsparticles'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { setActiveSection } from '../../store/slices/navSlice'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { profileImg } from '../../data/gallery'
import { MapPin, Briefcase } from 'lucide-react'

export default function Hero() {
  const dispatch = useDispatch()
  const { ref, inView } = useScrollReveal({ threshold: 0.25 })

  useEffect(() => {
    if (inView) dispatch(setActiveSection('hero'))
  }, [inView, dispatch])

  const skills = [
    'Legal Advocacy', 'Business Strategy', 'Crisis Management',
    'Public Relations', 'Policy Research', 'Leadership'
  ]

  // 3D Parallax Tilt Values using Framer Motion
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth springs for tilt transformations
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 200, damping: 25 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 200, damping: 25 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    
    // Normalize coordinates from -0.5 to 0.5
    const mouseX = (e.clientX - rect.left) / width - 0.5
    const mouseY = (e.clientY - rect.top) / height - 0.5
    
    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <section
      id="hero"
      ref={ref}
      style={{ position: 'relative' }}
      className="relative min-h-screen flex flex-col justify-center bg-dark text-white pt-24 pb-16 lg:pt-28 z-10 overflow-hidden"
    >
      <Particles
        className="absolute inset-0 z-0"
        options={{
          particles: {
            number: { value: 30, density: { enable: true, value_area: 800 } },
            color: { value: "#a3e635" },
            opacity: { value: 0.2 },
            size: { value: 2 },
            move: { enable: true, speed: 1 }
          }
        }}
      />
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column - Optimized sizing & alignment for all devices */}
          <div className="lg:col-span-7 flex flex-col items-start relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="mb-6 md:mb-8"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-lime to-emerald-500 mb-6 rounded-md shadow-lg shadow-lime/20"></div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-4 bg-gradient-to-r from-white via-white to-silver-light bg-clip-text text-transparent">
                Affan Rahman<span className="text-lime">.</span>
              </h1>
              <p className="font-accent text-sm sm:text-base md:text-lg uppercase tracking-[0.15em] text-lime mb-6 md:mb-8 font-semibold">
                Business Advisory
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-body text-silver-light text-sm sm:text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10 max-w-xl"
            >
              A seasoned professional bridging the gap between legal expertise and business management. Masters in Business Management (MBA) from Cambridge.
            </motion.p>

            {/* Personal Details - Responsive Colored Glassmorphic Card (No Hard Strokes) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 90, damping: 18, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 mb-8 md:mb-10 p-6 md:p-7 bg-gradient-to-br from-lime-950/20 to-emerald-950/20 backdrop-blur-md rounded-2xl w-full max-w-2xl border border-lime-500/10 shadow-xl shadow-black/30"
            >
              <div className="flex gap-4 items-start">
                <div className="p-2.5 bg-lime/10 text-lime rounded-xl shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-accent text-[10px] text-silver-muted uppercase tracking-widest mb-1.5 font-semibold">Visa Status</p>
                  <p className="font-display text-white font-bold text-sm">UK & Saudi PR</p>
                </div>
              </div>
              
              <div className="w-full h-px sm:w-px sm:h-auto bg-white/5 self-stretch"></div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 bg-lime/10 text-lime rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-accent text-[10px] text-silver-muted uppercase tracking-widest mb-1.5 font-semibold">Residences</p>
                  <p className="font-body text-sm text-silver-light mb-1 leading-normal">Anitha's, Thiruvannur P.O, Kozhikode</p>
                  <p className="font-body text-sm text-silver-light leading-normal">Rahmath Manzil, Edamuttam P.O, Thrissur</p>
                </div>
              </div>
            </motion.div>

            {/* Skills - Responsive Pill Badges with Micro-Animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-2.5 mb-8 md:mb-12"
            >
              {skills.map((skill) => (
                <motion.span 
                  key={skill}
                  whileHover={{ scale: 1.05, y: -2, backgroundColor: 'rgba(163, 230, 53, 0.15)', color: '#a3e635' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3.5 sm:px-4 py-1.5 sm:py-2 bg-dark-card text-silver-light font-accent text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider transition-all duration-300 cursor-default rounded-full shadow-md shadow-black/20"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Stats - Sized dynamically for responsive scaling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex gap-6 sm:gap-10 md:gap-12"
            >
              <div>
                <p className="font-display text-3xl sm:text-4xl font-extrabold text-lime mb-1">15+</p>
                <p className="font-accent text-[9px] sm:text-[10px] text-silver uppercase tracking-widest font-semibold">Years Leadership</p>
              </div>
              <div>
                <p className="font-display text-3xl sm:text-4xl font-extrabold text-lime mb-1">3</p>
                <p className="font-accent text-[9px] sm:text-[10px] text-silver uppercase tracking-widest font-semibold">Continents</p>
              </div>
              <div>
                <p className="font-display text-3xl sm:text-4xl font-extrabold text-lime mb-1">5</p>
                <p className="font-accent text-[9px] sm:text-[10px] text-silver uppercase tracking-widest font-semibold">Languages</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Profile Photo with Spectacular 3D Parallax Tilt Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full relative"
            style={{ perspective: "1000px" }}
          >
            <motion.div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative group w-60 h-76 sm:w-64 sm:h-80 md:w-80 md:h-[420px] cursor-pointer"
            >
              {/* Lime glowing accent behind the image that tilts dynamically */}
              <motion.div 
                style={{ 
                  transform: "translateZ(-30px)",
                  transformStyle: "preserve-3d"
                }}
                className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-lime/40 via-emerald-500/20 to-teal-500/10 rounded-2xl blur-xl z-0 group-hover:opacity-100 transition-opacity duration-300"
              ></motion.div>

              {/* Parallax 3D card wrapper */}
              <motion.div 
                style={{ 
                  transform: "translateZ(30px)",
                  transformStyle: "preserve-3d"
                }}
                className="relative w-full h-full overflow-hidden z-10 bg-gradient-to-br from-dark-card to-dark-lighter/50 rounded-2xl shadow-2xl border border-lime-500/15"
              >
                {/* 3D Depth Card Overlay Glare */}
                <div 
                  className="absolute inset-0 bg-gradient-to-tr from-lime/0 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
                />

                <img
                  src={profileImg}
                  alt="Affan Rahman Thahir"
                  style={{ transform: "translateZ(10px)" }}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 z-10"
                />
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator - fixed target link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-accent text-[0.55rem] tracking-[0.3em] uppercase text-silver-muted">Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-lime/60">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </motion.div>
    </section>
  )
}
