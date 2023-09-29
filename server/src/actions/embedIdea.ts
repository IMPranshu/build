import prisma from '../dbClient.js'

import { embedIdea } from '../ext-src/ideas.js'


export default async function (args, context) {
  return (embedIdea as any)(args, {
    ...context,
    entities: {
      GeneratedIdea: prisma.generatedIdea,
    },
  })
}

export type EmbedIdea = typeof embedIdea 
