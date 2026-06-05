import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { setActiveSection } from '../../store/slices/navSlice'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Scale, Users, Globe, Eye, Briefcase } from 'lucide-react'

export default function Vision() {
  const dispatch = useDispatch()
  const { ref, inView } = useScrollReveal({ threshold: 0.15 })

  useEffect(() => {
    if (inView) dispatch(setActiveSection('vision'))
  }, [inView, dispatch])

  const visionPoints = [
    {
      id: 1,
      title: "Legal & Business Synergy",
      desc: "Integrating complex legal frameworks into efficient business operations to drive sustainable growth.",
      icon: <Briefcase className="w-5 h-5" />,
      colorTheme: "from-emerald-950/20 to-teal-950/10 border-emerald-500/10 hover:border-emerald-500/30 shadow-emerald-950/10",
      accent: "text-emerald-400 bg-emerald-500/10",
      glow: "bg-emerald-500/5"
    },
    {
      id: 2,
      title: "Student & Minority Rights",
      desc: "Advocating for student rights and minorities through systematic institutional reform.",
      icon: <Scale className="w-5 h-5" />,
      colorTheme: "from-amber-950/20 to-orange-950/10 border-amber-500/10 hover:border-amber-500/30 shadow-amber-950/10",
      accent: "text-amber-400 bg-amber-500/10",
      glow: "bg-amber-500/5"
    },
    {
      id: 3,
      title: "Global Perspectives",
      desc: "Leveraging global perspectives gained from deep experience across the UK and Middle East.",
      icon: <Globe className="w-5 h-5" />,
      colorTheme: "from-sky-950/20 to-blue-950/10 border-sky-500/10 hover:border-sky-500/30 shadow-sky-950/10",
      accent: "text-sky-400 bg-sky-500/10",
      glow: "bg-sky-500/5"
    },
    {
      id: 4,
      title: "Transparent Governance",
      desc: "Promoting highly transparent governance and accountability in organizational leadership.",
      icon: <Eye className="w-5 h-5" />,
      colorTheme: "from-indigo-950/20 to-violet-950/10 border-indigo-500/10 hover:border-indigo-500/30 shadow-indigo-950/10",
      accent: "text-indigo-400 bg-indigo-500/10",
      glow: "bg-indigo-500/5"
    },
    {
      id: 5,
      title: "Youth Empowerment",
      desc: "Developing sustainable strategies for socio-political development and engaging youth through policy forums.",
      icon: <Users className="w-5 h-5" />,
      colorTheme: "from-lime-950/20 to-emerald-950/10 border-lime-500/10 hover:border-lime-500/30 shadow-lime-950/10",
      accent: "text-lime bg-lime/10",
      glow: "bg-lime/5"
    }
  ]

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 80, damping: 15 } 
    }
  }

  return (
    <section 
      id="vision" 
      ref={ref}
      className="py-24 px-6 md:px-12 bg-dark relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 pb-8">
           <div>
             <div className="flex items-center gap-3 mb-4">
               <div className="w-3 h-3 bg-lime rounded-sm shadow-sm shadow-lime/55"></div>
               <span className="font-accent text-sm uppercase tracking-widest text-lime font-semibold">Core Principles</span>
             </div>
             <h2 className="section-title max-w-2xl bg-gradient-to-r from-white to-silver bg-clip-text text-transparent">
               Strategic Vision
             </h2>
           </div>
           <p className="font-body text-silver-light max-w-sm text-sm leading-relaxed">
             A forward-looking advisory approach combining legal literacy, policy research, and structural reform.
           </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visionPoints.map((point) => (
            <motion.div
              key={point.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 15 } 
              }}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${point.colorTheme} border backdrop-blur-sm transition-all duration-300 shadow-xl ${
                point.id === 5 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Soft glowing accent orb inside each card */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 ${point.glow} rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${point.accent} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {point.icon}
                </div>
                <div className="text-white/5 font-display text-6xl font-black tracking-tighter group-hover:text-white/10 transition-colors">
                  0{point.id}
                </div>
              </div>
              
              <h3 className="text-white font-display text-2xl font-bold mb-4 group-hover:text-lime transition-colors duration-300 relative z-10">
                {point.title}
              </h3>
              <p className="text-silver-light font-body text-sm font-light leading-relaxed relative z-10">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
