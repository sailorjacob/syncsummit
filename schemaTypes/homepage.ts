export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'SyncSummit'
    },
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'headline',
          title: 'Headline',
          type: 'string'
        },
        {
          name: 'subheadline',
          title: 'Subheadline',
          type: 'text'
        }
      ]
    },
    {
      name: 'membershipCTA',
      title: 'Membership CTA',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'SYNC SUMMIT ANNUAL MEMBERSHIP = EVERYTHING SYNC SUMMIT AT ONE LOW RATE'
        },
        {
          name: 'link',
          title: 'Link',
          type: 'string'
        }
      ]
    },
    {
      name: 'sections',
      title: 'Homepage Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Section Title',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text'
            },
            {
              name: 'link',
              title: 'Link',
              type: 'string'
            },
            {
              name: 'buttonText',
              title: 'Button Text',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'trending',
      title: 'Trending Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'blogPost'}, {type: 'article'}]
        }
      ]
    }
  ]
} 