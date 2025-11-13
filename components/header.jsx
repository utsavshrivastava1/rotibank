"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  // ✅ FIXED: made hrefs unique so keys don't duplicate
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/activities", label: "Our Activities" }, // changed path to unique one
  ]

  const handleDonate = () => {
    router.push("/donate")
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/koshi-logo.jpeg"
              alt="Koshi Organisation"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-xl text-primary hidden sm:inline">
             
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={`${link.href}-${index}`} // ✅ ensures unique keys
                href={link.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={handleDonate}
            className="hidden md:block px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Donate Now
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            {navLinks.map((link, index) => (
              <Link
                key={`${link.href}-${index}`} // ✅ unique keys for mobile too
                href={link.href}
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                handleDonate()
                setIsOpen(false)
              }}
              className="w-full mt-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Donate Now
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
