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
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden professional-background professional-grid">
      {/* Clean Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-white/3 to-white/1 rounded-full blur-3xl gentle-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-white/2 to-white/1 rounded-full blur-3xl gentle-pulse" style={{ animationDelay: "2s" }} />
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
            
            <div className="relative z-10 p-1 professional-glass rounded-full">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4D03AQFQCBFFgk8kWQ/profile-displayphoto-shrink_200_200/B4DZZ26xo_GsAY-/0/1745751841984?e=1756944000&v=beta&t=q0qJWD1dI_TmoBJdTtbuuEf0BVpCATOCrU_DpxF4BMc"
                alt="Priyansh Kakkad"
                width={200}
                height={200}
                className="rounded-full relative z-10 shadow-2xl group-hover:scale-105 transition-all duration-500 professional-shadow"
                style={{
                  filter: "contrast(1.1) saturate(1.1) brightness(1.05)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Professional Name Display */}
        <div className="space-y-8">
          <div className="relative">
            <h1 className={`text-6xl md:text-8xl font-black mb-8 relative clean-heading ${isLoaded ? 'smooth-fade-in' : 'opacity-0'}`} 
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
            <h2 className="text-2xl md:text-4xl font-light tracking-wide relative clean-subheading">
              <span className="inline-block">
                Full-Stack Developer & Software Engineer
              </span>
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent gentle-pulse" />
          </div>

          {/* Professional Description */}
          <div className={`max-w-4xl mx-auto ${isLoaded ? 'smooth-fade-in' : 'opacity-0'}`} 
               style={{ animationDelay: "0.9s" }}>
            <p className="text-xl clean-body leading-relaxed mb-12">
              Passionate about building scalable web applications with cutting-edge technologies. 
              Experienced in ASP.NET, Next.js, MongoDB, and creating innovative solutions that drive business growth.
            </p>
          </div>

          {/* Professional Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 ${isLoaded ? 'smooth-fade-in' : 'opacity-0'}`} 
               style={{ animationDelay: "1.2s" }}>
            <a
              href="https://drive.google.com/file/d/1YVz8p22PQAHXLIAFHGC6nCtFj_HVAKHR/view?usp=drive_link"
              target="_blank"
              className="group relative overflow-hidden professional-button px-8 py-4 rounded-xl transform-gpu hover:scale-105 hover:-translate-y-2 transition-all duration-500 inline-flex items-center justify-center text-lg font-semibold"
              rel="noreferrer"
            >
              <Download className="mr-3 h-6 w-6 relative z-10 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              <span className="relative z-10">Download Resume</span>
            </a>

            <a
              href="https://wa.me/917984079603"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden professional-button px-8 py-4 rounded-xl transform-gpu hover:scale-105 hover:-translate-y-2 transition-all duration-500 inline-flex items-center justify-center text-lg font-semibold"
            >
              <Mail className="mr-3 h-6 w-6 relative z-10 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              <span className="relative z-10">Contact Me</span>
            </a>
          </div>

          {/* Professional Social Links */}
          <div className={`flex justify-center space-x-8 mb-16 ${isLoaded ? 'smooth-fade-in' : 'opacity-0'}`} 
               style={{ animationDelay: "1.5s" }}>
            {[
              { icon: Github, href: "https://github.com/kakkadpriyansh" },
              { icon: Linkedin, href: "https://linkedin.com/in/kakkadpriyansh" },
              { icon: Instagram, href: "https://instagram.com/kakkadpriyansh" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group relative p-6 professional-glass rounded-2xl transform-gpu hover:scale-110 hover:-translate-y-2 transition-all duration-500 professional-interactive professional-shadow"
              >
                <social.icon className="h-8 w-8 text-white/70 group-hover:text-white relative z-10 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
