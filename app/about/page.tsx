import About from "@/components/about"
import Skills from "@/components/skills"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Priyansh Kakkad, his education, interests, and skills.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4">
      <About />
      <Skills />
    </div>
  )
}
