"use client"

import { Heart, Code, Coffee } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null)

  const footerSections = [
    {
      title: "Priyansh Kakkad",
      content: [
        "Full-Stack Developer passionate about creating innovative solutions and building the future through code.",
        "Specialized in modern web technologies and scalable applications.",
      ],
    },
    {
      title: "Quick Links",
      content: ["About", "Skills", "Projects", "Experience", "Contact"],
      isLinks: true,
    },
    {
      title: "Technologies",
      content: ["ASP.NET Core", "Next.js & React", "MongoDB & SQL", "Python & AI/ML", "Cloud & DevOps"],
    },
    {
      title: "Let's Connect",
      content: ["Available for freelance projects", "Open to collaboration", "Always learning new tech"],
    },
  ]

  return (
    <footer className="bg-black border-t border-gray-800/50 text-white py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-10 right-10 w-80 h-80 bg-gray-300 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {footerSections.map((section, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredSection(index)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="relative">
                <h3 className="text-2xl font-bold mb-8 text-white group-hover:text-gray-100 transition-colors duration-300 relative">
                  {section.title}
                </h3>

                {section.isLinks ? (
                  <ul className="space-y-4 text-gray-400">
                    {section.content.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={`#${link.toLowerCase()}`}
                          className="hover:text-white transition-all duration-300 transform-gpu hover:translate-x-2 inline-block relative group/link text-lg"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <p
                        key={itemIndex}
                        className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed text-lg"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="relative mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-8 space-x-8">
            <div className="flex items-center space-x-3 group">
              <Code className="h-6 w-6 text-gray-400 group-hover:text-white transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              <span className="text-gray-400 group-hover:text-white transition-colors duration-300 text-lg">
                Built with passion
              </span>
            </div>
            <div className="flex items-center space-x-3 group">
              <Coffee className="h-6 w-6 text-gray-400 group-hover:text-white transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              <span className="text-gray-400 group-hover:text-white transition-colors duration-300 text-lg">
                Fueled by coffee
              </span>
            </div>
          </div>

          <p className="text-gray-400 flex items-center justify-center text-xl group hover:text-gray-300 transition-colors duration-300">
            © 2025 Priyansh Kakkad. All Rights Reserved. Made with
            <Heart className="h-6 w-6 text-red-500 mx-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-pulse" />
            and lots of dedication.
          </p>

          {/* Scroll to top indicator */}
          <div className="mt-12">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group relative p-4 bg-gray-800/80 rounded-full border border-gray-600/50 hover:bg-gray-800/90 transform-gpu hover:scale-105 transition-all duration-500"
            >
              <div className="w-6 h-6 border-t-2 border-r-2 border-white transform rotate-[-45deg] group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
