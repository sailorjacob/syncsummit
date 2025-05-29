export default {
  name: 'speaker',
  title: 'Speakers',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      }
    },
    {
      name: 'title',
      title: 'Title/Position',
      type: 'string'
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string'
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text'
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url'
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url'
        },
        {
          name: 'website',
          title: 'Website',
          type: 'url'
        }
      ]
    },
    {
      name: 'speakerType',
      title: 'Speaker Type',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Music Supervisor', value: 'music-supervisor'},
          {title: 'Composer', value: 'composer'},
          {title: 'Publisher', value: 'publisher'},
          {title: 'Sync Agent', value: 'sync-agent'},
          {title: 'Industry Expert', value: 'industry-expert'}
        ]
      }
    }
  ]
} 