import {
  Tweet,
  Author,
  TweetDraft,
  GeneratedIdea,
  VerifyTokens,
  AccessTokens,
  User,
} from '@prisma/client'
  
export type {
  Tweet,
  Author,
  TweetDraft,
  GeneratedIdea,
  VerifyTokens,
  AccessTokens,
  User,
} from '@prisma/client'

export type Entity = 
  | Tweet
  | Author
  | TweetDraft
  | GeneratedIdea
  | VerifyTokens
  | AccessTokens
  | User
  | never
