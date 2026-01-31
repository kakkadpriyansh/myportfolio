import Experience from "@/components/experience"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience and work history of Priyansh Kakkad.",
}

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4">
      <Experience />
    </div>
  )
}
