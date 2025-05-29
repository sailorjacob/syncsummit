import { client } from './sanity'

// Homepage queries
export async function getHomepage() {
  return client.fetch(`
    *[_type == "homepage"][0]{
      title,
      hero,
      membershipCTA,
      sections,
      trending[]->{
        title,
        slug,
        "type": _type
      }
    }
  `)
}

// Event queries
export async function getEvents(limit = 10) {
  return client.fetch(`
    *[_type == "event"] | order(date desc)[0...${limit}]{
      _id,
      title,
      slug,
      eventType,
      date,
      endDate,
      location,
      isOnline,
      isInPerson,
      description,
      registrationLink,
      price
    }
  `)
}

export async function getEventBySlug(slug: string) {
  return client.fetch(`
    *[_type == "event" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      eventType,
      date,
      endDate,
      location,
      isOnline,
      isInPerson,
      description,
      longDescription,
      registrationLink,
      price,
      agenda,
      speakers[]->{
        name,
        slug,
        title,
        company,
        bio,
        photo
      },
      videoArchiveAccess
    }
  `, { slug })
}

// Course queries
export async function getCourses() {
  return client.fetch(`
    *[_type == "course"]{
      _id,
      title,
      slug,
      description,
      price,
      featured,
      enrollmentLink,
      instructors[]->{
        name,
        title,
        company,
        photo
      }
    }
  `)
}

export async function getCourseBySlug(slug: string) {
  return client.fetch(`
    *[_type == "course" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      description,
      fullDescription,
      price,
      instructors[]->{
        name,
        slug,
        title,
        company,
        bio,
        photo
      },
      modules,
      enrollmentLink
    }
  `, { slug })
}

// Blog post queries
export async function getBlogPosts(limit = 10) {
  return client.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc)[0...${limit}]{
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage,
      "author": author->{name, slug},
      "categories": categories[]->title,
      featured,
      trending
    }
  `)
}

export async function getBlogPostBySlug(slug: string) {
  return client.fetch(`
    *[_type == "blogPost" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      publishedAt,
      mainImage,
      body,
      "author": author->{name, slug, bio, image},
      "categories": categories[]->title
    }
  `, { slug })
}

// Article queries
export async function getArticles() {
  return client.fetch(`
    *[_type == "article"] | order(order asc){
      _id,
      title,
      slug,
      articleType,
      description
    }
  `)
}

export async function getArticleBySlug(slug: string) {
  return client.fetch(`
    *[_type == "article" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      articleType,
      description,
      content
    }
  `, { slug })
}

// Membership query
export async function getMembership() {
  return client.fetch(`
    *[_type == "membership"][0]{
      title,
      tagline,
      price,
      description,
      benefits,
      includedItems,
      signupLink
    }
  `)
}

// Site settings query
export async function getSiteSettings() {
  return client.fetch(`
    *[_type == "siteSettings"][0]{
      title,
      description,
      logo,
      footerText,
      footerCredits,
      socialLinks,
      contactInfo
    }
  `)
}

// Navigation query
export async function getNavigation() {
  return client.fetch(`
    *[_type == "navigation"][0]{
      title,
      items
    }
  `)
} 