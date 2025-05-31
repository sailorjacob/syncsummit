import Link from 'next/link'
import { getHomepage, getBlogPosts } from '@/lib/queries'
import AnimatedHero from '@/components/ui/AnimatedHero'
import ScrollAnimationWrapper from '@/components/ui/ScrollAnimationWrapper'
import { Sparkles, Calendar, Headphones, FileCode, Lightbulb, Users } from 'lucide-react'

interface HomepageSection {
  title: string;
  description: string;
  link: string;
  buttonText?: string;
  icon?: string;
}

interface CTABox {
  title: string;
  buttonText: string;
  link: string;
  bgColor: string;
}

interface BlogPost {
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  mainImage?: any;
  author?: { name: string; slug: { current: string } };
  categories?: string[];
  featured?: boolean;
  trending?: boolean;
}

export default async function Home() {
  // Fetch data from Sanity
  const homepage = await getHomepage()
  const trendingPosts = await getBlogPosts(4)
  
  // Fallback content if no data is available
  const trending = trendingPosts?.length > 0 
    ? trendingPosts.map((post: BlogPost) => post.title) 
    : [
        "BLOG POST: Always Be Pitching: The Art of Presenting Yo...",
        "Blog Post: Launch Of The Spanish Speaking Music Supervi...",
        "Janet Wade, Music Licensing and Clearance, Turner",
        "Music Listening Sessions for Winter 2025: Connect Your ...",
      ]

  const sections: HomepageSection[] = homepage?.sections || [
    {
      title: "Sync Summit Courses",
      description: "If you want to do a deep dive into how to work in the business of music and media, our courses are a great way to harness the tools you need to succeed in Sync. Taught by industry experts who are creators, music supervisors and sync agents, our course give you first-hand knowledge you can use for your career.",
      link: "/courses",
      icon: "courses"
    },
    {
      title: "Sync Summits - Online All The Time",
      description: "Our Sync Summits bring you together with the world's top music makers, technology companies and Music Supervisors to meet, learn and do business. We personally connect you and your music to companies and people that can help you succeed in the business of sync, music and media.",
      link: "/events",
      icon: "events"
    },
    {
      title: "Sync Summit Consulting",
      description: "Are you an artist, composer, label, publisher, management company, producer, music library, sync agency, tech or service provider looking to prepare, package and present your music to decision makers in TV, film, games, apps, brands and advertising? Then Sync Summit's consulting services can help you access to the tools, best practices and contacts you need to succeed in music licensing and composition.",
      link: "/consulting",
      icon: "consulting"
    },
    {
      title: "Sync Summit Intelligence",
      description: "Check out our reports on the industry, key data, and a lot of amazing, free content.",
      link: "/articles",
      icon: "intelligence"
    },
  ]

  const ctaBoxes: CTABox[] = [
    {
      title: "Register For Our 2025 LA Sync Summit – April 15-16 In-Person + Online",
      buttonText: "REGISTER NOW",
      link: "/events/sync-summit",
      bgColor: "bg-primary-600",
    },
    {
      title: "Register for the adsync summit. Online only April 9-10, In person October 6-7",
      buttonText: "REGISTER NOW",
      link: "/events/adsync-summit",
      bgColor: "bg-secondary-600",
    },
    {
      title: "Upcoming Listening Sessions",
      buttonText: "REGISTER NOW",
      link: "/listening-sessions",
      bgColor: "bg-green-600",
    },
  ]

  // Icon mapping
  const getIcon = (iconName: string | undefined) => {
    switch(iconName) {
      case 'courses': return <FileCode className="w-12 h-12 text-primary-500" />;
      case 'events': return <Calendar className="w-12 h-12 text-primary-500" />;
      case 'consulting': return <Lightbulb className="w-12 h-12 text-primary-500" />;
      case 'intelligence': return <Sparkles className="w-12 h-12 text-primary-500" />;
      default: return <Headphones className="w-12 h-12 text-primary-500" />;
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Trending Section */}
      <div className="bg-dark-800 py-2 text-white">
        <div className="container">
          <div className="flex items-center space-x-2 text-sm overflow-x-auto whitespace-nowrap">
            <span className="font-bold text-secondary-400 flex items-center">
              <Sparkles className="w-4 h-4 mr-1" /> TRENDING:
            </span>
            <div className="flex flex-wrap gap-2">
              {trending.map((item: string, index: number) => (
                <span key={index} className="text-gray-300 hover:text-white transition-colors">
                  {item}
                  {index < trending.length - 1 && <span className="ml-2 text-gray-500">|</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <AnimatedHero 
        title={homepage?.membershipCTA?.title || "SYNC SUMMIT ANNUAL MEMBERSHIP"}
        subtitle={homepage?.membershipCTA?.subtitle || "EVERYTHING SYNC SUMMIT AT ONE LOW RATE"}
        ctaText="Learn More About Membership"
        ctaLink="/membership"
      />

      {/* Main Sections */}
      <section className="py-24">
        <div className="container">
          <ScrollAnimationWrapper animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with the world's top music supervisors, creators, and industry professionals
            </p>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 gap-10">
            {sections.map((section: HomepageSection, index: number) => (
              <ScrollAnimationWrapper 
                key={index} 
                animation={index % 2 === 0 ? "fade-right" : "fade-left"} 
                delay={index * 0.1}
                className="relative"
              >
                <div className="card hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                       style={{
                         background: 'linear-gradient(45deg, #0ea5e9, #d946ef)',
                         transform: 'scale(1.02)',
                         filter: 'blur(8px)',
                         zIndex: -1
                       }} />
                  
                  <div className="flex items-start p-8">
                    <div className="mr-6">
                      {getIcon(section.icon)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {section.description}
                      </p>
                      <Link 
                        href={section.link} 
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
                      >
                        Learn More
                        <svg 
                          className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Boxes */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <ScrollAnimationWrapper animation="fade-up" className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with industry professionals at our upcoming events
            </p>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-3 gap-6">
            {ctaBoxes.map((box: CTABox, index: number) => (
              <ScrollAnimationWrapper 
                key={index} 
                animation="zoom" 
                delay={index * 0.15}
              >
                <div className={`${box.bgColor} text-white p-8 rounded-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col`}>
                  <h3 className="text-xl font-bold mb-6">{box.title}</h3>
                  <div className="mt-auto">
                    <Link 
                      href={box.link} 
                      className="bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200 font-medium inline-flex items-center group"
                    >
                      {box.buttonText}
                      <svg 
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container">
          <ScrollAnimationWrapper animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">What Our Members Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from professionals who have found success through our platform
            </p>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimationWrapper animation="fade-up" delay={0.1}>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <svg className="w-10 h-10 text-primary-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
                <p className="text-gray-700 mb-6 italic">
                  "The connections I made through Sync Summit led directly to multiple placements in major TV shows. The ROI has been incredible."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-700 font-bold">JD</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">James Doe</h4>
                    <p className="text-gray-600 text-sm">Composer & Producer</p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fade-up" delay={0.2}>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <svg className="w-10 h-10 text-primary-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
                <p className="text-gray-700 mb-6 italic">
                  "The courses and exclusive content have completely transformed how I approach music supervision. Worth every penny."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-secondary-700 font-bold">AS</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Amanda Smith</h4>
                    <p className="text-gray-600 text-sm">Music Supervisor</p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fade-up" delay={0.3}>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <svg className="w-10 h-10 text-primary-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804 .167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804 .167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
                <p className="text-gray-700 mb-6 italic">
                  "The annual membership is a no-brainer. The networking alone has opened so many doors for our music publishing business."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-700 font-bold">TJ</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Tom Johnson</h4>
                    <p className="text-gray-600 text-sm">Music Publisher</p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimationWrapper animation="zoom">
              <h2 className="text-4xl font-bold mb-6 font-display">Ready to Elevate Your Music Career?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join Sync Summit today and connect with the world's top music supervisors, creators, and industry professionals.
              </p>
              <Link 
                href="/membership" 
                className="bg-white text-primary-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 hover:shadow-xl transition-all duration-300 inline-flex items-center group"
        >
                Join Now
                <svg 
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>
    </div>
  )
}
