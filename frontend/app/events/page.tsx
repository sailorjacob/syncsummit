import Link from 'next/link'
import { getEvents } from '@/lib/queries'

interface Event {
  _id: string;
  title: string;
  slug: { current: string };
  eventType: string;
  date: string;
  endDate?: string;
  location: string;
  isOnline: boolean;
  isInPerson: boolean;
  description?: string;
  registrationLink?: string;
  price?: string;
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

export default async function EventsPage() {
  const events = await getEvents()
  const upcomingEvents = events?.filter((event: Event) => new Date(event.date) > new Date()) || []
  const pastEvents = events?.filter((event: Event) => new Date(event.date) <= new Date()) || []

  return (
    <div className="bg-gray-50 py-12">
      <div className="container">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Events</h1>
        
        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
          
          {upcomingEvents.length > 0 ? (
            <div className="grid gap-8">
              {upcomingEvents.map((event: Event) => (
                <div key={event._id} className="card">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="flex-1 mb-4 md:mb-0 md:mr-8">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-2">
                        {getEventTypeLabel(event.eventType)}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        <Link 
                          href={`/events/${event.slug.current}`}
                          className="hover:text-blue-600"
                        >
                          {event.title}
                        </Link>
                      </h3>
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{formatDate(event.date)}</span>
                        {event.endDate && (
                          <span> - {formatDate(event.endDate)}</span>
                        )}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      {event.description && (
                        <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                      )}
                    </div>
                    <div className="flex flex-col items-start md:items-end">
                      {event.price && (
                        <p className="text-lg font-bold text-gray-900 mb-2">{event.price}</p>
                      )}
                      <div className="flex space-x-3">
                        <Link 
                          href={`/events/${event.slug.current}`}
                          className="btn-secondary"
                        >
                          View Details
                        </Link>
                        {event.registrationLink && (
                          <a 
                            href={event.registrationLink}
                            className="btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Register
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No upcoming events at this time. Check back soon!</p>
          )}
        </div>
        
        {/* Past Events */}
        {pastEvents.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Past Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event: Event) => (
                <Link 
                  key={event._id}
                  href={`/events/${event.slug.current}`}
                  className="card hover:shadow-lg transition-shadow duration-200"
                >
                  <span className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded mb-2">
                    {getEventTypeLabel(event.eventType)}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                  <div className="text-gray-500 text-sm mb-2">
                    {formatDate(event.date)}
                  </div>
                  <div className="text-gray-500 text-sm mb-4">
                    {event.location}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 