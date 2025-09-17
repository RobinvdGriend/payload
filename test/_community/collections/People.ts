import type { CollectionConfig } from 'payload'

export const People: CollectionConfig = {
  slug: 'people',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'roles',
      type: 'join',
      collection: ['staff-roles', 'student-roles'],
      on: 'person',
    },
  ],
}
