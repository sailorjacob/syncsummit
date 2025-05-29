export default {
  name: 'article',
  title: 'Articles',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
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
      name: 'articleType',
      title: 'Article Type',
      type: 'string',
      options: {
        list: [
          {title: 'Metadata Guide', value: 'metadata-guide'},
          {title: 'Sync Cafe', value: 'sync-cafe'},
          {title: 'Resource', value: 'resource'},
          {title: 'Guide', value: 'guide'}
        ]
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true}
        },
        {
          type: 'object',
          name: 'callout',
          title: 'Callout Box',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'text'
            },
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: ['info', 'warning', 'tip', 'important']
              }
            }
          ]
        }
      ]
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Used for ordering articles in navigation'
    }
  ]
} 