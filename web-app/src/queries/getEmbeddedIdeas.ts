import { createQuery } from './core'
import { GetEmbeddedIdeas } from '../../../server/src/queries/getEmbeddedIdeas'


const query = createQuery<GetEmbeddedIdeas>(
  'operations/get-embedded-ideas',
  ['GeneratedIdea'],
)

export default query
