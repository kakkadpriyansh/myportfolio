'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <h2 className="text-4xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-gray-400 mb-8">{error.message || "An unexpected error occurred"}</p>
      <Button
        onClick={() => reset()}
        variant="outline"
        className="text-black border-white hover:bg-white/90"
      >
        Try again
      </Button>
    </div>
  )
}
