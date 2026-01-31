"use client"

import { Heart, Code, ArrowUpRight, Github, Linkedin, Instagram, Mail } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

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
      content: [
        { name: "About", href: "/about" },
        { name: "Skills", href: "/about" }, // Linking to about since skills are there
        { name: "Projects", href: "/projects" },
        { name: "Experience", href: "/experience" },
        { name: "Contact", href: "/contact" }
      ],
      isLinks: true,
    },
    {
      title: "Socials",
      content: [
        { name: "GitHub", href: "https://github.com/kakkadpriyansh", icon: Github },
        { name: "LinkedIn", href: "https://linkedin.com/in/kakkadpriyansh", icon: Linkedin },
        { name: "Instagram", href: "https://instagram.com/kakkadpriyansh", icon: Instagram },
        { name: "Email", href: "mailto:kakkadpriyansh@gmail.com", icon: Mail }
      ],
      isSocial: true,
    },
    {
      title: "Let's Connect",
      content: ["Available for freelance projects", "Open to collaboration", "Always learning new tech"],
    },
  ]

  return (
    <footer className="bg-black border-t border-gray-800 text-white py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {footerSections.map((section, index) => (
            <div
              key={index}
              className="group"
              onMouseEnter={() => setHoveredSection(index)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <h3 className="text-xl font-bold mb-6 text-white group-hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                {section.title}
              </h3>

              {section.isLinks ? (
                <ul className="space-y-3">
                  {(section.content as { name: string; href: string }[]).map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group/link w-fit"
                      >
                        <span className="relative overflow-hidden">
                          <span className="inline-block transform transition-transform duration-300 group-hover/link:-translate-y-full">
                            {link.name}
                          </span>
                          <span className="absolute top-0 left-0 inline-block transform translate-y-full transition-transform duration-300 group-hover/link:translate-y-0 text-blue-400">
                            {link.name}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : section.isSocial ? (
                <ul className="space-y-3">
                   {(section.content as { name: string; href: string; icon: any }[]).map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-3 group/link w-fit"
                      >
                        <link.icon className="h-5 w-5 text-gray-500 group-hover/link:text-blue-400 transition-colors" />
                        <span>{link.name}</span>
                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transform translate-y-1 group-hover/link:translate-y-0 transition-all duration-300 text-blue-400" />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-4">
                  {(section.content as string[]).map((item, itemIndex) => (
                    <p
                      key={itemIndex}
                      className="text-gray-400 leading-relaxed text-sm"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-12" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
          <div className="flex items-center space-x-2 group cursor-default">
            <Code className="h-5 w-5 text-blue-500 group-hover:rotate-12 transition-transform duration-500" />
            <span className="text-gray-400 text-sm">
              Built with Next.js 15 & Tailwind CSS
            </span>
          </div>

          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse fill-red-500" />
            <span>by Priyansh Kakkad &copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
