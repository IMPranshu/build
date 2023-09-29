import { createQuery } from './core'
import { GetTweetDraftsWithIdeas } from '../../../server/src/queries/getTweetDraftsWithIdeas'


const query = createQuery<GetTweetDraftsWithIdeas>(
  'operations/get-tweet-drafts-with-ideas',
  ['TweetDraft', 'GeneratedIdea', 'Tweet'],
)

export default query
