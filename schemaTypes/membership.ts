export default {
  name: 'membership',
  title: 'Membership',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Annual Membership'
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'EVERYTHING SYNC SUMMIT AT ONE LOW RATE'
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Benefit Title',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Benefit Description',
              type: 'text'
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Icon name or emoji'
            }
          ]
        }
      ]
    },
    {
      name: 'includedItems',
      title: 'What\'s Included',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'signupLink',
      title: 'Signup Link',
      type: 'url'
    },
    {
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: true
    }
  ]
} 