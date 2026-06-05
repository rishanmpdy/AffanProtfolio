import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

export default function Academic() {
  return (
    <section className="bg-dark-lighter relative z-10 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
           <div>
             <div className="flex items-center gap-3 mb-4">
               <div className="w-3 h-3 bg-lime rounded-sm shadow-sm shadow-lime/55"></div>
               <span className="font-accent text-sm uppercase tracking-widest text-lime font-semibold">Education</span>
             </div>
             <h2 className="section-title bg-gradient-to-r from-white to-silver bg-clip-text text-transparent">
               Academic Foundation
             </h2>
           </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
           {/* Card 1: MBA */}
           <motion.div 
             whileHover={{ y: -8, scale: 1.02 }}
             transition={{ type: "spring", stiffness: 300, damping: 15 }}
             className="group bg-gradient-to-br from-lime-950/20 to-emerald-950/10 p-8 rounded-2xl border border-lime-500/10 hover:border-lime/30 transition-all duration-300 shadow-xl hover:shadow-2xl"
           >
             <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-lime/10 text-lime mb-6 group-hover:scale-110 transition-transform shadow-md">
               <GraduationCap className="w-6 h-6" />
             </div>
             <p className="font-accent text-[10px] text-silver-muted uppercase tracking-wider mb-2 font-semibold">2015 — 2017</p>
             <p className="font-display text-2xl font-bold text-white mb-2 group-hover:text-lime transition-colors">MBA</p>
             <p className="font-body text-sm text-silver-light">Lord Ashcroft Business School, Cambridge</p>
           </motion.div>
           
           {/* Card 2: BA Economics */}
           <motion.div 
             whileHover={{ y: -8, scale: 1.02 }}
             transition={{ type: "spring", stiffness: 300, damping: 15 }}
             className="group bg-gradient-to-br from-indigo-950/20 to-violet-950/10 p-8 rounded-2xl border border-indigo-500/10 hover:border-lime/30 transition-all duration-300 shadow-xl hover:shadow-2xl"
           >
             <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 mb-6 group-hover:scale-110 transition-transform shadow-md">
               <GraduationCap className="w-6 h-6" />
             </div>
             <p className="font-accent text-[10px] text-silver-muted uppercase tracking-wider mb-2 font-semibold">2012 — 2015</p>
             <p className="font-display text-2xl font-bold text-white mb-2 group-hover:text-lime transition-colors">BA Economics</p>
             <p className="font-body text-sm text-silver-light">Maharaja's College, Ernakulam</p>
           </motion.div>
           
           {/* Card 3: Schooling */}
           <motion.div 
             whileHover={{ y: -8, scale: 1.02 }}
             transition={{ type: "spring", stiffness: 300, damping: 15 }}
             className="group bg-gradient-to-br from-sky-950/20 to-blue-950/10 p-8 rounded-2xl border border-sky-500/10 hover:border-lime/30 transition-all duration-300 shadow-xl hover:shadow-2xl"
           >
             <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 mb-6 group-hover:scale-110 transition-transform shadow-md">
               <GraduationCap className="w-6 h-6" />
             </div>
             <p className="font-accent text-[10px] text-silver-muted uppercase tracking-wider mb-2 font-semibold">Higher Secondary</p>
             <p className="font-display text-2xl font-bold text-white mb-2 group-hover:text-lime transition-colors">Schooling</p>
             <p className="font-body text-sm text-silver-light">International Indian School, Saudi Arabia</p>
           </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
