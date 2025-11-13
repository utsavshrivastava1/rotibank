"use client"

import { useRouter } from "next/navigation"

export default function Hero() {
  const router = useRouter()

  return (
    <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Step Up to Make a Difference
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-4">Help Us Feed Those in Need</p>
        <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Your support can brighten lives and ensure that no one goes hungry. By working together, we can nourish and
          inspire hope in our community.
        </p>
        <button
          onClick={() => router.push("/donate")}
          className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg"
        >
          Donate Today
        </button>
      </div>
    </section>
  )
}
