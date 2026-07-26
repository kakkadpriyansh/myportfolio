"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

const words = [
  "नमस्ते",
  "નમસ્તે",
  "வணக்கம்",
  "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ",
  "Welcome",
]

export default function Preloader() {
  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })
  const overlayRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  // Word cycling
  useEffect(() => {
    if (index === words.length - 1) return
    const t = setTimeout(() => setIndex(i => i + 1), index === 0 ? 900 : 180)
    return () => clearTimeout(t)
  }, [index])

  // Progress bar
  useEffect(() => {
    const total = words.length
    setProgress(Math.round(((index + 1) / total) * 100))
  }, [index])

  // Exit animation when "Welcome" shows
  useEffect(() => {
    if (index !== words.length - 1 || dimension.height === 0) return

    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} 0 Q${dimension.width / 2} 0 0 0 L0 0`

    const tl = gsap.timeline({ delay: 0.9 })
    tl
      .to(textRef.current, { opacity: 0, y: -20, duration: 0.4, ease: "power2.in" })
      .to(progressRef.current, { opacity: 0, duration: 0.3, ease: "power2.in" }, "<")
      .to(ringRef.current, { opacity: 0, scale: 0.8, duration: 0.3, ease: "power2.in" }, "<")
      .to(pathRef.current, {
        attr: { d: targetPath },
        duration: 0.8,
        ease: "power4.inOut",
      })
      .to(overlayRef.current, {
        y: -dimension.height,
        duration: 0.8,
        ease: "power4.inOut",
        onComplete: () => {
          if (overlayRef.current) overlayRef.current.style.display = "none"
        },
      }, "<0.1")
  }, [index, dimension])

  const initialPath = dimension.height > 0
    ? `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`
    : `M0 0`

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "rgb(5,5,5)" }}
    >
      {/* SVG Curve */}
      {dimension.height > 0 && (
        <svg className="absolute top-0 w-full pointer-events-none" style={{ height: dimension.height + 300, fill: "rgb(5,5,5)" }}>
          <defs>
            <linearGradient id="preloader-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(5,5,5)" />
              <stop offset="100%" stopColor="rgb(5,5,5)" />
            </linearGradient>
          </defs>
          <path ref={pathRef} d={initialPath} />
        </svg>
      )}

      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Spinning rings */}
      <div ref={ringRef} className="relative mb-10">
        {/* Outer ring */}
        <div
          className="w-32 h-32 rounded-full border border-cyan-400/20 spin-slow absolute"
          style={{ inset: "-1rem" }}
        />
        {/* Glowing arc */}
        <div
          className="w-32 h-32 rounded-full spin-reverse absolute"
          style={{
            inset: "-0.5rem",
            border: "1px solid transparent",
            borderTopColor: "rgba(34,211,238,0.8)",
            borderRightColor: "rgba(139,92,246,0.5)",
            filter: "drop-shadow(0 0 8px rgba(34,211,238,0.5))",
          }}
        />
        {/* Inner glow ring */}
        <div
          className="w-24 h-24 rounded-full spin-slow absolute"
          style={{
            inset: "0",
            border: "1px solid transparent",
            borderBottomColor: "rgba(139,92,246,0.6)",
            filter: "drop-shadow(0 0 6px rgba(139,92,246,0.4))",
          }}
        />

        {/* Monogram */}
        <div
          ref={logoRef}
          className="w-24 h-24 rounded-full flex items-center justify-center font-black text-2xl tracking-widest gradient-text-cyan"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          PK
        </div>
      </div>

      {/* Word */}
      <div ref={textRef} className="relative z-10 text-center mb-10">
        <p
          key={index}
          className="text-4xl md:text-6xl font-bold text-white fade-up"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {words[index]}
        </p>
      </div>

      {/* Progress bar */}
      <div ref={progressRef} className="relative z-10 flex flex-col items-center gap-3">
        <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, rgb(34,211,238), rgb(139,92,246))",
              boxShadow: "0 0 10px rgba(34,211,238,0.5)",
            }}
          />
        </div>
        <span className="text-xs font-mono text-gray-500">{progress}%</span>
      </div>
    </div>
  )
}
