'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'ANNUAL MEMBERSHIP', href: '/membership' },
    {
      name: 'COURSES',
      dropdown: [
        { name: 'THE SYNC COURSE', href: '/courses/sync-course' },
        { name: 'THE MUSIC, BRANDS & ADS COURSE', href: '/courses/music-brands-ads' },
      ],
    },
    {
      name: 'EVENTS',
      dropdown: [
        { name: '2025 Sync Summit NY and 2026 LA Discount Registration', href: '/events/sync-summit' },
        { name: '2025 AdSync Summit Online Agenda', href: '/events/adsync-summit' },
        { name: '2025 Sync Summit NY + LA Video Archives and Contact Access – $299', href: '/events/video-archives' },
      ],
    },
    {
      name: 'LISTENING SESSIONS',
      dropdown: [
        { name: 'June 29, 2025: JOSH RABINOWITZ', href: '/listening-sessions/josh-rabinowitz' },
      ],
    },
    { name: 'CONSULTING', href: '/consulting' },
    {
      name: 'ARTICLES',
      dropdown: [
        { name: 'The Metadata Style Guide', href: '/articles/metadata-style-guide' },
        { name: 'The Ten Metadata Commandments', href: '/articles/metadata-commandments' },
        { name: 'Sync Cafe', href: '/articles/sync-cafe' },
        { name: 'The Sync Cafe Video Archives', href: '/articles/sync-cafe-archives' },
        {
          name: 'Blog',
          href: '/blog',
          submenu: [
            { name: 'BLOG POST: Always Be Pitching: The Art of Presenting Your Music For Media', href: '/blog/always-be-pitching' },
            { name: 'GETTING THE MOST OUT OF CONFERENCES: A PRIMER', href: '/blog/conference-primer' },
            { name: 'Suno.AI: THIS SHIT\'S BANANAS', href: '/blog/suno-ai' },
            { name: 'Blog Post: A Sync Metadata Tip: How to Organize Your Metadata in the Comments Section of Your MP3s', href: '/blog/metadata-tip' },
            { name: '24 Steps For Sync Success', href: '/blog/24-steps-sync-success' },
          ],
        },
      ],
    },
    { name: 'ABOUT', href: '/about' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              SyncSummit
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 flex items-center">
                      {item.name}
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute left-0 mt-0 w-64 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.dropdown.map((subItem) => (
                        <div key={subItem.name}>
                          {subItem.submenu ? (
                            <div className="relative group/sub">
                              <Link
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                              >
                                {subItem.name}
                              </Link>
                              <div className="absolute left-full top-0 w-64 bg-white shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                                {subItem.submenu.map((nestedItem) => (
                                  <Link
                                    key={nestedItem.name}
                                    href={nestedItem.href}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                                  >
                                    {nestedItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <p className="px-4 py-2 text-sm font-medium text-gray-900">{item.name}</p>
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
} 