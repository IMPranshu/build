import prisma from '../dbClient.js'

import { embedIdeas } from '../ext-src/ideas.js'


export default async function (args, context) {
  return (embedIdeas as any)(args, {
    ...context,
    entities: {
      GeneratedIdea: prisma.generatedIdea,
    },
  })
}

export type EmbedIdeas = typeof embedIdeas 
