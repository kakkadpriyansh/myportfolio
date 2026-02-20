"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { usePathname } from "next/navigation"

export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const pathname = usePathname()

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    )
  }, [pathname])

  return <div ref={ref} className="min-h-[calc(100vh-4rem)]">{children}</div>
}
