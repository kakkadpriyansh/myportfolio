"use client"

import type React from "react"
import { useState, useRef, useEffect, type ComponentType } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { toast } from "sonner"
import { FiLoader, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiInstagram, FiSend, FiMessageCircle, FiUser, FiArrowRight } from "react-icons/fi"

gsap.registerPlugin(ScrollTrigger)

type IC = ComponentType<{ className?: string }>
const LoaderIcon       = FiLoader       as IC
const MailIcon         = FiMail         as IC
const PhoneIcon        = FiPhone        as IC
const MapPinIcon       = FiMapPin       as IC
const GithubIcon       = FiGithub       as IC
const LinkedinIcon     = FiLinkedin     as IC
const InstagramIcon    = FiInstagram    as IC
const SendIcon         = FiSend         as IC
const MessageCircleIcon = FiMessageCircle as IC
const UserIcon         = FiUser         as IC
const ArrowRightIcon   = FiArrowRight   as IC

const contactInfo = [
  {
    Icon: MailIcon,
    title: "Email",
    value: "kakkadpriyansh@gmail.com",
    href: "mailto:kakkadpriyansh@gmail.com",
    accentRgb: "34,211,238",
  },
  {
    Icon: PhoneIcon,
    title: "WhatsApp",
    value: "+91 79840 79603",
    href: "https://wa.me/917984079603",
    accentRgb: "52,211,153",
  },
  {
    Icon: MapPinIcon,
    title: "Location",
    value: "India",
    href: "#",
    accentRgb: "139,92,246",
  },
]

const socials = [
  { Icon: GithubIcon,   href: "https://github.com/kakkadpriyansh",     label: "GitHub",    color: "#fff" },
  { Icon: LinkedinIcon, href: "https://linkedin.com/in/kakkadpriyansh", label: "LinkedIn",  color: "#0a66c2" },
  { Icon: InstagramIcon, href: "https://instagram.com/kakkadpriyansh",  label: "Instagram", color: "#e1306c" },
]

function FloatingLabelInput({
  id, name, type = "text", value, onChange, label, required,
}: {
  id: string; name: string; type?: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string; required?: boolean
}) {
  const [focused, setFocused] = useState(false)
  const hasValue = value.length > 0

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="absolute left-4 transition-all duration-200 pointer-events-none font-medium"
        style={{
          top: focused || hasValue ? "-0.6rem" : "0.875rem",
          fontSize: focused || hasValue ? "0.7rem" : "0.875rem",
          color: focused ? "rgb(34,211,238)" : "rgba(107,114,128,1)",
          background: focused || hasValue ? "rgb(10,10,15)" : "transparent",
          padding: focused || hasValue ? "0 0.25rem" : "0",
          zIndex: 1,
        }}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full h-13 px-4 py-3.5 rounded-xl text-white text-sm outline-none transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: focused
            ? "1px solid rgba(34,211,238,0.5)"
            : "1px solid rgba(255,255,255,0.08)",
          boxShadow: focused ? "0 0 0 3px rgba(34,211,238,0.08), 0 0 20px rgba(34,211,238,0.05)" : "none",
        }}
      />
    </div>
  )
}

function FloatingLabelTextarea({
  id, name, value, onChange, label, required,
}: {
  id: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label: string; required?: boolean
}) {
  const [focused, setFocused] = useState(false)
  const hasValue = value.length > 0

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="absolute left-4 transition-all duration-200 pointer-events-none font-medium"
        style={{
          top: focused || hasValue ? "-0.6rem" : "0.875rem",
          fontSize: focused || hasValue ? "0.7rem" : "0.875rem",
          color: focused ? "rgb(34,211,238)" : "rgba(107,114,128,1)",
          background: focused || hasValue ? "rgb(10,10,15)" : "transparent",
          padding: focused || hasValue ? "0 0.25rem" : "0",
          zIndex: 1,
        }}
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={5}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-4 py-3.5 rounded-xl text-white text-sm outline-none transition-all duration-300 resize-none"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: focused
            ? "1px solid rgba(34,211,238,0.5)"
            : "1px solid rgba(255,255,255,0.08)",
          boxShadow: focused ? "0 0 0 3px rgba(34,211,238,0.08), 0 0 20px rgba(34,211,238,0.05)" : "none",
        }}
      />
    </div>
  )
}

export default function Contact() {
  const sectionRef  = useRef<HTMLDivElement>(null)
  const headerRef   = useRef<HTMLDivElement>(null)
  const formCardRef = useRef<HTMLDivElement>(null)
  const infoRef     = useRef<HTMLDivElement>(null)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 60, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top bottom-=80" },
      })
      gsap.from(formCardRef.current, {
        x: -60, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: formCardRef.current, start: "top bottom-=60" },
      })
      gsap.from(infoRef.current, {
        x: 60, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: infoRef.current, start: "top bottom-=60" },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error("Failed")
      toast.success("Message sent!", { description: "I'll get back to you shortly." })
      setFormData({ name: "", email: "", message: "" })
    } catch {
      toast.error("Failed to send", { description: "Try emailing me directly at kakkadpriyansh@gmail.com" })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section ref={sectionRef} id="contact" className="py-36 px-6 relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)" }} />
      </div>
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div ref={headerRef} className="mb-20 relative">
          <span className="section-ghost-number select-none">05</span>
          <div className="relative z-10 text-center">
            <div className="section-label justify-center">Get In Touch</div>
            <h2 className="section-heading text-white mt-2">
              Let's build something{" "}
              <span className="gradient-text-cyan">great</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-lg mx-auto text-base">
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Contact Form ── */}
          <div ref={formCardRef}>
            <div
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{ background: "rgba(10,10,15,0.9)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.5), rgba(139,92,246,0.5), transparent)" }} />

              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.2)" }}
                >
                  <MessageCircleIcon className="w-5 h-5" style={{ color: "rgb(34,211,238)" }} />
                </div>
                <h3 className="text-xl font-bold text-white">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <FloatingLabelInput
                  id="name" name="name" value={formData.name}
                  onChange={handleChange} label="Your Name" required
                />
                <FloatingLabelInput
                  id="email" name="email" type="email" value={formData.email}
                  onChange={handleChange} label="Email Address" required
                />
                <FloatingLabelTextarea
                  id="message" name="message" value={formData.message}
                  onChange={handleChange} label="Tell me about your project..." required
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <><LoaderIcon className="w-5 h-5 animate-spin" /> Sending...</>
                  ) : (
                    <><SendIcon className="w-5 h-5" /> Send Message</>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* ── Contact Info + Orb ── */}
          <div ref={infoRef} className="space-y-5">
            {/* Decorative orb */}
            <div className="relative h-32 flex items-center justify-center mb-8 overflow-hidden rounded-2xl" style={{ background: "rgba(10,10,15,0.6)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="absolute w-40 h-40 rounded-full spin-slow"
                style={{ background: "conic-gradient(from 0deg, rgba(34,211,238,0.3), rgba(139,92,246,0.3), rgba(34,211,238,0.3))", filter: "blur(30px)" }} />
              <div className="relative z-10 text-center">
                <p className="text-sm text-gray-500 font-medium">Currently</p>
                <p className="text-white font-bold">Open for opportunities</p>
              </div>
            </div>

            {/* Contact cards */}
            {contactInfo.map(item => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 p-5 rounded-2xl group transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(10,10,15,0.8)", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = `rgba(${item.accentRgb},0.2)`
                  ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 10px 30px rgba(0,0,0,0.3), 0 0 20px rgba(${item.accentRgb},0.05)`
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.06)"
                  ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = "none"
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `rgba(${item.accentRgb},0.1)`, border: `1px solid rgba(${item.accentRgb},0.2)` }}
                >
                  <item.Icon className="w-5 h-5" style={{ color: `rgba(${item.accentRgb},1)` }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">{item.title}</p>
                  <p className="text-white font-medium truncate">{item.value}</p>
                </div>
                <ArrowRightIcon className="w-4 h-4 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
              </a>
            ))}

            {/* Socials */}
            <div className="p-6 rounded-2xl" style={{ background: "rgba(10,10,15,0.8)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Find me on</p>
              <div className="flex gap-3">
                {socials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1 group"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = `${s.color}40`
                      ;(e.currentTarget as HTMLAnchorElement).style.color = s.color
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.06)"
                      ;(e.currentTarget as HTMLAnchorElement).style.color = ""
                    }}
                  >
                    <s.Icon className="w-5 h-5" />
                    <span className="text-xs font-medium hidden sm:block">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
