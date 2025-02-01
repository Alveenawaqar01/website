"use client"

import { client } from "@/sanity/lib/client"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

import { FcLike } from "react-icons/fc";
import { MessageSquare, Share2 } from "lucide-react"

interface BlogPost {
  _id: string
  title: string
  slug: string
  publishedAt: string
  excerpt: string
  image: string
}

const BlogCards = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const result = await client.fetch<BlogPost[]>(`
          *[_type == "blogPost"] | order(publishedAt desc) [0...4] {
            _id,
            title,
            "slug": slug.current,
            publishedAt,
            excerpt,
            "image": image.asset->url
          }
        `)
        setBlogPosts(result)
      } catch (error) {
        console.error("Error fetching blog posts:", error)
        setError("Failed to load blog posts. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }
    fetchBlogPosts()
  }, [])

  if (isLoading) {
    return <div className="text-center py-10">Loading blog posts...</div>
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>
  }

  if (blogPosts.length === 0) {
    return <div className="text-center py-10">No blog posts found</div>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {blogPosts.map((post) => (
        <Link key={post._id} href={`/blog/${post.slug}`} className="group">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
            <div className="relative h-48">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 ease-in-out group-hover:opacity-75"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold group-hover:text-blue-500 text-green-900 transition-colors duration-300 ease-in-out">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">{new Date(post.publishedAt).toLocaleDateString()}</p>
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">{post.excerpt}</p>
              
              <div className="flex items-center justify-between mt-3">
                <p className="font-semibold">Learn more</p>
                <div className="flex space-x-2">
                  <Share2 />
                  <MessageSquare />
                  <FcLike className="text-2xl"/>
                </div>
              </div>
            </div>
          </div> 
        </Link>
      ))}
    </div>
  )
}

export default BlogCards