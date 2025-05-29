import Link from 'next/link'
import Image from 'next/image'
import { getCourses } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'

interface Instructor {
  name: string;
  title?: string;
  company?: string;
  photo?: any;
}

interface Course {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  price?: string;
  featured?: boolean;
  enrollmentLink?: string;
  instructors?: Instructor[];
}

export default async function CoursesPage() {
  const courses = await getCourses()

  return (
    <div className="bg-gray-50 py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Courses</h1>
          
          <div className="mb-12">
            <p className="text-xl text-gray-700 mb-6">
              If you want to do a deep dive into how to work in the business of music and media, 
              our courses are a great way to harness the tools you need to succeed in Sync. 
              Taught by industry experts who are creators, music supervisors and sync agents, 
              our courses give you first-hand knowledge you can use for your career.
            </p>
          </div>
          
          {courses && courses.length > 0 ? (
            <div className="space-y-12">
              {courses.map((course: Course) => (
                <div key={course._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h2>
                    
                    {course.description && (
                      <p className="text-gray-700 mb-6">{course.description}</p>
                    )}
                    
                    {course.instructors && course.instructors.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Instructors</h3>
                        <div className="flex flex-wrap gap-4">
                          {course.instructors.map((instructor, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              {instructor.photo && (
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                  <Image 
                                    src={urlFor(instructor.photo).width(80).height(80).url()}
                                    alt={instructor.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              )}
                              <div>
                                <p className="font-medium text-gray-900">{instructor.name}</p>
                                {instructor.title && (
                                  <p className="text-sm text-gray-600">
                                    {instructor.title}
                                    {instructor.company && `, ${instructor.company}`}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
                      <div>
                        {course.price && (
                          <p className="text-2xl font-bold text-gray-900">{course.price}</p>
                        )}
                      </div>
                      
                      <div className="flex space-x-4">
                        <Link 
                          href={`/courses/${course.slug.current}`}
                          className="btn-secondary"
                        >
                          Learn More
                        </Link>
                        
                        {course.enrollmentLink && (
                          <a 
                            href={course.enrollmentLink}
                            className="btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Enroll Now
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No courses available at this time.</p>
          )}
          
          {/* Annual Membership Promotion */}
          <div className="mt-16 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Access All Courses with Annual Membership
            </h2>
            <p className="text-gray-700 mb-4">
              Get unlimited access to all our courses, events, listening sessions, 
              and exclusive content with our annual membership.
            </p>
            <Link href="/membership" className="btn-primary">
              Learn About Membership
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 