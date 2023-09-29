import prisma from '../dbClient.js'

import { generateTweetDraftsAndIdeas } from '../ext-src/tweets.js'


export default async function (args, context) {
  return (generateTweetDraftsAndIdeas as any)(args, {
    ...context,
    entities: {
      Tweet: prisma.tweet,
      TweetDraft: prisma.tweetDraft,
      GeneratedIdea: prisma.generatedIdea,
      Author: prisma.author,
      User: prisma.user,
    },
  })
}

export type GenerateTweetDraftsAndIdeas = typeof generateTweetDraftsAndIdeas 
