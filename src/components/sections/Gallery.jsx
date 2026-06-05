import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { galleryItems } from '../../data/gallery'
import { setActiveSection } from '../../store/slices/navSlice'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, X, Maximize, Info } from 'lucide-react'

export default function Gallery() {
  const dispatch = useDispatch()
  const { ref, inView } = useScrollReveal({ threshold: 0.1 })
  const [selectedImage, setSelectedImage] = useState(null)
  const [showDescription, setShowDescription] = useState(true);
const [zoomScale, setZoomScale] = useState(1);

  useEffect(() => {
    if (inView) dispatch(setActiveSection('gallery'))
  }, [inView, dispatch])

  // Reset zoom scale when selected image changes
  useEffect(() => {
    setZoomScale(1)
  }, [selectedImage])

  // Close modal and navigate on keyboard inputs
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
      } else if (e.key === 'ArrowRight') {
        handleNextPage()
      } else if (e.key === 'ArrowLeft') {
        handlePrevPage()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  const handleZoomIn = (e) => {
    if (e) e.stopPropagation()
    setZoomScale(prev => Math.min(prev + 0.5, 3))
  }

  const handleZoomOut = (e) => {
    if (e) e.stopPropagation()
    setZoomScale(prev => Math.max(prev - 0.5, 1))
  }

  const handleZoomReset = (e) => {
    if (e) e.stopPropagation()
    setZoomScale(1)
  }

  const handleNextPage = (e) => {
    if (e) e.stopPropagation()
    if (!selectedImage) return
    const currentItem = galleryItems.find(item => item.id === selectedImage.id)
    if (!currentItem || currentItem.images.length <= 1) return
    const currentIndex = currentItem.images.indexOf(selectedImage.image)
    const nextIndex = (currentIndex + 1) % currentItem.images.length
    setSelectedImage({
      ...selectedImage,
      image: currentItem.images[nextIndex]
    })
  }

  const handlePrevPage = (e) => {
    if (e) e.stopPropagation()
    if (!selectedImage) return
    const currentItem = galleryItems.find(item => item.id === selectedImage.id)
    if (!currentItem || currentItem.images.length <= 1) return
    const currentIndex = currentItem.images.indexOf(selectedImage.image)
    const prevIndex = (currentIndex - 1 + currentItem.images.length) % currentItem.images.length
    setSelectedImage({
      ...selectedImage,
      image: currentItem.images[prevIndex]
    })
  }

  return (
    <section 
      id="gallery" 
      ref={ref}
      className="py-24 px-4 md:px-8 bg-dark relative z-10"
    >
      <div className="w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
           <div>
             <div className="flex items-center gap-3 mb-4">
               <div className="w-3 h-3 bg-lime rounded-sm shadow-sm shadow-lime/55"></div>
               <span className="font-accent text-sm uppercase tracking-widest text-lime font-semibold">Key Initiatives</span>
             </div>
             <h2 className="section-title bg-gradient-to-r from-white to-silver bg-clip-text text-transparent">
               Visual Advocacy
             </h2>
           </div>
           <p className="font-body text-silver-light max-w-md text-sm leading-relaxed">
             Visual documentation of student advocacy, policy presentations, community leadership, and cultural engagement across India, Saudi Arabia, and the UK.
           </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.flatMap((item, itemIndex) => {
            const isLarge = item.span === 'col-span-2'
            
            return item.images.map((imgSrc, imgIndex) => {
              const selectedData = {
                ...item,
                image: imgSrc,
                uniqueId: `${item.id}-${imgIndex}`
              }

              return (
                <motion.div
                  key={selectedData.uniqueId}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 80, damping: 15, delay: (itemIndex * 0.05) }}
                  viewport={{ once: true }}
                  onClick={() => {
                    setSelectedImage(selectedData)
                  }}
                  className={`group relative bg-gradient-to-br from-dark-card to-dark-lighter/50 overflow-hidden cursor-pointer rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/5 hover:border-lime/20 ${
                    isLarge ? 'md:col-span-2' : 'md:col-span-1'
                  }`}
                >
                  {/* Image - object cover for full layout fill */}
                  <div className="w-full h-[280px] md:h-[350px] bg-dark-lighter relative overflow-hidden">
                    <img 
                      src={imgSrc} 
                      alt={`${item.alt} - Page ${imgIndex + 1}`}
                      className="absolute inset-0 w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors duration-300 pointer-events-none flex items-center justify-center">
                       <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-lime text-dark px-4 py-2 rounded-full font-accent text-xs uppercase tracking-widest font-bold shadow-lg shadow-lime/25">
                         View Full Page
                       </div>
                    </div>
                  </div>

                  {/* Caption Area */}
                  <div className="p-6 bg-dark-card/90 group-hover:bg-dark-lighter/90 backdrop-blur-sm transition-colors duration-300">
                    <div className="flex justify-between items-start mb-2 gap-4">
                      <h3 className="text-white font-display text-lg md:text-xl font-bold group-hover:text-lime transition-colors duration-300">
                        {item.title}
                      </h3>
                      {item.images.length > 1 && (
                        <span className="font-accent text-[9px] uppercase text-lime bg-lime/10 px-2.5 py-1 rounded-full font-bold tracking-wider shrink-0">
                          Page {imgIndex + 1} of {item.images.length}
                        </span>
                      )}
                    </div>
                    <p className="text-silver-light font-body text-xs md:text-sm font-light leading-relaxed line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              )
            })
          })}
        </div>

      </div>

      {/* Fullscreen Image Modal with Dual Navigation & Max Zoom Suite */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-lg p-4 md:p-8 overflow-auto select-none"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
               className="fixed top-6 right-6 w-12 h-12 bg-black/70 hover:bg-black/90 text-white hover:text-lime rounded-full flex items-center justify-center transition-colors duration-300 z-[130] shadow-lg border border-white/5"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Page Flip Trigger for Multi-page documents */}
            {galleryItems.find(item => item.id === selectedImage.id)?.images.length > 1 && (
              <button 
                onClick={handlePrevPage}
                className="absolute left-6 w-12 h-12 bg-dark-card/80 hover:bg-lime text-white hover:text-dark rounded-full flex items-center justify-center transition-colors duration-300 z-[110] shadow-lg border border-white/5"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Right Page Flip Trigger for Multi-page documents */}
            {galleryItems.find(item => item.id === selectedImage.id)?.images.length > 1 && (
              <button 
                onClick={handleNextPage}
                className="absolute right-6 w-12 h-12 bg-dark-card/80 hover:bg-lime text-white hover:text-dark rounded-full flex items-center justify-center transition-colors duration-300 z-[110] shadow-lg border border-white/5"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Main Image View Area */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full h-full max-w-none max-h-none flex items-center justify-center relative overflow-visible"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Panning Container */}
              <div 
                className={`w-full h-full flex items-center justify-center overflow-auto ${zoomScale > 1 ? 'cursor-grab active:cursor-grabbing justify-start items-start' : ''}`}
              >
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.alt}
                  style={{ 
                    transform: `scale(${zoomScale})`, 
                    transformOrigin: 'center center',
                    transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)' 
                  }}
                  className="object-contain shadow-2xl rounded-lg"
                />
              </div>
            </motion.div>

            {/* Bottom Caption Banner & Interactive Controls */}
            <div className="flex items-center justify-between w-full px-4 py-2 bg-dark-card/90 backdrop-blur-md rounded-b-lg">
                 <button onClick={() => setShowDescription(prev => !prev)} className="flex items-center gap-1 text-silver hover:text-lime transition-colors" title="Toggle description">
                   <Info className="w-4 h-4"/>
                   <span className="text-xs uppercase">Info</span>
                 </button>
                 {/* Existing Close button moved to top right remains unchanged */}
               
              <div>
                <div className="flex items-center justify-center gap-3 mb-1">
                  <h3 className="text-white font-display text-lg md:text-xl font-bold">{selectedImage.title}</h3>
                  {galleryItems.find(item => item.id === selectedImage.id)?.images.length > 1 && (
                    <span className="font-accent text-[9px] uppercase text-lime bg-lime/10 px-2.5 py-1 rounded-full font-bold tracking-wider">
                      Page {galleryItems.find(item => item.id === selectedImage.id)?.images.indexOf(selectedImage.image) + 1} of {galleryItems.find(item => item.id === selectedImage.id)?.images.length}
                    </span>
                  )}
                </div>
                <p className="text-silver-light font-body text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">{selectedImage.caption}</p>
              </div>

              {/* Advanced Zoom Toolbar */}
              <div className="flex items-center gap-5 bg-dark/60 px-5 py-2.5 rounded-full border border-white/5 shadow-inner">
                <button 
                  onClick={handleZoomOut} 
                  disabled={zoomScale <= 1}
                  className="text-silver hover:text-lime disabled:opacity-30 disabled:hover:text-silver p-1 transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4.5 h-4.5" />
                </button>
                
                <span className="text-xs font-accent text-silver font-bold min-w-[3.5rem] tracking-wider select-none">
                  {Math.round(zoomScale * 100)}%
                </span>
                
                <button 
                  onClick={handleZoomIn} 
                  disabled={zoomScale >= 3}
                  className="text-silver hover:text-lime disabled:opacity-30 disabled:hover:text-silver p-1 transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4.5 h-4.5" />
                </button>

                <div className="w-px h-4 bg-white/10"></div>

                <button 
                  onClick={handleZoomReset}
                  className="text-[10px] font-accent text-silver hover:text-lime uppercase tracking-widest font-bold flex items-center gap-1.5 transition-colors"
                  title="Fit Screen"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Fit
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
