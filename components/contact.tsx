"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, MessageCircle, User, Globe, ArrowRight } from 'lucide-react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

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

    // Form Animation
    gsap.fromTo(formRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top bottom-=100",
        }
      }
    )

    // Info Animation
    gsap.fromTo(infoRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top bottom-=100",
        }
      }
    )
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Format the message for WhatsApp
    const whatsappMessage = `Hi Priyansh! 👋

*Name:* ${formData.name}
*Email:* ${formData.email}

*Message:*
${formData.message}

---
Sent from your portfolio website`

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/917984079603?text=${encodedMessage}`
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank')
    
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kakkadpriyansh@gmail.com",
      href: "mailto:kakkadpriyansh@gmail.com",
      gradient: "from-blue-500/20 to-purple-500/20",
      border: "group-hover:border-blue-500/50"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+91 79840 79603",
      href: "https://wa.me/917984079603",
      gradient: "from-green-500/20 to-emerald-500/20",
      border: "group-hover:border-green-500/50"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      href: "#",
      gradient: "from-orange-500/20 to-red-500/20",
      border: "group-hover:border-orange-500/50"
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/kakkadpriyansh",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/kakkadpriyansh",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/kakkadpriyansh",
      label: "Instagram",
    },
  ]

  return (
    <section ref={containerRef} id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={headerRef} className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-full mb-6 backdrop-blur-sm border border-white/10">
            <MessageCircle className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6 relative z-10">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div ref={formRef} className="relative group perspective-1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <Card className="relative h-full bg-gray-900/80 border-gray-800 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500/50 focus:ring-blue-500/20 h-12"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500/50 focus:ring-blue-500/20 h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500/50 focus:ring-blue-500/20 resize-none p-4"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25"
                  >
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative perspective-1000 block"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <Card className={`relative bg-gray-900/80 border-gray-800 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${item.border}`}>
                    <CardContent className="p-6 flex items-center gap-6">
                      <div className="p-4 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-500">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-gray-400 group-hover:text-white transition-colors">{item.value}</p>
                      </div>
                      <ArrowRight className="ml-auto h-5 w-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <Card className="relative bg-gray-900/80 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-6">Connect on Social Media</h3>
                  <div className="flex justify-center gap-6">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300 border border-white/5 hover:border-white/20 group/icon"
                        aria-label={social.label}
                      >
                        <social.icon className="h-6 w-6 text-gray-400 group-hover/icon:text-white transition-colors" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
