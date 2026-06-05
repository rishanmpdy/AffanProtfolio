import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import yuvatharamImg from '../../assets/gallery/yuvatharam_tv.png'

export default function FeaturedVideo() {
  const { ref, inView } = useScrollReveal({ threshold: 0.2 })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section 
      id="featured-video" 
      ref={ref}
      className="relative w-full py-24 px-6 md:px-12 bg-dark-lighter z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
             <div className="flex items-center gap-3 mb-4">
               <div className="w-3 h-3 bg-lime rounded-sm"></div>
               <span className="font-accent text-sm uppercase tracking-widest text-silver">Featured Highlight</span>
             </div>
             <h2 className="section-title">
               Yuvatharam — Jaihind TV
             </h2>
           </div>
           <p className="font-body text-silver max-w-sm text-sm mt-4 md:mt-0 leading-relaxed">
             A hunt to find the socially committed youth — a reality show spotlighting leaders driving real change.
           </p>
        </div>

        {/* Video Container with real thumbnail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="relative w-full bg-dark cursor-pointer overflow-hidden group shadow-2xl"
          style={{ aspectRatio: '16/9' }}
        >
          {/* Thumbnail Image */}
          <img 
            src={yuvatharamImg} 
            alt="Yuvatharam Reality Show - Jaihind TV" 
            className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
          />

          {/* Darken overlay on hover */}
          <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/50 transition-all duration-300" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-20 h-20 bg-lime rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-dark ml-1">
                 <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
               </svg>
            </div>
          </div>

          {/* Text Overlay */}
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 bg-gradient-to-t from-dark via-dark/70 to-transparent z-10">
            <h3 className="font-display text-2xl md:text-4xl font-bold text-white mb-2">
              Contestant — Yuvatharam Reality Show
            </h3>
            <p className="font-body text-silver-light text-sm md:text-base max-w-2xl">
              As a Contestant in Yuvatharam Reality show in Jaihind TV. A hunt to find the socially committed youth.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
