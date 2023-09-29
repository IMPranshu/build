import prisma from '../dbClient.js'

import { getTweetDraftsWithIdeas } from '../ext-src/tweets.js'


export default async function (args, context) {
  return (getTweetDraftsWithIdeas as any)(args, {
    ...context,
    entities: {
      TweetDraft: prisma.tweetDraft,
      GeneratedIdea: prisma.generatedIdea,
      Tweet: prisma.tweet,
    },
  })
}

export type GetTweetDraftsWithIdeas = typeof getTweetDraftsWithIdeas 
