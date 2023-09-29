import {
  type _GeneratedIdea,
  type _Tweet,
  type _TweetDraft,
  type _Author,
  type _User,
  type _AccessTokens,
  type _VerifyTokens,
  type AuthenticatedAction,
  type Payload,
} from '../_types'

export type EmbedIdeas<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedAction<
    [
      _GeneratedIdea,
    ],
    Input,
    Output
  >

export type EmbedIdea<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedAction<
    [
      _GeneratedIdea,
    ],
    Input,
    Output
  >

export type UpdateIdea<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedAction<
    [
      _GeneratedIdea,
    ],
    Input,
    Output
  >

export type DeleteIdea<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedAction<
    [
      _GeneratedIdea,
    ],
    Input,
    Output
  >

export type GenerateTweetDraftsAndIdeas<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedAction<
    [
      _Tweet,
      _TweetDraft,
      _GeneratedIdea,
      _Author,
      _User,
    ],
    Input,
    Output
  >

export type GenerateTweet<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedAction<
    [
      _Tweet,
      _TweetDraft,
      _GeneratedIdea,
      _User,
    ],
    Input,
    Output
  >

export type SendTweet<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedAction<
    [
      _Tweet,
      _TweetDraft,
      _AccessTokens,
      _GeneratedIdea,
      _User,
    ],
    Input,
    Output
  >

export type TwitterAuthCallback<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedAction<
    [
      _VerifyTokens,
      _AccessTokens,
      _User,
    ],
    Input,
    Output
  >

export type TwitterAuth<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedAction<
    [
      _VerifyTokens,
      _User,
    ],
    Input,
    Output
  >

export type UpdateSettings<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedAction<
    [
      _User,
    ],
    Input,
    Output
  >

