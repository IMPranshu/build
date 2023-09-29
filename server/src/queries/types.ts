
import {
  type _GeneratedIdea,
  type _TweetDraft,
  type _Tweet,
  type _AccessTokens,
  type AuthenticatedQuery,
  type Payload,
} from '../_types'

export type GetEmbeddedIdeas<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedQuery<
    [
      _GeneratedIdea,
    ],
    Input,
    Output
  >

export type GetTweetDraftsWithIdeas<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedQuery<
    [
      _TweetDraft,
      _GeneratedIdea,
      _Tweet,
    ],
    Input,
    Output
  >

export type FetchSimilarNotes<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedQuery<
    [
      _GeneratedIdea,
    ],
    Input,
    Output
  >

export type GetAccessTokens<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedQuery<
    [
      _AccessTokens,
    ],
    Input,
    Output
  >

