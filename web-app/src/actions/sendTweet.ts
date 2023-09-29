import { createAction } from './core'
import { SendTweet } from '../../../server/src/actions/sendTweet'

const action = createAction<SendTweet>(
  'operations/send-tweet',
  ['Tweet', 'TweetDraft', 'AccessTokens', 'GeneratedIdea', 'User'],
)

export default action
