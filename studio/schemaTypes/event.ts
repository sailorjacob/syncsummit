import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          {title: 'Conference', value: 'conference'},
          {title: 'Workshop', value: 'workshop'},
          {title: 'Webinar', value: 'webinar'},
          {title: 'Meetup', value: 'meetup'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Start Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'speakers',
      title: 'Speakers',
      type: 'array',
      of: [{type: 'reference', to: {type: 'speaker'}}],
    }),
    defineField({
      name: 'agenda',
      title: 'Agenda',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'time', title: 'Time', type: 'string'},
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'description', title: 'Description', type: 'text'},
            {name: 'speaker', title: 'Speaker', type: 'reference', to: {type: 'speaker'}},
          ],
        },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      eventType: 'eventType',
      date: 'date',
      media: 'image',
    },
    prepare(selection) {
      const {eventType, date} = selection
      return {
        ...selection,
        subtitle: `${eventType} - ${new Date(date).toLocaleDateString()}`,
      }
    },
  },
}) 