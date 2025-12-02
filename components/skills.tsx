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
        { name: "React.js", icon: "⚛️" },
        { name: "JavaScript (ES6+)", icon: "🟨" },
        { name: "Redux / Context API", icon: "🧩" },
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "TailwindCSS", icon: "🎨" }
      ],
      icon: "🎨",
      gradient: "from-blue-500/20 to-purple-500/20",
      bgGradient: "from-blue-500/5 via-purple-500/5 to-pink-500/5"
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
      bgGradient: "from-green-500/5 via-blue-500/5 to-teal-500/5"
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
      bgGradient: "from-purple-500/5 via-pink-500/5 to-red-500/5"
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
      bgGradient: "from-orange-500/5 via-red-500/5 to-yellow-500/5"
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
      bgGradient: "from-teal-500/5 via-blue-500/5 to-cyan-500/5"
    },
  ]

  return (
    <section id="skills" className="py-28 px-4 relative">
      <div className="absolute inset-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-8 backdrop-blur-sm border border-white/10">
            <span className="text-4xl">💻</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-3 relative">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-6">
            Expertise across the full technology stack with modern tools and frameworks
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-gray-900/40 border-white/10 hover:border-white/20 backdrop-blur-xl cursor-pointer"
              style={{
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)",
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardContent className="p-6 relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="text-2xl">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="bg-white/5 text-white/80 border border-white/10 hover:bg-white/15 hover:text-white transform-gpu transition-all duration-200 font-medium px-3 py-2 text-xs rounded-full whitespace-nowrap"
                      style={{
                        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                        animationDelay: `${skillIndex * 0.1}s`,
                      }}
                    >
                      <span className="mr-1.5">
                        {skill.icon}
                      </span>
                      {skill.name}
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
