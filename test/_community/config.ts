import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { fileURLToPath } from 'node:url'
import path from 'path'

import { buildConfigWithDefaults } from '../buildConfigWithDefaults.js'
import { devUser } from '../credentials.js'
import { Departments } from './collections/Departments.js'
import { MediaCollection } from './collections/Media/index.js'
import { People } from './collections/People.js'
import { PostsCollection, postsSlug } from './collections/Posts/index.js'
import { StaffRoles } from './collections/StaffRoles.js'
import { StudentRoles } from './collections/StudentRoles.js'
import { MenuGlobal } from './globals/Menu/index.js'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfigWithDefaults({
  // ...extend config here
  collections: [PostsCollection, MediaCollection, Departments, StaffRoles, StudentRoles, People],
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  editor: lexicalEditor({}),
  globals: [
    // ...add more globals here
    MenuGlobal,
  ],
  onInit: async (payload) => {
    await payload.create({
      collection: 'users',
      data: {
        email: devUser.email,
        password: devUser.password,
      },
    })
    await payload.create({
      collection: postsSlug,
      data: {
        title: 'example post',
      },
    })

    const person = await payload.create({
      collection: 'people',
      data: {
        name: 'Alice',
      },
    })

    const department = await payload.create({
      collection: 'departments',
      data: {
        name: 'Physics',
      },
    })

    await payload.create({
      collection: 'staff-roles',
      data: {
        person,
        department,
        role: 'Director',
      },
    })

    await payload.create({
      collection: 'student-roles',
      data: {
        person,
        department,
        graduationYear: 1998,
      },
    })
  },
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
