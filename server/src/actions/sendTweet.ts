import prisma from '../dbClient.js'

import { sendTweet } from '../ext-src/tweets.js'


export default async function (args, context) {
  return (sendTweet as any)(args, {
    ...context,
    entities: {
      Tweet: prisma.tweet,
      TweetDraft: prisma.tweetDraft,
      AccessTokens: prisma.accessTokens,
      GeneratedIdea: prisma.generatedIdea,
      User: prisma.user,
    },
  })
}

export type SendTweet = typeof sendTweet 
