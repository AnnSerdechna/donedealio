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
  expires_at?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  type: Scalars['String']['output'];
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
  expires_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  provider: Scalars['Int']['output'];
  providerAccountId: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type AccountCountOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountCreateInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  type: Scalars['String']['input'];
  user: UserCreateNestedOneWithoutAccountsInput;
};

export type AccountCreateManyInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  type: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type AccountCreateManyUserInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  type: Scalars['String']['input'];
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
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type AccountGroupBy = {
  __typename?: 'AccountGroupBy';
  _avg?: Maybe<AccountAvgAggregate>;
  _count?: Maybe<AccountCountAggregate>;
  _max?: Maybe<AccountMaxAggregate>;
  _min?: Maybe<AccountMinAggregate>;
  _sum?: Maybe<AccountSumAggregate>;
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  type: Scalars['String']['output'];
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
  expires_at?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AccountMaxOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountMinAggregate = {
  __typename?: 'AccountMinAggregate';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AccountMinOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
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
  expires_at?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountOrderByWithRelationInput = {
  access_token?: InputMaybe<SortOrderInput>;
  expires_at?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum AccountScalarFieldEnum {
  AccessToken = 'access_token',
  ExpiresAt = 'expires_at',
  Id = 'id',
  Provider = 'provider',
  ProviderAccountId = 'providerAccountId',
  Type = 'type',
  UserId = 'userId'
}

export type AccountScalarWhereInput = {
  AND?: InputMaybe<Array<AccountScalarWhereInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  access_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  expires_at?: InputMaybe<IntNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  provider?: InputMaybe<StringWithAggregatesFilter>;
  providerAccountId?: InputMaybe<StringWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
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
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAccountsNestedInput>;
};

export type AccountUpdateManyMutationInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
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
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
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
  expires_at?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountWhereUniqueInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
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

export type AggregatePriority = {
  __typename?: 'AggregatePriority';
  _avg?: Maybe<PriorityAvgAggregate>;
  _count?: Maybe<PriorityCountAggregate>;
  _max?: Maybe<PriorityMaxAggregate>;
  _min?: Maybe<PriorityMinAggregate>;
  _sum?: Maybe<PrioritySumAggregate>;
};

export type AggregateSession = {
  __typename?: 'AggregateSession';
  _count?: Maybe<SessionCountAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
  _min?: Maybe<SessionMinAggregate>;
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

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type AggregateWorkspace = {
  __typename?: 'AggregateWorkspace';
  _count?: Maybe<WorkspaceCountAggregate>;
  _max?: Maybe<WorkspaceMaxAggregate>;
  _min?: Maybe<WorkspaceMinAggregate>;
};

export type CreateManyAndReturnAccount = {
  __typename?: 'CreateManyAndReturnAccount';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  type: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type CreateManyAndReturnFile = {
  __typename?: 'CreateManyAndReturnFile';
  file: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  task?: Maybe<Task>;
  taskId?: Maybe<Scalars['String']['output']>;
};


export type CreateManyAndReturnFileTaskArgs = {
  where?: InputMaybe<TaskWhereInput>;
};

export type CreateManyAndReturnPriority = {
  __typename?: 'CreateManyAndReturnPriority';
  color: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type CreateManyAndReturnSession = {
  __typename?: 'CreateManyAndReturnSession';
  expires: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  sessionToken: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type CreateManyAndReturnStatus = {
  __typename?: 'CreateManyAndReturnStatus';
  color: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type CreateManyAndReturnTask = {
  __typename?: 'CreateManyAndReturnTask';
  createdAt: Scalars['DateTimeISO']['output'];
  dueDate?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Priority>;
  priorityId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Status>;
  statusid?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  workspace: Workspace;
  workspaceId: Scalars['String']['output'];
};


export type CreateManyAndReturnTaskPriorityArgs = {
  where?: InputMaybe<PriorityWhereInput>;
};


export type CreateManyAndReturnTaskStatusArgs = {
  where?: InputMaybe<StatusWhereInput>;
};

export type CreateManyAndReturnUser = {
  __typename?: 'CreateManyAndReturnUser';
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  role: Role;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type CreateManyAndReturnWorkspace = {
  __typename?: 'CreateManyAndReturnWorkspace';
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
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

export type File = {
  __typename?: 'File';
  file: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  task?: Maybe<Task>;
  taskId?: Maybe<Scalars['String']['output']>;
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
  file: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  taskId: Scalars['Int']['output'];
};

export type FileCountOrderByAggregateInput = {
  file?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
};

export type FileCreateInput = {
  file: Scalars['String']['input'];
  task?: InputMaybe<TaskCreateNestedOneWithoutFilesInput>;
};

export type FileCreateManyInput = {
  file: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  taskId?: InputMaybe<Scalars['String']['input']>;
};

export type FileCreateManyTaskInput = {
  file: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
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
  file: Scalars['String']['input'];
};

export type FileGroupBy = {
  __typename?: 'FileGroupBy';
  _avg?: Maybe<FileAvgAggregate>;
  _count?: Maybe<FileCountAggregate>;
  _max?: Maybe<FileMaxAggregate>;
  _min?: Maybe<FileMinAggregate>;
  _sum?: Maybe<FileSumAggregate>;
  file: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  taskId?: Maybe<Scalars['String']['output']>;
};

export type FileListRelationFilter = {
  every?: InputMaybe<FileWhereInput>;
  none?: InputMaybe<FileWhereInput>;
  some?: InputMaybe<FileWhereInput>;
};

export type FileMaxAggregate = {
  __typename?: 'FileMaxAggregate';
  file?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  taskId?: Maybe<Scalars['String']['output']>;
};

export type FileMaxOrderByAggregateInput = {
  file?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
};

export type FileMinAggregate = {
  __typename?: 'FileMinAggregate';
  file?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  taskId?: Maybe<Scalars['String']['output']>;
};

export type FileMinOrderByAggregateInput = {
  file?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
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
  file?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrderInput>;
};

export type FileOrderByWithRelationInput = {
  file?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  task?: InputMaybe<TaskOrderByWithRelationInput>;
  taskId?: InputMaybe<SortOrderInput>;
};

export enum FileScalarFieldEnum {
  File = 'file',
  Id = 'id',
  TaskId = 'taskId'
}

export type FileScalarWhereInput = {
  AND?: InputMaybe<Array<FileScalarWhereInput>>;
  NOT?: InputMaybe<Array<FileScalarWhereInput>>;
  OR?: InputMaybe<Array<FileScalarWhereInput>>;
  file?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  taskId?: InputMaybe<StringNullableFilter>;
};

export type FileScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  file?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  taskId?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type FileSumAggregate = {
  __typename?: 'FileSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type FileSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type FileUpdateInput = {
  file?: InputMaybe<StringFieldUpdateOperationsInput>;
  task?: InputMaybe<TaskUpdateOneWithoutFilesNestedInput>;
};

export type FileUpdateManyMutationInput = {
  file?: InputMaybe<StringFieldUpdateOperationsInput>;
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
  file?: InputMaybe<StringFieldUpdateOperationsInput>;
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
  file?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  task?: InputMaybe<TaskNullableRelationFilter>;
  taskId?: InputMaybe<StringNullableFilter>;
};

export type FileWhereUniqueInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  NOT?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  file?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  task?: InputMaybe<TaskNullableRelationFilter>;
  taskId?: InputMaybe<StringNullableFilter>;
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
  createManyAndReturnPriority: Array<CreateManyAndReturnPriority>;
  createManyAndReturnSession: Array<CreateManyAndReturnSession>;
  createManyAndReturnStatus: Array<CreateManyAndReturnStatus>;
  createManyAndReturnTask: Array<CreateManyAndReturnTask>;
  createManyAndReturnUser: Array<CreateManyAndReturnUser>;
  createManyAndReturnWorkspace: Array<CreateManyAndReturnWorkspace>;
  createManyFile: AffectedRowsOutput;
  createManyPriority: AffectedRowsOutput;
  createManySession: AffectedRowsOutput;
  createManyStatus: AffectedRowsOutput;
  createManyTask: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyWorkspace: AffectedRowsOutput;
  createOneAccount: Account;
  createOneFile: File;
  createOnePriority: Priority;
  createOneSession: Session;
  createOneStatus: Status;
  createOneTask: Task;
  createOneUser: User;
  createOneWorkspace: Workspace;
  deleteManyAccount: AffectedRowsOutput;
  deleteManyFile: AffectedRowsOutput;
  deleteManyPriority: AffectedRowsOutput;
  deleteManySession: AffectedRowsOutput;
  deleteManyStatus: AffectedRowsOutput;
  deleteManyTask: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyWorkspace: AffectedRowsOutput;
  deleteOneAccount?: Maybe<Account>;
  deleteOneFile?: Maybe<File>;
  deleteOnePriority?: Maybe<Priority>;
  deleteOneSession?: Maybe<Session>;
  deleteOneStatus?: Maybe<Status>;
  deleteOneTask?: Maybe<Task>;
  deleteOneUser?: Maybe<User>;
  deleteOneWorkspace?: Maybe<Workspace>;
  updateManyAccount: AffectedRowsOutput;
  updateManyFile: AffectedRowsOutput;
  updateManyPriority: AffectedRowsOutput;
  updateManySession: AffectedRowsOutput;
  updateManyStatus: AffectedRowsOutput;
  updateManyTask: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyWorkspace: AffectedRowsOutput;
  updateOneAccount?: Maybe<Account>;
  updateOneFile?: Maybe<File>;
  updateOnePriority?: Maybe<Priority>;
  updateOneSession?: Maybe<Session>;
  updateOneStatus?: Maybe<Status>;
  updateOneTask?: Maybe<Task>;
  updateOneUser?: Maybe<User>;
  updateOneWorkspace?: Maybe<Workspace>;
  upsertOneAccount: Account;
  upsertOneFile: File;
  upsertOnePriority: Priority;
  upsertOneSession: Session;
  upsertOneStatus: Status;
  upsertOneTask: Task;
  upsertOneUser: User;
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


export type MutationCreateManyAndReturnPriorityArgs = {
  data: Array<PriorityCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAndReturnSessionArgs = {
  data: Array<SessionCreateManyInput>;
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


export type MutationCreateManyAndReturnUserArgs = {
  data: Array<UserCreateManyInput>;
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


export type MutationCreateManyPriorityArgs = {
  data: Array<PriorityCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManySessionArgs = {
  data: Array<SessionCreateManyInput>;
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


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
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


export type MutationCreateOnePriorityArgs = {
  data: PriorityCreateInput;
};


export type MutationCreateOneSessionArgs = {
  data: SessionCreateInput;
};


export type MutationCreateOneStatusArgs = {
  data: StatusCreateInput;
};


export type MutationCreateOneTaskArgs = {
  data: TaskCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
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


export type MutationDeleteManyPriorityArgs = {
  where?: InputMaybe<PriorityWhereInput>;
};


export type MutationDeleteManySessionArgs = {
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationDeleteManyStatusArgs = {
  where?: InputMaybe<StatusWhereInput>;
};


export type MutationDeleteManyTaskArgs = {
  where?: InputMaybe<TaskWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
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


export type MutationDeleteOnePriorityArgs = {
  where: PriorityWhereUniqueInput;
};


export type MutationDeleteOneSessionArgs = {
  where: SessionWhereUniqueInput;
};


export type MutationDeleteOneStatusArgs = {
  where: StatusWhereUniqueInput;
};


export type MutationDeleteOneTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
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


export type MutationUpdateManyPriorityArgs = {
  data: PriorityUpdateManyMutationInput;
  where?: InputMaybe<PriorityWhereInput>;
};


export type MutationUpdateManySessionArgs = {
  data: SessionUpdateManyMutationInput;
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationUpdateManyStatusArgs = {
  data: StatusUpdateManyMutationInput;
  where?: InputMaybe<StatusWhereInput>;
};


export type MutationUpdateManyTaskArgs = {
  data: TaskUpdateManyMutationInput;
  where?: InputMaybe<TaskWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
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


export type MutationUpdateOnePriorityArgs = {
  data: PriorityUpdateInput;
  where: PriorityWhereUniqueInput;
};


export type MutationUpdateOneSessionArgs = {
  data: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpdateOneStatusArgs = {
  data: StatusUpdateInput;
  where: StatusWhereUniqueInput;
};


export type MutationUpdateOneTaskArgs = {
  data: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
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


export type MutationUpsertOnePriorityArgs = {
  create: PriorityCreateInput;
  update: PriorityUpdateInput;
  where: PriorityWhereUniqueInput;
};


export type MutationUpsertOneSessionArgs = {
  create: SessionCreateInput;
  update: SessionUpdateInput;
  where: SessionWhereUniqueInput;
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


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneWorkspaceArgs = {
  create: WorkspaceCreateInput;
  update: WorkspaceUpdateInput;
  where: WorkspaceWhereUniqueInput;
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

export type Priority = {
  __typename?: 'Priority';
  _count?: Maybe<PriorityCount>;
  color: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  task: Array<Task>;
};


export type PriorityTaskArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  distinct?: InputMaybe<Array<TaskScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskWhereInput>;
};

export type PriorityAvgAggregate = {
  __typename?: 'PriorityAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type PriorityAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type PriorityCount = {
  __typename?: 'PriorityCount';
  task: Scalars['Int']['output'];
};


export type PriorityCountTaskArgs = {
  where?: InputMaybe<TaskWhereInput>;
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
  task?: InputMaybe<TaskCreateNestedManyWithoutPriorityInput>;
};

export type PriorityCreateManyInput = {
  color: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type PriorityCreateNestedOneWithoutTaskInput = {
  connect?: InputMaybe<PriorityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PriorityCreateOrConnectWithoutTaskInput>;
  create?: InputMaybe<PriorityCreateWithoutTaskInput>;
};

export type PriorityCreateOrConnectWithoutTaskInput = {
  create: PriorityCreateWithoutTaskInput;
  where: PriorityWhereUniqueInput;
};

export type PriorityCreateWithoutTaskInput = {
  color: Scalars['String']['input'];
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

export type PriorityNullableRelationFilter = {
  is?: InputMaybe<PriorityWhereInput>;
  isNot?: InputMaybe<PriorityWhereInput>;
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
  task?: InputMaybe<TaskOrderByRelationAggregateInput>;
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
  task?: InputMaybe<TaskUpdateManyWithoutPriorityNestedInput>;
};

export type PriorityUpdateManyMutationInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PriorityUpdateOneWithoutTaskNestedInput = {
  connect?: InputMaybe<PriorityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PriorityCreateOrConnectWithoutTaskInput>;
  create?: InputMaybe<PriorityCreateWithoutTaskInput>;
  delete?: InputMaybe<PriorityWhereInput>;
  disconnect?: InputMaybe<PriorityWhereInput>;
  update?: InputMaybe<PriorityUpdateToOneWithWhereWithoutTaskInput>;
  upsert?: InputMaybe<PriorityUpsertWithoutTaskInput>;
};

export type PriorityUpdateToOneWithWhereWithoutTaskInput = {
  data: PriorityUpdateWithoutTaskInput;
  where?: InputMaybe<PriorityWhereInput>;
};

export type PriorityUpdateWithoutTaskInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PriorityUpsertWithoutTaskInput = {
  create: PriorityCreateWithoutTaskInput;
  update: PriorityUpdateWithoutTaskInput;
  where?: InputMaybe<PriorityWhereInput>;
};

export type PriorityWhereInput = {
  AND?: InputMaybe<Array<PriorityWhereInput>>;
  NOT?: InputMaybe<Array<PriorityWhereInput>>;
  OR?: InputMaybe<Array<PriorityWhereInput>>;
  color?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  task?: InputMaybe<TaskListRelationFilter>;
};

export type PriorityWhereUniqueInput = {
  AND?: InputMaybe<Array<PriorityWhereInput>>;
  NOT?: InputMaybe<Array<PriorityWhereInput>>;
  OR?: InputMaybe<Array<PriorityWhereInput>>;
  color?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  task?: InputMaybe<TaskListRelationFilter>;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accounts: Array<Account>;
  aggregateAccount: AggregateAccount;
  aggregateFile: AggregateFile;
  aggregatePriority: AggregatePriority;
  aggregateSession: AggregateSession;
  aggregateStatus: AggregateStatus;
  aggregateTask: AggregateTask;
  aggregateUser: AggregateUser;
  aggregateWorkspace: AggregateWorkspace;
  file?: Maybe<File>;
  files: Array<File>;
  findFirstAccount?: Maybe<Account>;
  findFirstAccountOrThrow?: Maybe<Account>;
  findFirstFile?: Maybe<File>;
  findFirstFileOrThrow?: Maybe<File>;
  findFirstPriority?: Maybe<Priority>;
  findFirstPriorityOrThrow?: Maybe<Priority>;
  findFirstSession?: Maybe<Session>;
  findFirstSessionOrThrow?: Maybe<Session>;
  findFirstStatus?: Maybe<Status>;
  findFirstStatusOrThrow?: Maybe<Status>;
  findFirstTask?: Maybe<Task>;
  findFirstTaskOrThrow?: Maybe<Task>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  findFirstWorkspace?: Maybe<Workspace>;
  findFirstWorkspaceOrThrow?: Maybe<Workspace>;
  getAccount?: Maybe<Account>;
  getFile?: Maybe<File>;
  getPriority?: Maybe<Priority>;
  getSession?: Maybe<Session>;
  getStatus?: Maybe<Status>;
  getTask?: Maybe<Task>;
  getUser?: Maybe<User>;
  getWorkspace?: Maybe<Workspace>;
  groupByAccount: Array<AccountGroupBy>;
  groupByFile: Array<FileGroupBy>;
  groupByPriority: Array<PriorityGroupBy>;
  groupBySession: Array<SessionGroupBy>;
  groupByStatus: Array<StatusGroupBy>;
  groupByTask: Array<TaskGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByWorkspace: Array<WorkspaceGroupBy>;
  priorities: Array<Priority>;
  priority?: Maybe<Priority>;
  session?: Maybe<Session>;
  sessions: Array<Session>;
  status?: Maybe<Status>;
  statuses: Array<Status>;
  task?: Maybe<Task>;
  tasks: Array<Task>;
  user?: Maybe<User>;
  users: Array<User>;
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


export type QueryAggregatePriorityArgs = {
  cursor?: InputMaybe<PriorityWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PriorityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PriorityWhereInput>;
};


export type QueryAggregateSessionArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
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


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
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


export type QueryFindFirstSessionArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryFindFirstSessionOrThrowArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
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


export type QueryGetPriorityArgs = {
  where: PriorityWhereUniqueInput;
};


export type QueryGetSessionArgs = {
  where: SessionWhereUniqueInput;
};


export type QueryGetStatusArgs = {
  where: StatusWhereUniqueInput;
};


export type QueryGetTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
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


export type QueryGroupByPriorityArgs = {
  by: Array<PriorityScalarFieldEnum>;
  having?: InputMaybe<PriorityScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PriorityOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PriorityWhereInput>;
};


export type QueryGroupBySessionArgs = {
  by: Array<SessionScalarFieldEnum>;
  having?: InputMaybe<SessionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
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


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByWorkspaceArgs = {
  by: Array<WorkspaceScalarFieldEnum>;
  having?: InputMaybe<WorkspaceScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<WorkspaceOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WorkspaceWhereInput>;
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


export type QuerySessionArgs = {
  where: SessionWhereUniqueInput;
};


export type QuerySessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
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

export type Session = {
  __typename?: 'Session';
  expires: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  sessionToken: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type SessionCountAggregate = {
  __typename?: 'SessionCountAggregate';
  _all: Scalars['Int']['output'];
  expires: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  sessionToken: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type SessionCountOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionCreateInput = {
  expires: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
  user: UserCreateNestedOneWithoutSessionsInput;
};

export type SessionCreateManyInput = {
  expires: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type SessionCreateManyUserInput = {
  expires: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
};

export type SessionCreateManyUserInputEnvelope = {
  data: Array<SessionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionCreateOrConnectWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateWithoutUserInput = {
  expires: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
};

export type SessionGroupBy = {
  __typename?: 'SessionGroupBy';
  _count?: Maybe<SessionCountAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
  _min?: Maybe<SessionMinAggregate>;
  expires: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  sessionToken: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type SessionListRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionMaxAggregate = {
  __typename?: 'SessionMaxAggregate';
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SessionMaxOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionMinAggregate = {
  __typename?: 'SessionMinAggregate';
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SessionMinOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithAggregationInput = {
  _count?: InputMaybe<SessionCountOrderByAggregateInput>;
  _max?: InputMaybe<SessionMaxOrderByAggregateInput>;
  _min?: InputMaybe<SessionMinOrderByAggregateInput>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithRelationInput = {
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum SessionScalarFieldEnum {
  Expires = 'expires',
  Id = 'id',
  SessionToken = 'sessionToken',
  UserId = 'userId'
}

export type SessionScalarWhereInput = {
  AND?: InputMaybe<Array<SessionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  expires?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  sessionToken?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type SessionUpdateInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSessionsNestedInput>;
};

export type SessionUpdateManyMutationInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpdateManyWithWhereWithoutUserInput = {
  data: SessionUpdateManyMutationInput;
  where: SessionScalarWhereInput;
};

export type SessionUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  set?: InputMaybe<Array<SessionWhereUniqueInput>>;
  update?: InputMaybe<Array<SessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SessionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<SessionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  data: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateWithoutUserInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  update: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionWhereUniqueInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

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
  name: Scalars['String']['output'];
  task: Array<Task>;
};


export type StatusTaskArgs = {
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
  task: Scalars['Int']['output'];
};


export type StatusCountTaskArgs = {
  where?: InputMaybe<TaskWhereInput>;
};

export type StatusCountAggregate = {
  __typename?: 'StatusCountAggregate';
  _all: Scalars['Int']['output'];
  color: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type StatusCountOrderByAggregateInput = {
  color?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type StatusCreateInput = {
  color: Scalars['String']['input'];
  name: Scalars['String']['input'];
  task?: InputMaybe<TaskCreateNestedManyWithoutStatusInput>;
};

export type StatusCreateManyInput = {
  color: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type StatusCreateNestedOneWithoutTaskInput = {
  connect?: InputMaybe<StatusWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StatusCreateOrConnectWithoutTaskInput>;
  create?: InputMaybe<StatusCreateWithoutTaskInput>;
};

export type StatusCreateOrConnectWithoutTaskInput = {
  create: StatusCreateWithoutTaskInput;
  where: StatusWhereUniqueInput;
};

export type StatusCreateWithoutTaskInput = {
  color: Scalars['String']['input'];
  name: Scalars['String']['input'];
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
  name: Scalars['String']['output'];
};

export type StatusMaxAggregate = {
  __typename?: 'StatusMaxAggregate';
  color?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type StatusMaxOrderByAggregateInput = {
  color?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type StatusMinAggregate = {
  __typename?: 'StatusMinAggregate';
  color?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type StatusMinOrderByAggregateInput = {
  color?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type StatusNullableRelationFilter = {
  is?: InputMaybe<StatusWhereInput>;
  isNot?: InputMaybe<StatusWhereInput>;
};

export type StatusOrderByWithAggregationInput = {
  _avg?: InputMaybe<StatusAvgOrderByAggregateInput>;
  _count?: InputMaybe<StatusCountOrderByAggregateInput>;
  _max?: InputMaybe<StatusMaxOrderByAggregateInput>;
  _min?: InputMaybe<StatusMinOrderByAggregateInput>;
  _sum?: InputMaybe<StatusSumOrderByAggregateInput>;
  color?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type StatusOrderByWithRelationInput = {
  color?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  task?: InputMaybe<TaskOrderByRelationAggregateInput>;
};

export enum StatusScalarFieldEnum {
  Color = 'color',
  Id = 'id',
  Name = 'name'
}

export type StatusScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<StatusScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<StatusScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<StatusScalarWhereWithAggregatesInput>>;
  color?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type StatusSumAggregate = {
  __typename?: 'StatusSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type StatusSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type StatusUpdateInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  task?: InputMaybe<TaskUpdateManyWithoutStatusNestedInput>;
};

export type StatusUpdateManyMutationInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type StatusUpdateOneWithoutTaskNestedInput = {
  connect?: InputMaybe<StatusWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StatusCreateOrConnectWithoutTaskInput>;
  create?: InputMaybe<StatusCreateWithoutTaskInput>;
  delete?: InputMaybe<StatusWhereInput>;
  disconnect?: InputMaybe<StatusWhereInput>;
  update?: InputMaybe<StatusUpdateToOneWithWhereWithoutTaskInput>;
  upsert?: InputMaybe<StatusUpsertWithoutTaskInput>;
};

export type StatusUpdateToOneWithWhereWithoutTaskInput = {
  data: StatusUpdateWithoutTaskInput;
  where?: InputMaybe<StatusWhereInput>;
};

export type StatusUpdateWithoutTaskInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type StatusUpsertWithoutTaskInput = {
  create: StatusCreateWithoutTaskInput;
  update: StatusUpdateWithoutTaskInput;
  where?: InputMaybe<StatusWhereInput>;
};

export type StatusWhereInput = {
  AND?: InputMaybe<Array<StatusWhereInput>>;
  NOT?: InputMaybe<Array<StatusWhereInput>>;
  OR?: InputMaybe<Array<StatusWhereInput>>;
  color?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  task?: InputMaybe<TaskListRelationFilter>;
};

export type StatusWhereUniqueInput = {
  AND?: InputMaybe<Array<StatusWhereInput>>;
  NOT?: InputMaybe<Array<StatusWhereInput>>;
  OR?: InputMaybe<Array<StatusWhereInput>>;
  color?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  task?: InputMaybe<TaskListRelationFilter>;
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
  priority?: Maybe<Priority>;
  priorityId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Status>;
  statusid?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  workspace: Workspace;
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
  where?: InputMaybe<PriorityWhereInput>;
};


export type TaskStatusArgs = {
  where?: InputMaybe<StatusWhereInput>;
};

export type TaskAvgAggregate = {
  __typename?: 'TaskAvgAggregate';
  priorityId?: Maybe<Scalars['Float']['output']>;
  statusid?: Maybe<Scalars['Float']['output']>;
};

export type TaskAvgOrderByAggregateInput = {
  priorityId?: InputMaybe<SortOrder>;
  statusid?: InputMaybe<SortOrder>;
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
  statusid: Scalars['Int']['output'];
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
  statusid?: InputMaybe<SortOrder>;
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
  priority?: InputMaybe<PriorityCreateNestedOneWithoutTaskInput>;
  status?: InputMaybe<StatusCreateNestedOneWithoutTaskInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  workspace: WorkspaceCreateNestedOneWithoutTaskInput;
};

export type TaskCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  dueDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  priorityId?: InputMaybe<Scalars['Int']['input']>;
  statusid?: InputMaybe<Scalars['Int']['input']>;
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
  statusid?: InputMaybe<Scalars['Int']['input']>;
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
  statusid?: InputMaybe<Scalars['Int']['input']>;
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
  priority?: InputMaybe<PriorityCreateNestedOneWithoutTaskInput>;
  status?: InputMaybe<StatusCreateNestedOneWithoutTaskInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  workspace: WorkspaceCreateNestedOneWithoutTaskInput;
};

export type TaskCreateWithoutPriorityInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  dueDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<FileCreateNestedManyWithoutTaskInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<StatusCreateNestedOneWithoutTaskInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  workspace: WorkspaceCreateNestedOneWithoutTaskInput;
};

export type TaskCreateWithoutStatusInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  dueDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<FileCreateNestedManyWithoutTaskInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<PriorityCreateNestedOneWithoutTaskInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  workspace: WorkspaceCreateNestedOneWithoutTaskInput;
};

export type TaskCreateWithoutWorkspaceInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  dueDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<FileCreateNestedManyWithoutTaskInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<PriorityCreateNestedOneWithoutTaskInput>;
  status?: InputMaybe<StatusCreateNestedOneWithoutTaskInput>;
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
  statusid?: Maybe<Scalars['Int']['output']>;
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
  statusid?: Maybe<Scalars['Int']['output']>;
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
  statusid?: InputMaybe<SortOrder>;
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
  statusid?: Maybe<Scalars['Int']['output']>;
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
  statusid?: InputMaybe<SortOrder>;
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
  statusid?: InputMaybe<SortOrderInput>;
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
  priority?: InputMaybe<PriorityOrderByWithRelationInput>;
  priorityId?: InputMaybe<SortOrderInput>;
  status?: InputMaybe<StatusOrderByWithRelationInput>;
  statusid?: InputMaybe<SortOrderInput>;
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
  Statusid = 'statusid',
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
  statusid?: InputMaybe<IntNullableFilter>;
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
  statusid?: InputMaybe<IntNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  workspaceId?: InputMaybe<StringWithAggregatesFilter>;
};

export type TaskSumAggregate = {
  __typename?: 'TaskSumAggregate';
  priorityId?: Maybe<Scalars['Int']['output']>;
  statusid?: Maybe<Scalars['Int']['output']>;
};

export type TaskSumOrderByAggregateInput = {
  priorityId?: InputMaybe<SortOrder>;
  statusid?: InputMaybe<SortOrder>;
};

export type TaskUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutTaskNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<PriorityUpdateOneWithoutTaskNestedInput>;
  status?: InputMaybe<StatusUpdateOneWithoutTaskNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  workspace?: InputMaybe<WorkspaceUpdateOneRequiredWithoutTaskNestedInput>;
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
  priority?: InputMaybe<PriorityUpdateOneWithoutTaskNestedInput>;
  status?: InputMaybe<StatusUpdateOneWithoutTaskNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  workspace?: InputMaybe<WorkspaceUpdateOneRequiredWithoutTaskNestedInput>;
};

export type TaskUpdateWithoutPriorityInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutTaskNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<StatusUpdateOneWithoutTaskNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  workspace?: InputMaybe<WorkspaceUpdateOneRequiredWithoutTaskNestedInput>;
};

export type TaskUpdateWithoutStatusInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutTaskNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<PriorityUpdateOneWithoutTaskNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  workspace?: InputMaybe<WorkspaceUpdateOneRequiredWithoutTaskNestedInput>;
};

export type TaskUpdateWithoutWorkspaceInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutTaskNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<PriorityUpdateOneWithoutTaskNestedInput>;
  status?: InputMaybe<StatusUpdateOneWithoutTaskNestedInput>;
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
  priority?: InputMaybe<PriorityNullableRelationFilter>;
  priorityId?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<StatusNullableRelationFilter>;
  statusid?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  workspace?: InputMaybe<WorkspaceRelationFilter>;
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
  priority?: InputMaybe<PriorityNullableRelationFilter>;
  priorityId?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<StatusNullableRelationFilter>;
  statusid?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  workspace?: InputMaybe<WorkspaceRelationFilter>;
  workspaceId?: InputMaybe<StringFilter>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  accounts: Array<Account>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  role: Role;
  sessions: Array<Session>;
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


export type UserSessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
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
  sessions: Scalars['Int']['output'];
  workspaces: Scalars['Int']['output'];
};


export type UserCountAccountsArgs = {
  where?: InputMaybe<AccountWhereInput>;
};


export type UserCountSessionsArgs = {
  where?: InputMaybe<SessionWhereInput>;
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
  firstName: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['Int']['output'];
  lastName: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role?: InputMaybe<Role>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  workspaces?: InputMaybe<WorkspaceCreateNestedManyWithoutUserInput>;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateNestedOneWithoutAccountsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountsInput>;
  create?: InputMaybe<UserCreateWithoutAccountsInput>;
};

export type UserCreateNestedOneWithoutSessionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: InputMaybe<UserCreateWithoutSessionsInput>;
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

export type UserCreateOrConnectWithoutSessionsInput = {
  create: UserCreateWithoutSessionsInput;
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
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role?: InputMaybe<Role>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  workspaces?: InputMaybe<WorkspaceCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  workspaces?: InputMaybe<WorkspaceCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutWorkspacesInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role?: InputMaybe<Role>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
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
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  role: Role;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
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
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  accounts?: InputMaybe<AccountOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrderInput>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  sessions?: InputMaybe<SessionOrderByRelationAggregateInput>;
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
  FirstName = 'firstName',
  Id = 'id',
  Image = 'image',
  LastName = 'lastName',
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
  firstName?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  image?: InputMaybe<StringNullableWithAggregatesFilter>;
  lastName?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  role?: InputMaybe<EnumRoleWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserUpdateInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  workspaces?: InputMaybe<WorkspaceUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
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

export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: InputMaybe<UserCreateWithoutSessionsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutSessionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSessionsInput>;
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

export type UserUpdateToOneWithWhereWithoutSessionsInput = {
  data: UserUpdateWithoutSessionsInput;
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
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  workspaces?: InputMaybe<WorkspaceUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  workspaces?: InputMaybe<WorkspaceUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutWorkspacesInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput;
  update: UserUpdateWithoutAccountsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutSessionsInput = {
  create: UserCreateWithoutSessionsInput;
  update: UserUpdateWithoutSessionsInput;
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
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
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
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  workspaces?: InputMaybe<WorkspaceListRelationFilter>;
};

export type Workspace = {
  __typename?: 'Workspace';
  _count?: Maybe<WorkspaceCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
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
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  task?: InputMaybe<TaskCreateNestedManyWithoutWorkspaceInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutWorkspacesInput>;
};

export type WorkspaceCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type WorkspaceCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
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
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutWorkspacesInput>;
};

export type WorkspaceCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
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
  description: Scalars['String']['output'];
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

export type WorkspaceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type WorkspaceOrderByWithAggregationInput = {
  _count?: InputMaybe<WorkspaceCountOrderByAggregateInput>;
  _max?: InputMaybe<WorkspaceMaxOrderByAggregateInput>;
  _min?: InputMaybe<WorkspaceMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrderInput>;
};

export type WorkspaceOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  task?: InputMaybe<TaskOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrderInput>;
};

export type WorkspaceRelationFilter = {
  is?: InputMaybe<WorkspaceWhereInput>;
  isNot?: InputMaybe<WorkspaceWhereInput>;
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
  description?: InputMaybe<StringFilter>;
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
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type WorkspaceUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  task?: InputMaybe<TaskUpdateManyWithoutWorkspaceNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutWorkspacesNestedInput>;
};

export type WorkspaceUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
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

export type WorkspaceUpdateOneRequiredWithoutTaskNestedInput = {
  connect?: InputMaybe<WorkspaceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WorkspaceCreateOrConnectWithoutTaskInput>;
  create?: InputMaybe<WorkspaceCreateWithoutTaskInput>;
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
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutWorkspacesNestedInput>;
};

export type WorkspaceUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
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
  description?: InputMaybe<StringFilter>;
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
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  task?: InputMaybe<TaskListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type CreateOneTaskMutationVariables = Exact<{
  data: TaskCreateInput;
}>;


export type CreateOneTaskMutation = { __typename?: 'Mutation', createOneTask: { __typename?: 'Task', name: string, message?: string | null, note?: string | null, dueDate?: any | null, workspaceId: string, status?: { __typename?: 'Status', id: number } | null, priority?: { __typename?: 'Priority', id: number } | null, files: Array<{ __typename?: 'File', id: number }>, workspace: { __typename?: 'Workspace', id: string } } };

export type CreateOneUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateOneUserMutation = { __typename?: 'Mutation', createOneUser: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, password: string, role: Role } };

export type CreateOneWorkspaceMutationVariables = Exact<{
  data: WorkspaceCreateInput;
}>;


export type CreateOneWorkspaceMutation = { __typename?: 'Mutation', createOneWorkspace: { __typename?: 'Workspace', id: string, name: string, description: string, user?: { __typename?: 'User', id: string } | null } };

export type DeleteManyTaskMutationVariables = Exact<{
  where?: InputMaybe<TaskWhereInput>;
}>;


export type DeleteManyTaskMutation = { __typename?: 'Mutation', deleteManyTask: { __typename?: 'AffectedRowsOutput', count: number } };

export type DeleteOneWorkspaceMutationVariables = Exact<{
  where: WorkspaceWhereUniqueInput;
}>;


export type DeleteOneWorkspaceMutation = { __typename?: 'Mutation', deleteOneWorkspace?: { __typename?: 'Workspace', id: string } | null };

export type UpdateOneWorkspaceMutationVariables = Exact<{
  data: WorkspaceUpdateInput;
  where: WorkspaceWhereUniqueInput;
}>;


export type UpdateOneWorkspaceMutation = { __typename?: 'Mutation', updateOneWorkspace?: { __typename?: 'Workspace', id: string, name: string, description: string } | null };

export type TasksQueryVariables = Exact<{
  workspaceId: Scalars['String']['input'];
}>;


export type TasksQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', id: string, name: string, message?: string | null, note?: string | null, dueDate?: any | null, files: Array<{ __typename?: 'File', id: number }>, status?: { __typename?: 'Status', name: string, color: string } | null, priority?: { __typename?: 'Priority', name: string, color: string } | null, workspace: { __typename?: 'Workspace', id: string } }> };

export type UserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: Role, image?: string | null, workspaces: Array<{ __typename?: 'Workspace', description: string, name: string, id: string }> } | null };

export type WorkspaceQueryVariables = Exact<{
  where: WorkspaceWhereUniqueInput;
}>;


export type WorkspaceQuery = { __typename?: 'Query', workspace?: { __typename?: 'Workspace', id: string, name: string, user?: { __typename?: 'User', id: string, firstName: string, lastName: string, role: Role } | null, task: Array<{ __typename?: 'Task', id: string, name: string, message?: string | null, note?: string | null, dueDate?: any | null, files: Array<{ __typename?: 'File', id: number }>, status?: { __typename?: 'Status', name: string, color: string } | null, priority?: { __typename?: 'Priority', name: string, color: string } | null }> } | null };

export type WorkspacesQueryVariables = Exact<{
  where?: InputMaybe<WorkspaceWhereInput>;
}>;


export type WorkspacesQuery = { __typename?: 'Query', workspaces: Array<{ __typename?: 'Workspace', id: string, name: string, description: string }> };


export const CreateOneTaskDocument = gql`
    mutation CreateOneTask($data: TaskCreateInput!) {
  createOneTask(data: $data) {
    name
    message
    note
    dueDate
    status {
      id
    }
    priority {
      id
    }
    files {
      id
    }
    workspace {
      id
    }
    workspaceId
  }
}
    `;
export type CreateOneTaskMutationFn = Apollo.MutationFunction<CreateOneTaskMutation, CreateOneTaskMutationVariables>;

/**
 * __useCreateOneTaskMutation__
 *
 * To run a mutation, you first call `useCreateOneTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneTaskMutation, { data, loading, error }] = useCreateOneTaskMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneTaskMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneTaskMutation, CreateOneTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneTaskMutation, CreateOneTaskMutationVariables>(CreateOneTaskDocument, options);
      }
export type CreateOneTaskMutationHookResult = ReturnType<typeof useCreateOneTaskMutation>;
export type CreateOneTaskMutationResult = Apollo.MutationResult<CreateOneTaskMutation>;
export type CreateOneTaskMutationOptions = Apollo.BaseMutationOptions<CreateOneTaskMutation, CreateOneTaskMutationVariables>;
export const CreateOneUserDocument = gql`
    mutation CreateOneUser($data: UserCreateInput!) {
  createOneUser(data: $data) {
    id
    email
    firstName
    lastName
    password
    role
  }
}
    `;
export type CreateOneUserMutationFn = Apollo.MutationFunction<CreateOneUserMutation, CreateOneUserMutationVariables>;

/**
 * __useCreateOneUserMutation__
 *
 * To run a mutation, you first call `useCreateOneUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneUserMutation, { data, loading, error }] = useCreateOneUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneUserMutation, CreateOneUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneUserMutation, CreateOneUserMutationVariables>(CreateOneUserDocument, options);
      }
export type CreateOneUserMutationHookResult = ReturnType<typeof useCreateOneUserMutation>;
export type CreateOneUserMutationResult = Apollo.MutationResult<CreateOneUserMutation>;
export type CreateOneUserMutationOptions = Apollo.BaseMutationOptions<CreateOneUserMutation, CreateOneUserMutationVariables>;
export const CreateOneWorkspaceDocument = gql`
    mutation createOneWorkspace($data: WorkspaceCreateInput!) {
  createOneWorkspace(data: $data) {
    id
    name
    description
    user {
      id
    }
  }
}
    `;
export type CreateOneWorkspaceMutationFn = Apollo.MutationFunction<CreateOneWorkspaceMutation, CreateOneWorkspaceMutationVariables>;

/**
 * __useCreateOneWorkspaceMutation__
 *
 * To run a mutation, you first call `useCreateOneWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneWorkspaceMutation, { data, loading, error }] = useCreateOneWorkspaceMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneWorkspaceMutation, CreateOneWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneWorkspaceMutation, CreateOneWorkspaceMutationVariables>(CreateOneWorkspaceDocument, options);
      }
export type CreateOneWorkspaceMutationHookResult = ReturnType<typeof useCreateOneWorkspaceMutation>;
export type CreateOneWorkspaceMutationResult = Apollo.MutationResult<CreateOneWorkspaceMutation>;
export type CreateOneWorkspaceMutationOptions = Apollo.BaseMutationOptions<CreateOneWorkspaceMutation, CreateOneWorkspaceMutationVariables>;
export const DeleteManyTaskDocument = gql`
    mutation DeleteManyTask($where: TaskWhereInput) {
  deleteManyTask(where: $where) {
    count
  }
}
    `;
export type DeleteManyTaskMutationFn = Apollo.MutationFunction<DeleteManyTaskMutation, DeleteManyTaskMutationVariables>;

/**
 * __useDeleteManyTaskMutation__
 *
 * To run a mutation, you first call `useDeleteManyTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyTaskMutation, { data, loading, error }] = useDeleteManyTaskMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyTaskMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyTaskMutation, DeleteManyTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyTaskMutation, DeleteManyTaskMutationVariables>(DeleteManyTaskDocument, options);
      }
export type DeleteManyTaskMutationHookResult = ReturnType<typeof useDeleteManyTaskMutation>;
export type DeleteManyTaskMutationResult = Apollo.MutationResult<DeleteManyTaskMutation>;
export type DeleteManyTaskMutationOptions = Apollo.BaseMutationOptions<DeleteManyTaskMutation, DeleteManyTaskMutationVariables>;
export const DeleteOneWorkspaceDocument = gql`
    mutation DeleteOneWorkspace($where: WorkspaceWhereUniqueInput!) {
  deleteOneWorkspace(where: $where) {
    id
  }
}
    `;
export type DeleteOneWorkspaceMutationFn = Apollo.MutationFunction<DeleteOneWorkspaceMutation, DeleteOneWorkspaceMutationVariables>;

/**
 * __useDeleteOneWorkspaceMutation__
 *
 * To run a mutation, you first call `useDeleteOneWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneWorkspaceMutation, { data, loading, error }] = useDeleteOneWorkspaceMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneWorkspaceMutation, DeleteOneWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneWorkspaceMutation, DeleteOneWorkspaceMutationVariables>(DeleteOneWorkspaceDocument, options);
      }
export type DeleteOneWorkspaceMutationHookResult = ReturnType<typeof useDeleteOneWorkspaceMutation>;
export type DeleteOneWorkspaceMutationResult = Apollo.MutationResult<DeleteOneWorkspaceMutation>;
export type DeleteOneWorkspaceMutationOptions = Apollo.BaseMutationOptions<DeleteOneWorkspaceMutation, DeleteOneWorkspaceMutationVariables>;
export const UpdateOneWorkspaceDocument = gql`
    mutation UpdateOneWorkspace($data: WorkspaceUpdateInput!, $where: WorkspaceWhereUniqueInput!) {
  updateOneWorkspace(data: $data, where: $where) {
    id
    name
    description
  }
}
    `;
export type UpdateOneWorkspaceMutationFn = Apollo.MutationFunction<UpdateOneWorkspaceMutation, UpdateOneWorkspaceMutationVariables>;

/**
 * __useUpdateOneWorkspaceMutation__
 *
 * To run a mutation, you first call `useUpdateOneWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneWorkspaceMutation, { data, loading, error }] = useUpdateOneWorkspaceMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateOneWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneWorkspaceMutation, UpdateOneWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneWorkspaceMutation, UpdateOneWorkspaceMutationVariables>(UpdateOneWorkspaceDocument, options);
      }
export type UpdateOneWorkspaceMutationHookResult = ReturnType<typeof useUpdateOneWorkspaceMutation>;
export type UpdateOneWorkspaceMutationResult = Apollo.MutationResult<UpdateOneWorkspaceMutation>;
export type UpdateOneWorkspaceMutationOptions = Apollo.BaseMutationOptions<UpdateOneWorkspaceMutation, UpdateOneWorkspaceMutationVariables>;
export const TasksDocument = gql`
    query Tasks($workspaceId: String!) {
  tasks(where: {workspaceId: {equals: $workspaceId}}) {
    id
    name
    message
    note
    dueDate
    files {
      id
    }
    status {
      name
      color
    }
    priority {
      name
      color
    }
    workspace {
      id
    }
  }
}
    `;

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
export const UserDocument = gql`
    query user($where: UserWhereUniqueInput!) {
  user(where: $where) {
    id
    email
    firstName
    lastName
    role
    image
    workspaces {
      description
      name
      id
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables> & ({ variables: UserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export function useUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserSuspenseQueryHookResult = ReturnType<typeof useUserSuspenseQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const WorkspaceDocument = gql`
    query Workspace($where: WorkspaceWhereUniqueInput!) {
  workspace(where: $where) {
    id
    name
    user {
      id
      firstName
      lastName
      role
    }
    task {
      id
      name
      message
      note
      dueDate
      files {
        id
      }
      status {
        name
        color
      }
      priority {
        name
        color
      }
    }
  }
}
    `;

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
    query Workspaces($where: WorkspaceWhereInput) {
  workspaces(where: $where) {
    id
    name
    description
  }
}
    `;

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