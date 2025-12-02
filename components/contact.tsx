"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, MessageCircle, User, Globe } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

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
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+91 79840 79603",
      href: "https://wa.me/917984079603",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      href: "#",
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
    <section id="contact" className="py-32 px-4 relative overflow-hidden professional-background professional-grid">
      {/* Clean Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-white/2 to-white/1 rounded-full blur-3xl gentle-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-white/1 to-white/2 rounded-full blur-3xl gentle-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-6 professional-glass rounded-2xl mb-12 professional-shadow">
            <Globe className="h-8 w-8 text-white/70 mr-4" />
            <span className="text-white/80 text-xl font-medium">Let's Connect</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 relative clean-heading">
            Get In Touch
          </h2>
          <p className="text-xl clean-body max-w-3xl mx-auto mb-8 leading-relaxed">
            Ready to collaborate on your next project? Let's create something extraordinary together.
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto gentle-pulse" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8 w-full">
            <Card className="group relative overflow-hidden professional-glass-strong transform-gpu hover:scale-105 hover:-translate-y-2 lg:hover:-translate-y-4 transition-all duration-500 professional-card professional-shadow w-full">
              <CardHeader className="relative z-10 pb-4 lg:pb-6 p-4 lg:p-8">
                <CardTitle className="text-xl md:text-2xl lg:text-3xl text-white group-hover:text-white/90 transition-colors duration-300 flex items-center clean-subheading break-words">
                  <MessageCircle className="mr-3 lg:mr-4 h-6 w-6 lg:h-8 lg:w-8 flex-shrink-0" />
                  <span className="break-words">Contact Information</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 lg:space-y-6 relative z-10 p-4 lg:p-8">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-3 lg:space-x-6 group/item p-3 lg:p-4 professional-glass rounded-xl hover:scale-105 transition-all duration-300 professional-interactive w-full"
                  >
                    <div className="relative flex-shrink-0">
                      <div className="relative p-3 lg:p-4 professional-glass rounded-xl group-hover/item:scale-110 transition-all duration-300">
                        <contact.icon className="h-5 w-5 lg:h-8 lg:w-8 text-white/70 group-hover/item:text-white relative z-10 transform group-hover/item:rotate-12 group-hover/item:scale-110 transition-all duration-300" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-white group-hover/item:text-white/90 transition-colors duration-300 text-base lg:text-lg">
                        {contact.title}
                      </p>
                      <p className="clean-body group-hover/item:text-white/80 transition-colors duration-300 text-sm lg:text-base break-words">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}

                {/* Social Links */}
                <div className="pt-4 lg:pt-6">
                  <p className="font-semibold mb-4 lg:mb-6 text-white text-base lg:text-xl clean-subheading">Connect with me:</p>
                  <div className="flex space-x-4 lg:space-x-6">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group/social relative p-4 lg:p-6 professional-glass rounded-2xl transform-gpu hover:scale-110 transition-all duration-300 professional-interactive professional-shadow"
                      >
                        <social.icon className="h-6 w-6 lg:h-8 lg:w-8 text-white/60 group-hover/social:text-white relative z-10 transform group-hover/social:rotate-12 group-hover/social:scale-110 transition-all duration-300" />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="group relative overflow-hidden professional-glass-strong transform-gpu hover:scale-105 hover:-translate-y-2 lg:hover:-translate-y-4 transition-all duration-500 professional-card professional-shadow w-full">
            <CardHeader className="relative z-10 pb-4 lg:pb-6 p-4 lg:p-8">
              <CardTitle className="text-xl md:text-2xl lg:text-3xl text-white group-hover:text-white/90 transition-colors duration-300 flex items-center clean-subheading break-words">
                <Send className="mr-3 lg:mr-4 h-6 w-6 lg:h-8 lg:w-8 flex-shrink-0" />
                <span className="break-words">Send Message via WhatsApp</span>
              </CardTitle>
            </CardHeader>

            <CardContent className="relative z-10 p-4 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div className="space-y-2">
                  <label className="text-xs lg:text-sm font-medium text-white/80">Your Name</label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full professional-glass border-white/10 text-white placeholder-white/40 focus:border-white/30 focus:ring-white/20 transform-gpu hover:scale-105 transition-all duration-300 h-10 lg:h-12 text-base lg:text-lg rounded-xl professional-shadow"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs lg:text-sm font-medium text-white/80">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full professional-glass border-white/10 text-white placeholder-white/40 focus:border-white/30 focus:ring-white/20 transform-gpu hover:scale-105 transition-all duration-300 h-10 lg:h-12 text-base lg:text-lg rounded-xl professional-shadow"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs lg:text-sm font-medium text-white/80">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full professional-glass border-white/10 text-white placeholder-white/40 focus:border-white/30 focus:ring-white/20 transform-gpu hover:scale-105 transition-all duration-300 resize-none text-base lg:text-lg rounded-xl professional-shadow"
                  />
                </div>

                <Button
                  type="submit"
                  variant="whatsapp"
                  size="lg"
                  className="w-full py-3 lg:py-4 h-auto font-semibold group/btn text-sm lg:text-base"
                >
                  <MessageCircle className="mr-2 lg:mr-3 h-5 w-5 lg:h-6 lg:w-6" />
                  Send via WhatsApp
                </Button>
              </form>

              {/* Info message */}
              <div className="mt-4 lg:mt-6 p-3 lg:p-4 professional-glass rounded-xl border border-white/10">
                <p className="text-xs lg:text-sm text-white/60 text-center break-words">
                  📱 Clicking "Send via WhatsApp" will open WhatsApp with your message pre-filled
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
