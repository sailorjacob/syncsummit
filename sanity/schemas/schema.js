// Main schema configuration for SyncSummit
// This file should be imported into your Sanity Studio's schema configuration

// Document types
import homepage from './homepage'
import post from './post'
import event from './event'
import author from './author'
import speaker from './speaker'
import category from './category'
import course from './course'

// Object types
import blockContent from './blockContent'

export default [
  // Document types
  homepage,
  post,
  event,
  author,
  speaker,
  category,
  course,
  
  // Object types
  blockContent
]

// Additional schemas you'll need to create:

// author.js - For blog post authors
export const authorSchema = {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text'
    }
  ]
}

// speaker.js - For event speakers
export const speakerSchema = {
  name: 'speaker',
  title: 'Speaker',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Job Title',
      type: 'string'
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text'
    },
    {
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url'
    }
  ]
}

// category.js - For blog categories
export const categorySchema = {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}

// course.js - For course content
export const courseSchema = {
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Course Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number'
    },
    {
      name: 'instructor',
      title: 'Instructor',
      type: 'reference',
      to: [{type: 'speaker'}]
    },
    {
      name: 'modules',
      title: 'Course Modules',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'title', type: 'string', title: 'Module Title'},
          {name: 'description', type: 'text', title: 'Module Description'},
          {name: 'duration', type: 'string', title: 'Duration'}
        ]
      }]
    }
  ]
}

// blockContent.js - Rich text editor configuration
export const blockContentSchema = {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'}
      ],
      lists: [{title: 'Bullet', value: 'bullet'}, {title: 'Number', value: 'number'}],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'}
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              }
            ]
          }
        ]
      }
    },
    {
      type: 'image',
      options: {hotspot: true}
    }
  ]
} 