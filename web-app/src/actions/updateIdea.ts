import { createAction } from './core'
import { UpdateIdea } from '../../../server/src/actions/updateIdea'

const action = createAction<UpdateIdea>(
  'operations/update-idea',
  ['GeneratedIdea'],
)

export default action
