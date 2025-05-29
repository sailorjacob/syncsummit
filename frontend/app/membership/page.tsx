import Link from 'next/link'

export default function MembershipPage() {
  const benefits = [
    "Access to all Sync Summit events online",
    "Exclusive video archives from past events",
    "Monthly listening sessions with industry leaders",
    "All courses included at no extra charge",
    "Direct contact access to music supervisors",
    "Priority consulting services",
    "Member-only networking events",
    "Industry reports and insights",
  ]

  return (
    <div className="bg-gray-50 py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            SYNC SUMMIT ANNUAL MEMBERSHIP
          </h1>
          <p className="text-xl text-gray-700 text-center mb-12">
            EVERYTHING SYNC SUMMIT AT ONE LOW RATE
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900 mb-2">$299/year</p>
              <p className="text-gray-600 mb-6">Save over $500 compared to individual purchases</p>
              <Link href="#" className="btn-primary inline-block">
                Become a Member
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Connect</h3>
              <p className="text-gray-700">Network with industry professionals and build lasting relationships</p>
            </div>
            <div className="card text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Learn</h3>
              <p className="text-gray-700">Access expert-led courses and workshops to advance your career</p>
            </div>
            <div className="card text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Grow</h3>
              <p className="text-gray-700">Get your music placed and expand your opportunities in sync</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 