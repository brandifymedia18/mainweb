import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image src="/images/logo.png" alt="Brandify.media Logo" width={40} height={40} className="mr-2" />
              <span className="text-white font-bold text-xl">
                <span>BRANDIFY</span>
                <span className="text-primary-blue">.media</span>
              </span>
            </Link>
            <p className="text-zinc-400 mb-4">
              Professional branding services for small businesses and startups. We help you stand out in the market with
              creative and effective branding solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/brandify._media20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-primary-blue"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-primary-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-primary-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-zinc-400 hover:text-primary-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-zinc-400 hover:text-primary-blue transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-zinc-400 hover:text-primary-blue transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-primary-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-zinc-400">
                <Phone size={18} className="mr-2 text-primary-blue" />
                <a href="tel:8080399554" className="hover:text-primary-blue transition-colors">
                  8080399554
                </a>
              </li>
              <li className="flex items-center text-zinc-400">
                <Mail size={18} className="mr-2 text-primary-blue" />
                <a href="mailto:brandifymedia18@gmail.com" className="hover:text-primary-blue transition-colors">
                  brandifymedia18@gmail.com
                </a>
              </li>
              <li className="flex items-center text-zinc-400">
                <Instagram size={18} className="mr-2 text-primary-blue" />
                <a
                  href="https://instagram.com/brandify_media20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-blue transition-colors"
                >
                  @brandify._media20
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-800 text-center">
          <p className="text-zinc-500">&copy; {new Date().getFullYear()} Brandify.media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
