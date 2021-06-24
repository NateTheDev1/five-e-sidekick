declare global { namespace Schema {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

interface LoginInput {
  email: Scalars['String'];
  password: Scalars['String'];
}

interface Mutation {
  __typename?: 'Mutation';
  createSoundboard: Soundboard;
  deleteSoundboard: Scalars['Boolean'];
  deleteSoundboardLink: Scalars['Boolean'];
  addSoundboardLink: Scalars['Boolean'];
  signup: User;
  login: User;
  appleLogin: User;
}


interface MutationCreateSoundboardArgs {
  title: Scalars['String'];
}


interface MutationDeleteSoundboardArgs {
  soundboardId: Scalars['Int'];
}


interface MutationDeleteSoundboardLinkArgs {
  linkId: Scalars['Int'];
}


interface MutationAddSoundboardLinkArgs {
  link: SoundboardLinkInput;
}


interface MutationSignupArgs {
  user: SignupInput;
}


interface MutationLoginArgs {
  credentials: LoginInput;
}


interface MutationAppleLoginArgs {
  email: Scalars['String'];
}

interface Query {
  __typename?: 'Query';
  getSoundboards: Array<Maybe<Soundboard>>;
  getSoundboard: Soundboard;
  getUser: User;
}


interface QueryGetSoundboardArgs {
  soundboardId: Scalars['Int'];
}


interface QueryGetUserArgs {
  id: Scalars['Int'];
}

interface SignupInput {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}

interface Soundboard {
  __typename?: 'Soundboard';
  id: Scalars['Int'];
  title: Scalars['String'];
  userId: Scalars['Int'];
  links: Array<Maybe<SoundboardLink>>;
}

interface SoundboardLink {
  __typename?: 'SoundboardLink';
  id: Scalars['Int'];
  title: Scalars['String'];
  url: Scalars['String'];
  soundboardId: Scalars['Int'];
}

interface SoundboardLinkInput {
  title: Scalars['String'];
  url: Scalars['String'];
  soundboardId: Scalars['Int'];
}

interface User {
  __typename?: 'User';
  id: Scalars['Int'];
  name: Scalars['String'];
  email: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
}

} } export {};