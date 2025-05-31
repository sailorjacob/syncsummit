// Event schema for SyncSummit
export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          {title: 'Sync Summit', value: 'sync-summit'},
          {title: 'AdSync Summit', value: 'adsync-summit'},
          {title: 'Listening Session', value: 'listening-session'},
          {title: 'Course', value: 'course'},
          {title: 'Webinar', value: 'webinar'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      title: 'Event Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
      description: 'For multi-day events'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {
          name: 'venue',
          title: 'Venue Name',
          type: 'string'
        },
        {
          name: 'city',
          title: 'City',
          type: 'string'
        },
        {
          name: 'state',
          title: 'State/Province',
          type: 'string'
        },
        {
          name: 'isOnline',
          title: 'Online Event',
          type: 'boolean',
          initialValue: false
        },
        {
          name: 'isHybrid',
          title: 'Hybrid Event (In-Person + Online)',
          type: 'boolean',
          initialValue: false
        }
      ]
    },
    {
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url',
      validation: Rule => Rule.required()
    },
    {
      name: 'price',
      title: 'Price',
      type: 'object',
      fields: [
        {
          name: 'regular',
          title: 'Regular Price',
          type: 'number'
        },
        {
          name: 'earlyBird',
          title: 'Early Bird Price',
          type: 'number'
        },
        {
          name: 'member',
          title: 'Member Price',
          type: 'number'
        }
      ]
    },
    {
      name: 'description',
      title: 'Event Description',
      type: 'text',
      rows: 4
    },
    {
      name: 'speakers',
      title: 'Speakers',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'speaker'}]
      }]
    },
    {
      name: 'agenda',
      title: 'Agenda',
      type: 'blockContent'
    },
    {
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'image',
      location: 'location.city'
    },
    prepare(selection) {
      const {title, date, location} = selection
      const dateFormatted = new Date(date).toLocaleDateString()
      return {
        title,
        subtitle: `${dateFormatted} - ${location || 'Online'}`
      }
    }
  }
} 