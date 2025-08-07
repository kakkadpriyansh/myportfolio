"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin, Instagram, ChevronDown, Sparkles } from 'lucide-react'
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 1 - 0.5,
        y: -(e.clientY / window.innerHeight) * 1 + 0.5,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Enhanced Profile Image with multiple effects */}
        <div className="mb-12 perspective-1000">
          <div
            className="relative inline-block group cursor-pointer"
            style={{
              transform: `rotateY(${mousePosition.x * 10}deg) rotateX(${mousePosition.y * 10}deg)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            {/* Multiple glow rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-2xl scale-150 animate-pulse" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl scale-125 animate-pulse" style={{ animationDelay: "1s" }} />
            
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D03AQFQCBFFgk8kWQ/profile-displayphoto-shrink_200_200/B4DZZ26xo_GsAY-/0/1745751841984?e=1756944000&v=beta&t=q0qJWD1dI_TmoBJdTtbuuEf0BVpCATOCrU_DpxF4BMc"
              alt="Priyansh Kakkad"
              width={220}
              height={220}
              className="rounded-full relative z-10 border-4 border-white/40 shadow-2xl group-hover:scale-105 transition-all duration-500"
              style={{
                filter: "drop-shadow(0 30px 60px rgba(255, 255, 255, 0.3))",
                boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.2), 0 30px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              }}
            />
          </div>
        </div>

        {/* Enhanced Name Display with gradient animation */}
        <div className="space-y-8">
          <div className="relative">
            <h1 className="text-7xl md:text-9xl font-black mb-6 relative">
              <span className="inline-block hover:scale-105 transition-all duration-500 cursor-default bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Priyansh
              </span>
              <br />
              <span className="inline-block hover:scale-105 transition-all duration-500 cursor-default bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Kakkad
              </span>
            </h1>
            {/* Sparkle effects */}
            <Sparkles className="absolute top-4 right-4 h-8 w-8 text-white/30 animate-pulse" />
            <Sparkles className="absolute bottom-4 left-4 h-6 w-6 text-white/20 animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          {/* Enhanced subtitle with better animations */}
          <div className="relative overflow-hidden">
            <h2 className="text-3xl md:text-5xl text-gray-300 font-light tracking-wider relative">
              <span className="inline-block animate-pulse bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
              <span className="mx-4 text-white animate-bounce text-4xl">•</span>
              <span className="inline-block animate-pulse bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" style={{ animationDelay: "0.5s" }}>
                Software Engineer
              </span>
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
          </div>

          {/* Enhanced description */}
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-400 leading-relaxed mb-12 relative">
              <span className="relative z-10">
                Passionate about building scalable web applications with modern technologies. Experienced in ASP.NET,
                Next.js, MongoDB, and creating innovative solutions that make a difference.
              </span>
            </p>
          </div>

          {/* Enhanced 3D Buttons with better effects */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
            <a
              href="https://drive.google.com/file/d/1YVz8p22PQAHXLIAFHGC6nCtFj_HVAKHR/view?usp=drive_link"
              target="_blank"
              className="group relative overflow-hidden bg-gradient-to-r from-white to-gray-100 text-black hover:from-gray-100 hover:to-white font-bold text-lg px-8 py-4 rounded-full transform-gpu hover:scale-105 hover:-translate-y-3 transition-all duration-500 shadow-2xl inline-flex items-center justify-center"
              style={{
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.2)",
              }}
              rel="noreferrer"
            >
              <Download className="mr-3 h-6 w-6 relative z-10 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            </a>

            <Button
              size="lg"
              variant="outline"
              className="group relative overflow-hidden border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8 py-4 rounded-full transform-gpu hover:scale-105 hover:-translate-y-3 transition-all duration-500 bg-transparent shadow-2xl"
              style={{
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)",
              }}
            >
              <Mail className="mr-3 h-6 w-6 relative z-10 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            </Button>
          </div>

          {/* Enhanced 3D Social Links with brand colors */}
          <div className="flex justify-center space-x-8 mb-16">
            {[
              { icon: Github, href: "https://github.com/kakkadpriyansh", color: "hover:bg-gray-800", glow: "hover:shadow-gray-500/50" },
              { icon: Linkedin, href: "https://linkedin.com/in/kakkadpriyansh", color: "hover:bg-blue-600", glow: "hover:shadow-blue-500/50" },
              { icon: Instagram, href: "https://instagram.com/kakkadpriyansh", color: "hover:bg-pink-600", glow: "hover:shadow-pink-500/50" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`group relative p-6 bg-gray-900/90 rounded-2xl border border-gray-700 hover:border-white transform-gpu hover:scale-110 hover:-translate-y-4 transition-all duration-500 ${social.color} ${social.glow}`}
                style={{
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                }}
              >
                <social.icon className="h-8 w-8 text-gray-400 group-hover:text-white relative z-10 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </a>
            ))}
          </div>

          {/* Enhanced scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center space-y-2">
              <ChevronDown className="h-6 w-6 text-white/40" />
              <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
