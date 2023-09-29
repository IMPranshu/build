import type { User } from '../entities';
import prismaClient from '../dbClient';

type UserDelegate = typeof prismaClient.user;
type TweetDraft = typeof prismaClient.tweetDraft;
type Author = typeof prismaClient.author;
type GeneratedIdea = typeof prismaClient.generatedIdea;
type Tweet = typeof prismaClient.tweet;

export type Context = {
  user?: Omit<User, 'password'> | undefined;
  entities: {
    User: UserDelegate;
    Tweet: Tweet;
    TweetDraft: TweetDraft;
    GeneratedIdea: GeneratedIdea;
    Author: Author;
  };
};
