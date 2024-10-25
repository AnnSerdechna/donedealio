import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type AccountAvgAggregate = {
  __typename?: 'AccountAvgAggregate';
  expires_at?: Maybe<Scalars['Float']['output']>;
};

export type AccountAvgOrderByAggregateInput = {
  expires_at?: InputMaybe<SortOrder>;
};

export type AccountCountAggregate = {
  __typename?: 'AccountCountAggregate';
  _all: Scalars['Int']['output'];
  access_token: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  expires_at: Scalars['Int']['output'];
  id_token: Scalars['Int']['output'];
  provider: Scalars['Int']['output'];
  providerAccountId: Scalars['Int']['output'];
  refresh_token: Scalars['Int']['output'];
  scope: Scalars['Int']['output'];
  session_state: Scalars['Int']['output'];
  token_type: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type AccountCountOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountCreateInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutAccountsInput;
};

export type AccountCreateManyInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type AccountCreateManyUserInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type AccountCreateManyUserInputEnvelope = {
  data: Array<AccountCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccountCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
};

export type AccountCreateOrConnectWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateWithoutUserInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type AccountGroupBy = {
  __typename?: 'AccountGroupBy';
  _avg?: Maybe<AccountAvgAggregate>;
  _count?: Maybe<AccountCountAggregate>;
  _max?: Maybe<AccountMaxAggregate>;
  _min?: Maybe<AccountMinAggregate>;
  _sum?: Maybe<AccountSumAggregate>;
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type AccountListRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountMaxAggregate = {
  __typename?: 'AccountMaxAggregate';
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AccountMaxOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountMinAggregate = {
  __typename?: 'AccountMinAggregate';
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AccountMinOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AccountOrderByWithAggregationInput = {
  _avg?: InputMaybe<AccountAvgOrderByAggregateInput>;
  _count?: InputMaybe<AccountCountOrderByAggregateInput>;
  _max?: InputMaybe<AccountMaxOrderByAggregateInput>;
  _min?: InputMaybe<AccountMinOrderByAggregateInput>;
  _sum?: InputMaybe<AccountSumOrderByAggregateInput>;
  access_token?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrderInput>;
  id_token?: InputMaybe<SortOrderInput>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrderInput>;
  scope?: InputMaybe<SortOrderInput>;
  session_state?: InputMaybe<SortOrderInput>;
  token_type?: InputMaybe<SortOrderInput>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountOrderByWithRelationInput = {
  access_token?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrderInput>;
  id_token?: InputMaybe<SortOrderInput>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrderInput>;
  scope?: InputMaybe<SortOrderInput>;
  session_state?: InputMaybe<SortOrderInput>;
  token_type?: InputMaybe<SortOrderInput>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountProviderProviderAccountIdCompoundUniqueInput = {
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
};

export enum AccountScalarFieldEnum {
  AccessToken = 'access_token',
  CreatedAt = 'createdAt',
  ExpiresAt = 'expires_at',
  IdToken = 'id_token',
  Provider = 'provider',
  ProviderAccountId = 'providerAccountId',
  RefreshToken = 'refresh_token',
  Scope = 'scope',
  SessionState = 'session_state',
  TokenType = 'token_type',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type AccountScalarWhereInput = {
  AND?: InputMaybe<Array<AccountScalarWhereInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  access_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  expires_at?: InputMaybe<IntNullableWithAggregatesFilter>;
  id_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  provider?: InputMaybe<StringWithAggregatesFilter>;
  providerAccountId?: InputMaybe<StringWithAggregatesFilter>;
  refresh_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  scope?: InputMaybe<StringNullableWithAggregatesFilter>;
  session_state?: InputMaybe<StringNullableWithAggregatesFilter>;
  token_type?: InputMaybe<StringNullableWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type AccountSumAggregate = {
  __typename?: 'AccountSumAggregate';
  expires_at?: Maybe<Scalars['Int']['output']>;
};

export type AccountSumOrderByAggregateInput = {
  expires_at?: InputMaybe<SortOrder>;
};

export type AccountUpdateInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAccountsNestedInput>;
};

export type AccountUpdateManyMutationInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AccountUpdateManyWithWhereWithoutUserInput = {
  data: AccountUpdateManyMutationInput;
  where: AccountScalarWhereInput;
};

export type AccountUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<AccountWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AccountScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  set?: InputMaybe<Array<AccountWhereUniqueInput>>;
  update?: InputMaybe<Array<AccountUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<AccountUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<AccountUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AccountUpdateWithWhereUniqueWithoutUserInput = {
  data: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateWithoutUserInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AccountUpsertWithWhereUniqueWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  update: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountWhereUniqueInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  provider_providerAccountId?: InputMaybe<AccountProviderProviderAccountIdCompoundUniqueInput>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateAccount = {
  __typename?: 'AggregateAccount';
  _avg?: Maybe<AccountAvgAggregate>;
  _count?: Maybe<AccountCountAggregate>;
  _max?: Maybe<AccountMaxAggregate>;
  _min?: Maybe<AccountMinAggregate>;
  _sum?: Maybe<AccountSumAggregate>;
};

export type AggregateFile = {
  __typename?: 'AggregateFile';
  _avg?: Maybe<FileAvgAggregate>;
  _count?: Maybe<FileCountAggregate>;
  _max?: Maybe<FileMaxAggregate>;
  _min?: Maybe<FileMinAggregate>;
  _sum?: Maybe<FileSumAggregate>;
};

export type AggregatePasswordResetToken = {
  __typename?: 'AggregatePasswordResetToken';
  _count?: Maybe<PasswordResetTokenCountAggregate>;
  _max?: Maybe<PasswordResetTokenMaxAggregate>;
  _min?: Maybe<PasswordResetTokenMinAggregate>;
};

export type AggregatePriority = {
  __typename?: 'AggregatePriority';
  _avg?: Maybe<PriorityAvgAggregate>;
  _count?: Maybe<PriorityCountAggregate>;
  _max?: Maybe<PriorityMaxAggregate>;
  _min?: Maybe<PriorityMinAggregate>;
  _sum?: Maybe<PrioritySumAggregate>;
};

export type AggregateStatus = {
  __typename?: 'AggregateStatus';
  _avg?: Maybe<StatusAvgAggregate>;
  _count?: Maybe<StatusCountAggregate>;
  _max?: Maybe<StatusMaxAggregate>;
  _min?: Maybe<StatusMinAggregate>;
  _sum?: Maybe<StatusSumAggregate>;
};

export type AggregateTask = {
  __typename?: 'AggregateTask';
  _avg?: Maybe<TaskAvgAggregate>;
  _count?: Maybe<TaskCountAggregate>;
  _max?: Maybe<TaskMaxAggregate>;
  _min?: Maybe<TaskMinAggregate>;
  _sum?: Maybe<TaskSumAggregate>;
};

export type AggregateTwoFactorConfirnation = {
  __typename?: 'AggregateTwoFactorConfirnation';
  _count?: Maybe<TwoFactorConfirnationCountAggregate>;
  _max?: Maybe<TwoFactorConfirnationMaxAggregate>;
  _min?: Maybe<TwoFactorConfirnationMinAggregate>;
};

export type AggregateTwoFactorToken = {
  __typename?: 'AggregateTwoFactorToken';
  _count?: Maybe<TwoFactorTokenCountAggregate>;
  _max?: Maybe<TwoFactorTokenMaxAggregate>;
  _min?: Maybe<TwoFactorTokenMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type AggregateVerificationToken = {
  __typename?: 'AggregateVerificationToken';
  _count?: Maybe<VerificationTokenCountAggregate>;
  _max?: Maybe<VerificationTokenMaxAggregate>;
  _min?: Maybe<VerificationTokenMinAggregate>;
};

export type AggregateWorkspace = {
  __typename?: 'AggregateWorkspace';
  _count?: Maybe<WorkspaceCountAggregate>;
  _max?: Maybe<WorkspaceMaxAggregate>;
  _min?: Maybe<WorkspaceMinAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type CreateManyAndReturnAccount = {
  __typename?: 'CreateManyAndReturnAccount';
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type CreateManyAndReturnFile = {
  __typename?: 'CreateManyAndReturnFile';
  fileId: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  task?: Maybe<Task>;
  taskId?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};


export type CreateManyAndReturnFileTaskArgs = {
  where?: InputMaybe<TaskWhereInput>;
};

export type CreateManyAndReturnPasswordResetToken = {
  __typename?: 'CreateManyAndReturnPasswordResetToken';
  email: Scalars['String']['output'];
  expires: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type CreateManyAndReturnPriority = {
  __typename?: 'CreateManyAndReturnPriority';
  color: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type CreateManyAndReturnStatus = {
  __typename?: 'CreateManyAndReturnStatus';
  color: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  type: StatusType;
  user: User;
  userId: Scalars['String']['output'];
};

export type CreateManyAndReturnTask = {
  __typename?: 'CreateManyAndReturnTask';
  createdAt: Scalars['DateTimeISO']['output'];
  dueDate?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Status>;
  priorityId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Status>;
  statusId?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  workspace?: Maybe<Workspace>;
  workspaceId: Scalars['String']['output'];
};


export type CreateManyAndReturnTaskPriorityArgs = {
  where?: InputMaybe<StatusWhereInput>;
};


export type CreateManyAndReturnTaskStatusArgs = {
  where?: InputMaybe<StatusWhereInput>;
};


export type CreateManyAndReturnTaskWorkspaceArgs = {
  where?: InputMaybe<WorkspaceWhereInput>;
};

export type CreateManyAndReturnTwoFactorConfirnation = {
  __typename?: 'CreateManyAndReturnTwoFactorConfirnation';
  id: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type CreateManyAndReturnTwoFactorToken = {
  __typename?: 'CreateManyAndReturnTwoFactorToken';
  email: Scalars['String']['output'];
  expires: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type CreateManyAndReturnUser = {
  __typename?: 'CreateManyAndReturnUser';
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  imageId?: Maybe<Scalars['String']['output']>;
  isTwoFactorEnable: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  role: Role;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type CreateManyAndReturnVerificationToken = {
  __typename?: 'CreateManyAndReturnVerificationToken';
  email: Scalars['String']['output'];
  expires: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type CreateManyAndReturnWorkspace = {
  __typename?: 'CreateManyAndReturnWorkspace';
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};


export type CreateManyAndReturnWorkspaceUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<Role>;
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type EnumRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleFilter>;
  _min?: InputMaybe<NestedEnumRoleFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type EnumStatusTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<StatusType>;
};

export type EnumStatusTypeFilter = {
  equals?: InputMaybe<StatusType>;
  in?: InputMaybe<Array<StatusType>>;
  not?: InputMaybe<NestedEnumStatusTypeFilter>;
  notIn?: InputMaybe<Array<StatusType>>;
};

export type EnumStatusTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStatusTypeFilter>;
  _min?: InputMaybe<NestedEnumStatusTypeFilter>;
  equals?: InputMaybe<StatusType>;
  in?: InputMaybe<Array<StatusType>>;
  not?: InputMaybe<NestedEnumStatusTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<StatusType>>;
};

export type File = {
  __typename?: 'File';
  fileId: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  task?: Maybe<Task>;
  taskId?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};


export type FileTaskArgs = {
  where?: InputMaybe<TaskWhereInput>;
};

export type FileAvgAggregate = {
  __typename?: 'FileAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type FileAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type FileCountAggregate = {
  __typename?: 'FileCountAggregate';
  _all: Scalars['Int']['output'];
  fileId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  taskId: Scalars['Int']['output'];
  url: Scalars['Int']['output'];
};

export type FileCountOrderByAggregateInput = {
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type FileCreateInput = {
  fileId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  task?: InputMaybe<TaskCreateNestedOneWithoutFilesInput>;
  url: Scalars['String']['input'];
};

export type FileCreateManyInput = {
  fileId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  taskId?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type FileCreateManyTaskInput = {
  fileId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type FileCreateManyTaskInputEnvelope = {
  data: Array<FileCreateManyTaskInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FileCreateNestedManyWithoutTaskInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutTaskInput>>;
  create?: InputMaybe<Array<FileCreateWithoutTaskInput>>;
  createMany?: InputMaybe<FileCreateManyTaskInputEnvelope>;
};

export type FileCreateOrConnectWithoutTaskInput = {
  create: FileCreateWithoutTaskInput;
  where: FileWhereUniqueInput;
};

export type FileCreateWithoutTaskInput = {
  fileId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type FileGroupBy = {
  __typename?: 'FileGroupBy';
  _avg?: Maybe<FileAvgAggregate>;
  _count?: Maybe<FileCountAggregate>;
  _max?: Maybe<FileMaxAggregate>;
  _min?: Maybe<FileMinAggregate>;
  _sum?: Maybe<FileSumAggregate>;
  fileId: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  taskId?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type FileListRelationFilter = {
  every?: InputMaybe<FileWhereInput>;
  none?: InputMaybe<FileWhereInput>;
  some?: InputMaybe<FileWhereInput>;
};

export type FileMaxAggregate = {
  __typename?: 'FileMaxAggregate';
  fileId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  taskId?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type FileMaxOrderByAggregateInput = {
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type FileMinAggregate = {
  __typename?: 'FileMinAggregate';
  fileId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  taskId?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type FileMinOrderByAggregateInput = {
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type FileOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FileOrderByWithAggregationInput = {
  _avg?: InputMaybe<FileAvgOrderByAggregateInput>;
  _count?: InputMaybe<FileCountOrderByAggregateInput>;
  _max?: InputMaybe<FileMaxOrderByAggregateInput>;
  _min?: InputMaybe<FileMinOrderByAggregateInput>;
  _sum?: InputMaybe<FileSumOrderByAggregateInput>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrderInput>;
  url?: InputMaybe<SortOrder>;
};

export type FileOrderByWithRelationInput = {
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  task?: InputMaybe<TaskOrderByWithRelationInput>;
  taskId?: InputMaybe<SortOrderInput>;
  url?: InputMaybe<SortOrder>;
};

export enum FileScalarFieldEnum {
  FileId = 'fileId',
  Id = 'id',
  Name = 'name',
  TaskId = 'taskId',
  Url = 'url'
}

export type FileScalarWhereInput = {
  AND?: InputMaybe<Array<FileScalarWhereInput>>;
  NOT?: InputMaybe<Array<FileScalarWhereInput>>;
  OR?: InputMaybe<Array<FileScalarWhereInput>>;
  fileId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  taskId?: InputMaybe<StringNullableFilter>;
  url?: InputMaybe<StringFilter>;
};

export type FileScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  fileId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  taskId?: InputMaybe<StringNullableWithAggregatesFilter>;
  url?: InputMaybe<StringWithAggregatesFilter>;
};

export type FileSumAggregate = {
  __typename?: 'FileSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type FileSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type FileUpdateInput = {
  fileId?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  task?: InputMaybe<TaskUpdateOneWithoutFilesNestedInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FileUpdateManyMutationInput = {
  fileId?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FileUpdateManyWithWhereWithoutTaskInput = {
  data: FileUpdateManyMutationInput;
  where: FileScalarWhereInput;
};

export type FileUpdateManyWithoutTaskNestedInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutTaskInput>>;
  create?: InputMaybe<Array<FileCreateWithoutTaskInput>>;
  createMany?: InputMaybe<FileCreateManyTaskInputEnvelope>;
  delete?: InputMaybe<Array<FileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FileWhereUniqueInput>>;
  set?: InputMaybe<Array<FileWhereUniqueInput>>;
  update?: InputMaybe<Array<FileUpdateWithWhereUniqueWithoutTaskInput>>;
  updateMany?: InputMaybe<Array<FileUpdateManyWithWhereWithoutTaskInput>>;
  upsert?: InputMaybe<Array<FileUpsertWithWhereUniqueWithoutTaskInput>>;
};

export type FileUpdateWithWhereUniqueWithoutTaskInput = {
  data: FileUpdateWithoutTaskInput;
  where: FileWhereUniqueInput;
};

export type FileUpdateWithoutTaskInput = {
  fileId?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FileUpsertWithWhereUniqueWithoutTaskInput = {
  create: FileCreateWithoutTaskInput;
  update: FileUpdateWithoutTaskInput;
  where: FileWhereUniqueInput;
};

export type FileWhereInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  NOT?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  fileId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  task?: InputMaybe<TaskNullableRelationFilter>;
  taskId?: InputMaybe<StringNullableFilter>;
  url?: InputMaybe<StringFilter>;
};

export type FileWhereUniqueInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  NOT?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  fileId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<StringFilter>;
  task?: InputMaybe<TaskNullableRelationFilter>;
  taskId?: InputMaybe<StringNullableFilter>;
  url?: InputMaybe<StringFilter>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyAccount: AffectedRowsOutput;
  createManyAndReturnAccount: Array<CreateManyAndReturnAccount>;
  createManyAndReturnFile: Array<CreateManyAndReturnFile>;
  createManyAndReturnPasswordResetToken: Array<CreateManyAndReturnPasswordResetToken>;
  createManyAndReturnPriority: Array<CreateManyAndReturnPriority>;
  createManyAndReturnStatus: Array<CreateManyAndReturnStatus>;
  createManyAndReturnTask: Array<CreateManyAndReturnTask>;
  createManyAndReturnTwoFactorConfirnation: Array<CreateManyAndReturnTwoFactorConfirnation>;
  createManyAndReturnTwoFactorToken: Array<CreateManyAndReturnTwoFactorToken>;
  createManyAndReturnUser: Array<CreateManyAndReturnUser>;
  createManyAndReturnVerificationToken: Array<CreateManyAndReturnVerificationToken>;
  createManyAndReturnWorkspace: Array<CreateManyAndReturnWorkspace>;
  createManyFile: AffectedRowsOutput;
  createManyPasswordResetToken: AffectedRowsOutput;
  createManyPriority: AffectedRowsOutput;
  createManyStatus: AffectedRowsOutput;
  createManyTask: AffectedRowsOutput;
  createManyTwoFactorConfirnation: AffectedRowsOutput;
  createManyTwoFactorToken: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyVerificationToken: AffectedRowsOutput;
  createManyWorkspace: AffectedRowsOutput;
  createOneAccount: Account;
  createOneFile: File;
  createOnePasswordResetToken: PasswordResetToken;
  createOnePriority: Priority;
  createOneStatus: Status;
  createOneTask: Task;
  createOneTwoFactorConfirnation: TwoFactorConfirnation;
  createOneTwoFactorToken: TwoFactorToken;
  createOneUser: User;
  createOneVerificationToken: VerificationToken;
  createOneWorkspace: Workspace;
  deleteManyAccount: AffectedRowsOutput;
  deleteManyFile: AffectedRowsOutput;
  deleteManyPasswordResetToken: AffectedRowsOutput;
  deleteManyPriority: AffectedRowsOutput;
  deleteManyStatus: AffectedRowsOutput;
  deleteManyTask: AffectedRowsOutput;
  deleteManyTwoFactorConfirnation: AffectedRowsOutput;
  deleteManyTwoFactorToken: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyVerificationToken: AffectedRowsOutput;
  deleteManyWorkspace: AffectedRowsOutput;
  deleteOneAccount?: Maybe<Account>;
  deleteOneFile?: Maybe<File>;
  deleteOnePasswordResetToken?: Maybe<PasswordResetToken>;
  deleteOnePriority?: Maybe<Priority>;
  deleteOneStatus?: Maybe<Status>;
  deleteOneTask?: Maybe<Task>;
  deleteOneTwoFactorConfirnation?: Maybe<TwoFactorConfirnation>;
  deleteOneTwoFactorToken?: Maybe<TwoFactorToken>;
  deleteOneUser?: Maybe<User>;
  deleteOneVerificationToken?: Maybe<VerificationToken>;
  deleteOneWorkspace?: Maybe<Workspace>;
  updateManyAccount: AffectedRowsOutput;
  updateManyFile: AffectedRowsOutput;
  updateManyPasswordResetToken: AffectedRowsOutput;
  updateManyPriority: AffectedRowsOutput;
  updateManyStatus: AffectedRowsOutput;
  updateManyTask: AffectedRowsOutput;
  updateManyTwoFactorConfirnation: AffectedRowsOutput;
  updateManyTwoFactorToken: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyVerificationToken: AffectedRowsOutput;
  updateManyWorkspace: AffectedRowsOutput;
  updateOneAccount?: Maybe<Account>;
  updateOneFile?: Maybe<File>;
  updateOnePasswordResetToken?: Maybe<PasswordResetToken>;
  updateOnePriority?: Maybe<Priority>;
  updateOneStatus?: Maybe<Status>;
  updateOneTask?: Maybe<Task>;
  updateOneTwoFactorConfirnation?: Maybe<TwoFactorConfirnation>;
  updateOneTwoFactorToken?: Maybe<TwoFactorToken>;
  updateOneUser?: Maybe<User>;
  updateOneVerificationToken?: Maybe<VerificationToken>;
  updateOneWorkspace?: Maybe<Workspace>;
  upsertOneAccount: Account;
  upsertOneFile: File;
  upsertOnePasswordResetToken: PasswordResetToken;
  upsertOnePriority: Priority;
  upsertOneStatus: Status;
  upsertOneTask: Task;
  upsertOneTwoFactorConfirnation: TwoFactorConfirnation;
  upsertOneTwoFactorToken: TwoFactorToken;
  upsertOneUser: User;
  upsertOneVerificationToken: VerificationToken;
  upsertOneWorkspace: Workspace;
};


export type MutationCreateManyAccountArgs = {
  data: Array<AccountCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAndReturnAccountArgs = {
  data: Array<AccountCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAndReturnFileArgs = {
  data: Array<FileCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAndReturnPasswordResetTokenArgs = {
  data: Array<PasswordResetTokenCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAndReturnPriorityArgs = {
  data: Array<PriorityCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAndReturnStatusArgs = {
  data: Array<StatusCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAndReturnTaskArgs = {
  data: Array<TaskCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAndReturnTwoFactorConfirnationArgs = {
  data: Array<TwoFactorConfirnationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAndReturnTwoFactorTokenArgs = {
  data: Array<TwoFactorTokenCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAndReturnUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAndReturnVerificationTokenArgs = {
  data: Array<VerificationTokenCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAndReturnWorkspaceArgs = {
  data: Array<WorkspaceCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyFileArgs = {
  data: Array<FileCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyPasswordResetTokenArgs = {
  data: Array<PasswordResetTokenCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyPriorityArgs = {
  data: Array<PriorityCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyStatusArgs = {
  data: Array<StatusCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyTaskArgs = {
  data: Array<TaskCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyTwoFactorConfirnationArgs = {
  data: Array<TwoFactorConfirnationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyTwoFactorTokenArgs = {
  data: Array<TwoFactorTokenCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyVerificationTokenArgs = {
  data: Array<VerificationTokenCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyWorkspaceArgs = {
  data: Array<WorkspaceCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneAccountArgs = {
  data: AccountCreateInput;
};


export type MutationCreateOneFileArgs = {
  data: FileCreateInput;
};


export type MutationCreateOnePasswordResetTokenArgs = {
  data: PasswordResetTokenCreateInput;
};


export type MutationCreateOnePriorityArgs = {
  data: PriorityCreateInput;
};


export type MutationCreateOneStatusArgs = {
  data: StatusCreateInput;
};


export type MutationCreateOneTaskArgs = {
  data: TaskCreateInput;
};


export type MutationCreateOneTwoFactorConfirnationArgs = {
  data: TwoFactorConfirnationCreateInput;
};


export type MutationCreateOneTwoFactorTokenArgs = {
  data: TwoFactorTokenCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateOneVerificationTokenArgs = {
  data: VerificationTokenCreateInput;
};


export type MutationCreateOneWorkspaceArgs = {
  data: WorkspaceCreateInput;
};


export type MutationDeleteManyAccountArgs = {
  where?: InputMaybe<AccountWhereInput>;
};


export type MutationDeleteManyFileArgs = {
  where?: InputMaybe<FileWhereInput>;
};


export type MutationDeleteManyPasswordResetTokenArgs = {
  where?: InputMaybe<PasswordResetTokenWhereInput>;
};


export type MutationDeleteManyPriorityArgs = {
  where?: InputMaybe<PriorityWhereInput>;
};


export type MutationDeleteManyStatusArgs = {
  where?: InputMaybe<StatusWhereInput>;
};


export type MutationDeleteManyTaskArgs = {
  where?: InputMaybe<TaskWhereInput>;
};


export type MutationDeleteManyTwoFactorConfirnationArgs = {
  where?: InputMaybe<TwoFactorConfirnationWhereInput>;
};


export type MutationDeleteManyTwoFactorTokenArgs = {
  where?: InputMaybe<TwoFactorTokenWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyVerificationTokenArgs = {
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type MutationDeleteManyWorkspaceArgs = {
  where?: InputMaybe<WorkspaceWhereInput>;
};


export type MutationDeleteOneAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type MutationDeleteOneFileArgs = {
  where: FileWhereUniqueInput;
};


export type MutationDeleteOnePasswordResetTokenArgs = {
  where: PasswordResetTokenWhereUniqueInput;
};


export type MutationDeleteOnePriorityArgs = {
  where: PriorityWhereUniqueInput;
};


export type MutationDeleteOneStatusArgs = {
  where: StatusWhereUniqueInput;
};


export type MutationDeleteOneTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type MutationDeleteOneTwoFactorConfirnationArgs = {
  where: TwoFactorConfirnationWhereUniqueInput;
};


export type MutationDeleteOneTwoFactorTokenArgs = {
  where: TwoFactorTokenWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteOneVerificationTokenArgs = {
  where: VerificationTokenWhereUniqueInput;
};


export type MutationDeleteOneWorkspaceArgs = {
  where: WorkspaceWhereUniqueInput;
};


export type MutationUpdateManyAccountArgs = {
  data: AccountUpdateManyMutationInput;
  where?: InputMaybe<AccountWhereInput>;
};


export type MutationUpdateManyFileArgs = {
  data: FileUpdateManyMutationInput;
  where?: InputMaybe<FileWhereInput>;
};


export type MutationUpdateManyPasswordResetTokenArgs = {
  data: PasswordResetTokenUpdateManyMutationInput;
  where?: InputMaybe<PasswordResetTokenWhereInput>;
};


export type MutationUpdateManyPriorityArgs = {
  data: PriorityUpdateManyMutationInput;
  where?: InputMaybe<PriorityWhereInput>;
};


export type MutationUpdateManyStatusArgs = {
  data: StatusUpdateManyMutationInput;
  where?: InputMaybe<StatusWhereInput>;
};


export type MutationUpdateManyTaskArgs = {
  data: TaskUpdateManyMutationInput;
  where?: InputMaybe<TaskWhereInput>;
};


export type MutationUpdateManyTwoFactorConfirnationArgs = {
  data: TwoFactorConfirnationUpdateManyMutationInput;
  where?: InputMaybe<TwoFactorConfirnationWhereInput>;
};


export type MutationUpdateManyTwoFactorTokenArgs = {
  data: TwoFactorTokenUpdateManyMutationInput;
  where?: InputMaybe<TwoFactorTokenWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyVerificationTokenArgs = {
  data: VerificationTokenUpdateManyMutationInput;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type MutationUpdateManyWorkspaceArgs = {
  data: WorkspaceUpdateManyMutationInput;
  where?: InputMaybe<WorkspaceWhereInput>;
};


export type MutationUpdateOneAccountArgs = {
  data: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpdateOneFileArgs = {
  data: FileUpdateInput;
  where: FileWhereUniqueInput;
};


export type MutationUpdateOnePasswordResetTokenArgs = {
  data: PasswordResetTokenUpdateInput;
  where: PasswordResetTokenWhereUniqueInput;
};


export type MutationUpdateOnePriorityArgs = {
  data: PriorityUpdateInput;
  where: PriorityWhereUniqueInput;
};


export type MutationUpdateOneStatusArgs = {
  data: StatusUpdateInput;
  where: StatusWhereUniqueInput;
};


export type MutationUpdateOneTaskArgs = {
  data: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};


export type MutationUpdateOneTwoFactorConfirnationArgs = {
  data: TwoFactorConfirnationUpdateInput;
  where: TwoFactorConfirnationWhereUniqueInput;
};


export type MutationUpdateOneTwoFactorTokenArgs = {
  data: TwoFactorTokenUpdateInput;
  where: TwoFactorTokenWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneVerificationTokenArgs = {
  data: VerificationTokenUpdateInput;
  where: VerificationTokenWhereUniqueInput;
};


export type MutationUpdateOneWorkspaceArgs = {
  data: WorkspaceUpdateInput;
  where: WorkspaceWhereUniqueInput;
};


export type MutationUpsertOneAccountArgs = {
  create: AccountCreateInput;
  update: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpsertOneFileArgs = {
  create: FileCreateInput;
  update: FileUpdateInput;
  where: FileWhereUniqueInput;
};


export type MutationUpsertOnePasswordResetTokenArgs = {
  create: PasswordResetTokenCreateInput;
  update: PasswordResetTokenUpdateInput;
  where: PasswordResetTokenWhereUniqueInput;
};


export type MutationUpsertOnePriorityArgs = {
  create: PriorityCreateInput;
  update: PriorityUpdateInput;
  where: PriorityWhereUniqueInput;
};


export type MutationUpsertOneStatusArgs = {
  create: StatusCreateInput;
  update: StatusUpdateInput;
  where: StatusWhereUniqueInput;
};


export type MutationUpsertOneTaskArgs = {
  create: TaskCreateInput;
  update: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};


export type MutationUpsertOneTwoFactorConfirnationArgs = {
  create: TwoFactorConfirnationCreateInput;
  update: TwoFactorConfirnationUpdateInput;
  where: TwoFactorConfirnationWhereUniqueInput;
};


export type MutationUpsertOneTwoFactorTokenArgs = {
  create: TwoFactorTokenCreateInput;
  update: TwoFactorTokenUpdateInput;
  where: TwoFactorTokenWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneVerificationTokenArgs = {
  create: VerificationTokenCreateInput;
  update: VerificationTokenUpdateInput;
  where: VerificationTokenWhereUniqueInput;
};


export type MutationUpsertOneWorkspaceArgs = {
  create: WorkspaceCreateInput;
  update: WorkspaceUpdateInput;
  where: WorkspaceWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleFilter>;
  _min?: InputMaybe<NestedEnumRoleFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumStatusTypeFilter = {
  equals?: InputMaybe<StatusType>;
  in?: InputMaybe<Array<StatusType>>;
  not?: InputMaybe<NestedEnumStatusTypeFilter>;
  notIn?: InputMaybe<Array<StatusType>>;
};

export type NestedEnumStatusTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStatusTypeFilter>;
  _min?: InputMaybe<NestedEnumStatusTypeFilter>;
  equals?: InputMaybe<StatusType>;
  in?: InputMaybe<Array<StatusType>>;
  not?: InputMaybe<NestedEnumStatusTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<StatusType>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type PasswordResetToken = {
  __typename?: 'PasswordResetToken';
  email: Scalars['String']['output'];
  expires: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type PasswordResetTokenCountAggregate = {
  __typename?: 'PasswordResetTokenCountAggregate';
  _all: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  expires: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  token: Scalars['Int']['output'];
};

export type PasswordResetTokenCountOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type PasswordResetTokenCreateInput = {
  email: Scalars['String']['input'];
  expires: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type PasswordResetTokenCreateManyInput = {
  email: Scalars['String']['input'];
  expires: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type PasswordResetTokenEmailTokenCompoundUniqueInput = {
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type PasswordResetTokenGroupBy = {
  __typename?: 'PasswordResetTokenGroupBy';
  _count?: Maybe<PasswordResetTokenCountAggregate>;
  _max?: Maybe<PasswordResetTokenMaxAggregate>;
  _min?: Maybe<PasswordResetTokenMinAggregate>;
  email: Scalars['String']['output'];
  expires: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type PasswordResetTokenMaxAggregate = {
  __typename?: 'PasswordResetTokenMaxAggregate';
  email?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type PasswordResetTokenMaxOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type PasswordResetTokenMinAggregate = {
  __typename?: 'PasswordResetTokenMinAggregate';
  email?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type PasswordResetTokenMinOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type PasswordResetTokenOrderByWithAggregationInput = {
  _count?: InputMaybe<PasswordResetTokenCountOrderByAggregateInput>;
  _max?: InputMaybe<PasswordResetTokenMaxOrderByAggregateInput>;
  _min?: InputMaybe<PasswordResetTokenMinOrderByAggregateInput>;
  email?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type PasswordResetTokenOrderByWithRelationInput = {
  email?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export enum PasswordResetTokenScalarFieldEnum {
  Email = 'email',
  Expires = 'expires',
  Id = 'id',
  Token = 'token'
}

export type PasswordResetTokenScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PasswordResetTokenScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PasswordResetTokenScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PasswordResetTokenScalarWhereWithAggregatesInput>>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  expires?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  token?: InputMaybe<StringWithAggregatesFilter>;
};

export type PasswordResetTokenUpdateInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PasswordResetTokenUpdateManyMutationInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PasswordResetTokenWhereInput = {
  AND?: InputMaybe<Array<PasswordResetTokenWhereInput>>;
  NOT?: InputMaybe<Array<PasswordResetTokenWhereInput>>;
  OR?: InputMaybe<Array<PasswordResetTokenWhereInput>>;
  email?: InputMaybe<StringFilter>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
};

export type PasswordResetTokenWhereUniqueInput = {
  AND?: InputMaybe<Array<PasswordResetTokenWhereInput>>;
  NOT?: InputMaybe<Array<PasswordResetTokenWhereInput>>;
  OR?: InputMaybe<Array<PasswordResetTokenWhereInput>>;
  email?: InputMaybe<StringFilter>;
  email_token?: InputMaybe<PasswordResetTokenEmailTokenCompoundUniqueInput>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type Priority = {
  __typename?: 'Priority';
  color: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type PriorityAvgAggregate = {
  __typename?: 'PriorityAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type PriorityAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type PriorityCountAggregate = {
  __typename?: 'PriorityCountAggregate';
  _all: Scalars['Int']['output'];
  color: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type PriorityCountOrderByAggregateInput = {
  color?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type PriorityCreateInput = {
  color: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type PriorityCreateManyInput = {
  color: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type PriorityGroupBy = {
  __typename?: 'PriorityGroupBy';
  _avg?: Maybe<PriorityAvgAggregate>;
  _count?: Maybe<PriorityCountAggregate>;
  _max?: Maybe<PriorityMaxAggregate>;
  _min?: Maybe<PriorityMinAggregate>;
  _sum?: Maybe<PrioritySumAggregate>;
  color: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type PriorityMaxAggregate = {
  __typename?: 'PriorityMaxAggregate';
  color?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type PriorityMaxOrderByAggregateInput = {
  color?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type PriorityMinAggregate = {
  __typename?: 'PriorityMinAggregate';
  color?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type PriorityMinOrderByAggregateInput = {
  color?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type PriorityOrderByWithAggregationInput = {
  _avg?: InputMaybe<PriorityAvgOrderByAggregateInput>;
  _count?: InputMaybe<PriorityCountOrderByAggregateInput>;
  _max?: InputMaybe<PriorityMaxOrderByAggregateInput>;
  _min?: InputMaybe<PriorityMinOrderByAggregateInput>;
  _sum?: InputMaybe<PrioritySumOrderByAggregateInput>;
  color?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type PriorityOrderByWithRelationInput = {
  color?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export enum PriorityScalarFieldEnum {
  Color = 'color',
  Id = 'id',
  Name = 'name'
}

export type PriorityScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PriorityScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PriorityScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PriorityScalarWhereWithAggregatesInput>>;
  color?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type PrioritySumAggregate = {
  __typename?: 'PrioritySumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type PrioritySumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type PriorityUpdateInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PriorityUpdateManyMutationInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PriorityWhereInput = {
  AND?: InputMaybe<Array<PriorityWhereInput>>;
  NOT?: InputMaybe<Array<PriorityWhereInput>>;
  OR?: InputMaybe<Array<PriorityWhereInput>>;
  color?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type PriorityWhereUniqueInput = {
  AND?: InputMaybe<Array<PriorityWhereInput>>;
  NOT?: InputMaybe<Array<PriorityWhereInput>>;
  OR?: InputMaybe<Array<PriorityWhereInput>>;
  color?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<StringFilter>;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accounts: Array<Account>;
  aggregateAccount: AggregateAccount;
  aggregateFile: AggregateFile;
  aggregatePasswordResetToken: AggregatePasswordResetToken;
  aggregatePriority: AggregatePriority;
  aggregateStatus: AggregateStatus;
  aggregateTask: AggregateTask;
  aggregateTwoFactorConfirnation: AggregateTwoFactorConfirnation;
  aggregateTwoFactorToken: AggregateTwoFactorToken;
  aggregateUser: AggregateUser;
  aggregateVerificationToken: AggregateVerificationToken;
  aggregateWorkspace: AggregateWorkspace;
  file?: Maybe<File>;
  files: Array<File>;
  findFirstAccount?: Maybe<Account>;
  findFirstAccountOrThrow?: Maybe<Account>;
  findFirstFile?: Maybe<File>;
  findFirstFileOrThrow?: Maybe<File>;
  findFirstPasswordResetToken?: Maybe<PasswordResetToken>;
  findFirstPasswordResetTokenOrThrow?: Maybe<PasswordResetToken>;
  findFirstPriority?: Maybe<Priority>;
  findFirstPriorityOrThrow?: Maybe<Priority>;
  findFirstStatus?: Maybe<Status>;
  findFirstStatusOrThrow?: Maybe<Status>;
  findFirstTask?: Maybe<Task>;
  findFirstTaskOrThrow?: Maybe<Task>;
  findFirstTwoFactorConfirnation?: Maybe<TwoFactorConfirnation>;
  findFirstTwoFactorConfirnationOrThrow?: Maybe<TwoFactorConfirnation>;
  findFirstTwoFactorToken?: Maybe<TwoFactorToken>;
  findFirstTwoFactorTokenOrThrow?: Maybe<TwoFactorToken>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  findFirstVerificationToken?: Maybe<VerificationToken>;
  findFirstVerificationTokenOrThrow?: Maybe<VerificationToken>;
  findFirstWorkspace?: Maybe<Workspace>;
  findFirstWorkspaceOrThrow?: Maybe<Workspace>;
  getAccount?: Maybe<Account>;
  getFile?: Maybe<File>;
  getPasswordResetToken?: Maybe<PasswordResetToken>;
  getPriority?: Maybe<Priority>;
  getStatus?: Maybe<Status>;
  getTask?: Maybe<Task>;
  getTwoFactorConfirnation?: Maybe<TwoFactorConfirnation>;
  getTwoFactorToken?: Maybe<TwoFactorToken>;
  getUser?: Maybe<User>;
  getVerificationToken?: Maybe<VerificationToken>;
  getWorkspace?: Maybe<Workspace>;
  groupByAccount: Array<AccountGroupBy>;
  groupByFile: Array<FileGroupBy>;
  groupByPasswordResetToken: Array<PasswordResetTokenGroupBy>;
  groupByPriority: Array<PriorityGroupBy>;
  groupByStatus: Array<StatusGroupBy>;
  groupByTask: Array<TaskGroupBy>;
  groupByTwoFactorConfirnation: Array<TwoFactorConfirnationGroupBy>;
  groupByTwoFactorToken: Array<TwoFactorTokenGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByVerificationToken: Array<VerificationTokenGroupBy>;
  groupByWorkspace: Array<WorkspaceGroupBy>;
  passwordResetToken?: Maybe<PasswordResetToken>;
  passwordResetTokens: Array<PasswordResetToken>;
  priorities: Array<Priority>;
  priority?: Maybe<Priority>;
  status?: Maybe<Status>;
  statuses: Array<Status>;
  task?: Maybe<Task>;
  tasks: Array<Task>;
  twoFactorConfirnation?: Maybe<TwoFactorConfirnation>;
  twoFactorConfirnations: Array<TwoFactorConfirnation>;
  twoFactorToken?: Maybe<TwoFactorToken>;
  twoFactorTokens: Array<TwoFactorToken>;
  user?: Maybe<User>;
  users: Array<User>;
  verificationToken?: Maybe<VerificationToken>;
  verificationTokens: Array<VerificationToken>;
  workspace?: Maybe<Workspace>;
  workspaces: Array<Workspace>;
};


export type QueryAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type QueryAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryAggregateAccountArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryAggregateFileArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryAggregatePasswordResetTokenArgs = {
  cursor?: InputMaybe<PasswordResetTokenWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PasswordResetTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PasswordResetTokenWhereInput>;
};


export type QueryAggregatePriorityArgs = {
  cursor?: InputMaybe<PriorityWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PriorityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PriorityWhereInput>;
};


export type QueryAggregateStatusArgs = {
  cursor?: InputMaybe<StatusWhereUniqueInput>;
  orderBy?: InputMaybe<Array<StatusOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StatusWhereInput>;
};


export type QueryAggregateTaskArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type QueryAggregateTwoFactorConfirnationArgs = {
  cursor?: InputMaybe<TwoFactorConfirnationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TwoFactorConfirnationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TwoFactorConfirnationWhereInput>;
};


export type QueryAggregateTwoFactorTokenArgs = {
  cursor?: InputMaybe<TwoFactorTokenWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TwoFactorTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TwoFactorTokenWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateVerificationTokenArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryAggregateWorkspaceArgs = {
  cursor?: InputMaybe<WorkspaceWhereUniqueInput>;
  orderBy?: InputMaybe<Array<WorkspaceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WorkspaceWhereInput>;
};


export type QueryFileArgs = {
  where: FileWhereUniqueInput;
};


export type QueryFilesArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryFindFirstAccountArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryFindFirstAccountOrThrowArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryFindFirstFileArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryFindFirstFileOrThrowArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryFindFirstPasswordResetTokenArgs = {
  cursor?: InputMaybe<PasswordResetTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<PasswordResetTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PasswordResetTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PasswordResetTokenWhereInput>;
};


export type QueryFindFirstPasswordResetTokenOrThrowArgs = {
  cursor?: InputMaybe<PasswordResetTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<PasswordResetTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PasswordResetTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PasswordResetTokenWhereInput>;
};


export type QueryFindFirstPriorityArgs = {
  cursor?: InputMaybe<PriorityWhereUniqueInput>;
  distinct?: InputMaybe<Array<PriorityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PriorityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PriorityWhereInput>;
};


export type QueryFindFirstPriorityOrThrowArgs = {
  cursor?: InputMaybe<PriorityWhereUniqueInput>;
  distinct?: InputMaybe<Array<PriorityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PriorityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PriorityWhereInput>;
};


export type QueryFindFirstStatusArgs = {
  cursor?: InputMaybe<StatusWhereUniqueInput>;
  distinct?: InputMaybe<Array<StatusScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StatusOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StatusWhereInput>;
};


export type QueryFindFirstStatusOrThrowArgs = {
  cursor?: InputMaybe<StatusWhereUniqueInput>;
  distinct?: InputMaybe<Array<StatusScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StatusOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StatusWhereInput>;
};


export type QueryFindFirstTaskArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  distinct?: InputMaybe<Array<TaskScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type QueryFindFirstTaskOrThrowArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  distinct?: InputMaybe<Array<TaskScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type QueryFindFirstTwoFactorConfirnationArgs = {
  cursor?: InputMaybe<TwoFactorConfirnationWhereUniqueInput>;
  distinct?: InputMaybe<Array<TwoFactorConfirnationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TwoFactorConfirnationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TwoFactorConfirnationWhereInput>;
};


export type QueryFindFirstTwoFactorConfirnationOrThrowArgs = {
  cursor?: InputMaybe<TwoFactorConfirnationWhereUniqueInput>;
  distinct?: InputMaybe<Array<TwoFactorConfirnationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TwoFactorConfirnationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TwoFactorConfirnationWhereInput>;
};


export type QueryFindFirstTwoFactorTokenArgs = {
  cursor?: InputMaybe<TwoFactorTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<TwoFactorTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TwoFactorTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TwoFactorTokenWhereInput>;
};


export type QueryFindFirstTwoFactorTokenOrThrowArgs = {
  cursor?: InputMaybe<TwoFactorTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<TwoFactorTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TwoFactorTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TwoFactorTokenWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstVerificationTokenArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryFindFirstVerificationTokenOrThrowArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryFindFirstWorkspaceArgs = {
  cursor?: InputMaybe<WorkspaceWhereUniqueInput>;
  distinct?: InputMaybe<Array<WorkspaceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<WorkspaceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WorkspaceWhereInput>;
};


export type QueryFindFirstWorkspaceOrThrowArgs = {
  cursor?: InputMaybe<WorkspaceWhereUniqueInput>;
  distinct?: InputMaybe<Array<WorkspaceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<WorkspaceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WorkspaceWhereInput>;
};


export type QueryGetAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type QueryGetFileArgs = {
  where: FileWhereUniqueInput;
};


export type QueryGetPasswordResetTokenArgs = {
  where: PasswordResetTokenWhereUniqueInput;
};


export type QueryGetPriorityArgs = {
  where: PriorityWhereUniqueInput;
};


export type QueryGetStatusArgs = {
  where: StatusWhereUniqueInput;
};


export type QueryGetTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type QueryGetTwoFactorConfirnationArgs = {
  where: TwoFactorConfirnationWhereUniqueInput;
};


export type QueryGetTwoFactorTokenArgs = {
  where: TwoFactorTokenWhereUniqueInput;
};


export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGetVerificationTokenArgs = {
  where: VerificationTokenWhereUniqueInput;
};


export type QueryGetWorkspaceArgs = {
  where: WorkspaceWhereUniqueInput;
};


export type QueryGroupByAccountArgs = {
  by: Array<AccountScalarFieldEnum>;
  having?: InputMaybe<AccountScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryGroupByFileArgs = {
  by: Array<FileScalarFieldEnum>;
  having?: InputMaybe<FileScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<FileOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryGroupByPasswordResetTokenArgs = {
  by: Array<PasswordResetTokenScalarFieldEnum>;
  having?: InputMaybe<PasswordResetTokenScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PasswordResetTokenOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PasswordResetTokenWhereInput>;
};


export type QueryGroupByPriorityArgs = {
  by: Array<PriorityScalarFieldEnum>;
  having?: InputMaybe<PriorityScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PriorityOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PriorityWhereInput>;
};


export type QueryGroupByStatusArgs = {
  by: Array<StatusScalarFieldEnum>;
  having?: InputMaybe<StatusScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<StatusOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StatusWhereInput>;
};


export type QueryGroupByTaskArgs = {
  by: Array<TaskScalarFieldEnum>;
  having?: InputMaybe<TaskScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TaskOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type QueryGroupByTwoFactorConfirnationArgs = {
  by: Array<TwoFactorConfirnationScalarFieldEnum>;
  having?: InputMaybe<TwoFactorConfirnationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TwoFactorConfirnationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TwoFactorConfirnationWhereInput>;
};


export type QueryGroupByTwoFactorTokenArgs = {
  by: Array<TwoFactorTokenScalarFieldEnum>;
  having?: InputMaybe<TwoFactorTokenScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TwoFactorTokenOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TwoFactorTokenWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByVerificationTokenArgs = {
  by: Array<VerificationTokenScalarFieldEnum>;
  having?: InputMaybe<VerificationTokenScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryGroupByWorkspaceArgs = {
  by: Array<WorkspaceScalarFieldEnum>;
  having?: InputMaybe<WorkspaceScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<WorkspaceOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WorkspaceWhereInput>;
};


export type QueryPasswordResetTokenArgs = {
  where: PasswordResetTokenWhereUniqueInput;
};


export type QueryPasswordResetTokensArgs = {
  cursor?: InputMaybe<PasswordResetTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<PasswordResetTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PasswordResetTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PasswordResetTokenWhereInput>;
};


export type QueryPrioritiesArgs = {
  cursor?: InputMaybe<PriorityWhereUniqueInput>;
  distinct?: InputMaybe<Array<PriorityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PriorityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PriorityWhereInput>;
};


export type QueryPriorityArgs = {
  where: PriorityWhereUniqueInput;
};


export type QueryStatusArgs = {
  where: StatusWhereUniqueInput;
};


export type QueryStatusesArgs = {
  cursor?: InputMaybe<StatusWhereUniqueInput>;
  distinct?: InputMaybe<Array<StatusScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StatusOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StatusWhereInput>;
};


export type QueryTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type QueryTasksArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  distinct?: InputMaybe<Array<TaskScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type QueryTwoFactorConfirnationArgs = {
  where: TwoFactorConfirnationWhereUniqueInput;
};


export type QueryTwoFactorConfirnationsArgs = {
  cursor?: InputMaybe<TwoFactorConfirnationWhereUniqueInput>;
  distinct?: InputMaybe<Array<TwoFactorConfirnationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TwoFactorConfirnationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TwoFactorConfirnationWhereInput>;
};


export type QueryTwoFactorTokenArgs = {
  where: TwoFactorTokenWhereUniqueInput;
};


export type QueryTwoFactorTokensArgs = {
  cursor?: InputMaybe<TwoFactorTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<TwoFactorTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TwoFactorTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TwoFactorTokenWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryVerificationTokenArgs = {
  where: VerificationTokenWhereUniqueInput;
};


export type QueryVerificationTokensArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryWorkspaceArgs = {
  where: WorkspaceWhereUniqueInput;
};


export type QueryWorkspacesArgs = {
  cursor?: InputMaybe<WorkspaceWhereUniqueInput>;
  distinct?: InputMaybe<Array<WorkspaceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<WorkspaceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WorkspaceWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum Role {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  User = 'USER'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type Status = {
  __typename?: 'Status';
  _count?: Maybe<StatusCount>;
  color: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  priorityTasks: Array<Task>;
  statusTasks: Array<Task>;
  type: StatusType;
  user: User;
  userId: Scalars['String']['output'];
};


export type StatusPriorityTasksArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  distinct?: InputMaybe<Array<TaskScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type StatusStatusTasksArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  distinct?: InputMaybe<Array<TaskScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskWhereInput>;
};

export type StatusAvgAggregate = {
  __typename?: 'StatusAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type StatusAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type StatusCount = {
  __typename?: 'StatusCount';
  priorityTasks: Scalars['Int']['output'];
  statusTasks: Scalars['Int']['output'];
};


export type StatusCountPriorityTasksArgs = {
  where?: InputMaybe<TaskWhereInput>;
};


export type StatusCountStatusTasksArgs = {
  where?: InputMaybe<TaskWhereInput>;
};

export type StatusCountAggregate = {
  __typename?: 'StatusCountAggregate';
  _all: Scalars['Int']['output'];
  color: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type StatusCountOrderByAggregateInput = {
  color?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type StatusCreateInput = {
  color: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  priorityTasks?: InputMaybe<TaskCreateNestedManyWithoutPriorityInput>;
  statusTasks?: InputMaybe<TaskCreateNestedManyWithoutStatusInput>;
  type?: InputMaybe<StatusType>;
  user: UserCreateNestedOneWithoutStatusInput;
};

export type StatusCreateManyInput = {
  color: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<StatusType>;
  userId: Scalars['String']['input'];
};

export type StatusCreateManyUserInput = {
  color: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<StatusType>;
};

export type StatusCreateManyUserInputEnvelope = {
  data: Array<StatusCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StatusCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<StatusWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<StatusCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<StatusCreateWithoutUserInput>>;
  createMany?: InputMaybe<StatusCreateManyUserInputEnvelope>;
};

export type StatusCreateNestedOneWithoutPriorityTasksInput = {
  connect?: InputMaybe<StatusWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StatusCreateOrConnectWithoutPriorityTasksInput>;
  create?: InputMaybe<StatusCreateWithoutPriorityTasksInput>;
};

export type StatusCreateNestedOneWithoutStatusTasksInput = {
  connect?: InputMaybe<StatusWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StatusCreateOrConnectWithoutStatusTasksInput>;
  create?: InputMaybe<StatusCreateWithoutStatusTasksInput>;
};

export type StatusCreateOrConnectWithoutPriorityTasksInput = {
  create: StatusCreateWithoutPriorityTasksInput;
  where: StatusWhereUniqueInput;
};

export type StatusCreateOrConnectWithoutStatusTasksInput = {
  create: StatusCreateWithoutStatusTasksInput;
  where: StatusWhereUniqueInput;
};

export type StatusCreateOrConnectWithoutUserInput = {
  create: StatusCreateWithoutUserInput;
  where: StatusWhereUniqueInput;
};

export type StatusCreateWithoutPriorityTasksInput = {
  color: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  statusTasks?: InputMaybe<TaskCreateNestedManyWithoutStatusInput>;
  type?: InputMaybe<StatusType>;
  user: UserCreateNestedOneWithoutStatusInput;
};

export type StatusCreateWithoutStatusTasksInput = {
  color: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  priorityTasks?: InputMaybe<TaskCreateNestedManyWithoutPriorityInput>;
  type?: InputMaybe<StatusType>;
  user: UserCreateNestedOneWithoutStatusInput;
};

export type StatusCreateWithoutUserInput = {
  color: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  priorityTasks?: InputMaybe<TaskCreateNestedManyWithoutPriorityInput>;
  statusTasks?: InputMaybe<TaskCreateNestedManyWithoutStatusInput>;
  type?: InputMaybe<StatusType>;
};

export type StatusGroupBy = {
  __typename?: 'StatusGroupBy';
  _avg?: Maybe<StatusAvgAggregate>;
  _count?: Maybe<StatusCountAggregate>;
  _max?: Maybe<StatusMaxAggregate>;
  _min?: Maybe<StatusMinAggregate>;
  _sum?: Maybe<StatusSumAggregate>;
  color: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  type: StatusType;
  userId: Scalars['String']['output'];
};

export type StatusListRelationFilter = {
  every?: InputMaybe<StatusWhereInput>;
  none?: InputMaybe<StatusWhereInput>;
  some?: InputMaybe<StatusWhereInput>;
};

export type StatusMaxAggregate = {
  __typename?: 'StatusMaxAggregate';
  color?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<StatusType>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type StatusMaxOrderByAggregateInput = {
  color?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type StatusMinAggregate = {
  __typename?: 'StatusMinAggregate';
  color?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<StatusType>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type StatusMinOrderByAggregateInput = {
  color?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type StatusNullableRelationFilter = {
  is?: InputMaybe<StatusWhereInput>;
  isNot?: InputMaybe<StatusWhereInput>;
};

export type StatusOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type StatusOrderByWithAggregationInput = {
  _avg?: InputMaybe<StatusAvgOrderByAggregateInput>;
  _count?: InputMaybe<StatusCountOrderByAggregateInput>;
  _max?: InputMaybe<StatusMaxOrderByAggregateInput>;
  _min?: InputMaybe<StatusMinOrderByAggregateInput>;
  _sum?: InputMaybe<StatusSumOrderByAggregateInput>;
  color?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrderInput>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type StatusOrderByWithRelationInput = {
  color?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrderInput>;
  priorityTasks?: InputMaybe<TaskOrderByRelationAggregateInput>;
  statusTasks?: InputMaybe<TaskOrderByRelationAggregateInput>;
  type?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum StatusScalarFieldEnum {
  Color = 'color',
  Id = 'id',
  Name = 'name',
  Type = 'type',
  UserId = 'userId'
}

export type StatusScalarWhereInput = {
  AND?: InputMaybe<Array<StatusScalarWhereInput>>;
  NOT?: InputMaybe<Array<StatusScalarWhereInput>>;
  OR?: InputMaybe<Array<StatusScalarWhereInput>>;
  color?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumStatusTypeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type StatusScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<StatusScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<StatusScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<StatusScalarWhereWithAggregatesInput>>;
  color?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  type?: InputMaybe<EnumStatusTypeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type StatusSumAggregate = {
  __typename?: 'StatusSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type StatusSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export enum StatusType {
  Priority = 'PRIORITY',
  Status = 'STATUS'
}

export type StatusUpdateInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priorityTasks?: InputMaybe<TaskUpdateManyWithoutPriorityNestedInput>;
  statusTasks?: InputMaybe<TaskUpdateManyWithoutStatusNestedInput>;
  type?: InputMaybe<EnumStatusTypeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutStatusNestedInput>;
};

export type StatusUpdateManyMutationInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumStatusTypeFieldUpdateOperationsInput>;
};

export type StatusUpdateManyWithWhereWithoutUserInput = {
  data: StatusUpdateManyMutationInput;
  where: StatusScalarWhereInput;
};

export type StatusUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<StatusWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<StatusCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<StatusCreateWithoutUserInput>>;
  createMany?: InputMaybe<StatusCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<StatusWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<StatusScalarWhereInput>>;
  disconnect?: InputMaybe<Array<StatusWhereUniqueInput>>;
  set?: InputMaybe<Array<StatusWhereUniqueInput>>;
  update?: InputMaybe<Array<StatusUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<StatusUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<StatusUpsertWithWhereUniqueWithoutUserInput>>;
};

export type StatusUpdateOneWithoutPriorityTasksNestedInput = {
  connect?: InputMaybe<StatusWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StatusCreateOrConnectWithoutPriorityTasksInput>;
  create?: InputMaybe<StatusCreateWithoutPriorityTasksInput>;
  delete?: InputMaybe<StatusWhereInput>;
  disconnect?: InputMaybe<StatusWhereInput>;
  update?: InputMaybe<StatusUpdateToOneWithWhereWithoutPriorityTasksInput>;
  upsert?: InputMaybe<StatusUpsertWithoutPriorityTasksInput>;
};

export type StatusUpdateOneWithoutStatusTasksNestedInput = {
  connect?: InputMaybe<StatusWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StatusCreateOrConnectWithoutStatusTasksInput>;
  create?: InputMaybe<StatusCreateWithoutStatusTasksInput>;
  delete?: InputMaybe<StatusWhereInput>;
  disconnect?: InputMaybe<StatusWhereInput>;
  update?: InputMaybe<StatusUpdateToOneWithWhereWithoutStatusTasksInput>;
  upsert?: InputMaybe<StatusUpsertWithoutStatusTasksInput>;
};

export type StatusUpdateToOneWithWhereWithoutPriorityTasksInput = {
  data: StatusUpdateWithoutPriorityTasksInput;
  where?: InputMaybe<StatusWhereInput>;
};

export type StatusUpdateToOneWithWhereWithoutStatusTasksInput = {
  data: StatusUpdateWithoutStatusTasksInput;
  where?: InputMaybe<StatusWhereInput>;
};

export type StatusUpdateWithWhereUniqueWithoutUserInput = {
  data: StatusUpdateWithoutUserInput;
  where: StatusWhereUniqueInput;
};

export type StatusUpdateWithoutPriorityTasksInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  statusTasks?: InputMaybe<TaskUpdateManyWithoutStatusNestedInput>;
  type?: InputMaybe<EnumStatusTypeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutStatusNestedInput>;
};

export type StatusUpdateWithoutStatusTasksInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priorityTasks?: InputMaybe<TaskUpdateManyWithoutPriorityNestedInput>;
  type?: InputMaybe<EnumStatusTypeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutStatusNestedInput>;
};

export type StatusUpdateWithoutUserInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priorityTasks?: InputMaybe<TaskUpdateManyWithoutPriorityNestedInput>;
  statusTasks?: InputMaybe<TaskUpdateManyWithoutStatusNestedInput>;
  type?: InputMaybe<EnumStatusTypeFieldUpdateOperationsInput>;
};

export type StatusUpsertWithWhereUniqueWithoutUserInput = {
  create: StatusCreateWithoutUserInput;
  update: StatusUpdateWithoutUserInput;
  where: StatusWhereUniqueInput;
};

export type StatusUpsertWithoutPriorityTasksInput = {
  create: StatusCreateWithoutPriorityTasksInput;
  update: StatusUpdateWithoutPriorityTasksInput;
  where?: InputMaybe<StatusWhereInput>;
};

export type StatusUpsertWithoutStatusTasksInput = {
  create: StatusCreateWithoutStatusTasksInput;
  update: StatusUpdateWithoutStatusTasksInput;
  where?: InputMaybe<StatusWhereInput>;
};

export type StatusWhereInput = {
  AND?: InputMaybe<Array<StatusWhereInput>>;
  NOT?: InputMaybe<Array<StatusWhereInput>>;
  OR?: InputMaybe<Array<StatusWhereInput>>;
  color?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  priorityTasks?: InputMaybe<TaskListRelationFilter>;
  statusTasks?: InputMaybe<TaskListRelationFilter>;
  type?: InputMaybe<EnumStatusTypeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type StatusWhereUniqueInput = {
  AND?: InputMaybe<Array<StatusWhereInput>>;
  NOT?: InputMaybe<Array<StatusWhereInput>>;
  OR?: InputMaybe<Array<StatusWhereInput>>;
  color?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<StringNullableFilter>;
  priorityTasks?: InputMaybe<TaskListRelationFilter>;
  statusTasks?: InputMaybe<TaskListRelationFilter>;
  type?: InputMaybe<EnumStatusTypeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Task = {
  __typename?: 'Task';
  _count?: Maybe<TaskCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  dueDate?: Maybe<Scalars['DateTimeISO']['output']>;
  files: Array<File>;
  id: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Status>;
  priorityId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Status>;
  statusId?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  workspace?: Maybe<Workspace>;
  workspaceId: Scalars['String']['output'];
};


export type TaskFilesArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FileWhereInput>;
};


export type TaskPriorityArgs = {
  where?: InputMaybe<StatusWhereInput>;
};


export type TaskStatusArgs = {
  where?: InputMaybe<StatusWhereInput>;
};


export type TaskWorkspaceArgs = {
  where?: InputMaybe<WorkspaceWhereInput>;
};

export type TaskAvgAggregate = {
  __typename?: 'TaskAvgAggregate';
  priorityId?: Maybe<Scalars['Float']['output']>;
  statusId?: Maybe<Scalars['Float']['output']>;
};

export type TaskAvgOrderByAggregateInput = {
  priorityId?: InputMaybe<SortOrder>;
  statusId?: InputMaybe<SortOrder>;
};

export type TaskCount = {
  __typename?: 'TaskCount';
  files: Scalars['Int']['output'];
};


export type TaskCountFilesArgs = {
  where?: InputMaybe<FileWhereInput>;
};

export type TaskCountAggregate = {
  __typename?: 'TaskCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  dueDate: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  message: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  note: Scalars['Int']['output'];
  priorityId: Scalars['Int']['output'];
  statusId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  workspaceId: Scalars['Int']['output'];
};

export type TaskCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  note?: InputMaybe<SortOrder>;
  priorityId?: InputMaybe<SortOrder>;
  statusId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  workspaceId?: InputMaybe<SortOrder>;
};

export type TaskCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  dueDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<FileCreateNestedManyWithoutTaskInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<StatusCreateNestedOneWithoutPriorityTasksInput>;
  status?: InputMaybe<StatusCreateNestedOneWithoutStatusTasksInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  workspace?: InputMaybe<WorkspaceCreateNestedOneWithoutTaskInput>;
};

export type TaskCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  dueDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  priorityId?: InputMaybe<Scalars['Int']['input']>;
  statusId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  workspaceId: Scalars['String']['input'];
};

export type TaskCreateManyPriorityInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  dueDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  statusId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  workspaceId: Scalars['String']['input'];
};

export type TaskCreateManyPriorityInputEnvelope = {
  data: Array<TaskCreateManyPriorityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TaskCreateManyStatusInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  dueDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  priorityId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  workspaceId: Scalars['String']['input'];
};

export type TaskCreateManyStatusInputEnvelope = {
  data: Array<TaskCreateManyStatusInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TaskCreateManyWorkspaceInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  dueDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  priorityId?: InputMaybe<Scalars['Int']['input']>;
  statusId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type TaskCreateManyWorkspaceInputEnvelope = {
  data: Array<TaskCreateManyWorkspaceInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TaskCreateNestedManyWithoutPriorityInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TaskCreateOrConnectWithoutPriorityInput>>;
  create?: InputMaybe<Array<TaskCreateWithoutPriorityInput>>;
  createMany?: InputMaybe<TaskCreateManyPriorityInputEnvelope>;
};

export type TaskCreateNestedManyWithoutStatusInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TaskCreateOrConnectWithoutStatusInput>>;
  create?: InputMaybe<Array<TaskCreateWithoutStatusInput>>;
  createMany?: InputMaybe<TaskCreateManyStatusInputEnvelope>;
};

export type TaskCreateNestedManyWithoutWorkspaceInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TaskCreateOrConnectWithoutWorkspaceInput>>;
  create?: InputMaybe<Array<TaskCreateWithoutWorkspaceInput>>;
  createMany?: InputMaybe<TaskCreateManyWorkspaceInputEnvelope>;
};

export type TaskCreateNestedOneWithoutFilesInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<TaskCreateWithoutFilesInput>;
};

export type TaskCreateOrConnectWithoutFilesInput = {
  create: TaskCreateWithoutFilesInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateOrConnectWithoutPriorityInput = {
  create: TaskCreateWithoutPriorityInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateOrConnectWithoutStatusInput = {
  create: TaskCreateWithoutStatusInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateOrConnectWithoutWorkspaceInput = {
  create: TaskCreateWithoutWorkspaceInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateWithoutFilesInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  dueDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<StatusCreateNestedOneWithoutPriorityTasksInput>;
  status?: InputMaybe<StatusCreateNestedOneWithoutStatusTasksInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  workspace?: InputMaybe<WorkspaceCreateNestedOneWithoutTaskInput>;
};

export type TaskCreateWithoutPriorityInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  dueDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<FileCreateNestedManyWithoutTaskInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<StatusCreateNestedOneWithoutStatusTasksInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  workspace?: InputMaybe<WorkspaceCreateNestedOneWithoutTaskInput>;
};

export type TaskCreateWithoutStatusInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  dueDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<FileCreateNestedManyWithoutTaskInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<StatusCreateNestedOneWithoutPriorityTasksInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  workspace?: InputMaybe<WorkspaceCreateNestedOneWithoutTaskInput>;
};

export type TaskCreateWithoutWorkspaceInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  dueDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<FileCreateNestedManyWithoutTaskInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<StatusCreateNestedOneWithoutPriorityTasksInput>;
  status?: InputMaybe<StatusCreateNestedOneWithoutStatusTasksInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type TaskGroupBy = {
  __typename?: 'TaskGroupBy';
  _avg?: Maybe<TaskAvgAggregate>;
  _count?: Maybe<TaskCountAggregate>;
  _max?: Maybe<TaskMaxAggregate>;
  _min?: Maybe<TaskMinAggregate>;
  _sum?: Maybe<TaskSumAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  dueDate?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  priorityId?: Maybe<Scalars['Int']['output']>;
  statusId?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  workspaceId: Scalars['String']['output'];
};

export type TaskListRelationFilter = {
  every?: InputMaybe<TaskWhereInput>;
  none?: InputMaybe<TaskWhereInput>;
  some?: InputMaybe<TaskWhereInput>;
};

export type TaskMaxAggregate = {
  __typename?: 'TaskMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  dueDate?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  priorityId?: Maybe<Scalars['Int']['output']>;
  statusId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  workspaceId?: Maybe<Scalars['String']['output']>;
};

export type TaskMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  note?: InputMaybe<SortOrder>;
  priorityId?: InputMaybe<SortOrder>;
  statusId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  workspaceId?: InputMaybe<SortOrder>;
};

export type TaskMinAggregate = {
  __typename?: 'TaskMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  dueDate?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  priorityId?: Maybe<Scalars['Int']['output']>;
  statusId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  workspaceId?: Maybe<Scalars['String']['output']>;
};

export type TaskMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  note?: InputMaybe<SortOrder>;
  priorityId?: InputMaybe<SortOrder>;
  statusId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  workspaceId?: InputMaybe<SortOrder>;
};

export type TaskNullableRelationFilter = {
  is?: InputMaybe<TaskWhereInput>;
  isNot?: InputMaybe<TaskWhereInput>;
};

export type TaskOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TaskOrderByWithAggregationInput = {
  _avg?: InputMaybe<TaskAvgOrderByAggregateInput>;
  _count?: InputMaybe<TaskCountOrderByAggregateInput>;
  _max?: InputMaybe<TaskMaxOrderByAggregateInput>;
  _min?: InputMaybe<TaskMinOrderByAggregateInput>;
  _sum?: InputMaybe<TaskSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  note?: InputMaybe<SortOrderInput>;
  priorityId?: InputMaybe<SortOrderInput>;
  statusId?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  workspaceId?: InputMaybe<SortOrder>;
};

export type TaskOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrderInput>;
  files?: InputMaybe<FileOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  note?: InputMaybe<SortOrderInput>;
  priority?: InputMaybe<StatusOrderByWithRelationInput>;
  priorityId?: InputMaybe<SortOrderInput>;
  status?: InputMaybe<StatusOrderByWithRelationInput>;
  statusId?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  workspace?: InputMaybe<WorkspaceOrderByWithRelationInput>;
  workspaceId?: InputMaybe<SortOrder>;
};

export enum TaskScalarFieldEnum {
  CreatedAt = 'createdAt',
  DueDate = 'dueDate',
  Id = 'id',
  Message = 'message',
  Name = 'name',
  Note = 'note',
  PriorityId = 'priorityId',
  StatusId = 'statusId',
  UpdatedAt = 'updatedAt',
  WorkspaceId = 'workspaceId'
}

export type TaskScalarWhereInput = {
  AND?: InputMaybe<Array<TaskScalarWhereInput>>;
  NOT?: InputMaybe<Array<TaskScalarWhereInput>>;
  OR?: InputMaybe<Array<TaskScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dueDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringNullableFilter>;
  priorityId?: InputMaybe<IntNullableFilter>;
  statusId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  workspaceId?: InputMaybe<StringFilter>;
};

export type TaskScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TaskScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TaskScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TaskScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  dueDate?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  message?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  note?: InputMaybe<StringNullableWithAggregatesFilter>;
  priorityId?: InputMaybe<IntNullableWithAggregatesFilter>;
  statusId?: InputMaybe<IntNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  workspaceId?: InputMaybe<StringWithAggregatesFilter>;
};

export type TaskSumAggregate = {
  __typename?: 'TaskSumAggregate';
  priorityId?: Maybe<Scalars['Int']['output']>;
  statusId?: Maybe<Scalars['Int']['output']>;
};

export type TaskSumOrderByAggregateInput = {
  priorityId?: InputMaybe<SortOrder>;
  statusId?: InputMaybe<SortOrder>;
};

export type TaskUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutTaskNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<StatusUpdateOneWithoutPriorityTasksNestedInput>;
  status?: InputMaybe<StatusUpdateOneWithoutStatusTasksNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  workspace?: InputMaybe<WorkspaceUpdateOneWithoutTaskNestedInput>;
};

export type TaskUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TaskUpdateManyWithWhereWithoutPriorityInput = {
  data: TaskUpdateManyMutationInput;
  where: TaskScalarWhereInput;
};

export type TaskUpdateManyWithWhereWithoutStatusInput = {
  data: TaskUpdateManyMutationInput;
  where: TaskScalarWhereInput;
};

export type TaskUpdateManyWithWhereWithoutWorkspaceInput = {
  data: TaskUpdateManyMutationInput;
  where: TaskScalarWhereInput;
};

export type TaskUpdateManyWithoutPriorityNestedInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TaskCreateOrConnectWithoutPriorityInput>>;
  create?: InputMaybe<Array<TaskCreateWithoutPriorityInput>>;
  createMany?: InputMaybe<TaskCreateManyPriorityInputEnvelope>;
  delete?: InputMaybe<Array<TaskWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TaskScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  set?: InputMaybe<Array<TaskWhereUniqueInput>>;
  update?: InputMaybe<Array<TaskUpdateWithWhereUniqueWithoutPriorityInput>>;
  updateMany?: InputMaybe<Array<TaskUpdateManyWithWhereWithoutPriorityInput>>;
  upsert?: InputMaybe<Array<TaskUpsertWithWhereUniqueWithoutPriorityInput>>;
};

export type TaskUpdateManyWithoutStatusNestedInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TaskCreateOrConnectWithoutStatusInput>>;
  create?: InputMaybe<Array<TaskCreateWithoutStatusInput>>;
  createMany?: InputMaybe<TaskCreateManyStatusInputEnvelope>;
  delete?: InputMaybe<Array<TaskWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TaskScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  set?: InputMaybe<Array<TaskWhereUniqueInput>>;
  update?: InputMaybe<Array<TaskUpdateWithWhereUniqueWithoutStatusInput>>;
  updateMany?: InputMaybe<Array<TaskUpdateManyWithWhereWithoutStatusInput>>;
  upsert?: InputMaybe<Array<TaskUpsertWithWhereUniqueWithoutStatusInput>>;
};

export type TaskUpdateManyWithoutWorkspaceNestedInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TaskCreateOrConnectWithoutWorkspaceInput>>;
  create?: InputMaybe<Array<TaskCreateWithoutWorkspaceInput>>;
  createMany?: InputMaybe<TaskCreateManyWorkspaceInputEnvelope>;
  delete?: InputMaybe<Array<TaskWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TaskScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  set?: InputMaybe<Array<TaskWhereUniqueInput>>;
  update?: InputMaybe<Array<TaskUpdateWithWhereUniqueWithoutWorkspaceInput>>;
  updateMany?: InputMaybe<Array<TaskUpdateManyWithWhereWithoutWorkspaceInput>>;
  upsert?: InputMaybe<Array<TaskUpsertWithWhereUniqueWithoutWorkspaceInput>>;
};

export type TaskUpdateOneWithoutFilesNestedInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<TaskCreateWithoutFilesInput>;
  delete?: InputMaybe<TaskWhereInput>;
  disconnect?: InputMaybe<TaskWhereInput>;
  update?: InputMaybe<TaskUpdateToOneWithWhereWithoutFilesInput>;
  upsert?: InputMaybe<TaskUpsertWithoutFilesInput>;
};

export type TaskUpdateToOneWithWhereWithoutFilesInput = {
  data: TaskUpdateWithoutFilesInput;
  where?: InputMaybe<TaskWhereInput>;
};

export type TaskUpdateWithWhereUniqueWithoutPriorityInput = {
  data: TaskUpdateWithoutPriorityInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpdateWithWhereUniqueWithoutStatusInput = {
  data: TaskUpdateWithoutStatusInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpdateWithWhereUniqueWithoutWorkspaceInput = {
  data: TaskUpdateWithoutWorkspaceInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpdateWithoutFilesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<StatusUpdateOneWithoutPriorityTasksNestedInput>;
  status?: InputMaybe<StatusUpdateOneWithoutStatusTasksNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  workspace?: InputMaybe<WorkspaceUpdateOneWithoutTaskNestedInput>;
};

export type TaskUpdateWithoutPriorityInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutTaskNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<StatusUpdateOneWithoutStatusTasksNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  workspace?: InputMaybe<WorkspaceUpdateOneWithoutTaskNestedInput>;
};

export type TaskUpdateWithoutStatusInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutTaskNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<StatusUpdateOneWithoutPriorityTasksNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  workspace?: InputMaybe<WorkspaceUpdateOneWithoutTaskNestedInput>;
};

export type TaskUpdateWithoutWorkspaceInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutTaskNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<StatusUpdateOneWithoutPriorityTasksNestedInput>;
  status?: InputMaybe<StatusUpdateOneWithoutStatusTasksNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TaskUpsertWithWhereUniqueWithoutPriorityInput = {
  create: TaskCreateWithoutPriorityInput;
  update: TaskUpdateWithoutPriorityInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpsertWithWhereUniqueWithoutStatusInput = {
  create: TaskCreateWithoutStatusInput;
  update: TaskUpdateWithoutStatusInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpsertWithWhereUniqueWithoutWorkspaceInput = {
  create: TaskCreateWithoutWorkspaceInput;
  update: TaskUpdateWithoutWorkspaceInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpsertWithoutFilesInput = {
  create: TaskCreateWithoutFilesInput;
  update: TaskUpdateWithoutFilesInput;
  where?: InputMaybe<TaskWhereInput>;
};

export type TaskWhereInput = {
  AND?: InputMaybe<Array<TaskWhereInput>>;
  NOT?: InputMaybe<Array<TaskWhereInput>>;
  OR?: InputMaybe<Array<TaskWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dueDate?: InputMaybe<DateTimeNullableFilter>;
  files?: InputMaybe<FileListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringNullableFilter>;
  priority?: InputMaybe<StatusNullableRelationFilter>;
  priorityId?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<StatusNullableRelationFilter>;
  statusId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  workspace?: InputMaybe<WorkspaceNullableRelationFilter>;
  workspaceId?: InputMaybe<StringFilter>;
};

export type TaskWhereUniqueInput = {
  AND?: InputMaybe<Array<TaskWhereInput>>;
  NOT?: InputMaybe<Array<TaskWhereInput>>;
  OR?: InputMaybe<Array<TaskWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dueDate?: InputMaybe<DateTimeNullableFilter>;
  files?: InputMaybe<FileListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringNullableFilter>;
  priority?: InputMaybe<StatusNullableRelationFilter>;
  priorityId?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<StatusNullableRelationFilter>;
  statusId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  workspace?: InputMaybe<WorkspaceNullableRelationFilter>;
  workspaceId?: InputMaybe<StringFilter>;
};

export type TwoFactorConfirnation = {
  __typename?: 'TwoFactorConfirnation';
  id: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type TwoFactorConfirnationCountAggregate = {
  __typename?: 'TwoFactorConfirnationCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type TwoFactorConfirnationCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TwoFactorConfirnationCreateInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  user: UserCreateNestedOneWithoutTwoFactorConfirnationInput;
};

export type TwoFactorConfirnationCreateManyInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type TwoFactorConfirnationCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<TwoFactorConfirnationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TwoFactorConfirnationCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<TwoFactorConfirnationCreateWithoutUserInput>;
};

export type TwoFactorConfirnationCreateOrConnectWithoutUserInput = {
  create: TwoFactorConfirnationCreateWithoutUserInput;
  where: TwoFactorConfirnationWhereUniqueInput;
};

export type TwoFactorConfirnationCreateWithoutUserInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type TwoFactorConfirnationGroupBy = {
  __typename?: 'TwoFactorConfirnationGroupBy';
  _count?: Maybe<TwoFactorConfirnationCountAggregate>;
  _max?: Maybe<TwoFactorConfirnationMaxAggregate>;
  _min?: Maybe<TwoFactorConfirnationMinAggregate>;
  id: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type TwoFactorConfirnationMaxAggregate = {
  __typename?: 'TwoFactorConfirnationMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type TwoFactorConfirnationMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TwoFactorConfirnationMinAggregate = {
  __typename?: 'TwoFactorConfirnationMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type TwoFactorConfirnationMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TwoFactorConfirnationNullableRelationFilter = {
  is?: InputMaybe<TwoFactorConfirnationWhereInput>;
  isNot?: InputMaybe<TwoFactorConfirnationWhereInput>;
};

export type TwoFactorConfirnationOrderByWithAggregationInput = {
  _count?: InputMaybe<TwoFactorConfirnationCountOrderByAggregateInput>;
  _max?: InputMaybe<TwoFactorConfirnationMaxOrderByAggregateInput>;
  _min?: InputMaybe<TwoFactorConfirnationMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TwoFactorConfirnationOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum TwoFactorConfirnationScalarFieldEnum {
  Id = 'id',
  UserId = 'userId'
}

export type TwoFactorConfirnationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TwoFactorConfirnationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TwoFactorConfirnationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TwoFactorConfirnationScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type TwoFactorConfirnationUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTwoFactorConfirnationNestedInput>;
};

export type TwoFactorConfirnationUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TwoFactorConfirnationUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<TwoFactorConfirnationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TwoFactorConfirnationCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<TwoFactorConfirnationCreateWithoutUserInput>;
  delete?: InputMaybe<TwoFactorConfirnationWhereInput>;
  disconnect?: InputMaybe<TwoFactorConfirnationWhereInput>;
  update?: InputMaybe<TwoFactorConfirnationUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<TwoFactorConfirnationUpsertWithoutUserInput>;
};

export type TwoFactorConfirnationUpdateToOneWithWhereWithoutUserInput = {
  data: TwoFactorConfirnationUpdateWithoutUserInput;
  where?: InputMaybe<TwoFactorConfirnationWhereInput>;
};

export type TwoFactorConfirnationUpdateWithoutUserInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TwoFactorConfirnationUpsertWithoutUserInput = {
  create: TwoFactorConfirnationCreateWithoutUserInput;
  update: TwoFactorConfirnationUpdateWithoutUserInput;
  where?: InputMaybe<TwoFactorConfirnationWhereInput>;
};

export type TwoFactorConfirnationWhereInput = {
  AND?: InputMaybe<Array<TwoFactorConfirnationWhereInput>>;
  NOT?: InputMaybe<Array<TwoFactorConfirnationWhereInput>>;
  OR?: InputMaybe<Array<TwoFactorConfirnationWhereInput>>;
  id?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TwoFactorConfirnationWhereUniqueInput = {
  AND?: InputMaybe<Array<TwoFactorConfirnationWhereInput>>;
  NOT?: InputMaybe<Array<TwoFactorConfirnationWhereInput>>;
  OR?: InputMaybe<Array<TwoFactorConfirnationWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type TwoFactorToken = {
  __typename?: 'TwoFactorToken';
  email: Scalars['String']['output'];
  expires: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type TwoFactorTokenCountAggregate = {
  __typename?: 'TwoFactorTokenCountAggregate';
  _all: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  expires: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  token: Scalars['Int']['output'];
};

export type TwoFactorTokenCountOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type TwoFactorTokenCreateInput = {
  email: Scalars['String']['input'];
  expires: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type TwoFactorTokenCreateManyInput = {
  email: Scalars['String']['input'];
  expires: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type TwoFactorTokenEmailTokenCompoundUniqueInput = {
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type TwoFactorTokenGroupBy = {
  __typename?: 'TwoFactorTokenGroupBy';
  _count?: Maybe<TwoFactorTokenCountAggregate>;
  _max?: Maybe<TwoFactorTokenMaxAggregate>;
  _min?: Maybe<TwoFactorTokenMinAggregate>;
  email: Scalars['String']['output'];
  expires: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type TwoFactorTokenMaxAggregate = {
  __typename?: 'TwoFactorTokenMaxAggregate';
  email?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type TwoFactorTokenMaxOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type TwoFactorTokenMinAggregate = {
  __typename?: 'TwoFactorTokenMinAggregate';
  email?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type TwoFactorTokenMinOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type TwoFactorTokenOrderByWithAggregationInput = {
  _count?: InputMaybe<TwoFactorTokenCountOrderByAggregateInput>;
  _max?: InputMaybe<TwoFactorTokenMaxOrderByAggregateInput>;
  _min?: InputMaybe<TwoFactorTokenMinOrderByAggregateInput>;
  email?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type TwoFactorTokenOrderByWithRelationInput = {
  email?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export enum TwoFactorTokenScalarFieldEnum {
  Email = 'email',
  Expires = 'expires',
  Id = 'id',
  Token = 'token'
}

export type TwoFactorTokenScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TwoFactorTokenScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TwoFactorTokenScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TwoFactorTokenScalarWhereWithAggregatesInput>>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  expires?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  token?: InputMaybe<StringWithAggregatesFilter>;
};

export type TwoFactorTokenUpdateInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TwoFactorTokenUpdateManyMutationInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TwoFactorTokenWhereInput = {
  AND?: InputMaybe<Array<TwoFactorTokenWhereInput>>;
  NOT?: InputMaybe<Array<TwoFactorTokenWhereInput>>;
  OR?: InputMaybe<Array<TwoFactorTokenWhereInput>>;
  email?: InputMaybe<StringFilter>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
};

export type TwoFactorTokenWhereUniqueInput = {
  AND?: InputMaybe<Array<TwoFactorTokenWhereInput>>;
  NOT?: InputMaybe<Array<TwoFactorTokenWhereInput>>;
  OR?: InputMaybe<Array<TwoFactorTokenWhereInput>>;
  email?: InputMaybe<StringFilter>;
  email_token?: InputMaybe<TwoFactorTokenEmailTokenCompoundUniqueInput>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  accounts: Array<Account>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  imageId?: Maybe<Scalars['String']['output']>;
  isTwoFactorEnable: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  role: Role;
  status: Array<Status>;
  twoFactorConfirnation?: Maybe<TwoFactorConfirnation>;
  updatedAt: Scalars['DateTimeISO']['output'];
  workspaces: Array<Workspace>;
};


export type UserAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type UserStatusArgs = {
  cursor?: InputMaybe<StatusWhereUniqueInput>;
  distinct?: InputMaybe<Array<StatusScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StatusOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StatusWhereInput>;
};


export type UserTwoFactorConfirnationArgs = {
  where?: InputMaybe<TwoFactorConfirnationWhereInput>;
};


export type UserWorkspacesArgs = {
  cursor?: InputMaybe<WorkspaceWhereUniqueInput>;
  distinct?: InputMaybe<Array<WorkspaceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<WorkspaceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WorkspaceWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  accounts: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  workspaces: Scalars['Int']['output'];
};


export type UserCountAccountsArgs = {
  where?: InputMaybe<AccountWhereInput>;
};


export type UserCountStatusArgs = {
  where?: InputMaybe<StatusWhereInput>;
};


export type UserCountWorkspacesArgs = {
  where?: InputMaybe<WorkspaceWhereInput>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  emailVerified: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['Int']['output'];
  imageId: Scalars['Int']['output'];
  isTwoFactorEnable: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  isTwoFactorEnable?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  isTwoFactorEnable?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  status?: InputMaybe<StatusCreateNestedManyWithoutUserInput>;
  twoFactorConfirnation?: InputMaybe<TwoFactorConfirnationCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  workspaces?: InputMaybe<WorkspaceCreateNestedManyWithoutUserInput>;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  isTwoFactorEnable?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateNestedOneWithoutAccountsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountsInput>;
  create?: InputMaybe<UserCreateWithoutAccountsInput>;
};

export type UserCreateNestedOneWithoutStatusInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutStatusInput>;
  create?: InputMaybe<UserCreateWithoutStatusInput>;
};

export type UserCreateNestedOneWithoutTwoFactorConfirnationInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTwoFactorConfirnationInput>;
  create?: InputMaybe<UserCreateWithoutTwoFactorConfirnationInput>;
};

export type UserCreateNestedOneWithoutWorkspacesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutWorkspacesInput>;
  create?: InputMaybe<UserCreateWithoutWorkspacesInput>;
};

export type UserCreateOrConnectWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutStatusInput = {
  create: UserCreateWithoutStatusInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTwoFactorConfirnationInput = {
  create: UserCreateWithoutTwoFactorConfirnationInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutWorkspacesInput = {
  create: UserCreateWithoutWorkspacesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAccountsInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  isTwoFactorEnable?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  status?: InputMaybe<StatusCreateNestedManyWithoutUserInput>;
  twoFactorConfirnation?: InputMaybe<TwoFactorConfirnationCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  workspaces?: InputMaybe<WorkspaceCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutStatusInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  isTwoFactorEnable?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  twoFactorConfirnation?: InputMaybe<TwoFactorConfirnationCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  workspaces?: InputMaybe<WorkspaceCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutTwoFactorConfirnationInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  isTwoFactorEnable?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  status?: InputMaybe<StatusCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  workspaces?: InputMaybe<WorkspaceCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutWorkspacesInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  isTwoFactorEnable?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  status?: InputMaybe<StatusCreateNestedManyWithoutUserInput>;
  twoFactorConfirnation?: InputMaybe<TwoFactorConfirnationCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  imageId?: Maybe<Scalars['String']['output']>;
  isTwoFactorEnable: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  role: Role;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  imageId?: Maybe<Scalars['String']['output']>;
  isTwoFactorEnable?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  isTwoFactorEnable?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  imageId?: Maybe<Scalars['String']['output']>;
  isTwoFactorEnable?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  isTwoFactorEnable?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserNullableRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  imageId?: InputMaybe<SortOrderInput>;
  isTwoFactorEnable?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrderInput>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  accounts?: InputMaybe<AccountOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  imageId?: InputMaybe<SortOrderInput>;
  isTwoFactorEnable?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrderInput>;
  role?: InputMaybe<SortOrder>;
  status?: InputMaybe<StatusOrderByRelationAggregateInput>;
  twoFactorConfirnation?: InputMaybe<TwoFactorConfirnationOrderByWithRelationInput>;
  updatedAt?: InputMaybe<SortOrder>;
  workspaces?: InputMaybe<WorkspaceOrderByRelationAggregateInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  EmailVerified = 'emailVerified',
  Id = 'id',
  Image = 'image',
  ImageId = 'imageId',
  IsTwoFactorEnable = 'isTwoFactorEnable',
  Name = 'name',
  Password = 'password',
  Role = 'role',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  emailVerified?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  image?: InputMaybe<StringNullableWithAggregatesFilter>;
  imageId?: InputMaybe<StringNullableWithAggregatesFilter>;
  isTwoFactorEnable?: InputMaybe<BoolWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringNullableWithAggregatesFilter>;
  role?: InputMaybe<EnumRoleWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserUpdateInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  imageId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isTwoFactorEnable?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  status?: InputMaybe<StatusUpdateManyWithoutUserNestedInput>;
  twoFactorConfirnation?: InputMaybe<TwoFactorConfirnationUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  workspaces?: InputMaybe<WorkspaceUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  imageId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isTwoFactorEnable?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountsInput>;
  create?: InputMaybe<UserCreateWithoutAccountsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAccountsInput>;
  upsert?: InputMaybe<UserUpsertWithoutAccountsInput>;
};

export type UserUpdateOneRequiredWithoutStatusNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutStatusInput>;
  create?: InputMaybe<UserCreateWithoutStatusInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutStatusInput>;
  upsert?: InputMaybe<UserUpsertWithoutStatusInput>;
};

export type UserUpdateOneRequiredWithoutTwoFactorConfirnationNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTwoFactorConfirnationInput>;
  create?: InputMaybe<UserCreateWithoutTwoFactorConfirnationInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutTwoFactorConfirnationInput>;
  upsert?: InputMaybe<UserUpsertWithoutTwoFactorConfirnationInput>;
};

export type UserUpdateOneWithoutWorkspacesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutWorkspacesInput>;
  create?: InputMaybe<UserCreateWithoutWorkspacesInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutWorkspacesInput>;
  upsert?: InputMaybe<UserUpsertWithoutWorkspacesInput>;
};

export type UserUpdateToOneWithWhereWithoutAccountsInput = {
  data: UserUpdateWithoutAccountsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutStatusInput = {
  data: UserUpdateWithoutStatusInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutTwoFactorConfirnationInput = {
  data: UserUpdateWithoutTwoFactorConfirnationInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutWorkspacesInput = {
  data: UserUpdateWithoutWorkspacesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutAccountsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  imageId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isTwoFactorEnable?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  status?: InputMaybe<StatusUpdateManyWithoutUserNestedInput>;
  twoFactorConfirnation?: InputMaybe<TwoFactorConfirnationUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  workspaces?: InputMaybe<WorkspaceUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutStatusInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  imageId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isTwoFactorEnable?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  twoFactorConfirnation?: InputMaybe<TwoFactorConfirnationUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  workspaces?: InputMaybe<WorkspaceUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutTwoFactorConfirnationInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  imageId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isTwoFactorEnable?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  status?: InputMaybe<StatusUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  workspaces?: InputMaybe<WorkspaceUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutWorkspacesInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  imageId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isTwoFactorEnable?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  status?: InputMaybe<StatusUpdateManyWithoutUserNestedInput>;
  twoFactorConfirnation?: InputMaybe<TwoFactorConfirnationUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput;
  update: UserUpdateWithoutAccountsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutStatusInput = {
  create: UserCreateWithoutStatusInput;
  update: UserUpdateWithoutStatusInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutTwoFactorConfirnationInput = {
  create: UserCreateWithoutTwoFactorConfirnationInput;
  update: UserUpdateWithoutTwoFactorConfirnationInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutWorkspacesInput = {
  create: UserCreateWithoutWorkspacesInput;
  update: UserUpdateWithoutWorkspacesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  imageId?: InputMaybe<StringNullableFilter>;
  isTwoFactorEnable?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  status?: InputMaybe<StatusListRelationFilter>;
  twoFactorConfirnation?: InputMaybe<TwoFactorConfirnationNullableRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  workspaces?: InputMaybe<WorkspaceListRelationFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  imageId?: InputMaybe<StringNullableFilter>;
  isTwoFactorEnable?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  status?: InputMaybe<StatusListRelationFilter>;
  twoFactorConfirnation?: InputMaybe<TwoFactorConfirnationNullableRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  workspaces?: InputMaybe<WorkspaceListRelationFilter>;
};

export type VerificationToken = {
  __typename?: 'VerificationToken';
  email: Scalars['String']['output'];
  expires: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type VerificationTokenCountAggregate = {
  __typename?: 'VerificationTokenCountAggregate';
  _all: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  expires: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  token: Scalars['Int']['output'];
};

export type VerificationTokenCountOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenCreateInput = {
  email: Scalars['String']['input'];
  expires: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type VerificationTokenCreateManyInput = {
  email: Scalars['String']['input'];
  expires: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type VerificationTokenEmailTokenCompoundUniqueInput = {
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type VerificationTokenGroupBy = {
  __typename?: 'VerificationTokenGroupBy';
  _count?: Maybe<VerificationTokenCountAggregate>;
  _max?: Maybe<VerificationTokenMaxAggregate>;
  _min?: Maybe<VerificationTokenMinAggregate>;
  email: Scalars['String']['output'];
  expires: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type VerificationTokenMaxAggregate = {
  __typename?: 'VerificationTokenMaxAggregate';
  email?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type VerificationTokenMaxOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenMinAggregate = {
  __typename?: 'VerificationTokenMinAggregate';
  email?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type VerificationTokenMinOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenOrderByWithAggregationInput = {
  _count?: InputMaybe<VerificationTokenCountOrderByAggregateInput>;
  _max?: InputMaybe<VerificationTokenMaxOrderByAggregateInput>;
  _min?: InputMaybe<VerificationTokenMinOrderByAggregateInput>;
  email?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenOrderByWithRelationInput = {
  email?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export enum VerificationTokenScalarFieldEnum {
  Email = 'email',
  Expires = 'expires',
  Id = 'id',
  Token = 'token'
}

export type VerificationTokenScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  expires?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  token?: InputMaybe<StringWithAggregatesFilter>;
};

export type VerificationTokenUpdateInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VerificationTokenUpdateManyMutationInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VerificationTokenWhereInput = {
  AND?: InputMaybe<Array<VerificationTokenWhereInput>>;
  NOT?: InputMaybe<Array<VerificationTokenWhereInput>>;
  OR?: InputMaybe<Array<VerificationTokenWhereInput>>;
  email?: InputMaybe<StringFilter>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
};

export type VerificationTokenWhereUniqueInput = {
  AND?: InputMaybe<Array<VerificationTokenWhereInput>>;
  NOT?: InputMaybe<Array<VerificationTokenWhereInput>>;
  OR?: InputMaybe<Array<VerificationTokenWhereInput>>;
  email?: InputMaybe<StringFilter>;
  email_token?: InputMaybe<VerificationTokenEmailTokenCompoundUniqueInput>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type Workspace = {
  __typename?: 'Workspace';
  _count?: Maybe<WorkspaceCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  task: Array<Task>;
  updatedAt: Scalars['DateTimeISO']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};


export type WorkspaceTaskArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  distinct?: InputMaybe<Array<TaskScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type WorkspaceUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};

export type WorkspaceCount = {
  __typename?: 'WorkspaceCount';
  task: Scalars['Int']['output'];
};


export type WorkspaceCountTaskArgs = {
  where?: InputMaybe<TaskWhereInput>;
};

export type WorkspaceCountAggregate = {
  __typename?: 'WorkspaceCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type WorkspaceCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type WorkspaceCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  task?: InputMaybe<TaskCreateNestedManyWithoutWorkspaceInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutWorkspacesInput>;
};

export type WorkspaceCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type WorkspaceCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type WorkspaceCreateManyUserInputEnvelope = {
  data: Array<WorkspaceCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WorkspaceCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<WorkspaceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WorkspaceCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<WorkspaceCreateWithoutUserInput>>;
  createMany?: InputMaybe<WorkspaceCreateManyUserInputEnvelope>;
};

export type WorkspaceCreateNestedOneWithoutTaskInput = {
  connect?: InputMaybe<WorkspaceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WorkspaceCreateOrConnectWithoutTaskInput>;
  create?: InputMaybe<WorkspaceCreateWithoutTaskInput>;
};

export type WorkspaceCreateOrConnectWithoutTaskInput = {
  create: WorkspaceCreateWithoutTaskInput;
  where: WorkspaceWhereUniqueInput;
};

export type WorkspaceCreateOrConnectWithoutUserInput = {
  create: WorkspaceCreateWithoutUserInput;
  where: WorkspaceWhereUniqueInput;
};

export type WorkspaceCreateWithoutTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutWorkspacesInput>;
};

export type WorkspaceCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  task?: InputMaybe<TaskCreateNestedManyWithoutWorkspaceInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type WorkspaceGroupBy = {
  __typename?: 'WorkspaceGroupBy';
  _count?: Maybe<WorkspaceCountAggregate>;
  _max?: Maybe<WorkspaceMaxAggregate>;
  _min?: Maybe<WorkspaceMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId?: Maybe<Scalars['String']['output']>;
};

export type WorkspaceListRelationFilter = {
  every?: InputMaybe<WorkspaceWhereInput>;
  none?: InputMaybe<WorkspaceWhereInput>;
  some?: InputMaybe<WorkspaceWhereInput>;
};

export type WorkspaceMaxAggregate = {
  __typename?: 'WorkspaceMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type WorkspaceMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type WorkspaceMinAggregate = {
  __typename?: 'WorkspaceMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type WorkspaceMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type WorkspaceNullableRelationFilter = {
  is?: InputMaybe<WorkspaceWhereInput>;
  isNot?: InputMaybe<WorkspaceWhereInput>;
};

export type WorkspaceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type WorkspaceOrderByWithAggregationInput = {
  _count?: InputMaybe<WorkspaceCountOrderByAggregateInput>;
  _max?: InputMaybe<WorkspaceMaxOrderByAggregateInput>;
  _min?: InputMaybe<WorkspaceMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrderInput>;
};

export type WorkspaceOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  task?: InputMaybe<TaskOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrderInput>;
};

export enum WorkspaceScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type WorkspaceScalarWhereInput = {
  AND?: InputMaybe<Array<WorkspaceScalarWhereInput>>;
  NOT?: InputMaybe<Array<WorkspaceScalarWhereInput>>;
  OR?: InputMaybe<Array<WorkspaceScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type WorkspaceScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<WorkspaceScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<WorkspaceScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<WorkspaceScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type WorkspaceUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  task?: InputMaybe<TaskUpdateManyWithoutWorkspaceNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutWorkspacesNestedInput>;
};

export type WorkspaceUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type WorkspaceUpdateManyWithWhereWithoutUserInput = {
  data: WorkspaceUpdateManyMutationInput;
  where: WorkspaceScalarWhereInput;
};

export type WorkspaceUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<WorkspaceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WorkspaceCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<WorkspaceCreateWithoutUserInput>>;
  createMany?: InputMaybe<WorkspaceCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<WorkspaceWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<WorkspaceScalarWhereInput>>;
  disconnect?: InputMaybe<Array<WorkspaceWhereUniqueInput>>;
  set?: InputMaybe<Array<WorkspaceWhereUniqueInput>>;
  update?: InputMaybe<Array<WorkspaceUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<WorkspaceUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<WorkspaceUpsertWithWhereUniqueWithoutUserInput>>;
};

export type WorkspaceUpdateOneWithoutTaskNestedInput = {
  connect?: InputMaybe<WorkspaceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WorkspaceCreateOrConnectWithoutTaskInput>;
  create?: InputMaybe<WorkspaceCreateWithoutTaskInput>;
  delete?: InputMaybe<WorkspaceWhereInput>;
  disconnect?: InputMaybe<WorkspaceWhereInput>;
  update?: InputMaybe<WorkspaceUpdateToOneWithWhereWithoutTaskInput>;
  upsert?: InputMaybe<WorkspaceUpsertWithoutTaskInput>;
};

export type WorkspaceUpdateToOneWithWhereWithoutTaskInput = {
  data: WorkspaceUpdateWithoutTaskInput;
  where?: InputMaybe<WorkspaceWhereInput>;
};

export type WorkspaceUpdateWithWhereUniqueWithoutUserInput = {
  data: WorkspaceUpdateWithoutUserInput;
  where: WorkspaceWhereUniqueInput;
};

export type WorkspaceUpdateWithoutTaskInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutWorkspacesNestedInput>;
};

export type WorkspaceUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  task?: InputMaybe<TaskUpdateManyWithoutWorkspaceNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type WorkspaceUpsertWithWhereUniqueWithoutUserInput = {
  create: WorkspaceCreateWithoutUserInput;
  update: WorkspaceUpdateWithoutUserInput;
  where: WorkspaceWhereUniqueInput;
};

export type WorkspaceUpsertWithoutTaskInput = {
  create: WorkspaceCreateWithoutTaskInput;
  update: WorkspaceUpdateWithoutTaskInput;
  where?: InputMaybe<WorkspaceWhereInput>;
};

export type WorkspaceWhereInput = {
  AND?: InputMaybe<Array<WorkspaceWhereInput>>;
  NOT?: InputMaybe<Array<WorkspaceWhereInput>>;
  OR?: InputMaybe<Array<WorkspaceWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  task?: InputMaybe<TaskListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type WorkspaceWhereUniqueInput = {
  AND?: InputMaybe<Array<WorkspaceWhereInput>>;
  NOT?: InputMaybe<Array<WorkspaceWhereInput>>;
  OR?: InputMaybe<Array<WorkspaceWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  task?: InputMaybe<TaskListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type FileFragment = { __typename?: 'File', id: number, url: string, fileId: string, name: string };

export type StatusFragment = { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } };

export type TaskFragment = { __typename?: 'Task', id: string, name: string, message?: string | null, note?: string | null, dueDate?: any | null, createdAt: any, updatedAt: any, status?: { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } } | null, priority?: { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } } | null, files: Array<{ __typename?: 'File', id: number, url: string, fileId: string, name: string }> };

export type WorkspaceFragment = { __typename?: 'Workspace', id: string, name: string, description?: string | null, createdAt: any, updatedAt: any, task: Array<{ __typename?: 'Task', id: string, name: string, message?: string | null, note?: string | null, dueDate?: any | null, createdAt: any, updatedAt: any, status?: { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } } | null, priority?: { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } } | null, files: Array<{ __typename?: 'File', id: number, url: string, fileId: string, name: string }> }>, user?: { __typename?: 'User', id: string } | null };

export type CreateFileMutationVariables = Exact<{
  data: FileCreateInput;
}>;


export type CreateFileMutation = { __typename?: 'Mutation', createOneFile: { __typename?: 'File', id: number, url: string, fileId: string, name: string } };

export type CreateStatusMutationVariables = Exact<{
  data: StatusCreateInput;
}>;


export type CreateStatusMutation = { __typename?: 'Mutation', createOneStatus: { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } } };

export type CreateTaskMutationVariables = Exact<{
  data: TaskCreateInput;
}>;


export type CreateTaskMutation = { __typename?: 'Mutation', createOneTask: { __typename?: 'Task', id: string, name: string, message?: string | null, note?: string | null, dueDate?: any | null, createdAt: any, updatedAt: any, status?: { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } } | null, priority?: { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } } | null, files: Array<{ __typename?: 'File', id: number, url: string, fileId: string, name: string }> } };

export type CreateWorkspaceMutationVariables = Exact<{
  data: WorkspaceCreateInput;
}>;


export type CreateWorkspaceMutation = { __typename?: 'Mutation', createOneWorkspace: { __typename?: 'Workspace', id: string, name: string, description?: string | null, createdAt: any, updatedAt: any, task: Array<{ __typename?: 'Task', id: string, name: string, message?: string | null, note?: string | null, dueDate?: any | null, createdAt: any, updatedAt: any, status?: { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } } | null, priority?: { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } } | null, files: Array<{ __typename?: 'File', id: number, url: string, fileId: string, name: string }> }>, user?: { __typename?: 'User', id: string } | null } };

export type DeleteFileMutationVariables = Exact<{
  where: FileWhereUniqueInput;
}>;


export type DeleteFileMutation = { __typename?: 'Mutation', deleteOneFile?: { __typename?: 'File', id: number, url: string, fileId: string, name: string } | null };

export type DeleteStatusesMutationVariables = Exact<{
  where?: InputMaybe<StatusWhereInput>;
}>;


export type DeleteStatusesMutation = { __typename?: 'Mutation', deleteManyStatus: { __typename?: 'AffectedRowsOutput', count: number } };

export type DeleteTasksMutationVariables = Exact<{
  where?: InputMaybe<TaskWhereInput>;
}>;


export type DeleteTasksMutation = { __typename?: 'Mutation', deleteManyTask: { __typename?: 'AffectedRowsOutput', count: number } };

export type DeleteWorkspaceMutationVariables = Exact<{
  where: WorkspaceWhereUniqueInput;
}>;


export type DeleteWorkspaceMutation = { __typename?: 'Mutation', deleteOneWorkspace?: { __typename?: 'Workspace', id: string, name: string, description?: string | null, createdAt: any, updatedAt: any, task: Array<{ __typename?: 'Task', id: string, name: string, message?: string | null, note?: string | null, dueDate?: any | null, createdAt: any, updatedAt: any, status?: { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } } | null, priority?: { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } } | null, files: Array<{ __typename?: 'File', id: number, url: string, fileId: string, name: string }> }>, user?: { __typename?: 'User', id: string } | null } | null };

export type UpdateWorkspaceMutationVariables = Exact<{
  data: WorkspaceUpdateInput;
  where: WorkspaceWhereUniqueInput;
}>;


export type UpdateWorkspaceMutation = { __typename?: 'Mutation', updateOneWorkspace?: { __typename?: 'Workspace', id: string, name: string, description?: string | null, createdAt: any, updatedAt: any, task: Array<{ __typename?: 'Task', id: string, name: string, message?: string | null, note?: string | null, dueDate?: any | null, createdAt: any, updatedAt: any, status?: { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } } | null, priority?: { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } } | null, files: Array<{ __typename?: 'File', id: number, url: string, fileId: string, name: string }> }>, user?: { __typename?: 'User', id: string } | null } | null };

export type UpdateStatusMutationVariables = Exact<{
  data: StatusUpdateInput;
  where: StatusWhereUniqueInput;
}>;


export type UpdateStatusMutation = { __typename?: 'Mutation', updateOneStatus?: { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } } | null };

export type UpdateTaskMutationVariables = Exact<{
  data: TaskUpdateInput;
  where: TaskWhereUniqueInput;
}>;


export type UpdateTaskMutation = { __typename?: 'Mutation', updateOneTask?: { __typename?: 'Task', id: string, name: string, message?: string | null, note?: string | null, dueDate?: any | null, createdAt: any, updatedAt: any, status?: { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } } | null, priority?: { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } } | null, files: Array<{ __typename?: 'File', id: number, url: string, fileId: string, name: string }> } | null };

export type StatusesQueryVariables = Exact<{
  where?: InputMaybe<StatusWhereInput>;
}>;


export type StatusesQuery = { __typename?: 'Query', statuses: Array<{ __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } }> };

export type TaskQueryVariables = Exact<{
  where: TaskWhereUniqueInput;
}>;


export type TaskQuery = { __typename?: 'Query', task?: { __typename?: 'Task', id: string, name: string, message?: string | null, note?: string | null, dueDate?: any | null, createdAt: any, updatedAt: any, status?: { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } } | null, priority?: { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } } | null, files: Array<{ __typename?: 'File', id: number, url: string, fileId: string, name: string }> } | null };

export type TasksQueryVariables = Exact<{
  workspaceId: Scalars['String']['input'];
}>;


export type TasksQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', id: string, name: string, message?: string | null, note?: string | null, dueDate?: any | null, createdAt: any, updatedAt: any, status?: { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } } | null, priority?: { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } } | null, files: Array<{ __typename?: 'File', id: number, url: string, fileId: string, name: string }> }> };

export type WorkspaceQueryVariables = Exact<{
  where: WorkspaceWhereUniqueInput;
}>;


export type WorkspaceQuery = { __typename?: 'Query', workspace?: { __typename?: 'Workspace', id: string, name: string, description?: string | null, createdAt: any, updatedAt: any, task: Array<{ __typename?: 'Task', id: string, name: string, message?: string | null, note?: string | null, dueDate?: any | null, createdAt: any, updatedAt: any, status?: { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } } | null, priority?: { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } } | null, files: Array<{ __typename?: 'File', id: number, url: string, fileId: string, name: string }> }>, user?: { __typename?: 'User', id: string } | null } | null };

export type WorkspacesQueryVariables = Exact<{
  where?: InputMaybe<WorkspaceWhereInput>;
}>;


export type WorkspacesQuery = { __typename?: 'Query', workspaces: Array<{ __typename?: 'Workspace', id: string, name: string, description?: string | null, createdAt: any, updatedAt: any, task: Array<{ __typename?: 'Task', id: string, name: string, message?: string | null, note?: string | null, dueDate?: any | null, createdAt: any, updatedAt: any, status?: { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } } | null, priority?: { __typename?: 'Status', id: number, name?: string | null, color: string, type: StatusType, user: { __typename?: 'User', id: string } } | null, files: Array<{ __typename?: 'File', id: number, url: string, fileId: string, name: string }> }>, user?: { __typename?: 'User', id: string } | null }> };

export const StatusFragmentDoc = gql`
    fragment Status on Status {
  id
  name
  color
  type
  user {
    id
  }
}
    `;
export const FileFragmentDoc = gql`
    fragment File on File {
  id
  url
  fileId
  name
}
    `;
export const TaskFragmentDoc = gql`
    fragment Task on Task {
  id
  name
  message
  note
  dueDate
  createdAt
  updatedAt
  status {
    ...Status
  }
  priority {
    ...Status
  }
  files {
    ...File
  }
}
    ${StatusFragmentDoc}
${FileFragmentDoc}`;
export const WorkspaceFragmentDoc = gql`
    fragment Workspace on Workspace {
  id
  name
  description
  createdAt
  updatedAt
  task {
    ...Task
  }
  user {
    id
  }
}
    ${TaskFragmentDoc}`;
export const CreateFileDocument = gql`
    mutation createFile($data: FileCreateInput!) {
  createOneFile(data: $data) {
    ...File
  }
}
    ${FileFragmentDoc}`;
export type CreateFileMutationFn = Apollo.MutationFunction<CreateFileMutation, CreateFileMutationVariables>;

/**
 * __useCreateFileMutation__
 *
 * To run a mutation, you first call `useCreateFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFileMutation, { data, loading, error }] = useCreateFileMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateFileMutation(baseOptions?: Apollo.MutationHookOptions<CreateFileMutation, CreateFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFileMutation, CreateFileMutationVariables>(CreateFileDocument, options);
      }
export type CreateFileMutationHookResult = ReturnType<typeof useCreateFileMutation>;
export type CreateFileMutationResult = Apollo.MutationResult<CreateFileMutation>;
export type CreateFileMutationOptions = Apollo.BaseMutationOptions<CreateFileMutation, CreateFileMutationVariables>;
export const CreateStatusDocument = gql`
    mutation createStatus($data: StatusCreateInput!) {
  createOneStatus(data: $data) {
    ...Status
  }
}
    ${StatusFragmentDoc}`;
export type CreateStatusMutationFn = Apollo.MutationFunction<CreateStatusMutation, CreateStatusMutationVariables>;

/**
 * __useCreateStatusMutation__
 *
 * To run a mutation, you first call `useCreateStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStatusMutation, { data, loading, error }] = useCreateStatusMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateStatusMutation(baseOptions?: Apollo.MutationHookOptions<CreateStatusMutation, CreateStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStatusMutation, CreateStatusMutationVariables>(CreateStatusDocument, options);
      }
export type CreateStatusMutationHookResult = ReturnType<typeof useCreateStatusMutation>;
export type CreateStatusMutationResult = Apollo.MutationResult<CreateStatusMutation>;
export type CreateStatusMutationOptions = Apollo.BaseMutationOptions<CreateStatusMutation, CreateStatusMutationVariables>;
export const CreateTaskDocument = gql`
    mutation createTask($data: TaskCreateInput!) {
  createOneTask(data: $data) {
    ...Task
  }
}
    ${TaskFragmentDoc}`;
export type CreateTaskMutationFn = Apollo.MutationFunction<CreateTaskMutation, CreateTaskMutationVariables>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTaskMutation(baseOptions?: Apollo.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument, options);
      }
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = Apollo.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<CreateTaskMutation, CreateTaskMutationVariables>;
export const CreateWorkspaceDocument = gql`
    mutation createWorkspace($data: WorkspaceCreateInput!) {
  createOneWorkspace(data: $data) {
    ...Workspace
  }
}
    ${WorkspaceFragmentDoc}`;
export type CreateWorkspaceMutationFn = Apollo.MutationFunction<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>;

/**
 * __useCreateWorkspaceMutation__
 *
 * To run a mutation, you first call `useCreateWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkspaceMutation, { data, loading, error }] = useCreateWorkspaceMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>(CreateWorkspaceDocument, options);
      }
export type CreateWorkspaceMutationHookResult = ReturnType<typeof useCreateWorkspaceMutation>;
export type CreateWorkspaceMutationResult = Apollo.MutationResult<CreateWorkspaceMutation>;
export type CreateWorkspaceMutationOptions = Apollo.BaseMutationOptions<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>;
export const DeleteFileDocument = gql`
    mutation deleteFile($where: FileWhereUniqueInput!) {
  deleteOneFile(where: $where) {
    ...File
  }
}
    ${FileFragmentDoc}`;
export type DeleteFileMutationFn = Apollo.MutationFunction<DeleteFileMutation, DeleteFileMutationVariables>;

/**
 * __useDeleteFileMutation__
 *
 * To run a mutation, you first call `useDeleteFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFileMutation, { data, loading, error }] = useDeleteFileMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteFileMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFileMutation, DeleteFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFileMutation, DeleteFileMutationVariables>(DeleteFileDocument, options);
      }
export type DeleteFileMutationHookResult = ReturnType<typeof useDeleteFileMutation>;
export type DeleteFileMutationResult = Apollo.MutationResult<DeleteFileMutation>;
export type DeleteFileMutationOptions = Apollo.BaseMutationOptions<DeleteFileMutation, DeleteFileMutationVariables>;
export const DeleteStatusesDocument = gql`
    mutation deleteStatuses($where: StatusWhereInput) {
  deleteManyStatus(where: $where) {
    count
  }
}
    `;
export type DeleteStatusesMutationFn = Apollo.MutationFunction<DeleteStatusesMutation, DeleteStatusesMutationVariables>;

/**
 * __useDeleteStatusesMutation__
 *
 * To run a mutation, you first call `useDeleteStatusesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStatusesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStatusesMutation, { data, loading, error }] = useDeleteStatusesMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteStatusesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteStatusesMutation, DeleteStatusesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteStatusesMutation, DeleteStatusesMutationVariables>(DeleteStatusesDocument, options);
      }
export type DeleteStatusesMutationHookResult = ReturnType<typeof useDeleteStatusesMutation>;
export type DeleteStatusesMutationResult = Apollo.MutationResult<DeleteStatusesMutation>;
export type DeleteStatusesMutationOptions = Apollo.BaseMutationOptions<DeleteStatusesMutation, DeleteStatusesMutationVariables>;
export const DeleteTasksDocument = gql`
    mutation deleteTasks($where: TaskWhereInput) {
  deleteManyTask(where: $where) {
    count
  }
}
    `;
export type DeleteTasksMutationFn = Apollo.MutationFunction<DeleteTasksMutation, DeleteTasksMutationVariables>;

/**
 * __useDeleteTasksMutation__
 *
 * To run a mutation, you first call `useDeleteTasksMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTasksMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTasksMutation, { data, loading, error }] = useDeleteTasksMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteTasksMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTasksMutation, DeleteTasksMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTasksMutation, DeleteTasksMutationVariables>(DeleteTasksDocument, options);
      }
export type DeleteTasksMutationHookResult = ReturnType<typeof useDeleteTasksMutation>;
export type DeleteTasksMutationResult = Apollo.MutationResult<DeleteTasksMutation>;
export type DeleteTasksMutationOptions = Apollo.BaseMutationOptions<DeleteTasksMutation, DeleteTasksMutationVariables>;
export const DeleteWorkspaceDocument = gql`
    mutation deleteWorkspace($where: WorkspaceWhereUniqueInput!) {
  deleteOneWorkspace(where: $where) {
    ...Workspace
  }
}
    ${WorkspaceFragmentDoc}`;
export type DeleteWorkspaceMutationFn = Apollo.MutationFunction<DeleteWorkspaceMutation, DeleteWorkspaceMutationVariables>;

/**
 * __useDeleteWorkspaceMutation__
 *
 * To run a mutation, you first call `useDeleteWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWorkspaceMutation, { data, loading, error }] = useDeleteWorkspaceMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteWorkspaceMutation, DeleteWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteWorkspaceMutation, DeleteWorkspaceMutationVariables>(DeleteWorkspaceDocument, options);
      }
export type DeleteWorkspaceMutationHookResult = ReturnType<typeof useDeleteWorkspaceMutation>;
export type DeleteWorkspaceMutationResult = Apollo.MutationResult<DeleteWorkspaceMutation>;
export type DeleteWorkspaceMutationOptions = Apollo.BaseMutationOptions<DeleteWorkspaceMutation, DeleteWorkspaceMutationVariables>;
export const UpdateWorkspaceDocument = gql`
    mutation updateWorkspace($data: WorkspaceUpdateInput!, $where: WorkspaceWhereUniqueInput!) {
  updateOneWorkspace(data: $data, where: $where) {
    ...Workspace
  }
}
    ${WorkspaceFragmentDoc}`;
export type UpdateWorkspaceMutationFn = Apollo.MutationFunction<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>;

/**
 * __useUpdateWorkspaceMutation__
 *
 * To run a mutation, you first call `useUpdateWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkspaceMutation, { data, loading, error }] = useUpdateWorkspaceMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>(UpdateWorkspaceDocument, options);
      }
export type UpdateWorkspaceMutationHookResult = ReturnType<typeof useUpdateWorkspaceMutation>;
export type UpdateWorkspaceMutationResult = Apollo.MutationResult<UpdateWorkspaceMutation>;
export type UpdateWorkspaceMutationOptions = Apollo.BaseMutationOptions<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>;
export const UpdateStatusDocument = gql`
    mutation updateStatus($data: StatusUpdateInput!, $where: StatusWhereUniqueInput!) {
  updateOneStatus(data: $data, where: $where) {
    ...Status
  }
}
    ${StatusFragmentDoc}`;
export type UpdateStatusMutationFn = Apollo.MutationFunction<UpdateStatusMutation, UpdateStatusMutationVariables>;

/**
 * __useUpdateStatusMutation__
 *
 * To run a mutation, you first call `useUpdateStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStatusMutation, { data, loading, error }] = useUpdateStatusMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStatusMutation, UpdateStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStatusMutation, UpdateStatusMutationVariables>(UpdateStatusDocument, options);
      }
export type UpdateStatusMutationHookResult = ReturnType<typeof useUpdateStatusMutation>;
export type UpdateStatusMutationResult = Apollo.MutationResult<UpdateStatusMutation>;
export type UpdateStatusMutationOptions = Apollo.BaseMutationOptions<UpdateStatusMutation, UpdateStatusMutationVariables>;
export const UpdateTaskDocument = gql`
    mutation updateTask($data: TaskUpdateInput!, $where: TaskWhereUniqueInput!) {
  updateOneTask(data: $data, where: $where) {
    ...Task
  }
}
    ${TaskFragmentDoc}`;
export type UpdateTaskMutationFn = Apollo.MutationFunction<UpdateTaskMutation, UpdateTaskMutationVariables>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateTaskMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTaskMutation, UpdateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(UpdateTaskDocument, options);
      }
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<UpdateTaskMutation, UpdateTaskMutationVariables>;
export const StatusesDocument = gql`
    query statuses($where: StatusWhereInput) {
  statuses(where: $where) {
    ...Status
  }
}
    ${StatusFragmentDoc}`;

/**
 * __useStatusesQuery__
 *
 * To run a query within a React component, call `useStatusesQuery` and pass it any options that fit your needs.
 * When your component renders, `useStatusesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStatusesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useStatusesQuery(baseOptions?: Apollo.QueryHookOptions<StatusesQuery, StatusesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StatusesQuery, StatusesQueryVariables>(StatusesDocument, options);
      }
export function useStatusesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StatusesQuery, StatusesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StatusesQuery, StatusesQueryVariables>(StatusesDocument, options);
        }
export function useStatusesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<StatusesQuery, StatusesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<StatusesQuery, StatusesQueryVariables>(StatusesDocument, options);
        }
export type StatusesQueryHookResult = ReturnType<typeof useStatusesQuery>;
export type StatusesLazyQueryHookResult = ReturnType<typeof useStatusesLazyQuery>;
export type StatusesSuspenseQueryHookResult = ReturnType<typeof useStatusesSuspenseQuery>;
export type StatusesQueryResult = Apollo.QueryResult<StatusesQuery, StatusesQueryVariables>;
export const TaskDocument = gql`
    query task($where: TaskWhereUniqueInput!) {
  task(where: $where) {
    ...Task
  }
}
    ${TaskFragmentDoc}`;

/**
 * __useTaskQuery__
 *
 * To run a query within a React component, call `useTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useTaskQuery(baseOptions: Apollo.QueryHookOptions<TaskQuery, TaskQueryVariables> & ({ variables: TaskQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TaskQuery, TaskQueryVariables>(TaskDocument, options);
      }
export function useTaskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaskQuery, TaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TaskQuery, TaskQueryVariables>(TaskDocument, options);
        }
export function useTaskSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TaskQuery, TaskQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TaskQuery, TaskQueryVariables>(TaskDocument, options);
        }
export type TaskQueryHookResult = ReturnType<typeof useTaskQuery>;
export type TaskLazyQueryHookResult = ReturnType<typeof useTaskLazyQuery>;
export type TaskSuspenseQueryHookResult = ReturnType<typeof useTaskSuspenseQuery>;
export type TaskQueryResult = Apollo.QueryResult<TaskQuery, TaskQueryVariables>;
export const TasksDocument = gql`
    query tasks($workspaceId: String!) {
  tasks(where: {workspaceId: {equals: $workspaceId}}, orderBy: {createdAt: asc}) {
    ...Task
  }
}
    ${TaskFragmentDoc}`;

/**
 * __useTasksQuery__
 *
 * To run a query within a React component, call `useTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksQuery({
 *   variables: {
 *      workspaceId: // value for 'workspaceId'
 *   },
 * });
 */
export function useTasksQuery(baseOptions: Apollo.QueryHookOptions<TasksQuery, TasksQueryVariables> & ({ variables: TasksQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
      }
export function useTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TasksQuery, TasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
        }
export function useTasksSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TasksQuery, TasksQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
        }
export type TasksQueryHookResult = ReturnType<typeof useTasksQuery>;
export type TasksLazyQueryHookResult = ReturnType<typeof useTasksLazyQuery>;
export type TasksSuspenseQueryHookResult = ReturnType<typeof useTasksSuspenseQuery>;
export type TasksQueryResult = Apollo.QueryResult<TasksQuery, TasksQueryVariables>;
export const WorkspaceDocument = gql`
    query workspace($where: WorkspaceWhereUniqueInput!) {
  workspace(where: $where) {
    ...Workspace
  }
}
    ${WorkspaceFragmentDoc}`;

/**
 * __useWorkspaceQuery__
 *
 * To run a query within a React component, call `useWorkspaceQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkspaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkspaceQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useWorkspaceQuery(baseOptions: Apollo.QueryHookOptions<WorkspaceQuery, WorkspaceQueryVariables> & ({ variables: WorkspaceQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkspaceQuery, WorkspaceQueryVariables>(WorkspaceDocument, options);
      }
export function useWorkspaceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkspaceQuery, WorkspaceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkspaceQuery, WorkspaceQueryVariables>(WorkspaceDocument, options);
        }
export function useWorkspaceSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<WorkspaceQuery, WorkspaceQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<WorkspaceQuery, WorkspaceQueryVariables>(WorkspaceDocument, options);
        }
export type WorkspaceQueryHookResult = ReturnType<typeof useWorkspaceQuery>;
export type WorkspaceLazyQueryHookResult = ReturnType<typeof useWorkspaceLazyQuery>;
export type WorkspaceSuspenseQueryHookResult = ReturnType<typeof useWorkspaceSuspenseQuery>;
export type WorkspaceQueryResult = Apollo.QueryResult<WorkspaceQuery, WorkspaceQueryVariables>;
export const WorkspacesDocument = gql`
    query workspaces($where: WorkspaceWhereInput) {
  workspaces(where: $where) {
    ...Workspace
  }
}
    ${WorkspaceFragmentDoc}`;

/**
 * __useWorkspacesQuery__
 *
 * To run a query within a React component, call `useWorkspacesQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkspacesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkspacesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useWorkspacesQuery(baseOptions?: Apollo.QueryHookOptions<WorkspacesQuery, WorkspacesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkspacesQuery, WorkspacesQueryVariables>(WorkspacesDocument, options);
      }
export function useWorkspacesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkspacesQuery, WorkspacesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkspacesQuery, WorkspacesQueryVariables>(WorkspacesDocument, options);
        }
export function useWorkspacesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<WorkspacesQuery, WorkspacesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<WorkspacesQuery, WorkspacesQueryVariables>(WorkspacesDocument, options);
        }
export type WorkspacesQueryHookResult = ReturnType<typeof useWorkspacesQuery>;
export type WorkspacesLazyQueryHookResult = ReturnType<typeof useWorkspacesLazyQuery>;
export type WorkspacesSuspenseQueryHookResult = ReturnType<typeof useWorkspacesSuspenseQuery>;
export type WorkspacesQueryResult = Apollo.QueryResult<WorkspacesQuery, WorkspacesQueryVariables>;