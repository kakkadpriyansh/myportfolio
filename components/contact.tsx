"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, MessageCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
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
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 79840 79603",
      href: "tel:+917984079603",
      gradient: "from-green-500/20 to-blue-500/20",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      href: "#",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/kakkadpriyansh",
      label: "GitHub",
      color: "hover:bg-gray-700",
      gradient: "from-gray-500/20 to-gray-700/20",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/kakkadpriyansh",
      label: "LinkedIn",
      color: "hover:bg-blue-500",
      gradient: "from-blue-500/20 to-blue-700/20",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/kakkadpriyansh",
      label: "Instagram",
      color: "hover:bg-pink-500",
      gradient: "from-pink-500/20 to-purple-500/20",
    },
  ]

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Background effects */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-300/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white mb-6 relative">
            <span className="relative">
              Get In Touch
              {/* <div className="absolute inset-0 bg-white/20 blur-3xl opacity-50 animate-pulse" /> */}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Ready to collaborate on your next project? Let's create something amazing together.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto animate-pulse" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card
              className="group relative overflow-hidden bg-gray-900/40 border-gray-700/50 hover:border-white/30 backdrop-blur-xl transform-gpu hover:scale-105 hover:-translate-y-4 transition-all duration-700"
              style={{
                boxShadow:
                  "0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)",
              }}
            >
              {/* <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-gray-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" /> */}

              <CardHeader className="relative z-10 pb-6">
                <CardTitle className="text-3xl text-white group-hover:text-gray-100 transition-colors duration-300 flex items-center">
                  <MessageCircle className="mr-4 h-8 w-8" />
                  Contact Information
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-8 relative z-10">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-6 group/item p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} rounded-full blur-xl scale-150 group-hover/item:scale-200 transition-transform duration-500`}
                      />
                      <div className="relative p-4 bg-gray-800/80 rounded-full border border-gray-600/50 group-hover/item:border-white/30 transition-all duration-300">
                        <contact.icon className="h-8 w-8 text-white relative z-10 transform group-hover/item:rotate-12 group-hover/item:scale-110 transition-all duration-300" />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-white group-hover/item:text-gray-100 transition-colors duration-300 text-lg">
                        {contact.title}
                      </p>
                      <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}

                {/* Social Links */}
                <div className="pt-8">
                  <p className="font-semibold mb-8 text-white text-xl">Connect with me:</p>
                  <div className="flex space-x-6">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`group/social relative p-6 bg-gray-800/80 rounded-2xl border border-gray-600/50 hover:border-white/30 transform-gpu hover:scale-105 transition-all duration-300 ${social.color}`}
                        style={{
                          boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        {/* <div
                          className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover/social:opacity-100 rounded-2xl transition-opacity duration-500`}
                        /> */}
                        <social.icon className="h-8 w-8 text-gray-400 group-hover/social:text-white relative z-10 transform group-hover/social:rotate-12 group-hover/social:scale-110 transition-all duration-300" />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card
            className="group relative overflow-hidden bg-gray-900/40 border-gray-700/50 hover:border-white/30 backdrop-blur-xl transform-gpu hover:scale-105 hover:-translate-y-4 transition-all duration-700"
            style={{
              boxShadow:
                "0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)",
            }}
          >
            {/* <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-gray-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" /> */}

            <CardHeader className="relative z-10 pb-6">
              <CardTitle className="text-3xl text-white group-hover:text-gray-100 transition-colors duration-300 flex items-center">
                <Send className="mr-4 h-8 w-8" />
                Send Message
              </CardTitle>
            </CardHeader>

            <CardContent className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Your Name</label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/80 border-gray-600/50 text-white placeholder-gray-400 focus:border-white focus:ring-white transform-gpu hover:scale-105 transition-all duration-300 h-14 text-lg backdrop-blur-sm"
                    style={{
                      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/80 border-gray-600/50 text-white placeholder-gray-400 focus:border-white focus:ring-white transform-gpu hover:scale-105 transition-all duration-300 h-14 text-lg backdrop-blur-sm"
                    style={{
                      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-gray-800/80 border-gray-600/50 text-white placeholder-gray-400 focus:border-white focus:ring-white transform-gpu hover:scale-105 transition-all duration-300 resize-none text-lg backdrop-blur-sm"
                    style={{
                      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                    }}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-100 font-bold text-lg py-6 transform-gpu hover:scale-105 transition-all duration-300 group/btn"
                  style={{
                    boxShadow: "0 15px 35px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <Send className="mr-3 h-6 w-6 transform group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-all duration-300" />
                  Send Message
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 rounded-md" /> */}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
