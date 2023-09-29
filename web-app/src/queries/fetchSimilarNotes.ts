import { createQuery } from './core'
import { FetchSimilarNotes } from '../../../server/src/queries/fetchSimilarNotes'


const query = createQuery<FetchSimilarNotes>(
  'operations/fetch-similar-notes',
  ['GeneratedIdea'],
)

export default query
