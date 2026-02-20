"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

const words = [
  "नमस्ते", // Hindi
  "નમસ્તે", // Gujarati
  "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ", // Punjabi
  "ਨਮਸਕਾਰ", // Marathi (similar to Hindi) - wait, Marathi is Namaskar. Let's use generic Namaste variants or specific scripts.
  "வணக்கம்", // Tamil
  "Welcome"
]

export default function Preloader() {
  const [index, setIndex] = useState(0)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })
  const overlayRef = useRef(null)
  const pathRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  useEffect(() => {
    if (index == words.length - 1) return

    const timeout = setTimeout(() => {
      setIndex(index + 1)
    }, index === 0 ? 1000 : 150)

    return () => clearTimeout(timeout)
  }, [index])

  useEffect(() => {
    const tl = gsap.timeline()
    
    // Text Animation
    // We handle text change via state, but we can animate the opacity or slight movement
    
    // Initial Curve
    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    
    // Target Curve (Flat at top)
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} 0 Q${dimension.width / 2} 0 0 0 L0 0`

    if (index === words.length - 1) {
       // Wait a bit on "Welcome"
       setTimeout(() => {
            tl.to(textRef.current, {
                opacity: 0,
                duration: 0.5
            })
            .to(pathRef.current, {
                attr: { d: targetPath },
                duration: 0.8,
                ease: "power2.inOut"
            })
            .to(overlayRef.current, {
                y: -1 * dimension.height,
                duration: 0.8,
                ease: "power2.inOut",
                delay: -0.8 // Run together with curve
            })
            // Remove from DOM or just hide (z-index)
            .set(overlayRef.current, { display: "none" })
       }, 1000)
    }
  }, [index, dimension])

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white">
      {/* SVG Curve Container */}
      {dimension.height > 0 && (
          <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none fill-black">
            <path ref={pathRef} d={`M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`} />
          </svg>
      )}
      
      <div ref={textRef} className="relative z-10 text-5xl md:text-7xl font-bold flex items-center gap-2">
         <span className="w-4 h-4 bg-indigo-500 rounded-full inline-block animate-pulse"></span>
         {words[index]}
      </div>
    </div>
  )
}
