"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { FiMenu, FiX, FiGithub, FiLinkedin } from "react-icons/fi"
import type { ComponentType } from "react"

type IconComponent = ComponentType<{ className?: string }>

const MenuIcon = FiMenu as IconComponent
const CloseIcon = FiX as IconComponent
const GithubIcon = FiGithub as IconComponent
const LinkedinIcon = FiLinkedin as IconComponent

const routes = [
  { href: "#home",       label: "Home" },
  { href: "#about",      label: "About" },
  { href: "#skills",     label: "Skills" },
  { href: "#projects",   label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact",    label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("home")

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Detect active section
      const sections = routes.map(r => r.href.replace("#", ""))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* ── Desktop Floating Nav ── */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500",
          scrolled ? "pt-3" : "pt-5"
        )}
      >
        <nav
          className={cn(
            "hidden md:flex items-center gap-1 px-4 py-2.5 rounded-full transition-all duration-500",
            scrolled
              ? "glass-strong shadow-2xl shadow-black/50 border border-white/10"
              : "glass border border-white/5"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="mr-4 px-3 py-1 text-sm font-black tracking-widest gradient-text-cyan uppercase"
          >
            PK
          </Link>

          {/* Divider */}
          <div className="w-px h-4 bg-white/10 mr-3" />

          {/* Links */}
          {routes.map((route) => {
            const isActive = activeSection === route.href.replace("#", "")
            return (
              <button
                key={route.href}
                onClick={() => handleNavClick(route.href)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                  isActive
                    ? "text-black"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                    style={{ zIndex: -1 }}
                  />
                )}
                {route.label}
              </button>
            )
          })}

          {/* Divider */}
          <div className="w-px h-4 bg-white/10 ml-3 mr-2" />

          {/* Social icons */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/kakkadpriyansh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/kakkadpriyansh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </nav>

        {/* ── Mobile Header ── */}
        <div
          className={cn(
            "md:hidden flex items-center justify-between w-full mx-4 px-5 py-3 rounded-2xl transition-all duration-500",
            scrolled
              ? "glass-strong shadow-xl border border-white/10"
              : "glass border border-white/5"
          )}
        >
          <span className="text-sm font-black tracking-widest gradient-text-cyan uppercase">PK</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all"
          >
            {isOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-500",
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-72 glass-strong border-l border-white/10 p-8 flex flex-col gap-2 transition-transform duration-500",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="mb-8 mt-16">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">Navigation</p>
          </div>
          {routes.map((route, i) => {
            const isActive = activeSection === route.href.replace("#", "")
            return (
              <button
                key={route.href}
                onClick={() => handleNavClick(route.href)}
                className={cn(
                  "flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left text-lg font-medium transition-all duration-300",
                  isActive
                    ? "bg-gradient-to-r from-cyan-500/20 to-violet-500/10 text-white border border-cyan-500/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {isActive && <span className="nav-dot flex-shrink-0" />}
                {route.label}
              </button>
            )
          })}
          <div className="mt-auto pt-8 border-t border-white/10 flex gap-4">
            <a href="https://github.com/kakkadpriyansh" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-xl glass hover:bg-white/10 text-gray-400 hover:text-white transition-all">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/kakkadpriyansh" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-xl glass hover:bg-white/10 text-gray-400 hover:text-white transition-all">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
