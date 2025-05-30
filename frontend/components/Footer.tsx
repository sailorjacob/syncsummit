'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, ArrowRight } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // This would normally call an API to handle the subscription
      console.log('Subscribing:', email)
      setSubscribed(true)
      setEmail('')
    }
  }

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Guides', href: '/guides' },
        { name: 'Free Resources', href: '/resources' },
        { name: 'FAQ', href: '/faq' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Courses', href: '/courses' },
        { name: 'Events', href: '/events' },
        { name: 'Consulting', href: '/consulting' },
        { name: 'Membership', href: '/membership' }
      ]
    }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, href: 'https://facebook.com' },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com' },
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com' },
    { name: 'YouTube', icon: <Youtube className="h-5 w-5" />, href: 'https://youtube.com' }
  ]

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark-900 to-black"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}></div>
      </div>
      
      <div className="relative container pt-20 pb-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Company info column */}
          <div className="md:col-span-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Link href="/" className="flex items-center mb-6">
                <span className="text-3xl font-bold font-display">
                  <span className="text-primary-400">SYNC</span>
                  <span>SUMMIT</span>
                </span>
              </Link>
              
              <p className="text-gray-400 mb-8 max-w-md">
                Connecting music creators and supervisors to help bring music and media together in harmony.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ y: -3 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Footer links */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerLinks.map((column, columnIndex) => (
              <motion.div 
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * columnIndex }}
              >
                <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <motion.li 
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.05 * linkIndex + 0.2 * columnIndex }}
                    >
                      <Link 
                        href={link.href} 
                        className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest news and opportunities.
              </p>
              
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="relative">
                  <div className="flex items-center overflow-hidden rounded-full bg-dark-700 focus-within:ring-2 focus-within:ring-primary-500 transition-all duration-300">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="w-full bg-transparent py-3 pl-4 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute right-1 rounded-full bg-primary-600 p-2 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-dark-800"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-lg bg-primary-900/30 border border-primary-800 text-primary-200"
                >
                  <p>Thanks for subscribing! 🎉</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <motion.div 
          className="pt-12 mt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Sync Summit. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-gray-300">Cookie Policy</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 