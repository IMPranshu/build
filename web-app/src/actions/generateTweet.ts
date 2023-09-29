import { createAction } from './core'
import { GenerateTweet } from '../../../server/src/actions/generateTweet'

const action = createAction<GenerateTweet>(
  'operations/generate-tweet',
  ['Tweet', 'TweetDraft', 'GeneratedIdea', 'User'],
)

export default action
