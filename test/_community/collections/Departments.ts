import type { CollectionConfig } from 'payload'

export const Departments: CollectionConfig = {
  slug: 'departments',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}
