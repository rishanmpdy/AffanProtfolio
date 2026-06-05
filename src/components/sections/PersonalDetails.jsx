import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Briefcase } from 'lucide-react'

export default function PersonalDetails() {
  return (
    <section className="bg-dark relative z-10 pt-12 pb-24 px-6 md:px-12 border-t border-dark-border/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-8 md:gap-16 p-8 md:p-12 bg-dark-card border border-dark-border rounded-sm w-full"
        >
          <div className="flex gap-5 items-start flex-1">
             <div className="w-10 h-10 bg-dark rounded-sm flex items-center justify-center shrink-0 border border-dark-border">
               <Briefcase className="w-5 h-5 text-lime" />
             </div>
             <div>
               <p className="font-accent text-xs text-silver-muted uppercase tracking-widest mb-2">Visa Status</p>
               <p className="font-display text-white font-bold text-lg md:text-xl">UK & Saudi PR</p>
             </div>
          </div>
          
          <div className="hidden md:block w-px bg-dark-border self-stretch"></div>

          <div className="flex gap-5 items-start flex-1">
             <div className="w-10 h-10 bg-dark rounded-sm flex items-center justify-center shrink-0 border border-dark-border">
               <MapPin className="w-5 h-5 text-lime" />
             </div>
             <div>
               <p className="font-accent text-xs text-silver-muted uppercase tracking-widest mb-2">Residences</p>
               <p className="font-body text-base text-silver-light mb-1">Anitha's, Thiruvannur P.O, Kozhikode</p>
               <p className="font-body text-base text-silver-light">Rahmath Manzil, Edamuttam P.O, Thrissur</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
