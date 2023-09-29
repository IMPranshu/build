import prisma from '../dbClient.js'

import { deleteIdea } from '../ext-src/ideas.js'


export default async function (args, context) {
  return (deleteIdea as any)(args, {
    ...context,
    entities: {
      GeneratedIdea: prisma.generatedIdea,
    },
  })
}

export type DeleteIdea = typeof deleteIdea 
