import { createAction } from './core'
import { EmbedIdea } from '../../../server/src/actions/embedIdea'

const action = createAction<EmbedIdea>(
  'operations/embed-idea',
  ['GeneratedIdea'],
)

export default action
