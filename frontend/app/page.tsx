import Link from 'next/link'
import { getHomepage, getBlogPosts } from '@/lib/queries'

interface HomepageSection {
  title: string;
  description: string;
  link: string;
  buttonText?: string;
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
    },
    {
      title: "Sync Summits - Online All The Time",
      description: "Our Sync Summits bring you together with the world's top music makers, technology companies and Music Supervisors to meet, learn and do business. We personally connect you and your music to companies and people that can help you succeed in the business of sync, music and media.",
      link: "/events",
    },
    {
      title: "Sync Summit Consulting",
      description: "Are you an artist, composer, label, publisher, management company, producer, music library, sync agency, tech or service provider looking to prepare, package and present your music to decision makers in TV, film, games, apps, brands and advertising? Then Sync Summit's consulting services can help you access to the tools, best practices and contacts you need to succeed in music licensing and composition.",
      link: "/consulting",
    },
    {
      title: "Sync Summit Intelligence",
      description: "Check out our reports on the industry, key data, and a lot of amazing, free content.",
      link: "/articles",
    },
  ]

  const ctaBoxes: CTABox[] = [
    {
      title: "Register For Our 2025 LA Sync Summit – April 15-16 In-Person + Online",
      buttonText: "REGISTER NOW",
      link: "/events/sync-summit",
      bgColor: "bg-blue-600",
    },
    {
      title: "Register for the adsync summit. Online only April 9-10, In person October 6-7",
      buttonText: "REGISTER NOW",
      link: "/events/adsync-summit",
      bgColor: "bg-purple-600",
    },
    {
      title: "Upcoming Listening Sessions",
      buttonText: "REGISTER NOW",
      link: "/listening-sessions",
      bgColor: "bg-green-600",
    },
  ]

  return (
    <div className="bg-gray-50">
      {/* Trending Section */}
      <div className="bg-yellow-50 py-2">
        <div className="container">
          <div className="flex items-center space-x-2 text-sm">
            <span className="font-bold text-gray-900">TRENDING:</span>
            <div className="flex flex-wrap gap-2">
              {trending.map((item: string, index: number) => (
                <span key={index} className="text-gray-700">
                  {item}
                  {index < trending.length - 1 && <span className="ml-2">|</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {homepage?.membershipCTA?.title || "SYNC SUMMIT ANNUAL MEMBERSHIP = EVERYTHING SYNC SUMMIT AT ONE LOW RATE"}
          </h1>
          <Link href="/membership" className="btn-primary inline-block">
            Learn More About Membership
          </Link>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section: HomepageSection, index: number) => (
              <div key={index} className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-gray-700 mb-6">{section.description}</p>
                <Link href={section.link} className="text-blue-600 hover:text-blue-700 font-medium">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Boxes */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            {ctaBoxes.map((box: CTABox, index: number) => (
              <div key={index} className={`${box.bgColor} text-white p-8 rounded-lg text-center`}>
                <h3 className="text-xl font-bold mb-4">{box.title}</h3>
                <Link href={box.link} className="bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium inline-block">
                  {box.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
