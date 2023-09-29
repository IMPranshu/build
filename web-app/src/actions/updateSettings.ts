import { createAction } from './core'
import { UpdateSettings } from '../../../server/src/actions/updateSettings'

const action = createAction<UpdateSettings>(
  'operations/update-settings',
  ['User'],
)

export default action
