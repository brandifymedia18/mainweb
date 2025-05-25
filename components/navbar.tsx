"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Search } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Search functionality would go here
    console.log("Searching for:", searchQuery)
    setSearchQuery("")
  }

  return (
    <nav className="bg-black border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="Brandify.media Logo" width={40} height={40} className="mr-2" />
              <span className="text-white font-bold text-xl">
                <span>BRANDIFY</span>
                <span className="text-primary-blue">.media</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-primary-blue transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-primary-blue transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-white hover:text-primary-blue transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-white hover:text-primary-blue transition-colors">
              Portfolio
            </Link>
            <Link href="/clients" className="text-white hover:text-primary-blue transition-colors">
              Clients
            </Link>
            <Link href="/contact" className="text-white hover:text-primary-blue transition-colors">
              Contact
            </Link>
          </div>

         {/* {/* Search Bar 
          <div className="hidden md:flex items-center">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-zinc-900 text-white px-4 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
              />
              <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Search size={18} className="text-zinc-400" />
              </button>
            </form>
          </div> */} 

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white hover:text-primary-blue focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-white hover:bg-zinc-800 rounded-md" onClick={toggleMenu}>
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-white hover:bg-zinc-800 rounded-md"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-white hover:bg-zinc-800 rounded-md"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="block px-3 py-2 text-white hover:bg-zinc-800 rounded-md"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link
              href="/clients"
              className="block px-3 py-2 text-white hover:bg-zinc-800 rounded-md"
              onClick={toggleMenu}
            >
              Clients
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-white hover:bg-zinc-800 rounded-md"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <form onSubmit={handleSearch} className="relative mt-3 px-3">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
              />
              <button type="submit" className="absolute right-5 top-1/2 transform -translate-y-1/2">
                <Search size={18} className="text-zinc-400" />
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  )
}
