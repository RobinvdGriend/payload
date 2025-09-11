import type { CollectionConfig } from 'payload'

export const StudentRoles: CollectionConfig = {
  slug: 'student-roles',
  fields: [
    {
      name: 'department',
      type: 'relationship',
      relationTo: 'departments',
    },
    {
      name: 'person',
      type: 'relationship',
      relationTo: 'people',
    },
    {
      name: 'graduationYear',
      type: 'number',
    },
  ],
}
