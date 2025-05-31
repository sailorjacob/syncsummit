// Homepage schema for SyncSummit
export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'The main title shown in the hero section',
      validation: Rule => Rule.required()
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      description: 'The subtitle shown below the hero title'
    },
    {
      name: 'contentCards',
      title: 'Content Cards',
      type: 'array',
      description: 'The four main content cards on the homepage',
      validation: Rule => Rule.required().min(4).max(4),
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            type: 'string',
            title: 'Card Title',
            validation: Rule => Rule.required()
          },
          {
            name: 'description',
            type: 'text',
            title: 'Card Description',
            validation: Rule => Rule.required()
          },
          {
            name: 'icon',
            type: 'string',
            title: 'Icon Class',
            description: 'Font Awesome icon class (e.g., fa-volume-up)',
            validation: Rule => Rule.required()
          }
        ]
      }]
    },
    {
      name: 'trendingPosts',
      title: 'Trending Posts',
      type: 'array',
      description: 'Select posts to show in the trending bar',
      of: [{
        type: 'reference',
        to: [{type: 'post'}]
      }]
    },
    {
      name: 'sidebarEvents',
      title: 'Sidebar Events',
      type: 'array',
      description: 'Events shown in the sidebar registration boxes',
      of: [{
        type: 'reference',
        to: [{type: 'event'}]
      }]
    }
  ],
  preview: {
    select: {
      title: 'heroTitle',
      subtitle: 'heroSubtitle'
    }
  }
} 