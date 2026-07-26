"use client"

import { useRef, useEffect, type ComponentType } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FiBriefcase, FiCalendar, FiMapPin, FiUsers, FiAward } from "react-icons/fi"

gsap.registerPlugin(ScrollTrigger)

type IC = ComponentType<{ className?: string }>
const BriefcaseIcon = FiBriefcase as IC
const CalendarIcon  = FiCalendar  as IC
const MapPinIcon    = FiMapPin    as IC
const UsersIcon     = FiUsers     as IC
const AwardIcon     = FiAward     as IC

type Experience = {
  company:     string
  role:        string
  duration:    string
  location:    string
  teamSize:    string
  type:        string
  current?:    boolean
  accentColor: string
  description: string
  skills:      string[]
}

const experiences: Experience[] = [
  {
    company:     "Bharat Edge Services Pvt Ltd",
    role:        "Full Stack Developer",
    duration:    "January 2026 – Present",
    location:    "Ahmedabad",
    teamSize:    "80-100",
    type:        "Full-time",
    current:     true,
    accentColor: "rgba(34,211,238,1)",
    description: "Building and maintaining full-stack web applications with a focus on performance, scalability, and clean architecture. Working across frontend and backend using modern web technologies, integrating secure REST APIs, and collaborating with cross-functional teams to deliver production-ready features.",
    skills:      ["Next.js", "React.js", "Node.js", "REST APIs", "CI/CD", "Nginx", "PM2", "SSL"],
  },
  {
    company:     "Technova Technologies",
    role:        "Next.js & React.js Developer",
    duration:    "March 2025 – January 2026",
    location:    "Remote",
    teamSize:    "5-10",
    type:        "Full-time",
    accentColor: "rgba(139,92,246,1)",
    description: "Built a full-scale auditing system frontend using Next.js & React.js. Implemented SSR/CSR components, routing, and optimized UI flows. Set up CI/CD pipeline using GitHub Actions for automated deployment. Configured VPS deployment using Nginx + PM2 + SSL, including auto-pull.",
    skills:      ["Next.js", "React.js", "Node.js", "REST APIs", "CI/CD", "Nginx", "PM2", "SSL"],
  },
  {
    company:     "CSRBOX | IBM Watson",
    role:        "Chatbot Developer",
    duration:    "Jun 2022 – Aug 2022",
    location:    "Remote",
    teamSize:    "3-5",
    type:        "Internship",
    accentColor: "rgba(52,211,153,1)",
    description: "Developed an intelligent PC Build chatbot using IBM Watson Assistant. Designed conversation flows for selecting CPU, GPU, RAM and compatibility suggestions. Built a front-end dashboard for testing and workflow validation. Improved chatbot accuracy using intents, entities, and conditional dialog logic.",
    skills:      ["IBM Watson", "NLP", "Dialog Design", "Pricing Logic", "Dashboard UI"],
  },
]

const achievements = [
  { icon: "🏆", text: "Completed IBM Cybersecurity Course with Distinction", color: "rgba(251,191,36,0.15)" },
  { icon: "🚀", text: "Built SAT Preparation adaptive learning platform", color: "rgba(34,211,238,0.1)" },
  { icon: "💼", text: "Successfully completed multiple professional roles", color: "rgba(52,211,153,0.1)" },
  { icon: "🎯", text: "Specialized in full-stack production deployments", color: "rgba(139,92,246,0.1)" },
]

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef  = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const lineRef     = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 60, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top bottom-=80" },
      })

      // Animate timeline line draw
      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scaleY: 0,
          transformOrigin: "top center",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: { trigger: timelineRef.current, start: "top bottom-=100" },
        })
      }

      // Cards
      const cards = sectionRef.current?.querySelectorAll(".exp-card")
      cards?.forEach((card, i) => {
        gsap.from(card, {
          x: i % 2 === 0 ? -60 : 60,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top bottom-=60", toggleActions: "play none none reverse" },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="py-36 px-6 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)" }} />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div ref={headerRef} className="mb-20 relative">
          <span className="section-ghost-number select-none">03</span>
          <div className="relative z-10">
            <div className="section-label">Career Path</div>
            <h2 className="section-heading text-white mt-2">
              Professional{" "}
              <span className="gradient-text-cyan">Experience</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-lg text-base">
              Building innovative solutions across diverse technologies and industries
            </p>
          </div>
        </div>

        {/* ── Timeline ── */}
        <div ref={timelineRef} className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 flex flex-col items-center" style={{ width: 1 }}>
            <div
              ref={lineRef}
              className="flex-1 w-px"
              style={{ background: "linear-gradient(to bottom, rgba(34,211,238,0.5), rgba(139,92,246,0.5), transparent)" }}
            />
          </div>

          <div className="space-y-12 pl-16">
            {experiences.map((exp, i) => (
              <div key={i} className="exp-card relative group">
                {/* Timeline dot */}
                <div
                  className="absolute -left-10 top-6 w-4 h-4 rounded-full transition-all duration-300 group-hover:scale-125"
                  style={{
                    background: exp.accentColor,
                    boxShadow: `0 0 12px ${exp.accentColor}80`,
                    left: "-2.75rem",
                  }}
                >
                  {exp.current && (
                    <div
                      className="absolute inset-0 rounded-full ping-slow"
                      style={{ background: exp.accentColor }}
                    />
                  )}
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl p-7 transition-all duration-500"
                  style={{
                    background: "rgba(10,10,15,0.8)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderLeft: `3px solid ${exp.accentColor}60`,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderLeftColor = exp.accentColor
                    ;(e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), -4px 0 20px ${exp.accentColor}20`
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderLeftColor = `${exp.accentColor}60`
                    ;(e.currentTarget as HTMLDivElement).style.boxShadow = "none"
                  }}
                >
                  {/* Header row */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                        {exp.current && (
                          <span
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold"
                            style={{ background: "rgba(52,211,153,0.15)", color: "#34d399", border: "1px solid rgba(52,211,153,0.25)" }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ping-slow" />
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-base font-semibold" style={{ color: exp.accentColor }}>
                        {exp.role}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 text-xs text-gray-500 md:text-right">
                      <span className="flex items-center gap-1.5 md:justify-end">
                        <CalendarIcon className="w-3.5 h-3.5" /> {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5 md:justify-end">
                        <MapPinIcon className="w-3.5 h-3.5" /> {exp.location}
                      </span>
                      <span className="flex items-center gap-1.5 md:justify-end">
                        <UsersIcon className="w-3.5 h-3.5" /> Team: {exp.teamSize}
                      </span>
                    </div>
                  </div>

                  {/* Type badge */}
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                    style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    {exp.type}
                  </span>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{exp.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(s => (
                      <span
                        key={s}
                        className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:-translate-y-0.5"
                        style={{
                          background: `${exp.accentColor}10`,
                          color: exp.accentColor,
                          border: `1px solid ${exp.accentColor}25`,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Achievements ── */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <AwardIcon className="w-5 h-5" style={{ color: "rgba(34,211,238,1)" }} />
            <h3 className="text-xl font-bold text-white">Key Achievements</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((a, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 group"
                style={{
                  background: a.color,
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span className="text-2xl flex-shrink-0 group-hover:scale-125 transition-transform duration-300">{a.icon}</span>
                <p className="text-sm text-gray-300 leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
