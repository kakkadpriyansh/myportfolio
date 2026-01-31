import Contact from "@/components/contact"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Priyansh Kakkad.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4">
      <Contact />
    </div>
  )
}
