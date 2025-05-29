export default {
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Event Title',
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
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          {title: 'Sync Summit NY', value: 'sync-summit-ny'},
          {title: 'Sync Summit LA', value: 'sync-summit-la'},
          {title: 'AdSync Summit', value: 'adsync-summit'},
          {title: 'Listening Session', value: 'listening-session'}
        ]
      }
    },
    {
      name: 'date',
      title: 'Event Date',
      type: 'datetime'
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'datetime'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string'
    },
    {
      name: 'isOnline',
      title: 'Is Online?',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'isInPerson',
      title: 'Is In Person?',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'longDescription',
      title: 'Long Description',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url'
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string'
    },
    {
      name: 'agenda',
      title: 'Agenda',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'speakers',
      title: 'Speakers',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'speaker'}]}]
    },
    {
      name: 'videoArchiveAccess',
      title: 'Video Archive Access',
      type: 'boolean',
      initialValue: false
    }
  ]
} 