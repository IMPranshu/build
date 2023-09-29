import prisma from '../dbClient.js'

import { generateTweet } from '../ext-src/tweets.js'


export default async function (args, context) {
  return (generateTweet as any)(args, {
    ...context,
    entities: {
      Tweet: prisma.tweet,
      TweetDraft: prisma.tweetDraft,
      GeneratedIdea: prisma.generatedIdea,
      User: prisma.user,
    },
  })
}

export type GenerateTweet = typeof generateTweet 
