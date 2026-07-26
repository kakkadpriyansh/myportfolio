"use client"

import Link from "next/link"
import Image from "next/image"
import { type ComponentType } from "react"
import { FiHeart, FiCode, FiArrowUpRight, FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi"

type IC = ComponentType<{ className?: string }>
const HeartIcon       = FiHeart       as IC
const CodeIcon        = FiCode        as IC
const ArrowUpRightIcon = FiArrowUpRight as IC
const GithubIcon      = FiGithub      as IC
const LinkedinIcon    = FiLinkedin    as IC
const InstagramIcon   = FiInstagram   as IC
const MailIcon        = FiMail        as IC

const navLinks = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact"    },
]

const socials = [
  { Icon: GithubIcon,    href: "https://github.com/kakkadpriyansh",     label: "GitHub",    color: "#fff"    },
  { Icon: LinkedinIcon,  href: "https://linkedin.com/in/kakkadpriyansh", label: "LinkedIn",  color: "#0a66c2" },
  { Icon: InstagramIcon, href: "https://instagram.com/kakkadpriyansh",   label: "Instagram", color: "#e1306c" },
  { Icon: MailIcon,      href: "mailto:kakkadpriyansh@gmail.com",         label: "Email",     color: "#22d3ee" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden pt-20 pb-8 px-6"
      style={{ background: "rgb(5,5,5)", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      {/* Gradient separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.4) 30%, rgba(139,92,246,0.4) 70%, transparent 100%)" }}
      />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-80 h-60 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.03) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/3 w-80 h-60 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Main Footer Content ── */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-1 space-y-5">
            <div>
              <Link href="/" className="inline-block mb-3">
                <Image
                  src="/images/kp.png"
                  alt="Priyansh Kakkad Logo"
                  width={64}
                  height={64}
                  className="rounded-full object-cover ring-1 ring-white/10"
                />
              </Link>
              <p className="text-lg font-bold text-white">Priyansh Kakkad</p>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Full-Stack Developer passionate about creating innovative solutions and building the future through code.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = s.color
                    ;(e.currentTarget as HTMLAnchorElement).style.borderColor = `${s.color}40`
                    ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 12px ${s.color}20`
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = ""
                    ;(e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.07)"
                    ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = "none"
                  }}
                >
                  <s.Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 w-fit"
                  >
                    <span
                      className="w-0 h-px transition-all duration-300 group-hover:w-4"
                      style={{ background: "rgb(34,211,238)" }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">Status</p>
            <div className="space-y-4">
              {[
                "Available for freelance projects",
                "Open to collaboration",
                "Always learning new tech",
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "rgb(34,211,238)", boxShadow: "0 0 6px rgba(34,211,238,0.6)" }}
                  />
                  <p className="text-sm text-gray-400">{item}</p>
                </div>
              ))}

              <a
                href="mailto:kakkadpriyansh@gmail.com"
                className="inline-flex items-center gap-2 mt-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 group"
                style={{ background: "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(139,92,246,0.15))", border: "1px solid rgba(34,211,238,0.2)" }}
              >
                Hire Me
                <ArrowUpRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CodeIcon className="w-4 h-4 text-cyan-500" />
            <span>Built with Next.js 15 & Tailwind CSS</span>
          </div>

          <p className="text-sm text-gray-600 flex items-center gap-1.5">
            Made with
            <HeartIcon className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
            by <span className="text-gray-400 font-medium">Priyansh Kakkad</span>
            &copy; {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}
