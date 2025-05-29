import Link from 'next/link'

export default function Footer() {
  const archives = [
    { date: 'May 2025', href: '#' },
    { date: 'January 2025', href: '#' },
    { date: 'December 2024', href: '#' },
    { date: 'November 2024', href: '#' },
    { date: 'September 2024', href: '#' },
    { date: 'August 2024', href: '#' },
    { date: 'July 2024', href: '#' },
    { date: 'June 2024', href: '#' },
    { date: 'May 2024', href: '#' },
    { date: 'April 2024', href: '#' },
    { date: 'March 2024', href: '#' },
    { date: 'February 2024', href: '#' },
  ]

  const categories = [
    'Guest Post',
    'Industry',
    'Interviews',
    'Podcast',
    'Sponsors',
    'Sync Deals',
    'Uncategorized',
  ]

  const recentPosts = [
    { title: 'Links to LA Summit Video Archives', href: '#' },
    { title: 'LA Sync Summit Disco Upload Links', href: '#' },
  ]

  return (
    <footer className="bg-gray-100 mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Search */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Search</h3>
            <form className="relative">
              <input
                type="search"
                placeholder="Search for:"
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Recent Posts</h3>
            <ul className="space-y-2">
              {recentPosts.map((post) => (
                <li key={post.title}>
                  <Link href={post.href} className="text-gray-600 hover:text-blue-600 text-sm">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Archives */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Archives</h3>
            <ul className="space-y-1 max-h-64 overflow-y-auto">
              {archives.map((archive) => (
                <li key={archive.date}>
                  <Link href={archive.href} className="text-gray-600 hover:text-blue-600 text-sm">
                    {archive.date}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Meta Links */}
        <div className="mt-8 pt-8 border-t border-gray-300">
          <h3 className="font-bold text-gray-900 mb-4">Meta</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">Log in</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">Entries feed</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">Comments feed</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">WordPress.org</Link></li>
          </ul>
        </div>

        {/* Advertisement */}
        <div className="mt-8 pt-8 border-t border-gray-300">
          <p className="text-gray-600 text-sm">Advertisement</p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-300 text-center">
          <p className="text-gray-600 text-sm">
            Copyright © {new Date().getFullYear()} Sync Summit. All rights reserved. 
            Site designed and maintained by Kasan Creative
          </p>
        </div>
      </div>
    </footer>
  )
} 