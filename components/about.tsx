"use client"

import { useRef, useEffect, type ComponentType } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "./ui/button"
import Link from "next/link"
import { FiUsers, FiCode, FiGlobe, FiArrowRight } from "react-icons/fi"

gsap.registerPlugin(ScrollTrigger)

const highlightIconMap: Record<string, ComponentType<{ className?: string }>> = {
  Education: FiCode as ComponentType<{ className?: string }>,
  Experience: FiUsers as ComponentType<{ className?: string }>,
  "Global Mindset": FiGlobe as ComponentType<{ className?: string }>,
  Interests: FiUsers as ComponentType<{ className?: string }>,
}
const ArrowRightIcon = FiArrowRight as ComponentType<{ className?: string }>

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Header Animation
    gsap.fromTo(headerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top bottom-=100",
        }
      }
    )

    // Text Content Animation
    gsap.fromTo(textRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom-=100",
        }
      }
    )

    // Cards Stagger Animation
    cardsRef.current.forEach((card, index) => {
      if (!card) return

      gsap.fromTo(card,
        { 
          y: 50, 
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=50",
            toggleActions: "play none none reverse"
          }
        }
      )
    })
  }, [])

  const highlights = [
    {
      title: "Education",
      desc: "B.E. — Computer Engineering",
      detail: "Marwadi University (2021–2025)",
      gradient: "from-blue-500/20 to-purple-500/20",
      border: "group-hover:border-blue-500/50"
    },
    {
      title: "Experience",
      desc: "Full-Stack Development",
      detail: "Building scalable web applications",
      gradient: "from-green-500/20 to-emerald-500/20",
      border: "group-hover:border-green-500/50"
    },
    {
      title: "Global Mindset",
      desc: "Remote Ready",
      detail: "Collaborating across time zones",
      gradient: "from-orange-500/20 to-red-500/20",
      border: "group-hover:border-orange-500/50"
    },
    {
      title: "Interests",
      desc: "Exploration",
      detail: "Travel & Outdoor Adventures",
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "group-hover:border-purple-500/50"
    },
  ]

  return (
    <section ref={containerRef} id="about" className="py-32 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={headerRef} className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-full mb-6 backdrop-blur-sm border border-white/10">
            {(() => {
              const Icon = highlightIconMap["Experience"]
              return Icon ? <Icon className="h-6 w-6 text-white" /> : null
            })()}
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6 relative z-10">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div ref={textRef} className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative p-8 bg-gray-900 ring-1 ring-gray-800/50 rounded-2xl leading-none flex items-top justify-start space-x-6">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white">
                    Passionate Full-Stack Developer
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    I'm a Computer Engineering graduate with a deep passion for creating innovative web applications. 
                    My journey involves solving complex problems through elegant code and building user-centric digital experiences.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    From architecting scalable backends to crafting immersive frontends, I love every aspect of the development lifecycle.
                    I'm constantly learning and adapting to the latest technologies to deliver the best solutions.
                  </p>
                  
                  <div className="pt-4">
                    <Link href="#contact">
                      <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold transition-all hover:scale-105">
                        Let's Work Together <ArrowRightIcon className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                ref={el => { cardsRef.current[index] = el }}
                className="group relative perspective-1000"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <Card className={`relative h-full bg-gray-900/80 border-gray-800 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${item.border}`}>
                  <CardContent className="p-6 flex flex-col items-start h-full">
                    <div className="p-3 bg-white/5 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-500">
                      {(() => {
                        const Icon = highlightIconMap[item.title]
                        return Icon ? <Icon className="h-8 w-8 text-white" /> : null
                      })()}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400 font-medium mb-1">{item.desc}</p>
                    <p className="text-sm text-gray-500">{item.detail}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
