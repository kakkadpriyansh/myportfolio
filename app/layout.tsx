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
        url: "/images/IMG_0350.jpg",
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
    images: ["/images/IMG_0350.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/IMG_0350.jpg",
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
  "jobTitle": "Full-Stack Developer",
  "sameAs": [
    "https://github.com/kakkadpriyansh",
    "https://linkedin.com/in/kakkadpriyansh",
    "https://instagram.com/kakkadpriyansh"
  ],
  "image": "https://kakkadpriyansh.in/images/IMG_0350.jpg",
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
