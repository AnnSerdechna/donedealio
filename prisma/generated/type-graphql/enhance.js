"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
    Account: crudResolvers.AccountCrudResolver,
    Session: crudResolvers.SessionCrudResolver,
    Workspace: crudResolvers.WorkspaceCrudResolver
};
const actionResolversMap = {
    User: {
        aggregateUser: actionResolvers.AggregateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        createManyAndReturnUser: actionResolvers.CreateManyAndReturnUserResolver,
        createOneUser: actionResolvers.CreateOneUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        deleteOneUser: actionResolvers.DeleteOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
        users: actionResolvers.FindManyUserResolver,
        user: actionResolvers.FindUniqueUserResolver,
        getUser: actionResolvers.FindUniqueUserOrThrowResolver,
        groupByUser: actionResolvers.GroupByUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        updateOneUser: actionResolvers.UpdateOneUserResolver,
        upsertOneUser: actionResolvers.UpsertOneUserResolver
    },
    Account: {
        aggregateAccount: actionResolvers.AggregateAccountResolver,
        createManyAccount: actionResolvers.CreateManyAccountResolver,
        createManyAndReturnAccount: actionResolvers.CreateManyAndReturnAccountResolver,
        createOneAccount: actionResolvers.CreateOneAccountResolver,
        deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
        deleteOneAccount: actionResolvers.DeleteOneAccountResolver,
        findFirstAccount: actionResolvers.FindFirstAccountResolver,
        findFirstAccountOrThrow: actionResolvers.FindFirstAccountOrThrowResolver,
        accounts: actionResolvers.FindManyAccountResolver,
        account: actionResolvers.FindUniqueAccountResolver,
        getAccount: actionResolvers.FindUniqueAccountOrThrowResolver,
        groupByAccount: actionResolvers.GroupByAccountResolver,
        updateManyAccount: actionResolvers.UpdateManyAccountResolver,
        updateOneAccount: actionResolvers.UpdateOneAccountResolver,
        upsertOneAccount: actionResolvers.UpsertOneAccountResolver
    },
    Session: {
        aggregateSession: actionResolvers.AggregateSessionResolver,
        createManySession: actionResolvers.CreateManySessionResolver,
        createManyAndReturnSession: actionResolvers.CreateManyAndReturnSessionResolver,
        createOneSession: actionResolvers.CreateOneSessionResolver,
        deleteManySession: actionResolvers.DeleteManySessionResolver,
        deleteOneSession: actionResolvers.DeleteOneSessionResolver,
        findFirstSession: actionResolvers.FindFirstSessionResolver,
        findFirstSessionOrThrow: actionResolvers.FindFirstSessionOrThrowResolver,
        sessions: actionResolvers.FindManySessionResolver,
        session: actionResolvers.FindUniqueSessionResolver,
        getSession: actionResolvers.FindUniqueSessionOrThrowResolver,
        groupBySession: actionResolvers.GroupBySessionResolver,
        updateManySession: actionResolvers.UpdateManySessionResolver,
        updateOneSession: actionResolvers.UpdateOneSessionResolver,
        upsertOneSession: actionResolvers.UpsertOneSessionResolver
    },
    Workspace: {
        aggregateWorkspace: actionResolvers.AggregateWorkspaceResolver,
        createManyWorkspace: actionResolvers.CreateManyWorkspaceResolver,
        createManyAndReturnWorkspace: actionResolvers.CreateManyAndReturnWorkspaceResolver,
        createOneWorkspace: actionResolvers.CreateOneWorkspaceResolver,
        deleteManyWorkspace: actionResolvers.DeleteManyWorkspaceResolver,
        deleteOneWorkspace: actionResolvers.DeleteOneWorkspaceResolver,
        findFirstWorkspace: actionResolvers.FindFirstWorkspaceResolver,
        findFirstWorkspaceOrThrow: actionResolvers.FindFirstWorkspaceOrThrowResolver,
        workspaces: actionResolvers.FindManyWorkspaceResolver,
        workspace: actionResolvers.FindUniqueWorkspaceResolver,
        getWorkspace: actionResolvers.FindUniqueWorkspaceOrThrowResolver,
        groupByWorkspace: actionResolvers.GroupByWorkspaceResolver,
        updateManyWorkspace: actionResolvers.UpdateManyWorkspaceResolver,
        updateOneWorkspace: actionResolvers.UpdateOneWorkspaceResolver,
        upsertOneWorkspace: actionResolvers.UpsertOneWorkspaceResolver
    }
};
const crudResolversInfo = {
    User: ["aggregateUser", "createManyUser", "createManyAndReturnUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
    Account: ["aggregateAccount", "createManyAccount", "createManyAndReturnAccount", "createOneAccount", "deleteManyAccount", "deleteOneAccount", "findFirstAccount", "findFirstAccountOrThrow", "accounts", "account", "getAccount", "groupByAccount", "updateManyAccount", "updateOneAccount", "upsertOneAccount"],
    Session: ["aggregateSession", "createManySession", "createManyAndReturnSession", "createOneSession", "deleteManySession", "deleteOneSession", "findFirstSession", "findFirstSessionOrThrow", "sessions", "session", "getSession", "groupBySession", "updateManySession", "updateOneSession", "upsertOneSession"],
    Workspace: ["aggregateWorkspace", "createManyWorkspace", "createManyAndReturnWorkspace", "createOneWorkspace", "deleteManyWorkspace", "deleteOneWorkspace", "findFirstWorkspace", "findFirstWorkspaceOrThrow", "workspaces", "workspace", "getWorkspace", "groupByWorkspace", "updateManyWorkspace", "updateOneWorkspace", "upsertOneWorkspace"]
};
const argsInfo = {
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    CreateManyAndReturnUserArgs: ["data", "skipDuplicates"],
    CreateOneUserArgs: ["data"],
    DeleteManyUserArgs: ["where"],
    DeleteOneUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserArgs: ["where"],
    FindUniqueUserOrThrowArgs: ["where"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserArgs: ["data", "where"],
    UpdateOneUserArgs: ["data", "where"],
    UpsertOneUserArgs: ["where", "create", "update"],
    AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyAccountArgs: ["data", "skipDuplicates"],
    CreateManyAndReturnAccountArgs: ["data", "skipDuplicates"],
    CreateOneAccountArgs: ["data"],
    DeleteManyAccountArgs: ["where"],
    DeleteOneAccountArgs: ["where"],
    FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstAccountOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueAccountArgs: ["where"],
    FindUniqueAccountOrThrowArgs: ["where"],
    GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyAccountArgs: ["data", "where"],
    UpdateOneAccountArgs: ["data", "where"],
    UpsertOneAccountArgs: ["where", "create", "update"],
    AggregateSessionArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManySessionArgs: ["data", "skipDuplicates"],
    CreateManyAndReturnSessionArgs: ["data", "skipDuplicates"],
    CreateOneSessionArgs: ["data"],
    DeleteManySessionArgs: ["where"],
    DeleteOneSessionArgs: ["where"],
    FindFirstSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstSessionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManySessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueSessionArgs: ["where"],
    FindUniqueSessionOrThrowArgs: ["where"],
    GroupBySessionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManySessionArgs: ["data", "where"],
    UpdateOneSessionArgs: ["data", "where"],
    UpsertOneSessionArgs: ["where", "create", "update"],
    AggregateWorkspaceArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyWorkspaceArgs: ["data", "skipDuplicates"],
    CreateManyAndReturnWorkspaceArgs: ["data", "skipDuplicates"],
    CreateOneWorkspaceArgs: ["data"],
    DeleteManyWorkspaceArgs: ["where"],
    DeleteOneWorkspaceArgs: ["where"],
    FindFirstWorkspaceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstWorkspaceOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyWorkspaceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueWorkspaceArgs: ["where"],
    FindUniqueWorkspaceOrThrowArgs: ["where"],
    GroupByWorkspaceArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyWorkspaceArgs: ["data", "where"],
    UpdateOneWorkspaceArgs: ["data", "where"],
    UpsertOneWorkspaceArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    const mutationOperationPrefixes = [
        "createOne", "createMany", "createManyAndReturn", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
    ];
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = resolverActionsConfig._all;
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
            const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
            const mainDecorators = [
                ...allActionsDecorators ?? [],
                ...operationKindDecorators ?? [],
            ];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(mainDecorators);
            }
            else {
                decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
const relationResolversMap = {
    User: relationResolvers.UserRelationsResolver,
    Account: relationResolvers.AccountRelationsResolver,
    Session: relationResolvers.SessionRelationsResolver,
    Workspace: relationResolvers.WorkspaceRelationsResolver
};
const relationResolversInfo = {
    User: ["accounts", "sessions", "workspaces"],
    Account: ["user"],
    Session: ["user"],
    Workspace: ["user"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        const allActionsDecorators = relationResolverActionsConfig._all ?? [];
        const relationResolverActionNames = relationResolversInfo[modelName];
        for (const relationResolverActionName of relationResolverActionNames) {
            const maybeDecoratorsOrFn = relationResolverActionsConfig[relationResolverActionName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allActionsDecorators);
            }
            else {
                decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = enhanceConfig.fields._all ?? [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    User: ["id", "email", "emailVerified", "firstName", "lastName", "password", "role", "image", "createdAt", "updatedAt"],
    Account: ["id", "userId", "provider", "providerAccountId", "type", "access_token", "expires_at"],
    Session: ["id", "sessionToken", "userId", "expires"],
    Workspace: ["id", "name", "description", "createdAt", "updatedAt", "userId"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
const outputsInfo = {
    AggregateUser: ["_count", "_min", "_max"],
    UserGroupBy: ["id", "email", "emailVerified", "firstName", "lastName", "password", "role", "image", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateAccount: ["_count", "_avg", "_sum", "_min", "_max"],
    AccountGroupBy: ["id", "userId", "provider", "providerAccountId", "type", "access_token", "expires_at", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateSession: ["_count", "_min", "_max"],
    SessionGroupBy: ["id", "sessionToken", "userId", "expires", "_count", "_min", "_max"],
    AggregateWorkspace: ["_count", "_min", "_max"],
    WorkspaceGroupBy: ["id", "name", "description", "createdAt", "updatedAt", "userId", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UserCount: ["accounts", "sessions", "workspaces"],
    UserCountAggregate: ["id", "email", "emailVerified", "firstName", "lastName", "password", "role", "image", "createdAt", "updatedAt", "_all"],
    UserMinAggregate: ["id", "email", "emailVerified", "firstName", "lastName", "password", "role", "image", "createdAt", "updatedAt"],
    UserMaxAggregate: ["id", "email", "emailVerified", "firstName", "lastName", "password", "role", "image", "createdAt", "updatedAt"],
    AccountCountAggregate: ["id", "userId", "provider", "providerAccountId", "type", "access_token", "expires_at", "_all"],
    AccountAvgAggregate: ["expires_at"],
    AccountSumAggregate: ["expires_at"],
    AccountMinAggregate: ["id", "userId", "provider", "providerAccountId", "type", "access_token", "expires_at"],
    AccountMaxAggregate: ["id", "userId", "provider", "providerAccountId", "type", "access_token", "expires_at"],
    SessionCountAggregate: ["id", "sessionToken", "userId", "expires", "_all"],
    SessionMinAggregate: ["id", "sessionToken", "userId", "expires"],
    SessionMaxAggregate: ["id", "sessionToken", "userId", "expires"],
    WorkspaceCountAggregate: ["id", "name", "description", "createdAt", "updatedAt", "userId", "_all"],
    WorkspaceMinAggregate: ["id", "name", "description", "createdAt", "updatedAt", "userId"],
    WorkspaceMaxAggregate: ["id", "name", "description", "createdAt", "updatedAt", "userId"],
    CreateManyAndReturnUser: ["id", "email", "emailVerified", "firstName", "lastName", "password", "role", "image", "createdAt", "updatedAt"],
    CreateManyAndReturnAccount: ["id", "userId", "provider", "providerAccountId", "type", "access_token", "expires_at", "user"],
    CreateManyAndReturnSession: ["id", "sessionToken", "userId", "expires", "user"],
    CreateManyAndReturnWorkspace: ["id", "name", "description", "createdAt", "updatedAt", "userId", "user"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
const inputsInfo = {
    UserWhereInput: ["AND", "OR", "NOT", "id", "email", "emailVerified", "firstName", "lastName", "password", "role", "image", "createdAt", "updatedAt", "accounts", "sessions", "workspaces"],
    UserOrderByWithRelationInput: ["id", "email", "emailVerified", "firstName", "lastName", "password", "role", "image", "createdAt", "updatedAt", "accounts", "sessions", "workspaces"],
    UserWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "emailVerified", "firstName", "lastName", "password", "role", "image", "createdAt", "updatedAt", "accounts", "sessions", "workspaces"],
    UserOrderByWithAggregationInput: ["id", "email", "emailVerified", "firstName", "lastName", "password", "role", "image", "createdAt", "updatedAt", "_count", "_max", "_min"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "emailVerified", "firstName", "lastName", "password", "role", "image", "createdAt", "updatedAt"],
    AccountWhereInput: ["AND", "OR", "NOT", "id", "userId", "provider", "providerAccountId", "type", "access_token", "expires_at", "user"],
    AccountOrderByWithRelationInput: ["id", "userId", "provider", "providerAccountId", "type", "access_token", "expires_at", "user"],
    AccountWhereUniqueInput: ["id", "AND", "OR", "NOT", "userId", "provider", "providerAccountId", "type", "access_token", "expires_at", "user"],
    AccountOrderByWithAggregationInput: ["id", "userId", "provider", "providerAccountId", "type", "access_token", "expires_at", "_count", "_avg", "_max", "_min", "_sum"],
    AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "provider", "providerAccountId", "type", "access_token", "expires_at"],
    SessionWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires", "user"],
    SessionOrderByWithRelationInput: ["id", "sessionToken", "userId", "expires", "user"],
    SessionWhereUniqueInput: ["id", "sessionToken", "AND", "OR", "NOT", "userId", "expires", "user"],
    SessionOrderByWithAggregationInput: ["id", "sessionToken", "userId", "expires", "_count", "_max", "_min"],
    SessionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
    WorkspaceWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "createdAt", "updatedAt", "userId", "user"],
    WorkspaceOrderByWithRelationInput: ["id", "name", "description", "createdAt", "updatedAt", "userId", "user"],
    WorkspaceWhereUniqueInput: ["id", "AND", "OR", "NOT", "name", "description", "createdAt", "updatedAt", "userId", "user"],
    WorkspaceOrderByWithAggregationInput: ["id", "name", "description", "createdAt", "updatedAt", "userId", "_count", "_max", "_min"],
    WorkspaceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "description", "createdAt", "updatedAt", "userId"],
    UserCreateInput: ["id", "email", "emailVerified", "firstName", "lastName", "password", "role", "image", "createdAt", "updatedAt", "accounts", "sessions", "workspaces"],
    UserUpdateInput: ["id", "email", "emailVerified", "firstName", "lastName", "password", "role", "image", "createdAt", "updatedAt", "accounts", "sessions", "workspaces"],
    UserCreateManyInput: ["id", "email", "emailVerified", "firstName", "lastName", "password", "role", "image", "createdAt", "updatedAt"],
    UserUpdateManyMutationInput: ["id", "email", "emailVerified", "firstName", "lastName", "password", "role", "image", "createdAt", "updatedAt"],
    AccountCreateInput: ["id", "provider", "providerAccountId", "type", "access_token", "expires_at", "user"],
    AccountUpdateInput: ["id", "provider", "providerAccountId", "type", "access_token", "expires_at", "user"],
    AccountCreateManyInput: ["id", "userId", "provider", "providerAccountId", "type", "access_token", "expires_at"],
    AccountUpdateManyMutationInput: ["id", "provider", "providerAccountId", "type", "access_token", "expires_at"],
    SessionCreateInput: ["id", "sessionToken", "expires", "user"],
    SessionUpdateInput: ["id", "sessionToken", "expires", "user"],
    SessionCreateManyInput: ["id", "sessionToken", "userId", "expires"],
    SessionUpdateManyMutationInput: ["id", "sessionToken", "expires"],
    WorkspaceCreateInput: ["id", "name", "description", "createdAt", "updatedAt", "user"],
    WorkspaceUpdateInput: ["id", "name", "description", "createdAt", "updatedAt", "user"],
    WorkspaceCreateManyInput: ["id", "name", "description", "createdAt", "updatedAt", "userId"],
    WorkspaceUpdateManyMutationInput: ["id", "name", "description", "createdAt", "updatedAt"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    EnumRoleFilter: ["equals", "in", "notIn", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    AccountListRelationFilter: ["every", "some", "none"],
    SessionListRelationFilter: ["every", "some", "none"],
    WorkspaceListRelationFilter: ["every", "some", "none"],
    SortOrderInput: ["sort", "nulls"],
    AccountOrderByRelationAggregateInput: ["_count"],
    SessionOrderByRelationAggregateInput: ["_count"],
    WorkspaceOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "email", "emailVerified", "firstName", "lastName", "password", "role", "image", "createdAt", "updatedAt"],
    UserMaxOrderByAggregateInput: ["id", "email", "emailVerified", "firstName", "lastName", "password", "role", "image", "createdAt", "updatedAt"],
    UserMinOrderByAggregateInput: ["id", "email", "emailVerified", "firstName", "lastName", "password", "role", "image", "createdAt", "updatedAt"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    UserRelationFilter: ["is", "isNot"],
    AccountCountOrderByAggregateInput: ["id", "userId", "provider", "providerAccountId", "type", "access_token", "expires_at"],
    AccountAvgOrderByAggregateInput: ["expires_at"],
    AccountMaxOrderByAggregateInput: ["id", "userId", "provider", "providerAccountId", "type", "access_token", "expires_at"],
    AccountMinOrderByAggregateInput: ["id", "userId", "provider", "providerAccountId", "type", "access_token", "expires_at"],
    AccountSumOrderByAggregateInput: ["expires_at"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    SessionCountOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
    SessionMaxOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
    SessionMinOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
    UserNullableRelationFilter: ["is", "isNot"],
    WorkspaceCountOrderByAggregateInput: ["id", "name", "description", "createdAt", "updatedAt", "userId"],
    WorkspaceMaxOrderByAggregateInput: ["id", "name", "description", "createdAt", "updatedAt", "userId"],
    WorkspaceMinOrderByAggregateInput: ["id", "name", "description", "createdAt", "updatedAt", "userId"],
    AccountCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    SessionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    WorkspaceCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    EnumRoleFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    AccountUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    SessionUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    WorkspaceUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutAccountsInput: ["create", "connectOrCreate", "connect"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserUpdateOneRequiredWithoutAccountsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutSessionsInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutSessionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutWorkspacesInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneWithoutWorkspacesNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    AccountCreateWithoutUserInput: ["id", "provider", "providerAccountId", "type", "access_token", "expires_at"],
    AccountCreateOrConnectWithoutUserInput: ["where", "create"],
    AccountCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    SessionCreateWithoutUserInput: ["id", "sessionToken", "expires"],
    SessionCreateOrConnectWithoutUserInput: ["where", "create"],
    SessionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    WorkspaceCreateWithoutUserInput: ["id", "name", "description", "createdAt", "updatedAt"],
    WorkspaceCreateOrConnectWithoutUserInput: ["where", "create"],
    WorkspaceCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    AccountUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    AccountUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    AccountUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    AccountScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "provider", "providerAccountId", "type", "access_token", "expires_at"],
    SessionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    SessionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    SessionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    SessionScalarWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
    WorkspaceUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    WorkspaceUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    WorkspaceUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    WorkspaceScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "createdAt", "updatedAt", "userId"],
    UserCreateWithoutAccountsInput: ["id", "email", "emailVerified", "firstName", "lastName", "password", "role", "image", "createdAt", "updatedAt", "sessions", "workspaces"],
    UserCreateOrConnectWithoutAccountsInput: ["where", "create"],
    UserUpsertWithoutAccountsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutAccountsInput: ["where", "data"],
    UserUpdateWithoutAccountsInput: ["id", "email", "emailVerified", "firstName", "lastName", "password", "role", "image", "createdAt", "updatedAt", "sessions", "workspaces"],
    UserCreateWithoutSessionsInput: ["id", "email", "emailVerified", "firstName", "lastName", "password", "role", "image", "createdAt", "updatedAt", "accounts", "workspaces"],
    UserCreateOrConnectWithoutSessionsInput: ["where", "create"],
    UserUpsertWithoutSessionsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutSessionsInput: ["where", "data"],
    UserUpdateWithoutSessionsInput: ["id", "email", "emailVerified", "firstName", "lastName", "password", "role", "image", "createdAt", "updatedAt", "accounts", "workspaces"],
    UserCreateWithoutWorkspacesInput: ["id", "email", "emailVerified", "firstName", "lastName", "password", "role", "image", "createdAt", "updatedAt", "accounts", "sessions"],
    UserCreateOrConnectWithoutWorkspacesInput: ["where", "create"],
    UserUpsertWithoutWorkspacesInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutWorkspacesInput: ["where", "data"],
    UserUpdateWithoutWorkspacesInput: ["id", "email", "emailVerified", "firstName", "lastName", "password", "role", "image", "createdAt", "updatedAt", "accounts", "sessions"],
    AccountCreateManyUserInput: ["id", "provider", "providerAccountId", "type", "access_token", "expires_at"],
    SessionCreateManyUserInput: ["id", "sessionToken", "expires"],
    WorkspaceCreateManyUserInput: ["id", "name", "description", "createdAt", "updatedAt"],
    AccountUpdateWithoutUserInput: ["id", "provider", "providerAccountId", "type", "access_token", "expires_at"],
    SessionUpdateWithoutUserInput: ["id", "sessionToken", "expires"],
    WorkspaceUpdateWithoutUserInput: ["id", "name", "description", "createdAt", "updatedAt"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}