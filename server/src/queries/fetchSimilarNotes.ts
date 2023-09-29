import prisma from '../dbClient.js'

import { fetchSimilarNotes } from '../ext-src/ideas.js'


export default async function (args, context) {
  return (fetchSimilarNotes as any)(args, {
    ...context,
    entities: {
      GeneratedIdea: prisma.generatedIdea,
    },
  })
}

export type FetchSimilarNotes = typeof fetchSimilarNotes 
