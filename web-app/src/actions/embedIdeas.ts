import { createAction } from './core'
import { EmbedIdeas } from '../../../server/src/actions/embedIdeas'

const action = createAction<EmbedIdeas>(
  'operations/embed-ideas',
  ['GeneratedIdea'],
)

export default action
