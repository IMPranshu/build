import prisma from '../dbClient.js'

import { updateSettings } from '../ext-src/account.js'


export default async function (args, context) {
  return (updateSettings as any)(args, {
    ...context,
    entities: {
      User: prisma.user,
    },
  })
}

export type UpdateSettings = typeof updateSettings 
