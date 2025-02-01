"use client"

import Link from "next/link"
import { ShoppingCart, User, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { useCartStore } from "../../../store/cardstore"

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const totalItems = useCartStore((state) => state.getTotalItems())

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo with Image */}
          <Link href="/#" className="flex items-center space-x-2">
            <img 
              src="/logo1.jpg" 
              alt="Logo"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
            <span className="text-2xl font-bold text-gray-800">Elite Food</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition">About</Link>
            <Link href="/blogs" className="text-gray-600 hover:text-gray-900 transition">Blogs</Link>
            <Link href="/chef" className="block text-gray-600 hover:text-gray-900 transition">Chefs</Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition">Contact</Link>
            <Link href="/shop" className="text-gray-600 hover:text-gray-900 transition">Shop</Link>
          </div>

          {/* Cart & User Icons */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative p-2 text-gray-600 hover:text-gray-900 transition">
              <ShoppingCart className="h-6 w-6" />
              {mounted && totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link href="/admin" className="p-2 text-gray-600 hover:text-gray-900 transition">
              <User className="h-6 w-6" />
            </Link>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t p-4 space-y-4">
            <Link href="/" className="block text-gray-600 hover:text-gray-900 transition">Home</Link>
            <Link href="/about" className="block text-gray-600 hover:text-gray-900 transition">About</Link>
            <Link href="/blogs" className="block text-gray-600 hover:text-gray-900 transition">Blogs</Link>
            <Link href="/chef" className="block text-gray-600 hover:text-gray-900 transition">Chefs</Link>
            <Link href="/contact" className="block text-gray-600 hover:text-gray-900 transition">Contact</Link>
            <Link href="/shop" className="block text-gray-600 hover:text-gray-900 transition">Shop</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
