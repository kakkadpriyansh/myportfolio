"use client"

import { useRef, useEffect, useState, type ComponentType } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FiCode, FiUsers, FiGlobe, FiArrowRight } from "react-icons/fi"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

const ArrowRightIcon = FiArrowRight as ComponentType<{ className?: string }>

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1800
        const start = performance.now()
        const animate = (now: number) => {
          const elapsed = now - start
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(eased * target))
          if (progress < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return (
    <span ref={ref} className="gradient-text-cyan font-black">
      {count}{suffix}
    </span>
  )
}

const highlights = [
  {
    Icon: FiCode as ComponentType<{ className?: string }>,
    title: "Education",
    desc: "B.E. — Computer Engineering",
    detail: "Marwadi University · 2021–2025",
    accent: "rgba(34,211,238,0.15)",
    border: "rgba(34,211,238,0.2)",
  },
  {
    Icon: FiUsers as ComponentType<{ className?: string }>,
    title: "Experience",
    desc: "Full-Stack Development",
    detail: "3 companies · 2+ years",
    accent: "rgba(139,92,246,0.15)",
    border: "rgba(139,92,246,0.2)",
  },
  {
    Icon: FiGlobe as ComponentType<{ className?: string }>,
    title: "Global Mindset",
    desc: "Remote Ready",
    detail: "Collaborating across time zones",
    accent: "rgba(52,211,153,0.15)",
    border: "rgba(52,211,153,0.2)",
  },
  {
    Icon: FiUsers as ComponentType<{ className?: string }>,
    title: "Interests",
    desc: "Exploration & Travel",
    detail: "Outdoor adventures & new tech",
    accent: "rgba(244,63,94,0.15)",
    border: "rgba(244,63,94,0.2)",
  },
]

const stats = [
  { target: 2,  suffix: "+", label: "Years Experience" },
  { target: 10, suffix: "+", label: "Projects Built"   },
  { target: 3,  suffix: "",  label: "Companies Worked" },
  { target: 15, suffix: "+", label: "Technologies Used" },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef  = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const cardsRef   = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 60, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top bottom-=80" },
      })
      gsap.from(contentRef.current, {
        y: 40, opacity: 0, duration: 1, delay: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: contentRef.current, start: "top bottom-=80" },
      })
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.from(card, {
          y: 50, opacity: 0, scale: 0.95, duration: 0.7,
          delay: i * 0.1, ease: "back.out(1.7)",
          scrollTrigger: { trigger: card, start: "top bottom-=40", toggleActions: "play none none reverse" },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-36 px-6 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)" }} />
      </div>
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Section Header ── */}
        <div ref={headerRef} className="mb-20 relative">
          <span className="section-ghost-number select-none">01</span>
          <div className="relative z-10">
            <div className="section-label">About Me</div>
            <h2 className="section-heading text-white mt-2">
              Passionate about{" "}
              <span className="gradient-text-cyan">crafting</span>
              <br />digital experiences
            </h2>
          </div>
        </div>

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map(s => (
            <div
              key={s.label}
              className="glass-card rounded-2xl p-6 text-center"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p className="text-4xl font-black mb-1">
                <AnimatedCounter target={s.target} suffix={s.suffix} />
              </p>
              <p className="text-sm text-gray-500 font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── Content Grid ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Text block */}
          <div ref={contentRef} className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
              {/* Gradient border top */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.5), rgba(139,92,246,0.5), transparent)" }} />
              <div className="p-8 md:p-10 space-y-5" style={{ background: "rgba(10,10,15,0.8)" }}>
                <h3 className="text-2xl font-bold text-white">
                  Building the web, one component at a time
                </h3>
                <p
                  className="text-gray-400 leading-relaxed text-base"
                  style={{ fontFamily: "var(--font-geist), -apple-system, BlinkMacSystemFont, sans-serif", fontSize: "1.05rem", lineHeight: "1.8" }}
                >
                  I'm a Computer Engineering graduate with a deep passion for creating innovative web
                  applications. My journey involves solving complex problems through elegant code and
                  building user-centric digital experiences that make a real difference.
                </p>
                <p
                  className="text-gray-400 leading-relaxed text-base"
                  style={{ fontFamily: "var(--font-geist), -apple-system, BlinkMacSystemFont, sans-serif", fontSize: "1.05rem", lineHeight: "1.8" }}
                >
                  From architecting scalable backends to crafting immersive frontends with GSAP animations
                  and Three.js, I love every aspect of the development lifecycle. I'm constantly learning
                  and adapting to the latest technologies to deliver production-ready solutions.
                </p>
                <div className="pt-2">
                  <Link href="#contact">
                    <button className="btn-primary">
                      Let's Work Together <ArrowRightIcon className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                ref={el => { cardsRef.current[i] = el }}
                className="group relative rounded-2xl p-6 transition-all duration-500 cursor-default"
                style={{
                  background: "rgba(10,10,15,0.7)",
                  border: `1px solid rgba(255,255,255,0.06)`,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = item.border
                  ;(e.currentTarget as HTMLDivElement).style.background = item.accent
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)"
                  ;(e.currentTarget as HTMLDivElement).style.background = "rgba(10,10,15,0.7)"
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: item.accent, border: `1px solid ${item.border}` }}
                >
                  <item.Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                <p className="text-sm font-medium text-gray-300 mb-0.5">{item.desc}</p>
                <p className="text-xs text-gray-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
