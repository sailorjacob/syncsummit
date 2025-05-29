import Link from 'next/link'
import Image from 'next/image'
import { getBlogPosts } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  mainImage?: any;
  author?: { name: string; slug: { current: string } };
  categories?: string[];
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

export default async function BlogPage() {
  const posts = await getBlogPosts(20)

  return (
    <div className="bg-gray-50 py-12">
      <div className="container">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Blog</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts && posts.map((post: BlogPost) => (
            <Link 
              key={post._id} 
              href={`/blog/${post.slug.current}`}
              className="group"
            >
              <div className="card overflow-hidden flex flex-col h-full">
                {post.mainImage && (
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={urlFor(post.mainImage).width(600).height(400).url()}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <div className="mb-2">
                    {post.categories && post.categories.map((category, idx) => (
                      <span 
                        key={idx} 
                        className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded mr-2 mb-2"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                  )}
                  <div className="flex items-center justify-between mt-auto text-sm">
                    {post.author && (
                      <span className="text-gray-600">By {post.author.name}</span>
                    )}
                    {post.publishedAt && (
                      <span className="text-gray-500">{formatDate(post.publishedAt)}</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 