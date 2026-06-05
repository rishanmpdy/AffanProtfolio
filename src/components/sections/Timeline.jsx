import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { timelineEvents } from '../../data/timeline'
import { setActiveSection } from '../../store/slices/navSlice'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Building2, GraduationCap, MapPin, Users, Award } from 'lucide-react'

export default function Timeline() {
  const dispatch = useDispatch()
  const { ref, inView } = useScrollReveal({ threshold: 0.1 })
  const [hoveredEvent, setHoveredEvent] = useState(null)

  useEffect(() => {
    if (inView) dispatch(setActiveSection('timeline'))
  }, [inView, dispatch])

  const getIcon = (tag) => {
    switch(tag) {
      case 'current': return <MapPin className="w-5 h-5 text-dark" />
      case 'state': return <Building2 className="w-5 h-5 text-dark" />
      case 'district': return <Users className="w-5 h-5 text-dark" />
      case 'college': return <GraduationCap className="w-5 h-5 text-dark" />
      case 'youth': return <Award className="w-5 h-5 text-dark" />
      default: return <Users className="w-5 h-5 text-dark" />
    }
  }

  return (
    <section 
      id="timeline" 
      ref={ref}
      className="py-24 bg-dark-lighter relative z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
           <div>
             <div className="flex items-center gap-3 mb-4">
               <div className="w-3 h-3 bg-lime rounded-sm shadow-sm shadow-lime/55"></div>
               <span className="font-accent text-sm uppercase tracking-widest text-lime font-semibold">Leadership Journey</span>
             </div>
             <h2 className="section-title bg-gradient-to-r from-white to-silver bg-clip-text text-transparent">
               Trajectory
             </h2>
           </div>
           <p className="font-body text-silver-light max-w-xs text-sm leading-relaxed">
             A timeline of executive roles and community leadership from regional coordination to state-level advocacy.
           </p>
        </div>

        <div className="relative">
          {/* Main timeline line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-24">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0
              const isHovered = hoveredEvent === event.id

              return (
                <div 
                  key={event.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                  onMouseEnter={() => setHoveredEvent(event.id)}
                  onMouseLeave={() => setHoveredEvent(null)}
                >
                  
                  {/* Center Node (visible on md+) */}
                  <div className="hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1 w-14 h-14 bg-dark border-2 border-white/10 rounded-full items-center justify-center z-10 transition-colors duration-300"
                    style={{ borderColor: isHovered ? 'var(--lime)' : 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isHovered ? 'bg-lime text-dark' : 'bg-dark-card text-silver-light'}`}>
                       {isHovered ? getIcon(event.tag) : <div className="w-3 h-3 rounded-full bg-white/30"></div>}
                    </div>
                  </div>

                  {/* Content Box */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 80, damping: 15 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`w-full md:w-[45%] ${
                      isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'
                    }`}
                  >
                    <div className={`p-8 bg-gradient-to-br from-dark-card to-dark-lighter/30 rounded-2xl border border-white/5 transition-all duration-300 relative overflow-hidden group shadow-lg ${
                      isHovered ? 'border-lime/30 shadow-2xl shadow-lime/5 -translate-y-1' : ''
                    }`}>
                      
                      {/* Decorative background glow */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-lime/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className={`flex flex-col gap-2 mb-4 relative z-10 ${isEven ? 'md:items-end' : 'items-start'}`}>
                        <div className="flex items-center gap-3">
                          <span className="font-accent text-[10px] uppercase tracking-widest text-lime bg-lime/10 px-3.5 py-1.5 rounded-full font-bold shadow-sm">
                            {event.year}
                          </span>
                        </div>
                        <h3 className="font-display text-2xl font-bold text-white group-hover:text-lime transition-colors duration-300">
                          {event.role}
                        </h3>
                      </div>
                      
                      <p className="font-display text-lg text-silver-light mb-4 relative z-10">
                        {event.organisation}
                      </p>
                      
                      <p className="font-body text-sm text-silver font-light leading-relaxed relative z-10">
                        {event.detail}
                      </p>
                    </div>
                  </motion.div>
                  
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
