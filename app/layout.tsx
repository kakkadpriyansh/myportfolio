import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import SmoothScroll from "@/components/smooth-scroll"
import ThreeBackground from "@/components/three-background"
import ScrollProgress from "@/components/scroll-progress"
import Footer from "@/components/footer"
import Preloader from "@/components/preloader"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://priyanshkakkad.com'),
  title: {
    default: "Priyansh Kakkad - Full-Stack Developer",
    template: "%s | Priyansh Kakkad"
  },
  description: "Portfolio of Priyansh Kakkad, a passionate full-stack developer specializing in ASP.NET, Next.js, MongoDB, and modern web technologies.",
  keywords: ["Priyansh Kakkad", "Full-Stack Developer", "Next.js", "React", "Web Development", "Software Engineer"],
  authors: [{ name: "Priyansh Kakkad" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://priyanshkakkad.com",
    title: "Priyansh Kakkad - Full-Stack Developer",
    description: "Portfolio of Priyansh Kakkad, a passionate full-stack developer.",
    siteName: "Priyansh Kakkad Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyansh Kakkad - Full-Stack Developer",
    description: "Portfolio of Priyansh Kakkad, a passionate full-stack developer.",
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SmoothScroll>
          <div className="relative min-h-screen bg-black overflow-hidden selection:bg-indigo-500/30">
             <Preloader />
             <ScrollProgress />
             <ThreeBackground />
             <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow pt-16">
                  {children}
                </main>
                <Footer />
             </div>
             <Toaster position="bottom-right" theme="dark" />
          </div>
        </SmoothScroll>
      </body>
    </html>
  )
}
