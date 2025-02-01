"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkAuth = () => {
      const auth = localStorage.getItem("adminAuthenticated")
      if (auth !== "true" && pathname !== "/admin/login") {
        router.push("/admin/login")
      } else {
        setIsAuthenticated(true)
      }
    }

    checkAuth()
  }, [pathname, router])

  if (!isAuthenticated && pathname !== "/admin/login") {
    return null
  }

  if (pathname === "/admin/login") {
    return <>{children}</>
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-black text-white p-6">
        <h2 className="text-2xl font-semibold mb-6">Admin Panel</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link href="/admin/dashboard" className="block py-2 px-4 rounded hover:bg-indigo-600">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/admin/orders" className="block py-2 px-4 rounded hover:bg-indigo-600">
                View Orders
              </Link>
            </li>
            <li>
              <Link href="/admin/manage-orders" className="block py-2 px-4 rounded hover:bg-indigo-600">
                Manage Orders
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  localStorage.removeItem("adminAuthenticated")
                  router.push("/admin/login")
                }}
                className="block w-full text-left py-2 px-4 rounded hover:bg-indigo-600"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-10 overflow-y-auto">{children}</main>
    </div>
  )
}

