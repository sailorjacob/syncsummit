import Link from 'next/link'
import Image from 'next/image'
import { getEventBySlug } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import PortableText from '@/components/PortableText'

interface EventParams {
  params: {
    slug: string
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

function getEventTypeLabel(eventType: string) {
  switch (eventType) {
    case 'sync-summit-ny':
      return 'Sync Summit NY';
    case 'sync-summit-la':
      return 'Sync Summit LA';
    case 'adsync-summit':
      return 'AdSync Summit';
    case 'listening-session':
      return 'Listening Session';
    default:
      return 'Event';
  }
}

export default async function EventPage({ params }: EventParams) {
  const event = await getEventBySlug(params.slug)
  
  if (!event) {
    return (
      <div className="container py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Event not found</h1>
        <Link href="/events" className="text-blue-600 hover:text-blue-800">
          ← Back to events
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="container">
        <Link href="/events" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
          ← Back to events
        </Link>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-2">
            {getEventTypeLabel(event.eventType)}
          </span>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h1>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center text-gray-600 mb-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{formatDate(event.date)}</span>
                {event.endDate && (
                  <span> - {formatDate(event.endDate)}</span>
                )}
              </div>
              
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{event.location}</span>
                {event.isOnline && event.isInPerson && (
                  <span className="ml-2">(In-person & Online)</span>
                )}
                {event.isOnline && !event.isInPerson && (
                  <span className="ml-2">(Online only)</span>
                )}
                {!event.isOnline && event.isInPerson && (
                  <span className="ml-2">(In-person only)</span>
                )}
              </div>
            </div>
            
            <div className="text-center">
              {event.price && (
                <p className="text-2xl font-bold text-gray-900 mb-4">{event.price}</p>
              )}
              {event.registrationLink && (
                <a 
                  href={event.registrationLink}
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>
              )}
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">About this Event</h2>
            {event.description && (
              <p className="text-gray-700 mb-4">{event.description}</p>
            )}
            {event.longDescription && (
              <div className="prose max-w-none">
                <PortableText value={event.longDescription} />
              </div>
            )}
          </div>
          
          {event.agenda && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Agenda</h2>
              <div className="prose max-w-none">
                <PortableText value={event.agenda} />
              </div>
            </div>
          )}
          
          {event.speakers && event.speakers.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Speakers</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {event.speakers.map((speaker: any) => (
                  <div key={speaker._id} className="flex items-start space-x-4">
                    {speaker.photo && (
                      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image 
                          src={urlFor(speaker.photo).width(80).height(80).url()}
                          alt={speaker.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-gray-900">{speaker.name}</h3>
                      {speaker.title && (
                        <p className="text-gray-600 text-sm">{speaker.title}</p>
                      )}
                      {speaker.company && (
                        <p className="text-gray-600 text-sm">{speaker.company}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Video Archives */}
        {event.videoArchiveAccess && (
          <div className="bg-gray-100 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Video Archives Available</h2>
            <p className="text-gray-700 mb-4">
              Access to video archives from this event is included with your registration 
              or available for purchase separately.
            </p>
            <Link href="/events/video-archives" className="btn-secondary">
              Learn More
            </Link>
          </div>
        )}
      </div>
    </div>
  )
} 