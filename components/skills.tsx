"use client"

import { useRef, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const categoriesRef = useRef<(HTMLDivElement | null)[]>([])

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

    // Categories Stagger Animation
    categoriesRef.current.forEach((cat, index) => {
      if (!cat) return

      gsap.fromTo(cat,
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
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cat,
            start: "top bottom-=50",
            toggleActions: "play none none reverse"
          }
        }
      )
    })
  }, [])

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "Next.js", icon: "⚛️" },
        { name: "React.js", icon: "⚛️" },
        { name: "JavaScript (ES6+)", icon: "🟨" },
        { name: "Redux / Context API", icon: "🧩" },
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "TailwindCSS", icon: "🎨" }
      ],
      icon: "🎨",
      gradient: "from-blue-500/20 to-purple-500/20",
      border: "group-hover:border-blue-500/50"
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚏" },
        { name: "REST APIs", icon: "🔗" },
        { name: "Python (Flask Basics)", icon: "🐍" },
        { name: ".NET Core (Basic APIs)", icon: "🔵" }
      ],
      icon: "⚙️",
      gradient: "from-green-500/20 to-blue-500/20",
      border: "group-hover:border-green-500/50"
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "MySQL", icon: "🐬" },
        { name: "MS SQL Server", icon: "🗄️" }
      ],
      icon: "🗄️",
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "group-hover:border-purple-500/50"
    },
    {
      title: "Tools & Deployment",
      skills: [
        { name: "Git", icon: "📝" },
        { name: "GitHub", icon: "🐙" },
        { name: "VS Code", icon: "🧰" },
        { name: "Postman", icon: "📬" },
        { name: "XAMPP", icon: "📦" },
        { name: "Visual Studio", icon: "🧱" },
        { name: "Figma", icon: "🎨" },
        { name: "VPS", icon: "🖥️" },
        { name: "Nginx", icon: "🌀" },
        { name: "PM2", icon: "🛠️" },
        { name: "C-Panel", icon: "🗂️" },
        { name: "DNS", icon: "🌐" },
        { name: "SSL", icon: "🔒" },
        { name: "GitHub Actions CI/CD", icon: "⚙️" },
        { name: "GitHub Webhooks", icon: "🔔" }
      ],
      icon: "🛠️",
      gradient: "from-orange-500/20 to-red-500/20",
      border: "group-hover:border-orange-500/50"
    },
    {
      title: "Other",
      skills: [
        { name: "JWT / OAuth", icon: "🔑" },
        { name: "Firewalls", icon: "🛡️" },
        { name: "Bash Scripting", icon: "🐚" },
        { name: "API Security", icon: "🔐" },
        { name: "Server Configuration", icon: "🧭" }
      ],
      icon: "✨",
      gradient: "from-teal-500/20 to-blue-500/20",
      border: "group-hover:border-teal-500/50"
    },
  ]

  return (
    <section ref={containerRef} id="skills" className="py-28 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-indigo-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={headerRef} className="text-center mb-14">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-8 backdrop-blur-sm border border-white/10">
            <span className="text-4xl">💻</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-3 relative">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit that empowers me to build end-to-end solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              ref={el => { categoriesRef.current[index] = el }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <Card className={`h-full bg-gray-900/60 border-gray-700/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${category.border}`}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl bg-white/5 p-3 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        className="bg-white/5 hover:bg-white/10 text-gray-300 border-white/10 px-3 py-1.5 transition-all duration-300 hover:scale-105 hover:text-white"
                      >
                        <span className="mr-2">{skill.icon}</span>
                        {skill.name}
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
