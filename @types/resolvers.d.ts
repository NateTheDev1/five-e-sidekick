import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
declare global { namespace Resolvers {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

interface Article {
  __typename?: 'Article';
  id: Scalars['Int'];
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  author: Scalars['String'];
  views: Scalars['Int'];
  content?: Maybe<Array<Maybe<ArticleContent>>>;
}

interface ArticleContent {
  __typename?: 'ArticleContent';
  id: Scalars['Int'];
  articleId: Scalars['Int'];
  type: Scalars['String'];
  fontSize: Scalars['String'];
  imageURL?: Maybe<Scalars['String']>;
  order: Scalars['Int'];
}

type ArticleOrder =
  | 'TOP'
  | 'ALL';

interface Character {
  __typename?: 'Character';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  race?: Maybe<Scalars['Int']>;
  class?: Maybe<Scalars['Int']>;
  background?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Maybe<Scalars['Int']>>>;
  stats?: Maybe<Scalars['String']>;
  hp?: Maybe<Scalars['Int']>;
  maxHP?: Maybe<Scalars['Int']>;
  tempHP?: Maybe<Scalars['Int']>;
  deathSaves?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  conditions?: Maybe<Array<Maybe<Scalars['Int']>>>;
  level?: Maybe<Scalars['Int']>;
  xp?: Maybe<Scalars['Int']>;
  proficiencies?: Maybe<Array<Maybe<Scalars['Int']>>>;
  eyes?: Maybe<Scalars['String']>;
  skin?: Maybe<Scalars['String']>;
  hair?: Maybe<Scalars['String']>;
  backstory?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['String']>;
  alignment?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  personalityTraits?: Maybe<Scalars['Int']>;
  ideals?: Maybe<Scalars['Int']>;
  bonds?: Maybe<Scalars['Int']>;
  flaws?: Maybe<Scalars['Int']>;
  faith?: Maybe<Scalars['String']>;
  lifestyle?: Maybe<Scalars['Int']>;
  backgroundFeatures?: Maybe<Array<Maybe<Scalars['Int']>>>;
  characterStep?: Maybe<Scalars['Int']>;
}

interface CharacterInput {
  name?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  race?: Maybe<Scalars['Int']>;
  class?: Maybe<Scalars['Int']>;
  background?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Maybe<Scalars['Int']>>>;
  stats?: Maybe<Scalars['String']>;
  hp?: Maybe<Scalars['Int']>;
  maxHP?: Maybe<Scalars['Int']>;
  tempHP?: Maybe<Scalars['Int']>;
  deathSaves?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  conditions?: Maybe<Array<Maybe<Scalars['Int']>>>;
  level?: Maybe<Scalars['Int']>;
  xp?: Maybe<Scalars['Int']>;
  proficiencies?: Maybe<Array<Maybe<Scalars['Int']>>>;
  eyes?: Maybe<Scalars['String']>;
  skin?: Maybe<Scalars['String']>;
  hair?: Maybe<Scalars['String']>;
  backstory?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['String']>;
  alignment?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  personalityTraits?: Maybe<Scalars['Int']>;
  ideals?: Maybe<Scalars['Int']>;
  bonds?: Maybe<Scalars['Int']>;
  flaws?: Maybe<Scalars['Int']>;
  faith?: Maybe<Scalars['String']>;
  lifestyle?: Maybe<Scalars['Int']>;
  backgroundFeatures?: Maybe<Array<Maybe<Scalars['Int']>>>;
  characterStep?: Maybe<Scalars['Int']>;
}

interface CharacterStepInput {
  characterId: Scalars['Int'];
  character: CharacterInput;
}

interface CreateArticleContentBlock {
  articleId: Scalars['Int'];
  type: Scalars['String'];
  fontSize: Scalars['String'];
  imageURL?: Maybe<Scalars['String']>;
  order: Scalars['Int'];
}

interface CreateArticleInput {
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  author: Scalars['String'];
  views: Scalars['Int'];
  content?: Maybe<Array<Maybe<CreateArticleContentBlock>>>;
}

interface DevUpdate {
  __typename?: 'DevUpdate';
  id: Scalars['Int'];
  title: Scalars['String'];
  version?: Maybe<Scalars['String']>;
  releaseDate?: Maybe<Scalars['String']>;
  tags: Array<Maybe<Scalars['String']>>;
  paragraphs: Array<Maybe<Scalars['String']>>;
}

interface DevUpdateInput {
  title: Scalars['String'];
  version?: Maybe<Scalars['String']>;
  releaseDate?: Maybe<Scalars['String']>;
  tags: Array<Maybe<Scalars['String']>>;
  paragraphs: Array<Maybe<Scalars['String']>>;
}

interface DevUpdatePatchInput {
  title?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  releaseDate?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  paragraphs?: Maybe<Array<Maybe<Scalars['String']>>>;
}

interface InitCharacterInput {
  userId: Scalars['Int'];
  character: CharacterInput;
}

interface Inventory {
  __typename?: 'Inventory';
  id: Scalars['Int'];
  characterId: Scalars['Int'];
  equipmentId: Scalars['Int'];
  quantity: Scalars['Int'];
}

interface LoginInput {
  email: Scalars['String'];
  password: Scalars['String'];
}

interface Mutation {
  __typename?: 'Mutation';
  initializeCharacter: Character;
  characterStep: Character;
  finalizeCharacter: Character;
  createSoundboard: Soundboard;
  deleteSoundboard: Scalars['Boolean'];
  deleteSoundboardLink: Scalars['Boolean'];
  addSoundboardLink: Scalars['Boolean'];
  publishUpdate?: Maybe<DevUpdate>;
  deleteUpdate: Scalars['Boolean'];
  editUpdate: DevUpdate;
  createArticle: Article;
  deleteArticle: Scalars['Boolean'];
  signup: User;
  login: User;
  appleLogin: User;
  waitListSignup: Scalars['Boolean'];
  resetPasswordFromCode: Scalars['Boolean'];
  sendPasswordReset: Scalars['Boolean'];
  updateUser: User;
}


interface MutationInitializeCharacterArgs {
  input: InitCharacterInput;
}


interface MutationCharacterStepArgs {
  input: CharacterStepInput;
}


interface MutationFinalizeCharacterArgs {
  input: CharacterStepInput;
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


interface MutationPublishUpdateArgs {
  update: DevUpdateInput;
}


interface MutationDeleteUpdateArgs {
  id: Scalars['Int'];
}


interface MutationEditUpdateArgs {
  update: DevUpdatePatchInput;
  id: Scalars['Int'];
}


interface MutationCreateArticleArgs {
  article: CreateArticleInput;
}


interface MutationDeleteArticleArgs {
  id: Scalars['Int'];
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


interface MutationWaitListSignupArgs {
  email: Scalars['String'];
}


interface MutationResetPasswordFromCodeArgs {
  credentials: PasswordResetInput;
}


interface MutationSendPasswordResetArgs {
  email: Scalars['String'];
}


interface MutationUpdateUserArgs {
  fullName: Scalars['String'];
  id: Scalars['Int'];
}

interface PasswordResetInput {
  code: Scalars['String'];
  newPassword: Scalars['String'];
}

interface Query {
  __typename?: 'Query';
  getCharacter: Character;
  getCharacters: Array<Maybe<Character>>;
  getInventory: Inventory;
  getSoundboards: Array<Maybe<Soundboard>>;
  getSoundboard: Soundboard;
  getLatestUpdate?: Maybe<DevUpdate>;
  getArticle: Article;
  getArticles: Array<Maybe<Article>>;
  getUser: User;
}


interface QueryGetCharacterArgs {
  id: Scalars['Int'];
}


interface QueryGetCharactersArgs {
  userId: Scalars['Int'];
}


interface QueryGetInventoryArgs {
  characterId: Scalars['Int'];
}


interface QueryGetSoundboardArgs {
  soundboardId: Scalars['Int'];
}


interface QueryGetArticleArgs {
  id: Scalars['Int'];
}


interface QueryGetArticlesArgs {
  params: ArticleOrder;
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Article: ResolverTypeWrapper<Article>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  ArticleContent: ResolverTypeWrapper<ArticleContent>;
  ArticleOrder: ArticleOrder;
  Character: ResolverTypeWrapper<Character>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CharacterInput: CharacterInput;
  CharacterStepInput: CharacterStepInput;
  CreateArticleContentBlock: CreateArticleContentBlock;
  CreateArticleInput: CreateArticleInput;
  DevUpdate: ResolverTypeWrapper<DevUpdate>;
  DevUpdateInput: DevUpdateInput;
  DevUpdatePatchInput: DevUpdatePatchInput;
  InitCharacterInput: InitCharacterInput;
  Inventory: ResolverTypeWrapper<Inventory>;
  LoginInput: LoginInput;
  Mutation: ResolverTypeWrapper<{}>;
  PasswordResetInput: PasswordResetInput;
  Query: ResolverTypeWrapper<{}>;
  SignupInput: SignupInput;
  Soundboard: ResolverTypeWrapper<Soundboard>;
  SoundboardLink: ResolverTypeWrapper<SoundboardLink>;
  SoundboardLinkInput: SoundboardLinkInput;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Article: Article;
  Int: Scalars['Int'];
  String: Scalars['String'];
  ArticleContent: ArticleContent;
  Character: Character;
  Boolean: Scalars['Boolean'];
  CharacterInput: CharacterInput;
  CharacterStepInput: CharacterStepInput;
  CreateArticleContentBlock: CreateArticleContentBlock;
  CreateArticleInput: CreateArticleInput;
  DevUpdate: DevUpdate;
  DevUpdateInput: DevUpdateInput;
  DevUpdatePatchInput: DevUpdatePatchInput;
  InitCharacterInput: InitCharacterInput;
  Inventory: Inventory;
  LoginInput: LoginInput;
  Mutation: {};
  PasswordResetInput: PasswordResetInput;
  Query: {};
  SignupInput: SignupInput;
  Soundboard: Soundboard;
  SoundboardLink: SoundboardLink;
  SoundboardLinkInput: SoundboardLinkInput;
  User: User;
};

export type ArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  views?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  content?: Resolver<Maybe<Array<Maybe<ResolversTypes['ArticleContent']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleContent'] = ResolversParentTypes['ArticleContent']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  articleId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fontSize?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CharacterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Character'] = ResolversParentTypes['Character']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  race?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  class?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  background?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  languages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  stats?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxHP?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tempHP?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deathSaves?: Resolver<Maybe<Array<Maybe<ResolversTypes['Boolean']>>>, ParentType, ContextType>;
  conditions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  xp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  proficiencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  eyes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  skin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hair?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  backstory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  age?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alignment?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personalityTraits?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ideals?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  bonds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  flaws?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  faith?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lifestyle?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  backgroundFeatures?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  characterStep?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DevUpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DevUpdate'] = ResolversParentTypes['DevUpdate']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  releaseDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  paragraphs?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InventoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Inventory'] = ResolversParentTypes['Inventory']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  characterId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  equipmentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  initializeCharacter?: Resolver<ResolversTypes['Character'], ParentType, ContextType, RequireFields<MutationInitializeCharacterArgs, 'input'>>;
  characterStep?: Resolver<ResolversTypes['Character'], ParentType, ContextType, RequireFields<MutationCharacterStepArgs, 'input'>>;
  finalizeCharacter?: Resolver<ResolversTypes['Character'], ParentType, ContextType, RequireFields<MutationFinalizeCharacterArgs, 'input'>>;
  createSoundboard?: Resolver<ResolversTypes['Soundboard'], ParentType, ContextType, RequireFields<MutationCreateSoundboardArgs, 'title'>>;
  deleteSoundboard?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteSoundboardArgs, 'soundboardId'>>;
  deleteSoundboardLink?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteSoundboardLinkArgs, 'linkId'>>;
  addSoundboardLink?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAddSoundboardLinkArgs, 'link'>>;
  publishUpdate?: Resolver<Maybe<ResolversTypes['DevUpdate']>, ParentType, ContextType, RequireFields<MutationPublishUpdateArgs, 'update'>>;
  deleteUpdate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteUpdateArgs, 'id'>>;
  editUpdate?: Resolver<ResolversTypes['DevUpdate'], ParentType, ContextType, RequireFields<MutationEditUpdateArgs, 'update' | 'id'>>;
  createArticle?: Resolver<ResolversTypes['Article'], ParentType, ContextType, RequireFields<MutationCreateArticleArgs, 'article'>>;
  deleteArticle?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteArticleArgs, 'id'>>;
  signup?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationSignupArgs, 'user'>>;
  login?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'credentials'>>;
  appleLogin?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationAppleLoginArgs, 'email'>>;
  waitListSignup?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationWaitListSignupArgs, 'email'>>;
  resetPasswordFromCode?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationResetPasswordFromCodeArgs, 'credentials'>>;
  sendPasswordReset?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSendPasswordResetArgs, 'email'>>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'fullName' | 'id'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getCharacter?: Resolver<ResolversTypes['Character'], ParentType, ContextType, RequireFields<QueryGetCharacterArgs, 'id'>>;
  getCharacters?: Resolver<Array<Maybe<ResolversTypes['Character']>>, ParentType, ContextType, RequireFields<QueryGetCharactersArgs, 'userId'>>;
  getInventory?: Resolver<ResolversTypes['Inventory'], ParentType, ContextType, RequireFields<QueryGetInventoryArgs, 'characterId'>>;
  getSoundboards?: Resolver<Array<Maybe<ResolversTypes['Soundboard']>>, ParentType, ContextType>;
  getSoundboard?: Resolver<ResolversTypes['Soundboard'], ParentType, ContextType, RequireFields<QueryGetSoundboardArgs, 'soundboardId'>>;
  getLatestUpdate?: Resolver<Maybe<ResolversTypes['DevUpdate']>, ParentType, ContextType>;
  getArticle?: Resolver<ResolversTypes['Article'], ParentType, ContextType, RequireFields<QueryGetArticleArgs, 'id'>>;
  getArticles?: Resolver<Array<Maybe<ResolversTypes['Article']>>, ParentType, ContextType, RequireFields<QueryGetArticlesArgs, 'params'>>;
  getUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserArgs, 'id'>>;
};

export type SoundboardResolvers<ContextType = any, ParentType extends ResolversParentTypes['Soundboard'] = ResolversParentTypes['Soundboard']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  links?: Resolver<Array<Maybe<ResolversTypes['SoundboardLink']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SoundboardLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['SoundboardLink'] = ResolversParentTypes['SoundboardLink']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  soundboardId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Article?: ArticleResolvers<ContextType>;
  ArticleContent?: ArticleContentResolvers<ContextType>;
  Character?: CharacterResolvers<ContextType>;
  DevUpdate?: DevUpdateResolvers<ContextType>;
  Inventory?: InventoryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Soundboard?: SoundboardResolvers<ContextType>;
  SoundboardLink?: SoundboardLinkResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

} } export {};