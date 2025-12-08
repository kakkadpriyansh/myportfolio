"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Zap, Database, Brain, ShoppingCart } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Full Stack Travel Platform | AvidExplorers",
      description:
        "Travel website built using Next.js with SSR, dynamic routing, blog pages, trip planner, and rich media UI. Backend with Node.js & MongoDB, JWT authentication, and admin panel. Deployed with Nginx + PM2 + GitHub Webhooks.",
      images: [
        "/images/avid-explorers/Screenshot 2025-11-25 at 12.21.12 AM.png",
        "/images/avid-explorers/Screenshot 2025-11-25 at 12.21.41 AM.png",
        "/images/avid-explorers/Screenshot 2025-11-25 at 12.22.03 AM.png",
        "/images/avid-explorers/Screenshot 2025-11-25 at 12.22.21 AM.png"
      ],
      tech: ["Next.js", "Node.js", "MongoDB", "JWT", "TailwindCSS", "Nginx", "PM2"],
      icon: Brain,
      gradient: "from-blue-500/20 to-purple-500/20",
      category: "Travel",
    },
    {
      title: "E-commerce Platform | happy-feet.in (Ongoing)",
      description:
        "Full e-commerce platform using Next.js API Routes with Razorpay payment integration and secure callbacks. Admin panel for products, orders, users, discounts, plus analytics dashboard. CI/CD with GitHub Actions and Auto Pull Webhooks.",
      images: [
        "/images/happy-feet/Screenshot 2025-12-01 at 1.22.06 AM.png",
        "/images/happy-feet/Screenshot 2025-12-01 at 1.22.38 AM.png",
        "/images/happy-feet/Screenshot 2025-12-01 at 1.23.25 AM.png",
        "/images/happy-feet/Screenshot 2025-12-01 at 1.24.04 AM.png",
        "/images/happy-feet/Screenshot 2025-12-01 at 1.24.22 AM.png"
      ],
      tech: ["Next.js", "API Routes", "Razorpay", "MongoDB", "Admin Panel", "Analytics", "CI/CD"],
      icon: ShoppingCart,
      gradient: "from-purple-500/20 to-pink-500/20",
      category: "E-commerce",
    },
    {
      title: "PC Build Chatbot | CSRBOX / IBM Watson",
      description:
        "Intelligent PC Build chatbot using IBM Watson Assistant with conversation flows for component selection, compatibility suggestions, and dynamic pricing estimates. Includes dashboard for testing and workflow validation.",
      images: ["/images/chatbot-interface.png"],
      tech: ["IBM Watson", "NLP", "Python", "Flask", "Dashboard"],
      icon: Zap,
      gradient: "from-green-500/20 to-blue-500/20",
      category: "AI/ML",
    },
    {
      title: "SAT Preparation Platform | Technova Technologies",
      description:
        "Adaptive SAT learning platform with AI-powered personalized paths, intelligent scoring, and real-time performance analytics.",
      images: ["/images/sat-platform.png"],
      tech: ["Next.js", "MongoDB", "Node.js", "TailwindCSS", "AI/ML"],
      icon: Brain,
      gradient: "from-blue-500/20 to-purple-500/20",
      category: "Education Tech",
    },
    {
      title: "NGO Management System",
      description:
        "Comprehensive NGO system with volunteer tracking, donation management, event coordination, and automated reporting.",
      images: ["/images/ngo-management.png"],
      tech: ["React", "ASP.NET Core", "PostgreSQL", "Docker", "Cloud"],
      icon: Database,
      gradient: "from-orange-500/20 to-red-500/20",
      category: "Management",
    },
  ]

  return (
    <section id="projects" className="py-32 px-4 relative overflow-hidden">
      {/* Enhanced Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl gentle-pulse" />
        <div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl gentle-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-2/3 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl gentle-pulse"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 slide-up-fade">
          <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white mb-6 shimmer">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Showcasing innovative solutions built with cutting-edge technologies
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto animate-pulse" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div key={index} className="slide-up-fade w-full" style={{ animationDelay: `${index * 0.2}s` }}>
            <Card
              className="group relative overflow-hidden bg-gray-900/40 border-gray-700/50 hover:border-indigo-500/30 backdrop-blur-xl transform-gpu hover:scale-105 hover:-translate-y-2 lg:hover:-translate-y-4 transition-all duration-700 cursor-pointer professional-glass-strong w-full"
              style={{
                boxShadow:
                  "0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                transformStyle: "preserve-3d",
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Animated background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />
              {/* Animated border glow */}
              <div className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-sm z-0" />

              {/* Project Image */}
              <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Category badge */}
                <div className="absolute top-3 left-3 lg:top-4 lg:left-4 z-20">
                  <Badge className="bg-gradient-to-r from-indigo-500/80 to-purple-500/80 text-white border-white/20 backdrop-blur-sm px-2 py-1 lg:px-3 lg:py-1.5 shadow-lg transform group-hover:scale-110 transition-all duration-500 text-xs lg:text-sm">
                    {project.category}
                  </Badge>
                </div>

                {/* Project icon */}
                <div className="absolute top-3 right-3 lg:top-4 lg:right-4 z-20">
                  <div className="p-2 lg:p-3 bg-gradient-to-r from-indigo-500/80 to-purple-500/80 rounded-full backdrop-blur-sm border border-white/20 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <project.icon className="h-4 w-4 lg:h-6 lg:w-6 text-white" />
                  </div>
                </div>
              </div>

              <CardHeader className="relative z-10 pb-3 lg:pb-4 p-4 lg:p-6">
                <CardTitle className="text-lg md:text-xl lg:text-2xl text-white group-hover:text-gray-100 transition-colors duration-300 break-words">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10 space-y-4 lg:space-y-6 p-4 lg:p-6">
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed text-sm md:text-base lg:text-lg break-words">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      className="bg-gray-800/80 text-gray-200 border border-indigo-500/30 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white transform-gpu hover:scale-110 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm px-2 py-1 lg:px-3 lg:py-1.5 shadow-md text-xs lg:text-sm"
                      style={{
                        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                        animationDelay: `${techIndex * 0.1}s`,
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
