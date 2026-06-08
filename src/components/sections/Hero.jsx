import React, { useEffect } from 'react'
import Particles from 'react-tsparticles'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { setActiveSection } from '../../store/slices/navSlice'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { profileImg } from '../../data/gallery'

export default function Hero() {
  const dispatch = useDispatch()
  const { ref, inView } = useScrollReveal({ threshold: 0.25 })

  useEffect(() => {
    if (inView) dispatch(setActiveSection('hero'))
  }, [inView, dispatch])

  const skills = [
    'Legal Advocacy',
    'Business Strategy',
    'Crisis Management',
    'Public Relations',
    'Policy Research',
    'Leadership'
  ]

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center bg-dark text-white pt-24 pb-16 lg:pt-28 z-10 overflow-hidden"
    >
      <Particles
        className="absolute inset-0 z-0"
        options={{
          particles: {
            number: { value: 22, density: { enable: true, value_area: 900 } },
            color: { value: '#e3ff04' },
            opacity: { value: 0.12 },
            size: { value: 1.8 },
            move: { enable: true, speed: 0.7 },
            links: { enable: true, color: '#e3ff04', opacity: 0.08, distance: 140 }
          }
        }}
      />

      <div className="absolute inset-0 z-0">
        <div className="absolute -top-28 -left-24 w-96 h-96 rounded-full bg-lime/10 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-dark via-dark/75 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col items-start relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-8 md:mb-10 max-w-3xl"
            >
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] font-semibold leading-[0.88] tracking-tight mb-6 text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
                Affan Rahman<span className="text-lime">.</span>
              </h1>
              <p className="font-body text-base sm:text-lg md:text-xl text-silver-light leading-[1.8] max-w-2xl">
                I bring together legal insight, business strategy, and clear leadership to guide decisions with confidence and purpose.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="flex flex-wrap gap-5 mb-10 md:mb-12"
            >
              <a
                href="#vision"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-4 rounded-full bg-gradient-to-r from-lime via-lime-light to-lime text-dark font-accent text-xs sm:text-sm uppercase tracking-[0.22em] font-bold shadow-[0_18px_40px_rgba(227,255,4,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(227,255,4,0.26)]"
              >
                Explore Profile
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-4 rounded-full bg-white/6 backdrop-blur-md text-white font-accent text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-lime/30 hover:text-lime"
              >
                Contact
                <span className="text-lime transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-3.5 sm:px-4 py-2 bg-white/5 text-silver-light font-accent text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.18em] transition-all duration-300 cursor-default rounded-full backdrop-blur-md"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 70, damping: 16, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full relative"
          >
            <div className="relative w-[18rem] h-[24rem] sm:w-[22rem] sm:h-[30rem] md:w-[26rem] md:h-[36rem] lg:w-[28rem] lg:h-[38rem]">
              <img
                src={profileImg}
                alt="Affan Rahman Thahir"
                className="relative z-10 w-full h-full object-contain"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-dark/80 via-dark/35 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

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
