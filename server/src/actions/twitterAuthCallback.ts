import prisma from '../dbClient.js'

import { callback } from '../ext-src/twitterAuth.js'


export default async function (args, context) {
  return (callback as any)(args, {
    ...context,
    entities: {
      VerifyTokens: prisma.verifyTokens,
      AccessTokens: prisma.accessTokens,
      User: prisma.user,
    },
  })
}

export type TwitterAuthCallback = typeof callback 
