import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-gray-400 mb-8">Could not find the requested resource</p>
      <Link href="/">
        <Button variant="outline" className="text-black border-white hover:bg-white/90">Return Home</Button>
      </Link>
    </div>
  )
}
