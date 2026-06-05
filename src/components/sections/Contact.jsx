import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { contactInfo, skills } from '../../data/contact'
import { setActiveSection } from '../../store/slices/navSlice'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Contact() {
  const dispatch = useDispatch()
  const { ref, inView } = useScrollReveal({ threshold: 0.15 })

  useEffect(() => {
    if (inView) dispatch(setActiveSection('contact'))
  }, [inView, dispatch])

  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-28 px-6 md:px-12 max-w-7xl mx-auto relative z-10"
    >
      {/* Ambient */}
      <div className="absolute bottom-0 left-[15%] w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
        {/* Contact info */}
        <div className="lg:col-span-6">
          <div className="section-label">Contact Coordinates</div>
          <h2 className="section-title mb-8">
            Let's <span>Connect</span>.
          </h2>
          
          <p className="text-silver font-body text-sm font-light leading-relaxed mb-12 max-w-md">
            Available for policy consulting, community advocacy programs, public relations, and governance analysis.
          </p>

          <div className="space-y-7">
            {/* Email */}
            <div className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded dark-card flex items-center justify-center text-gold shrink-0 !p-0 group-hover:!border-gold/40">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h4 className="font-accent text-[0.6rem] uppercase tracking-[0.2em] text-silver-muted mb-1">Email</h4>
                <a href={`mailto:${contactInfo.email}`} className="font-body text-sm text-white hover:text-gold transition-colors font-light">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Phones */}
            <div className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded dark-card flex items-center justify-center text-gold shrink-0 !p-0 group-hover:!border-gold/40">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.188-4.166-7.002-7.002l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <div>
                <h4 className="font-accent text-[0.6rem] uppercase tracking-[0.2em] text-silver-muted mb-1">Phone</h4>
                <div className="flex flex-col gap-1">
                  {contactInfo.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s+/g, '')}`} className="font-body text-sm text-white hover:text-gold transition-colors font-light">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Addresses */}
            <div className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded dark-card flex items-center justify-center text-gold shrink-0 !p-0 group-hover:!border-gold/40">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <h4 className="font-accent text-[0.6rem] uppercase tracking-[0.2em] text-silver-muted mb-1">Locations</h4>
                <div className="flex flex-col gap-2">
                  {contactInfo.addresses.map((address) => (
                    <p key={address} className="font-body text-xs text-silver font-light leading-snug">
                      {address}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="lg:col-span-6 flex items-center">
          <div className="dark-card p-8 md:p-12 w-full relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-teal/[0.04] rounded-full blur-[80px]" />

            <div className="section-label">Core Capabilities</div>
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Professional <span className="text-gold">Expertise</span>.
            </h3>
            
            <p className="text-silver font-body text-sm font-light leading-relaxed mb-8">
              Demonstrated proficiencies across socio-political frameworks and corporate administration.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, idx) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="p-4 bg-white/[0.015] border border-black-border rounded hover:border-teal/30 transition-all duration-300 group cursor-default"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal/50 group-hover:bg-teal-neon group-hover:shadow-[0_0_6px_rgba(0,240,255,0.5)] transition-all duration-300 shrink-0" />
                    <p className="font-accent text-xs font-medium text-silver group-hover:text-teal-light transition-colors tracking-wide">
                      {skill}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-8 border-t border-black-border flex flex-col md:flex-row justify-between items-center gap-4 text-silver-muted font-accent text-[0.6rem] tracking-wider uppercase">
        <p>© 2026 Affan Rahman Thahir</p>
        <p>
          Designed with <span className="text-gold">♦</span> for public leadership
        </p>
      </div>
    </section>
  )
}
