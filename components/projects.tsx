"use client"

import { useEffect, useRef, useState, type ComponentType } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FiGithub, FiExternalLink, FiStar, FiGlobe, FiShoppingCart, FiLayers, FiCpu, FiDatabase } from "react-icons/fi"

gsap.registerPlugin(ScrollTrigger)

type IC = ComponentType<{ className?: string }>
const GithubIcon       = FiGithub       as IC
const ExternalLinkIcon = FiExternalLink as IC
const StarIcon         = FiStar         as IC

type Project = {
  title:       string
  subtitle:    string
  description: string
  images:      string[]
  tech:        string[]
  category:    string
  color:       string
  accentRgb:   string
  Icon:        IC
  link?:       string
  github?:     string
  featured?:   boolean
}

const projects: Project[] = [
  {
    title:       "AvidExplorers",
    subtitle:    "Full Stack Travel Platform",
    description: "A comprehensive travel experience platform featuring dynamic trip planning, rich media blogs, and a robust admin dashboard. Built for scalability and performance with SSR and MongoDB Atlas.",
    images:      [
      "/images/avid-explorers/Screenshot 2025-11-25 at 12.21.12 AM.png",
      "/images/avid-explorers/Screenshot 2025-11-25 at 12.21.41 AM.png",
    ],
    tech:        ["Next.js", "MongoDB", "Node.js", "AWS", "Tailwind"],
    category:    "Travel & Blog",
    color:       "from-cyan-500 to-blue-600",
    accentRgb:   "34,211,238",
    Icon:        FiGlobe as IC,
    featured:    true,
  },
  {
    title:       "happy-feet.in",
    subtitle:    "Modern E-commerce Solution",
    description: "A high-performance e-commerce platform with real-time analytics, secure payment processing via Razorpay, and a custom CMS for inventory management.",
    images:      [
      "/images/happy-feet/Screenshot 2025-12-01 at 1.22.06 AM.png",
      "/images/happy-feet/Screenshot 2025-12-01 at 1.22.38 AM.png",
    ],
    tech:        ["Next.js", "Razorpay", "Analytics", "PostgreSQL"],
    category:    "E-commerce",
    color:       "from-violet-500 to-pink-600",
    accentRgb:   "139,92,246",
    Icon:        FiShoppingCart as IC,
  },
  {
    title:       "BDVH Platform",
    subtitle:    "Franchise Management System",
    description: "Enterprise-grade management system for franchises, automating student enrollments, commission payouts, and certification generation with BullMQ queues.",
    images:      [
      "/images/bdvh/Screenshot 2025-12-08 at 6.33.35 PM.png",
      "/images/bdvh/Screenshot 2025-12-08 at 6.33.53 PM.png",
    ],
    tech:        ["Next.js", "Redis", "BullMQ", "MongoDB"],
    category:    "Enterprise",
    color:       "from-emerald-500 to-teal-600",
    accentRgb:   "52,211,153",
    Icon:        FiLayers as IC,
  },
  {
    title:       "PC Build Assistant",
    subtitle:    "AI-Powered Chatbot",
    description: "An intelligent conversational agent built with IBM Watson to guide users through custom PC builds, checking compatibility and optimizing for budget.",
    images:      ["/images/chatbot-interface.png"],
    tech:        ["IBM Watson", "Python", "NLP", "Flask"],
    category:    "AI / ML",
    color:       "from-orange-500 to-red-600",
    accentRgb:   "251,146,60",
    Icon:        FiCpu as IC,
  },
  {
    title:       "NGO Connect",
    subtitle:    "Volunteer Management",
    description: "A centralized platform connecting volunteers with NGOs, facilitating donation tracking, event management, and automated impact reporting.",
    images:      ["/images/ngo-management.png"],
    tech:        ["ASP.NET Core", "React", "Docker", "PostgreSQL"],
    category:    "Social Impact",
    color:       "from-indigo-500 to-blue-600",
    accentRgb:   "99,102,241",
    Icon:        FiDatabase as IC,
  },
]

const allCategories = ["All", ...Array.from(new Set(projects.map(p => p.category)))]

function ProjectCard({ project }: { project: Project }) {
  const [activeImg, setActiveImg] = useState(0)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (project.images.length <= 1) return
    const interval = setInterval(() => setActiveImg(i => (i + 1) % project.images.length), 3500)
    return () => clearInterval(interval)
  }, [project.images.length])

  return (
    <div
      className="project-card group relative rounded-2xl overflow-hidden"
      style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(10,10,15,0.8)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        {project.images.map((img, i) => (
          <Image
            key={img}
            src={img}
            alt={project.title}
            fill
            className={`object-cover object-top transition-all duration-1000 ${i === activeImg ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
          />
        ))}
        {/* Overlay on hover */}
        <div
          className={`absolute inset-0 z-10 flex items-center justify-center gap-3 transition-all duration-400 ${hovered ? "opacity-100" : "opacity-0"}`}
          style={{ background: "rgba(5,5,5,0.75)", backdropFilter: "blur(4px)" }}
        >
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl glass text-white hover:text-cyan-400 transition-colors duration-200 hover:scale-110 transform"
            >
              <ExternalLinkIcon className="w-5 h-5" />
            </a>
          )}
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl glass text-white hover:text-violet-400 transition-colors duration-200 hover:scale-110 transform"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 mix-blend-overlay`} />

        {/* Top gradient border */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300 group-hover:opacity-100 opacity-0"
          style={{ background: `linear-gradient(90deg, transparent, rgba(${project.accentRgb},0.8), transparent)` }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-xs font-bold uppercase tracking-wider"
            style={{ color: `rgba(${project.accentRgb},0.8)` }}
          >
            {project.category}
          </span>
          <div
            className="p-1.5 rounded-lg"
            style={{ background: `rgba(${project.accentRgb},0.1)`, border: `1px solid rgba(${project.accentRgb},0.2)` }}
          >
            <project.Icon className="w-3.5 h-3.5" style={{ color: `rgba(${project.accentRgb},1)` }} />
          </div>
        </div>

        <h3 className="text-lg font-bold text-white mb-1 group-hover:gradient-text-cyan transition-all duration-300">{project.title}</h3>
        <p className="text-sm font-medium mb-3" style={{ color: `rgba(${project.accentRgb},0.7)` }}>{project.subtitle}</p>
        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-full text-xs font-medium text-gray-500"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom left border accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, rgba(${project.accentRgb},0.5), transparent)` }}
      />
    </div>
  )
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef  = useRef<HTMLDivElement>(null)
  const [filter, setFilter] = useState("All")

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 60, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top bottom-=80" },
      })
      const cards = gsap.utils.toArray(".project-card") as HTMLElement[]
      cards.forEach((card, i) => {
        gsap.from(card, {
          y: 80, opacity: 0, scale: 0.95, duration: 0.7,
          delay: i * 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top bottom-=60", toggleActions: "play none none reverse" },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-36 px-6 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div ref={headerRef} className="mb-16 relative">
          <span className="section-ghost-number select-none">04</span>
          <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 section-label mb-2">
                <StarIcon className="w-3 h-3" />
                <span>Portfolio Showcase</span>
              </div>
              <h2 className="section-heading text-white">
                Featured{" "}
                <span className="gradient-text-cyan">Projects</span>
              </h2>
              <p className="text-gray-500 mt-3 text-base max-w-lg">
                A curated selection of my work, from complex web apps to intelligent AI systems.
              </p>
            </div>
          </div>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
              style={
                filter === cat
                  ? { background: "linear-gradient(135deg, rgb(34,211,238), rgb(139,92,246))", color: "#000" }
                  : { background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.07)" }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Featured Project (first in list when All) ── */}
        {filter === "All" && projects[0] && (
          <div className="mb-8 project-card group relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(10,10,15,0.8)" }}>
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-72 md:h-auto overflow-hidden">
                {projects[0].images.map((img, i) => (
                  <Image key={img} src={img} alt={projects[0].title} fill className={`object-cover object-top transition-all duration-1000 ${i === 0 ? "opacity-100" : "opacity-0"}`} />
                ))}
                <div className={`absolute inset-0 bg-gradient-to-r ${projects[0].color} opacity-10 mix-blend-overlay`} />
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{ background: `rgba(${projects[0].accentRgb},0.15)`, color: `rgba(${projects[0].accentRgb},1)`, border: `1px solid rgba(${projects[0].accentRgb},0.25)` }}
                  >
                    ★ Featured
                  </span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{projects[0].category}</span>
                </div>
                <h2 className="text-3xl font-black text-white mb-2">{projects[0].title}</h2>
                <p className="text-base font-semibold mb-4" style={{ color: `rgba(${projects[0].accentRgb},0.8)` }}>{projects[0].subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{projects[0].description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[0].tech.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-medium text-gray-400" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {projects[0].link && projects[0].link !== "#" && (
                    <a href={projects[0].link} target="_blank" rel="noreferrer" className="btn-primary text-sm py-2.5 px-5">
                      <ExternalLinkIcon className="w-4 h-4" /> View Project
                    </a>
                  )}
                  {projects[0].github && projects[0].github !== "#" && (
                    <a href={projects[0].github} target="_blank" rel="noreferrer" className="btn-secondary text-sm py-2.5 px-5">
                      <GithubIcon className="w-4 h-4" /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Projects Grid ── */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {(filter === "All" ? filtered.slice(1) : filtered).map((project, i) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
