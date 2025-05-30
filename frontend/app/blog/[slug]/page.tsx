import Image from 'next/image'
import Link from 'next/link'
import { getBlogPostBySlug } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import PortableText from '@/components/PortableText'

// Use the proper Next.js dynamic route params type
type PageProps = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

export default async function BlogPostPage({ params, searchParams }: PageProps) {
  const post = await getBlogPostBySlug(params.slug)
  
  if (!post) {
    return (
      <div className="container py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Post not found</h1>
        <Link href="/blog" className="text-blue-600 hover:text-blue-800">
          ← Back to blog
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="container">
        <article>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
            ← Back to blog
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          
          <div className="flex items-center mb-8">
            {post.author && (
              <div className="flex items-center mr-6">
                {post.author.image && (
                  <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image 
                      src={urlFor(post.author.image).width(80).height(80).url()}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <span className="text-gray-700">By {post.author.name}</span>
              </div>
            )}
            {post.publishedAt && (
              <span className="text-gray-500">{formatDate(post.publishedAt)}</span>
            )}
          </div>
          
          {post.mainImage && (
            <div className="relative w-full h-96 mb-8">
              <Image 
                src={urlFor(post.mainImage).width(1200).height(600).url()}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
          
          <div className="prose prose-lg max-w-none">
            {post.body && <PortableText value={post.body} />}
          </div>
          
          {post.categories && post.categories.length > 0 && (
            <div className="mt-12 pt-6 border-t border-gray-200">
              <h3 className="text-sm text-gray-500 mb-2">Posted in:</h3>
              <div>
                {post.categories.map((category: string, idx: number) => (
                  <span 
                    key={idx}
                    className="inline-block bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full mr-2"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  )
} 