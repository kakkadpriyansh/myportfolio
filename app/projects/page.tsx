import Projects from "@/components/projects"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore the portfolio of projects built by Priyansh Kakkad.",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Projects />
    </div>
  )
}
