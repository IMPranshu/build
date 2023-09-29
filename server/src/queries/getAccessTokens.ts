import prisma from '../dbClient.js'

import { getAccessTokens } from '../ext-src/twitterAuth.js'


export default async function (args, context) {
  return (getAccessTokens as any)(args, {
    ...context,
    entities: {
      AccessTokens: prisma.accessTokens,
    },
  })
}

export type GetAccessTokens = typeof getAccessTokens 
