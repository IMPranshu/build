import prisma from '../dbClient.js'

import { twitterAuth } from '../ext-src/twitterAuth.js'


export default async function (args, context) {
  return (twitterAuth as any)(args, {
    ...context,
    entities: {
      VerifyTokens: prisma.verifyTokens,
      User: prisma.user,
    },
  })
}

export type TwitterAuth = typeof twitterAuth 
