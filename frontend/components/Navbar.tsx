'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

interface NavItem {
  title: string
  path: string
  submenu?: NavItem[]
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const pathname = usePathname()

  const navItems: NavItem[] = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'Courses',
      path: '/courses',
      submenu: [
        { title: 'Music Licensing', path: '/courses/music-licensing' },
        { title: 'Music Supervision', path: '/courses/music-supervision' },
        { title: 'Artist Development', path: '/courses/artist-development' }
      ]
    },
    {
      title: 'Events',
      path: '/events',
      submenu: [
        { title: 'Sync Summit', path: '/events/sync-summit' },
        { title: 'AdSync Summit', path: '/events/adsync-summit' },
        { title: 'Listening Sessions', path: '/events/listening-sessions' }
      ]
    },
    {
      title: 'Consulting',
      path: '/consulting'
    },
    {
      title: 'Articles',
      path: '/articles'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold font-display"
            >
              <span className={`transition-colors duration-300 ${scrolled ? 'text-primary-600' : 'text-white'}`}>
                SYNC
              </span>
              <span className={`transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                SUMMIT
              </span>
            </motion.div>
            {!scrolled && (
              <motion.div 
                className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-primary-500 to-secondary-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            )}
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <div key={item.path} className="relative group" onMouseEnter={() => setHoveredItem(item.path)} onMouseLeave={() => setHoveredItem(null)}>
              <Link 
                href={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors relative ${
                  pathname === item.path 
                    ? scrolled ? 'text-primary-600' : 'text-white font-bold' 
                    : scrolled ? 'text-gray-800 hover:text-primary-600' : 'text-white/90 hover:text-white'
                }`}
              >
                <span className="relative z-10 flex items-center">
                  {item.title}
                  {item.submenu && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </span>
                
                {/* Hover effect */}
                {hoveredItem === item.path && (
                  <motion.span 
                    layoutId="navHover"
                    className={`absolute inset-0 rounded-md z-0 ${
                      scrolled ? 'bg-gray-100' : 'bg-white/10'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                
                {/* Active indicator */}
                {pathname === item.path && (
                  <motion.span 
                    layoutId="navActive"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
              
              {/* Submenu */}
              {item.submenu && (
                <AnimatePresence>
                  {hoveredItem === item.path && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-1 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                    >
                      <div className="py-1">
                        {item.submenu.map((subItem) => (
                          <Link 
                            key={subItem.path} 
                            href={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          
          <Link 
            href="/membership" 
            className={`ml-4 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 
            ${scrolled 
              ? 'bg-primary-600 hover:bg-primary-700 text-white hover:shadow-md' 
              : 'bg-white hover:bg-gray-100 text-primary-700'
            }`}
          >
            Join Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden z-50 flex items-center justify-center ${
            isOpen ? 'text-white' : scrolled ? 'text-gray-900' : 'text-white'
          }`}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-gradient-to-br from-primary-600 to-secondary-800 flex flex-col items-center justify-center z-40 md:hidden"
            >
              <motion.nav
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="flex flex-col items-center space-y-6 text-white"
              >
                {navItems.map((item) => (
                  <div key={item.path}>
                    <Link 
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-2xl font-medium ${pathname === item.path ? 'text-white font-bold' : 'text-white/90'}`}
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
                
                <Link 
                  href="/membership" 
                  onClick={() => setIsOpen(false)}
                  className="mt-6 px-8 py-3 bg-white text-primary-700 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  Join Now
                </Link>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
} 