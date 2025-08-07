import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Priyansh Kakkad - Full-Stack Developer",
  description:
    "Portfolio of Priyansh Kakkad, a passionate full-stack developer specializing in ASP.NET, Next.js, MongoDB, and modern web technologies.",
  keywords: "Priyansh Kakkad, Full-Stack Developer, ASP.NET, Next.js, MongoDB, Web Developer, Software Engineer",
  authors: [{ name: "Priyansh Kakkad" }],
  openGraph: {
    title: "Priyansh Kakkad - Full-Stack Developer",
    description: "Portfolio showcasing projects and skills in modern web development",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
