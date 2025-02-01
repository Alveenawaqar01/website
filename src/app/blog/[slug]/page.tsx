import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";

// ✅ Static Params Generate Karne Ka Function
export async function generateStaticParams() {
  const query = `*[_type == "blogPost"]{ "slug": slug.current }`;
  const slugs = await client.fetch(query);
  
  return slugs.map((post: { slug: string }) => ({ slug: post.slug }));
}

// ✅ TypeScript Interface Define Kiya
interface BlogPostPageProps {
  params: { slug: string };
}

// ✅ BlogPost Fetch Karne Ka Function
async function getBlogPost(slug: string) {
  const query = `*[_type == "blogPost" && slug.current == $slug][0]{
    _id,
    title,
    publishedAt,
    body,
    "image": image.asset->url
  }`;

  const post = await client.fetch(query, { slug });

  if (!post) {
    notFound();
  }

  return post;
}

// ✅ Page Component
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500">
          Published on {new Date(post.publishedAt).toLocaleDateString()}
        </p>
      </header>
      <div className="relative w-full h-64 sm:h-96 mb-8">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="prose prose-lg max-w-none">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}
