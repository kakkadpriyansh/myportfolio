"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin, Instagram, ChevronDown, User, Briefcase } from 'lucide-react'
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 1 - 0.5,
        y: -(e.clientY / window.innerHeight) * 1 + 0.5,
      })
    }

    setIsLoaded(true)
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden professional-background professional-grid">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl gentle-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl gentle-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl gentle-pulse" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl gentle-pulse" style={{ animationDelay: "4s" }} />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Professional Profile Image */}
        <div className="mb-16 perspective-1000">
          <div
            className={`relative inline-block group cursor-pointer subtle-float ${isLoaded ? 'smooth-fade-in' : 'opacity-0'}`}
            style={{
              transform: `rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * 5}deg)`,
              transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), opacity 1s ease-out",
            }}
          >
            {/* Clean Rings */}
            <div className="absolute inset-0 rounded-full border border-white/10 scale-110 elegant-rotate" style={{ animationDuration: "30s" }} />
            <div className="absolute inset-0 rounded-full border border-white/5 scale-105 elegant-rotate" style={{ animationDuration: "25s", animationDirection: "reverse" }} />
            
            <div className="relative z-10 p-1 professional-glass-strong rounded-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 mix-blend-overlay z-10 rounded-full" />
              <Image
                src="/images/IMG_0350.jpg"
                alt="Priyansh Kakkad"
                width={220}
                height={220}
                className="rounded-full relative z-10 shadow-2xl group-hover:scale-105 transition-all duration-500 professional-shadow"
                style={{
                  filter: "contrast(1.1) saturate(1.1) brightness(1.05)",
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(79, 70, 229, 0.15)"
                }}
              />
            </div>
          </div>
        </div>

        {/* Professional Name Display */}
        <div className="space-y-8">
          <div className="relative">
            <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-4 professional-glass">
              👋 Hello, I'm
            </div>
            <h1 className={`text-5xl md:text-7xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white relative clean-heading ${isLoaded ? 'smooth-fade-in' : 'opacity-0'}`} 
                style={{ animationDelay: "0.3s" }}>
              <span className="inline-block hover:scale-105 transition-all duration-500 cursor-default">
                PRIYANSH KAKKAD
              </span>
            </h1>
            {/* Professional Decorations */}
            <User className="absolute top-4 right-4 h-8 w-8 text-white/20 gentle-pulse" />
            <Briefcase className="absolute bottom-4 left-4 h-6 w-6 text-white/15 gentle-pulse" style={{ animationDelay: "1s" }} />
          </div>

          {/* Professional Subtitle */}
          <div className={`relative overflow-hidden ${isLoaded ? 'smooth-fade-in' : 'opacity-0'}`} 
               style={{ animationDelay: "0.6s" }}>
            <h2 className="text-2xl md:text-4xl font-light tracking-wide relative clean-subheading text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
              <span className="inline-block">
                Software Engineer (Next.js & React.js)
              </span>
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent gentle-pulse" />
          </div>

          {/* Professional Description */}
          <div className={`max-w-4xl mx-auto ${isLoaded ? 'smooth-fade-in' : 'opacity-0'}`} 
               style={{ animationDelay: "0.9s" }}>
            <p className="text-xl clean-body leading-relaxed mb-12 text-gray-300">
              Next.js and React.js developer with strong experience in building fast, scalable, and SEO‑optimized web applications. 
              Skilled in component‑based UI development, API integrations, backend basics using Node.js/Express, Python, and .NET, and deploying production applications using VPS, Nginx, CI/CD pipelines, and auto‑deployment setups.
            </p>
          </div>

          {/* Professional Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 ${isLoaded ? 'smooth-fade-in' : 'opacity-0'}`} 
               style={{ animationDelay: "1.2s" }}>
            <a
              href="https://drive.google.com/file/d/1GEOb_WIpoR8rAIOh0jhEftqGMLZNnBqk/view?usp=sharing"
              target="_blank"
              className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-8 py-4 rounded-xl transform-gpu hover:scale-105 hover:-translate-y-2 transition-all duration-500 inline-flex items-center justify-center text-lg font-semibold shadow-lg hover:shadow-indigo-500/25"
              rel="noreferrer"
            >
              <Download className="mr-3 h-6 w-6 relative z-10 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              <span className="relative z-10">Download Resume</span>
            </a>

            <a
              href="https://wa.me/917984079603"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden backdrop-blur-sm border border-indigo-500/30 hover:border-indigo-500/50 hover:bg-indigo-500/10 px-8 py-4 rounded-xl transform-gpu hover:scale-105 hover:-translate-y-2 transition-all duration-500 inline-flex items-center justify-center text-lg font-semibold shadow-lg hover:shadow-indigo-500/20"
            >
              <Mail className="mr-3 h-6 w-6 relative z-10 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              <span className="relative z-10">Contact Me</span>
            </a>
          </div>

          {/* Professional Social Links */}
          <div className={`flex justify-center space-x-8 mb-16 ${isLoaded ? 'smooth-fade-in' : 'opacity-0'}`} 
               style={{ animationDelay: "1.5s" }}>
            {[
              { icon: Github, href: "https://github.com/kakkadpriyansh", color: "from-purple-500 to-indigo-500" },
              { icon: Linkedin, href: "https://linkedin.com/in/kakkadpriyansh", color: "from-blue-500 to-cyan-500" },
              { icon: Instagram, href: "https://instagram.com/kakkadpriyansh", color: "from-pink-500 to-orange-400" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`group relative p-6 professional-glass rounded-2xl transform-gpu hover:scale-110 hover:-translate-y-2 transition-all duration-500 professional-interactive professional-shadow hover:bg-gradient-to-br ${social.color} hover:bg-opacity-20`}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${social.color}" />
                <social.icon className="h-8 w-8 text-white/70 group-hover:text-white relative z-10 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
