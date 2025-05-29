export default {
  name: 'course',
  title: 'Courses',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Course Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text'
    },
    {
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string'
    },
    {
      name: 'instructors',
      title: 'Instructors',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'speaker'}]}]
    },
    {
      name: 'modules',
      title: 'Course Modules',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Module Title',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Module Description',
              type: 'text'
            },
            {
              name: 'duration',
              title: 'Duration',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'enrollmentLink',
      title: 'Enrollment Link',
      type: 'url'
    },
    {
      name: 'featured',
      title: 'Featured Course',
      type: 'boolean',
      initialValue: false
    }
  ]
} 