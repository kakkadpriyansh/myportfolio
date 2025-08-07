"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Mountain, Code, Globe, Award, Users, Lightbulb, Target } from "lucide-react"
import { useState } from "react"

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      desc: "B.E. Computer Engineering",
      detail: "Strong foundation in computer science principles and software engineering",
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      icon: Code,
      title: "Experience",
      desc: "Multiple Professional Roles",
      detail: "Diverse experience across different technologies and industries",
      gradient: "from-green-500/20 to-blue-500/20",
    },
    {
      icon: Mountain,
      title: "Interests",
      desc: "Mountains & Travel",
      detail: "Finding inspiration in nature and exploring new cultures",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Globe,
      title: "Focus",
      desc: "Full-Stack Development",
      detail: "End-to-end web application development with modern technologies",
      gradient: "from-orange-500/20 to-red-500/20",
    },
  ]

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "Always exploring cutting-edge technologies and creative solutions",
    },
    {
      icon: Users,
      title: "Collaboration",
      desc: "Believe in the power of teamwork and knowledge sharing",
    },
    {
      icon: Target,
      title: "Excellence",
      desc: "Committed to delivering high-quality, scalable solutions",
    },
    {
      icon: Award,
      title: "Growth",
      desc: "Continuous learning and adapting to new challenges",
    },
  ]

  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-300/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6">About Me</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto animate-pulse" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-gray-300/5 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500" />
              <div
                className="relative z-10 p-8 bg-gray-900/40 rounded-2xl border border-gray-700/50 backdrop-blur-xl group-hover:border-white/30 transition-all duration-500"
                style={{
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
              >
                <p className="text-xl text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  I'm a Computer Engineering graduate with a passion for creating innovative web applications and
                  solving complex problems through code. My journey in software development has taken me through various
                  professional roles and projects, where I've honed my skills in full-stack development.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-300/5 to-white/5 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500" />
              <div
                className="relative z-10 p-8 bg-gray-900/40 rounded-2xl border border-gray-700/50 backdrop-blur-xl group-hover:border-white/30 transition-all duration-500"
                style={{
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
              >
                <p className="text-xl text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  When I'm not coding, you'll find me exploring the mountains, traveling to new places, or diving deep
                  into the latest tech trends. I believe in continuous learning and love sharing knowledge with the
                  developer community.
                </p>
              </div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gray-900/40 border-gray-700/50 hover:border-white/30 backdrop-blur-xl transform-gpu hover:scale-105 transition-all duration-700 cursor-pointer"
                style={{
                  boxShadow:
                    "0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />

                <CardContent className="p-8 text-center relative z-10 h-full flex flex-col justify-center">
                  <div className="relative mb-6">
                    <item.icon className="h-12 w-12 text-white mx-auto relative z-10 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500" />
                  </div>
                  <h3 className="font-bold mb-3 text-white group-hover:text-gray-100 transition-colors duration-300 text-xl">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-2">
                    {item.desc}
                  </p>
                  <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300 opacity-0 group-hover:opacity-100">
                    {item.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-white mb-4">Core Values</h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The principles that guide my work and drive my passion for technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-gray-800/20 border-gray-700/50 hover:border-white/10 backdrop-blur-xl transform-gpu hover:scale-105 transition-all duration-500"
              style={{
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              <CardContent className="p-8 text-center relative z-10">
                <div className="relative mb-6">
                  <value.icon className="h-10 w-10 text-white mx-auto relative z-10 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h4 className="font-bold mb-3 text-white group-hover:text-gray-100 transition-colors duration-300 text-lg">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {value.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
