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
      title: "E-commerce Platform",
      description:
        "Full-stack enterprise e-commerce solution with advanced user authentication, secure payment integration, comprehensive admin dashboard, and inventory management.",
      image: "/images/ecommerce-dashboard.png",
      tech: ["Angular", ".NET 8", "MS SQL", "Azure", "Payment APIs"],
      icon: ShoppingCart,
      gradient: "from-purple-500/20 to-pink-500/20",
      category: "E-commerce",
    },
    {
      title: "NGO Management System",
      description:
        "Comprehensive management system for NGOs with volunteer tracking, donation management, event coordination, and automated reporting features.",
      image: "/images/ngo-management.png",
      tech: ["React", "ASP.NET Core", "PostgreSQL", "Docker", "Cloud"],
      icon: Database,
      gradient: "from-orange-500/20 to-red-500/20",
      category: "Management",
    },
    {
      title: "SAT Preparation Platform",
      description:
        "Advanced adaptive SAT preparation platform with AI-powered personalized learning paths, intelligent scoring system, and real-time performance analytics.",
      image: "/images/sat-platform.png",
      tech: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS", "AI/ML"],
      icon: Brain,
      gradient: "from-blue-500/20 to-purple-500/20",
      category: "Education Tech",
    },
    {
      title: "PC Build Chatbot",
      description:
        "Intelligent AI-powered chatbot using IBM Watson NLP to help users build custom PC configurations based on budget, performance needs, and use cases.",
      image: "/images/chatbot-interface.png",
      tech: ["Python", "IBM Watson", "NLP", "Flask", "Machine Learning"],
      icon: Zap,
      gradient: "from-green-500/20 to-blue-500/20",
      category: "AI/ML",
    },
  ]

  return (
    <section id="projects" className="py-32 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gray-300/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Showcasing innovative solutions built with cutting-edge technologies
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto animate-pulse" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-gray-900/40 border-gray-700/50 hover:border-white/30 backdrop-blur-xl transform-gpu hover:scale-102 hover:-translate-y-4 transition-all duration-700 cursor-pointer"
              style={{
                boxShadow:
                  "0 10px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                transformStyle: "preserve-3d",
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Animated background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Category badge */}
                <div className="absolute top-4 left-4 z-20">
                  <Badge className="bg-black/80 text-white border-white/20 backdrop-blur-sm px-3 py-1">
                    {project.category}
                  </Badge>
                </div>

                {/* Project icon */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="p-3 bg-black/80 rounded-full backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              <CardHeader className="relative z-10 pb-4">
                <CardTitle className="text-2xl text-white group-hover:text-gray-100 transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10 space-y-6">
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      className="bg-gray-800/80 text-gray-200 border border-gray-600/50 hover:bg-white hover:text-black transform-gpu hover:scale-110 transition-all duration-300 backdrop-blur-sm px-3 py-1"
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
          ))}
        </div>
      </div>
    </section>
  )
}
