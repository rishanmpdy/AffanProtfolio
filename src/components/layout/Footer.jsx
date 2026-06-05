import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { setActiveSection } from '../../store/slices/navSlice'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Mail, Phone, MapPin, GraduationCap, Globe2 } from 'lucide-react'

export default function Footer() {
  const dispatch = useDispatch()
  const { ref, inView } = useScrollReveal({ threshold: 0.1 })

  useEffect(() => {
    if (inView) dispatch(setActiveSection('contact'))
  }, [inView, dispatch])

  return (
    <footer
      id="contact"
      ref={ref}
      className="bg-dark-card relative z-10 border-t border-dark-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">

          {/* Main Title / CTA */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
                Let's connect<span className="text-lime">.</span>
              </h2>
              
              <motion.a 
                href="mailto:affanart@gmail.com" 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-4 text-white font-display text-base md:text-lg font-bold group hover:text-lime transition-colors mb-8 bg-dark/60 p-4 px-6 rounded-2xl border border-white/5 hover:border-lime/20 shadow-md"
              >
                <Mail className="w-5 h-5 text-lime" />
                affanart@gmail.com
                <span className="w-8 h-8 bg-dark-lighter rounded-full flex items-center justify-center group-hover:bg-lime transition-colors ml-2 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 group-hover:text-dark transition-all">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </motion.a>

              <div className="flex flex-col gap-4 mt-4">
                <a href="tel:00966550659662" className="flex items-center gap-3 font-body text-silver-light hover:text-lime transition-colors text-sm group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-lime/10 transition-colors">
                    <Phone className="w-4 h-4 text-silver group-hover:text-lime transition-colors" />
                  </div>
                  00966 55 065 9662
                </a>
                <a href="tel:+918157838985" className="flex items-center gap-3 font-body text-silver-light hover:text-lime transition-colors text-sm group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-lime/10 transition-colors">
                    <Phone className="w-4 h-4 text-silver group-hover:text-lime transition-colors" />
                  </div>
                  +91 81578 38985
                </a>
              </div>

              {/* Languages */}
              <div className="mt-12">
                <div className="flex items-center gap-2 mb-5">
                  <Globe2 className="w-4 h-4 text-lime animate-pulse" />
                  <p className="font-accent text-xs uppercase tracking-widest text-silver-muted font-bold">Languages</p>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {['Malayalam', 'English', 'Hindi', 'Urdu', 'Arabic'].map(lang => (
                    <motion.span 
                      key={lang}
                      whileHover={{ scale: 1.05, y: -2, backgroundColor: 'rgba(163, 230, 53, 0.15)', color: '#a3e635' }}
                      className="px-4 py-2 bg-dark/40 text-silver-light font-accent text-xs uppercase tracking-wider transition-all duration-300 cursor-default rounded-full shadow-md border border-white/5 hover:border-lime/20"
                    >
                      {lang}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Academic & Identity */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12">

            {/* Academic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
                <GraduationCap className="w-5 h-5 text-lime" />
                <span className="font-accent text-xs uppercase tracking-widest text-lime font-bold">Academic Foundation</span>
              </div>
              <ul className="space-y-8">
                <li className="group">
                  <p className="font-accent text-[10px] text-silver-muted uppercase tracking-wider mb-1.5 font-bold group-hover:text-lime transition-colors">2015 — 2017</p>
                  <p className="font-display text-lg font-bold text-white mb-1 group-hover:text-lime transition-colors">MBA</p>
                  <p className="font-body text-sm text-silver-light">Lord Ashcroft Business School, Cambridge</p>
                </li>
                <li className="group">
                  <p className="font-accent text-[10px] text-silver-muted uppercase tracking-wider mb-1.5 font-bold group-hover:text-lime transition-colors">2012 — 2015</p>
                  <p className="font-display text-lg font-bold text-white mb-1 group-hover:text-lime transition-colors">BA Economics</p>
                  <p className="font-body text-sm text-silver-light">Maharaja's College, Ernakulam</p>
                </li>
                <li className="group">
                  <p className="font-accent text-[10px] text-silver-muted uppercase tracking-wider mb-1.5 font-bold group-hover:text-lime transition-colors">Higher Secondary</p>
                  <p className="font-display text-lg font-bold text-white mb-1 group-hover:text-lime transition-colors">Schooling</p>
                  <p className="font-body text-sm text-silver-light">International Indian School, Saudi Arabia</p>
                </li>
              </ul>
            </motion.div>

            {/* Identity / Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
                <MapPin className="w-5 h-5 text-lime" />
                <span className="font-accent text-xs uppercase tracking-widest text-lime font-bold">Personal Details</span>
              </div>
              <ul className="space-y-8">
                <li className="group">
                  <p className="font-display text-lg font-bold text-white mb-1.5 group-hover:text-lime transition-colors">Visa Status</p>
                  <p className="font-body text-sm text-silver-light">UK & Saudi PR</p>
                </li>
                <li className="group">
                  <p className="font-display text-lg font-bold text-white mb-3 group-hover:text-lime transition-colors">Residences</p>
                  <div className="space-y-3">
                    <p className="font-body text-sm text-silver-light flex gap-3.5 items-start">
                      <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                        <MapPin className="w-3.5 h-3.5 text-lime" />
                      </div>
                      <span>Anitha's, Thiruvannur P.O<br />Kozhikode</span>
                    </p>
                    <p className="font-body text-sm text-silver-light flex gap-3.5 items-start">
                      <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                        <MapPin className="w-3.5 h-3.5 text-lime" />
                      </div>
                      <span>Rahmath Manzil, Edamuttam P.O<br />Thrissur</span>
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Bottom Footer strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/5 bg-dark">
        <p className="font-accent text-xs tracking-widest text-silver-muted uppercase">
          &copy; {new Date().getFullYear()} Affan Rahman Thahir
        </p>
        <p className="font-accent text-xs tracking-widest text-silver-muted">
          MBA from Lord Ashcroft Business School, Cambridge
        </p>
      </div>
    </footer>
  )
}
