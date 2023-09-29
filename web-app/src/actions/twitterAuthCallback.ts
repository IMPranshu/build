import { createAction } from './core'
import { TwitterAuthCallback } from '../../../server/src/actions/twitterAuthCallback'

const action = createAction<TwitterAuthCallback>(
  'operations/twitter-auth-callback',
  ['VerifyTokens', 'AccessTokens', 'User'],
)

export default action
