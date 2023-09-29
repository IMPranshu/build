import {
  type Tweet,
  type Author,
  type TweetDraft,
  type GeneratedIdea,
  type VerifyTokens,
  type AccessTokens,
  type User,
} from "@prisma/client"

export {
  type Tweet,
  type Author,
  type TweetDraft,
  type GeneratedIdea,
  type VerifyTokens,
  type AccessTokens,
  type User,
} from "@prisma/client"

export type Entity = 
  | Tweet
  | Author
  | TweetDraft
  | GeneratedIdea
  | VerifyTokens
  | AccessTokens
  | User
  | never

export type EntityName = 
  | "Tweet"
  | "Author"
  | "TweetDraft"
  | "GeneratedIdea"
  | "VerifyTokens"
  | "AccessTokens"
  | "User"
  | never
