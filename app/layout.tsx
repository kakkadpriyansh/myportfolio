import type React from "react"
import type { Metadata } from "next"
import { Geist, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import SmoothScroll from "@/components/smooth-scroll"
import ThreeBackground from "@/components/three-background"
import ScrollProgress from "@/components/scroll-progress"
import Footer from "@/components/footer"
import Preloader from "@/components/preloader"
import { Toaster } from "sonner"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
})

// JetBrains Mono — display, body, labels, metadata, code
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kakkadpriyansh.in'),
  title: {
    default: "Priyansh Kakkad - Full-Stack Developer",
    template: "%s | Priyansh Kakkad"
  },
  description: "Portfolio of Priyansh Kakkad, a passionate full-stack developer specializing in ASP.NET, Next.js, MongoDB, and modern web technologies.",
  keywords: [
    "Priyansh Kakkad", 
    "Full-Stack Developer", 
    "Next.js", 
    "React", 
    "Web Development", 
    "Software Engineer",
    "Tailwind CSS",
    "GSAP",
    "Three.js",
    "MongoDB",
    "Node.js",
    "ASP.NET"
  ],
  authors: [{ name: "Priyansh Kakkad", url: "https://kakkadpriyansh.in" }],
  creator: "Priyansh Kakkad",
  publisher: "Priyansh Kakkad",
  alternates: {
    canonical: "https://kakkadpriyansh.in",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kakkadpriyansh.in",
    title: "Priyansh Kakkad - Full-Stack Developer",
    description: "Portfolio of Priyansh Kakkad, a passionate full-stack developer specializing in ASP.NET, Next.js, MongoDB, and modern web technologies.",
    siteName: "Priyansh Kakkad Portfolio",
    images: [
      {
        url: "/images/myphoto.jpg",
        width: 1200,
        height: 630,
        alt: "Priyansh Kakkad - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyansh Kakkad - Full-Stack Developer",
    description: "Portfolio of Priyansh Kakkad, a passionate full-stack developer.",
    creator: "@kakkadpriyansh",
    images: ["/images/myphoto.jpg"],
  },
  icons: {
    icon: [
      { url: "/images/kp.png", type: "image/png" },
    ],
    shortcut: "/images/kp.png",
    apple: "/images/kp.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Placeholder, user should replace
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Priyansh Kakkad",
  "url": "https://kakkadpriyansh.in",
  "jobTitle": "Software Developer",
  "sameAs": [
    "https://github.com/kakkadpriyansh",
    "https://linkedin.com/in/kakkadpriyansh",
    "https://instagram.com/kakkadpriyansh"
  ],
  "image": "https://kakkadpriyansh.in/images/myphoto.jpg",
  "description": "Full-Stack Developer specializing in Next.js, React, and Modern Web Technologies."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geist.variable} ${jetbrainsMono.variable} ${geist.className}`}>
        <SmoothScroll>
          <div className="relative min-h-screen overflow-hidden" style={{ background: "rgb(5,5,5)" }}>
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
