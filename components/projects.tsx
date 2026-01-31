"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ArrowRight, Sparkles, Layers, Database, Globe, ShoppingCart, Cpu } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: "AvidExplorers",
    subtitle: "Full Stack Travel Platform",
    description: "A comprehensive travel experience platform featuring dynamic trip planning, rich media blogs, and a robust admin dashboard. Built for scalability and performance.",
    images: [
      "/images/avid-explorers/Screenshot 2025-11-25 at 12.21.12 AM.png",
      "/images/avid-explorers/Screenshot 2025-11-25 at 12.21.41 AM.png",
    ],
    tech: ["Next.js", "MongoDB", "Node.js", "AWS", "Tailwind"],
    color: "from-blue-600 to-cyan-500",
    icon: Globe,
    link: "#",
    github: "#"
  },
  {
    title: "happy-feet.in",
    subtitle: "Modern E-commerce Solution",
    description: "A high-performance e-commerce platform with real-time analytics, secure payment processing via Razorpay, and a custom CMS for inventory management.",
    images: [
      "/images/happy-feet/Screenshot 2025-12-01 at 1.22.06 AM.png",
      "/images/happy-feet/Screenshot 2025-12-01 at 1.22.38 AM.png",
    ],
    tech: ["Next.js", "Razorpay", "Analytics", "PostgreSQL"],
    color: "from-purple-600 to-pink-500",
    icon: ShoppingCart,
    link: "#",
    github: "#"
  },
  {
    title: "BDVH Platform",
    subtitle: "Franchise Management System",
    description: "An enterprise-grade management system for franchises, automating student enrollments, commission payouts, and certification generation.",
    images: [
      "/images/bdvh/Screenshot 2025-12-08 at 6.33.35 PM.png",
      "/images/bdvh/Screenshot 2025-12-08 at 6.33.53 PM.png",
    ],
    tech: ["Next.js", "Redis", "BullMQ", "MongoDB"],
    color: "from-emerald-500 to-teal-400",
    icon: Layers,
    link: "#",
    github: "#"
  },
  {
    title: "PC Build Assistant",
    subtitle: "AI-Powered Chatbot",
    description: "An intelligent conversational agent built with IBM Watson to guide users through custom PC builds, checking compatibility and optimizing for budget.",
    images: ["/images/chatbot-interface.png"],
    tech: ["IBM Watson", "Python", "NLP", "Flask"],
    color: "from-orange-500 to-red-500",
    icon: Cpu,
    link: "#",
    github: "#"
  },
  {
    title: "NGO Connect",
    subtitle: "Volunteer Management",
    description: "A centralized platform connecting volunteers with NGOs, facilitating donation tracking, event management, and automated impact reporting.",
    images: ["/images/ngo-management.png"],
    tech: ["ASP.NET Core", "React", "Docker", "PostgreSQL"],
    color: "from-indigo-500 to-blue-500",
    icon: Database,
    link: "#",
    github: "#"
  }
]

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndices, setActiveIndices] = useState<number[]>(projects.map(() => 0))

  useEffect(() => {
    // Image Slider Interval
    const interval = setInterval(() => {
      setActiveIndices(prev => 
        prev.map((current, i) => {
          if (projects[i].images.length > 1) {
            return (current + 1) % projects[i].images.length
          }
          return 0
        })
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".project-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      })

      // Project Cards Animation
      const cards = gsap.utils.toArray(".project-card") as HTMLElement[]
      
      cards.forEach((card, i) => {
        gsap.fromTo(card, 
          { 
            y: 100, 
            opacity: 0,
            scale: 0.95
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none reverse"
            }
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="py-24 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="project-header text-center mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-indigo-300 backdrop-blur-md">
            <Sparkles className="w-4 h-4" />
            <span>Portfolio Showcase</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-gray-400">
            Featured Projects
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A curated selection of my work, ranging from complex web applications to intelligent AI systems.
          </p>
        </div>

        {/* Projects Grid - Alternating Layout */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`project-card flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-3/5 group relative perspective-1000">
                <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900/50 backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2">
                   {/* Gradient Overlay */}
                   <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 mix-blend-overlay z-10`} />
                   <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-colors duration-500" />
                   
                   {/* Images */}
                   {project.images.map((img, i) => (
                     <Image
                       key={img}
                       src={img}
                       alt={project.title}
                       fill
                       className={`object-cover object-top transition-all duration-1000 ${
                         i === activeIndices[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                       }`}
                     />
                   ))}
                   
                   {/* Navigation Dots (if multiple images) */}
                   {project.images.length > 1 && (
                     <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                       {project.images.map((_, i) => (
                         <div 
                           key={i}
                           className={`w-2 h-2 rounded-full transition-all duration-300 ${
                             i === activeIndices[index] ? 'bg-white w-6' : 'bg-white/50'
                           }`}
                         />
                       ))}
                     </div>
                   )}
                </div>
                
                {/* Decorative Elements behind image */}
                <div className={`absolute -inset-4 bg-gradient-to-r ${project.color} rounded-2xl blur-2xl opacity-20 -z-10 group-hover:opacity-30 transition-opacity duration-500`} />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-2/5 space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${project.color} bg-opacity-10`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${project.color} font-bold tracking-wider uppercase text-sm`}>
                    {project.category || "Development"}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h2>
                <h3 className="text-xl text-indigo-200">{project.subtitle}</h3>
                
                <p className="text-gray-400 leading-relaxed text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tech.map(t => (
                    <Badge key={t} variant="secondary" className="bg-white/5 hover:bg-white/10 text-gray-300 border-white/5">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-6">
                  <Button className="rounded-full group bg-white text-black hover:bg-gray-200">
                    View Project <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10">
                    <Github className="w-4 h-4 mr-2" /> Source Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
