import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Koshi Organisation</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Dedicated to ensuring food security and dignity for all members of our community. Fighting hunger, one
              plate at a time.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  Our Activities
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-white/80 hover:text-white transition-colors">
                  Do Your Bit
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-white/80">+91 86555 80001</span>
              </li>
              <li className="flex gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <a href="mailto:rotibanksupaul@gmail.com" className="text-white/80 hover:text-white transition-colors">
                  rotibanksupaul@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-bold text-lg mb-4">Head Office</h3>
            <div className="flex gap-2 text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <p className="text-white/80">Koshi Organisation, Ward No. 15, Rajendra Nagar, Supaul, India</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white/10 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-lg mb-4">Subscribe to Our Newsletter</h3>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder:text-white/60 border border-white/30 focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors font-medium whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-8 pb-8 border-b border-white/20">
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-white/80">
          <p>© 2025 Koshi Organisation — All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
