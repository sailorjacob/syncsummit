import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'contentCards',
      title: 'Content Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'description', title: 'Description', type: 'text'},
            {name: 'link', title: 'Link', type: 'url'},
            {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
          ],
        },
      ],
    }),
    defineField({
      name: 'trendingPosts',
      title: 'Trending Posts',
      type: 'array',
      of: [{type: 'reference', to: {type: 'post'}}],
    }),
    defineField({
      name: 'sidebarEvents',
      title: 'Sidebar Events',
      type: 'array',
      of: [{type: 'reference', to: {type: 'event'}}],
    }),
  ],
}) 