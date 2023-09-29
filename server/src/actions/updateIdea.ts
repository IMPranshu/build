import prisma from '../dbClient.js'

import { updateIdea } from '../ext-src/ideas.js'


export default async function (args, context) {
  return (updateIdea as any)(args, {
    ...context,
    entities: {
      GeneratedIdea: prisma.generatedIdea,
    },
  })
}

export type UpdateIdea = typeof updateIdea 
