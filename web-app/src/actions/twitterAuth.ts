import { createAction } from './core'
import { TwitterAuth } from '../../../server/src/actions/twitterAuth'

const action = createAction<TwitterAuth>(
  'operations/twitter-auth',
  ['VerifyTokens', 'User'],
)

export default action
