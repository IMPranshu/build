import { createAction } from './core'
import { DeleteIdea } from '../../../server/src/actions/deleteIdea'

const action = createAction<DeleteIdea>(
  'operations/delete-idea',
  ['GeneratedIdea'],
)

export default action
