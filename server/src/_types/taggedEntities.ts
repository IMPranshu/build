// Wasp internally uses the types defined in this file for typing entity maps in
// operation contexts.
//
// We must explicitly tag all entities with their name to avoid issues with
// structural typing. See https://github.com/wasp-lang/wasp/pull/982 for details.
import { 
  type Entity, 
  type EntityName,
  type Tweet,
  type Author,
  type TweetDraft,
  type GeneratedIdea,
  type VerifyTokens,
  type AccessTokens,
  type User,
} from '../entities'

export type _Tweet = WithName<Tweet, "Tweet">
export type _Author = WithName<Author, "Author">
export type _TweetDraft = WithName<TweetDraft, "TweetDraft">
export type _GeneratedIdea = WithName<GeneratedIdea, "GeneratedIdea">
export type _VerifyTokens = WithName<VerifyTokens, "VerifyTokens">
export type _AccessTokens = WithName<AccessTokens, "AccessTokens">
export type _User = WithName<User, "User">

export type _Entity = 
  | _Tweet
  | _Author
  | _TweetDraft
  | _GeneratedIdea
  | _VerifyTokens
  | _AccessTokens
  | _User
  | never

type WithName<E extends Entity, Name extends EntityName> = 
  E & { _entityName: Name }
