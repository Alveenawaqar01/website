"use client";

import Link from "next/link";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCartStore } from "../../../store/cardstore";
import CartSearch from "./cardsearch";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 border-b-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Image */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo1.jpg"
              alt="Logo"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
            <span className="text-2xl font-bold text-gray-900">Elite Food</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {[
              { name: "Home", link: "/" },
              { name: "Menu", link: "/menu" },
              { name: "About", link: "/about" },
              { name: "Blogs", link: "/blogs" },
              { name: "chef", link: "/chef" },
              { name: "Shop", link: "/shop" },
              { name: "Contact", link: "/contact" }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-gray-900 hover:text-gray-900 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search Bar - Hidden on Mobile */}
          <div className="hidden md:flex flex-1 max-w-xs mx-4 md:max-w-sm">
            <CartSearch />
          </div>

          {/* Cart & User Icons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="relative p-2 text-gray-900 hover:text-gray-900 transition"
            >
              <ShoppingCart className="h-6 w-6" />
              {mounted && totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link
              href="/"
              className="p-2 text-gray-900 hover:text-gray-900 transition"
            >
              <User className="h-6 w-6" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t p-4 space-y-4">
            {[
              { name: "Home", link: "/" },
              { name: "Menu", link: "/menu" },
              { name: "About", link: "/about" },
              { name: "Blogs", link: "/blogs" },
              { name: "chef", link: "/chef" },
              { name: "Shop", link: "/shop" },
              { name: "Contact", link: "/contact" }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="block text-gray-600 hover:text-gray-900 transition"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Search Bar */}
            <div className="mt-4">
              <CartSearch />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
