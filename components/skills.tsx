"use client"

import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  SiNextdotjs, SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPython, SiDotnet,
  SiMongodb, SiMysql,
  SiGit, SiGithub, SiPostman, SiFigma, SiNginx, SiJsonwebtokens, SiGnubash,
} from "react-icons/si"
import type { ComponentType } from "react"

gsap.registerPlugin(ScrollTrigger)

type IconComp = ComponentType<{ className?: string; style?: React.CSSProperties }>

type Skill = {
  name: string
  Icon?: IconComp
  color: string
  css?: string
}

type Category = {
  id: string
  label: string
  skills: Skill[]
}

const categories: Category[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "Next.js",    Icon: SiNextdotjs  as IconComp, color: "#fff" },
      { name: "React.js",   Icon: SiReact      as IconComp, color: "#61dafb" },
      { name: "JavaScript", Icon: SiJavascript as IconComp, color: "#f7df1e" },
      { name: "TypeScript", Icon: SiTypescript as IconComp, color: "#3178c6" },
      { name: "HTML5",      Icon: SiHtml5      as IconComp, color: "#e34f26" },
      { name: "CSS3",       Icon: SiCss3       as IconComp, color: "#1572b6" },
      { name: "TailwindCSS",Icon: SiTailwindcss as IconComp, color: "#06b6d4" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js",     Icon: SiNodedotjs as IconComp, color: "#68a063" },
      { name: "Express.js",  Icon: SiExpress   as IconComp, color: "#fff" },
      { name: "Python",      Icon: SiPython    as IconComp, color: "#3776ab" },
      { name: ".NET Core",   Icon: SiDotnet    as IconComp, color: "#5c2d91" },
      { name: "REST APIs",   color: "#22d3ee" },
    ],
  },
  {
    id: "database",
    label: "Database",
    skills: [
      { name: "MongoDB",     Icon: SiMongodb as IconComp, color: "#4db33d" },
      { name: "MySQL",       Icon: SiMysql   as IconComp, color: "#4479a1" },
      { name: "MS SQL",      color: "#cc2927" },
      { name: "Redis",       color: "#dc382d" },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Tools",
    skills: [
      { name: "Git",         Icon: SiGit      as IconComp, color: "#f05032" },
      { name: "GitHub",      Icon: SiGithub   as IconComp, color: "#fff" },
      { name: "Nginx",       Icon: SiNginx    as IconComp, color: "#009900" },
      { name: "Figma",       Icon: SiFigma    as IconComp, color: "#a259ff" },
      { name: "Postman",     Icon: SiPostman  as IconComp, color: "#ff6c37" },
      { name: "JWT/OAuth",   Icon: SiJsonwebtokens as IconComp, color: "#d63aff" },
      { name: "Bash",        Icon: SiGnubash  as IconComp, color: "#4eaa25" },
      { name: "VPS / PM2",   color: "#22d3ee" },
      { name: "CI/CD",       color: "#8b5cf6" },
      { name: "SSL / DNS",   color: "#f59e0b" },
    ],
  },
]

// Marquee strip (extra tools)
const tools = [
  "GitHub Actions", "VPS Hosting", "C-Panel", "DNS Management", "SSL Certificates",
  "PM2", "Nginx Proxy", "XAMPP", "VS Code", "Visual Studio", "Vercel", "MongoDB Atlas",
  "GitHub Actions", "VPS Hosting", "C-Panel", "DNS Management", "SSL Certificates",
  "PM2", "Nginx Proxy", "XAMPP", "VS Code", "Visual Studio", "Vercel", "MongoDB Atlas",
]

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef  = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState("frontend")

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 60, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top bottom-=80" },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const activeCategory = categories.find(c => c.id === activeTab)!

  return (
    <section ref={sectionRef} id="skills" className="py-36 px-6 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div ref={headerRef} className="mb-20 relative">
          <span className="section-ghost-number select-none">02</span>
          <div className="relative z-10">
            <div className="section-label">Tech Stack</div>
            <h2 className="section-heading text-white mt-2">
              Skills &{" "}
              <span className="gradient-text-cyan">Technologies</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-lg text-base">
              A comprehensive toolkit for building end-to-end solutions
            </p>
          </div>
        </div>

        {/* ── Tab Filter ── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={
                activeTab === cat.id
                  ? {
                      background: "linear-gradient(135deg, rgb(34,211,238), rgb(139,92,246))",
                      color: "#000",
                      boxShadow: "0 0 20px rgba(34,211,238,0.25)",
                    }
                  : {
                      background: "rgba(255,255,255,0.05)",
                      color: "rgba(255,255,255,0.5)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── Skills Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-16 min-h-[220px]">
          {activeCategory.skills.map((skill, i) => (
            <div
              key={skill.name}
              className="group relative glass-card rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default"
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
                animationDelay: `${i * 50}ms`,
                animation: "fade-up 0.5s ease-out forwards",
                opacity: 0,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${skill.color}12 0%, transparent 70%)` }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                style={{ background: `${skill.color}14`, border: `1px solid ${skill.color}25` }}
              >
                {skill.Icon ? (
                  <skill.Icon
                    className="w-7 h-7 transition-colors duration-300"
                    style={{ color: skill.color }}
                  />
                ) : (
                  <span className="text-xl font-bold" style={{ color: skill.color }}>
                    {skill.name.charAt(0)}
                  </span>
                )}
              </div>

              {/* Name */}
              <p
                className="text-xs font-semibold text-center text-gray-400 group-hover:text-white transition-colors duration-300 leading-tight"
              >
                {skill.name}
              </p>

              {/* Color bar on hover */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 transition-all duration-500 rounded-full"
                style={{ background: skill.color }}
              />
            </div>
          ))}
        </div>

        {/* ── Marquee Strip ── */}
        <div className="relative overflow-hidden rounded-2xl py-4" style={{ background: "rgba(10,10,15,0.6)", border: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="flex gap-6 whitespace-nowrap marquee-anim">
            {tools.map((tool, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-gray-500"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.04)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/50 flex-shrink-0" />
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
