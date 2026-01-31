"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10 supports-[backdrop-filter]:bg-black/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Priyansh Kakkad
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                pathname === route.href ? "text-white" : "text-gray-400"
              )}
            >
              {route.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/10">
             <Link href="https://github.com/kakkadpriyansh" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
             </Link>
             <Link href="https://linkedin.com/in/kakkadpriyansh" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
             </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 absolute w-full">
          <div className="container px-4 py-4 flex flex-col gap-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-white py-2",
                  pathname === route.href ? "text-white" : "text-gray-400"
                )}
              >
                {route.label}
              </Link>
            ))}
            <div className="flex items-center gap-6 pt-4 border-t border-white/10">
              <Link href="https://github.com/kakkadpriyansh" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://linkedin.com/in/kakkadpriyansh" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
