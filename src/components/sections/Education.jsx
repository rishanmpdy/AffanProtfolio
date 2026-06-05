import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { education, languages } from '../../data/education'
import { setActiveSection } from '../../store/slices/navSlice'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Education() {
  const dispatch = useDispatch()
  const { ref, inView } = useScrollReveal({ threshold: 0.15 })

  useEffect(() => {
    if (inView) dispatch(setActiveSection('education'))
  }, [inView, dispatch])

  return (
    <section 
      id="education" 
      ref={ref}
      className="py-28 px-6 md:px-12 max-w-7xl mx-auto relative z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Education cards */}
        <div className="lg:col-span-7">
          <div className="section-label">Academic Credentials</div>
          <h2 className="section-title mb-12">
            Academic <span>Foundation</span>.
          </h2>

          <div className="space-y-5">
            {education.map((edu, idx) => (
              <motion.div 
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="dark-card p-6 md:p-8 flex flex-col md:flex-row justify-between gap-6 group"
              >
                <div className="flex-1">
                  <h3 className="font-display text-lg md:text-xl font-bold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-gold font-accent text-xs font-medium tracking-wide uppercase mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-silver-muted font-body text-xs flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {edu.location}
                  </p>
                </div>
                <div className="md:text-right flex items-center md:items-start">
                  <span className="badge badge-teal text-[0.6rem]">{edu.period}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="dark-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-52 h-52 bg-teal/[0.04] rounded-full blur-[90px]" />

            <div className="section-label">Linguistic Literacy</div>
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Global <span className="text-gold">Communique</span>.
            </h3>
            
            <p className="text-silver font-body text-sm font-light leading-relaxed mb-8">
              Fluency in diverse languages enables effective cross-cultural engagement and community relations.
            </p>

            <div className="flex flex-wrap gap-3">
              {languages.map((lang, idx) => (
                <motion.span 
                  key={lang}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  viewport={{ once: true }}
                  className="px-5 py-2.5 bg-white/[0.02] border border-black-border rounded-full font-accent text-xs text-silver hover:border-gold/40 hover:text-gold-light transition-all duration-300 cursor-default tracking-wide"
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
