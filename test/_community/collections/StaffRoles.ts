import type { CollectionConfig } from 'payload'

export const StaffRoles: CollectionConfig = {
  slug: 'staff-roles',
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
      name: 'role',
      type: 'text',
    },
  ],
}
