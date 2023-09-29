import prisma from '../dbClient.js'

import { getEmbeddedIdeas } from '../ext-src/ideas.js'


export default async function (args, context) {
  return (getEmbeddedIdeas as any)(args, {
    ...context,
    entities: {
      GeneratedIdea: prisma.generatedIdea,
    },
  })
}

export type GetEmbeddedIdeas = typeof getEmbeddedIdeas 
