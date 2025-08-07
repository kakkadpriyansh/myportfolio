"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function Skills() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "Next.js", icon: "⚛️" },
        { name: "React", icon: "⚛️" },
        { name: "Angular", icon: "🅰️" },
        { name: "JavaScript", icon: "🟨" },
        { name: "TypeScript", icon: "🔷" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" }
      ],
      icon: "🎨",
      gradient: "from-blue-500/20 to-purple-500/20",
      bgGradient: "from-blue-500/5 via-purple-500/5 to-pink-500/5"
    },
    {
      title: "Backend",
      skills: [
        { name: "ASP.NET Core", icon: "🔵" },
        { name: ".NET 8", icon: "🔵" },
        { name: "Node.js", icon: "🟢" },
        { name: "Python", icon: "🐍" },
        { name: "Flask", icon: "🌶️" },
        { name: "REST APIs", icon: "🔗" },
        { name: "GraphQL", icon: "🔺" }
      ],
      icon: "⚙️",
      gradient: "from-green-500/20 to-blue-500/20",
      bgGradient: "from-green-500/5 via-blue-500/5 to-teal-500/5"
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "MS SQL Server", icon: "🗄️" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MySQL", icon: "🐬" },
        { name: "Redis", icon: "🔴" }
      ],
      icon: "🗄️",
      gradient: "from-purple-500/20 to-pink-500/20",
      bgGradient: "from-purple-500/5 via-pink-500/5 to-red-500/5"
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: "📝" },
        { name: "Linux", icon: "🐧" },
        { name: "Docker", icon: "🐳" },
        { name: "AWS", icon: "☁️" },
        { name: "Vercel", icon: "▲" },
        { name: "IBM Watson", icon: "🤖" },
        { name: "Cybersecurity", icon: "🔒" }
      ],
      icon: "🛠️",
      gradient: "from-orange-500/20 to-red-500/20",
      bgGradient: "from-orange-500/5 via-red-500/5 to-yellow-500/5"
    },
  ]

  return (
    <section id="skills" className="py-32 px-4 relative">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-8 backdrop-blur-sm border border-white/10">
            <span className="text-4xl">💻</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6 relative">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Expertise across the full technology stack with modern tools and frameworks
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto animate-pulse" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-gray-900/60 border-gray-700/50 hover:border-white/30 backdrop-blur-xl transform hover:scale-105 hover:-translate-y-4 transition-all duration-700 cursor-pointer"
              style={{
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)",
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Enhanced animated background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.3}s`,
                      animation: hoveredCard === index ? "float 4s ease-in-out infinite" : "none",
                    }}
                  />
                ))}
              </div>

              <CardContent className="p-8 relative z-10 h-full flex flex-col">
                {/* Enhanced icon with glow effect */}
                <div className="relative mb-8 text-center">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-150 group-hover:scale-200 transition-transform duration-500" />
                  <div className="relative text-6xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {category.icon}
                  </div>
                </div>

                {/* Enhanced title */}
                <h3 className="text-2xl font-bold mb-8 text-white group-hover:text-gray-100 transition-colors duration-300 text-center relative">
                  <span className="relative z-10">{category.title}</span>
                  <div className="absolute inset-0 bg-white/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </h3>

                {/* Enhanced skills badges with icons */}
                <div className="flex flex-wrap gap-3 justify-center flex-1">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="bg-gray-800/90 text-gray-200 border border-gray-600/50 hover:bg-white hover:text-black transform-gpu hover:scale-110 hover:-translate-y-1 transition-all duration-300 font-medium px-4 py-2 text-sm backdrop-blur-sm group/badge"
                      style={{
                        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                        animationDelay: `${skillIndex * 0.1}s`,
                      }}
                    >
                      <span className="mr-2 transform group-hover/badge:scale-125 transition-transform duration-300">
                        {skill.icon}
                      </span>
                      {skill.name}
                    </Badge>
                  ))}
                </div>

                {/* Enhanced glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
