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

} } export {};