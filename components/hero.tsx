"use client"

import Image from "next/image"
import { useEffect, useRef, useState, type ComponentType } from "react"
import { FiDownload, FiMessageCircle, FiGithub, FiLinkedin, FiInstagram, FiArrowDown } from "react-icons/fi"
import gsap from "gsap"

type IconComponent = ComponentType<{ className?: string }>
const DownloadIcon     = FiDownload      as IconComponent
const MessageIcon      = FiMessageCircle as IconComponent
const GithubIcon       = FiGithub        as IconComponent
const LinkedinIcon     = FiLinkedin      as IconComponent
const InstagramIcon    = FiInstagram     as IconComponent
const ArrowDownIcon    = FiArrowDown     as IconComponent

const techBadges = [
  { label: "Next.js",    color: "#fff",    bg: "rgba(255,255,255,0.06)" },
  { label: "React.js",   color: "#61dafb", bg: "rgba(97,218,251,0.08)" },
  { label: "Node.js",    color: "#68a063", bg: "rgba(104,160,99,0.08)" },
  { label: "MongoDB",    color: "#4db33d", bg: "rgba(77,179,61,0.08)"  },
  { label: "TypeScript", color: "#3178c6", bg: "rgba(49,120,198,0.08)" },
  { label: "Tailwind",   color: "#06b6d4", bg: "rgba(6,182,212,0.08)"  },
]

const stats = [
  { value: "2+",  label: "Years Exp." },
  { value: "10+", label: "Projects"   },
  { value: "3",   label: "Companies"  },
]

const socials = [
  { Icon: GithubIcon,    href: "https://github.com/kakkadpriyansh",    label: "GitHub"    },
  { Icon: LinkedinIcon,  href: "https://linkedin.com/in/kakkadpriyansh", label: "LinkedIn" },
  { Icon: InstagramIcon, href: "https://instagram.com/kakkadpriyansh",  label: "Instagram" },
]

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [displayedRole, setDisplayedRole] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const heroRef    = useRef<HTMLDivElement>(null)
  const leftRef    = useRef<HTMLDivElement>(null)
  const rightRef   = useRef<HTMLDivElement>(null)
  const titleRef   = useRef<HTMLHeadingElement>(null)

  const roles = [
    "Full-Stack Developer",
    "Next.js Specialist",
    "React.js Expert",
    "Node.js Engineer",
  ]

  // Typewriter effect
  useEffect(() => {
    let current = 0
    let timeout: ReturnType<typeof setTimeout>

    const type = () => {
      const role = roles[roleIndex]
      if (current <= role.length) {
        setDisplayedRole(role.slice(0, current))
        current++
        timeout = setTimeout(type, 60)
      } else {
        timeout = setTimeout(() => {
          setRoleIndex(i => (i + 1) % roles.length)
          current = 0
        }, 2200)
      }
    }
    type()
    return () => clearTimeout(timeout)
  }, [roleIndex])

  // GSAP entrance
  useEffect(() => {
    setIsLoaded(true)
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl
        .from(leftRef.current, { x: -60, opacity: 0, duration: 1, ease: "power3.out" })
        .from(rightRef.current, { x: 60, opacity: 0, duration: 1, ease: "power3.out" }, "<0.15")
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const handleScrollDown = () => {
    const el = document.getElementById("about")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern"
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)" }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-28 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">

          {/* ── Left: Text ── */}
          <div ref={leftRef} className="space-y-8 order-2 lg:order-1">
            {/* Label */}
            <div className="section-label">
              <span>Hello World</span>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <h1
                ref={titleRef}
                className="text-6xl md:text-7xl xl:text-8xl font-black leading-none tracking-tight"
              >
                <span className="text-white">Priyansh</span>
                <br />
                <span className="gradient-text-cyan">Kakkad</span>
              </h1>
            </div>

            {/* Typewriter role */}
            <div className="flex items-center gap-2 h-8">
              <span className="text-xl md:text-2xl font-light text-gray-300">
                {displayedRole}
              </span>
              <span
                className="w-0.5 h-6 bg-cyan-400 inline-block"
                style={{ animation: "typewriter-blink 1s step-end infinite" }}
              />
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Next.js and React.js developer with strong experience in building fast, scalable,
              and SEO-optimized web applications. Skilled in CI/CD, VPS deployment, and full-stack architecture.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1GEOb_WIpoR8rAIOh0jhEftqGMLZNnBqk/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <DownloadIcon className="w-5 h-5" />
                Download Resume
              </a>
              <a
                href="https://wa.me/917984079603"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <MessageIcon className="w-5 h-5" />
                Contact Me
              </a>
            </div>

            {/* Socials + Stats */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-8 pt-2">
              {/* Social icons */}
              <div className="flex items-center gap-3">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="p-3 glass rounded-xl text-gray-400 hover:text-white hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
                    style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-10 bg-white/10" />

              {/* Stats */}
              <div className="flex gap-8">
                {stats.map(s => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-black gradient-text-cyan">{s.value}</p>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Image ── */}
          <div ref={rightRef} className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Outer decorative ring */}
              <div
                className="absolute rounded-full spin-slow"
                style={{
                  inset: "-3rem",
                  border: "1px dashed rgba(34,211,238,0.15)",
                }}
              />
              {/* Tech badge orbit – top */}
              {techBadges.slice(0, 3).map((badge, i) => (
                <div
                  key={badge.label}
                  className="absolute px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap glass"
                  style={{
                    color: badge.color,
                    background: badge.bg,
                    border: `1px solid ${badge.color}25`,
                    // Distribute around top-right area
                    top: `${-10 + i * 45}%`,
                    right: i === 1 ? "-7rem" : "-5rem",
                    animation: `float-y ${6 + i}s ease-in-out infinite`,
                    animationDelay: `${i * 0.7}s`,
                  }}
                >
                  {badge.label}
                </div>
              ))}
              {/* Tech badge orbit – left */}
              {techBadges.slice(3).map((badge, i) => (
                <div
                  key={badge.label}
                  className="absolute px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap glass"
                  style={{
                    color: badge.color,
                    background: badge.bg,
                    border: `1px solid ${badge.color}25`,
                    top: `${15 + i * 35}%`,
                    left: "-6rem",
                    animation: `float-y ${7 + i}s ease-in-out infinite`,
                    animationDelay: `${i * 0.5 + 1}s`,
                  }}
                >
                  {badge.label}
                </div>
              ))}

              {/* Image container */}
              <div
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden float-y"
                style={{
                  boxShadow: "0 0 60px rgba(34,211,238,0.15), 0 0 120px rgba(139,92,246,0.1), inset 0 0 60px rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  animationDuration: "7s",
                }}
              >
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    background: "linear-gradient(135deg, rgba(34,211,238,0.05) 0%, transparent 50%, rgba(139,92,246,0.05) 100%)",
                  }}
                />
                <Image
                  src="/images/IMG_0350.jpg"
                  alt="Priyansh Kakkad"
                  fill
                  className="object-cover object-top"
                  priority
                  style={{ filter: "contrast(1.05) saturate(1.1)" }}
                />
              </div>

              {/* Pulsing ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: "1px solid rgba(34,211,238,0.3)",
                  animation: "ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite",
                }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors duration-300 bounce-y"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <ArrowDownIcon className="w-4 h-4" />
      </button>
    </section>
  )
}
