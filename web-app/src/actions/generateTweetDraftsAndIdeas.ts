import { createAction } from './core'
import { GenerateTweetDraftsAndIdeas } from '../../../server/src/actions/generateTweetDraftsAndIdeas'

const action = createAction<GenerateTweetDraftsAndIdeas>(
  'operations/generate-tweet-drafts-and-ideas',
  ['Tweet', 'TweetDraft', 'GeneratedIdea', 'Author', 'User'],
)

export default action
