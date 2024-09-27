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
    Account: crudResolvers.AccountCrudResolver,
    Session: crudResolvers.SessionCrudResolver,
    User: crudResolvers.UserCrudResolver,
    VerificationRequest: crudResolvers.VerificationRequestCrudResolver
};
const actionResolversMap = {
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
    VerificationRequest: {
        aggregateVerificationRequest: actionResolvers.AggregateVerificationRequestResolver,
        createManyVerificationRequest: actionResolvers.CreateManyVerificationRequestResolver,
        createManyAndReturnVerificationRequest: actionResolvers.CreateManyAndReturnVerificationRequestResolver,
        createOneVerificationRequest: actionResolvers.CreateOneVerificationRequestResolver,
        deleteManyVerificationRequest: actionResolvers.DeleteManyVerificationRequestResolver,
        deleteOneVerificationRequest: actionResolvers.DeleteOneVerificationRequestResolver,
        findFirstVerificationRequest: actionResolvers.FindFirstVerificationRequestResolver,
        findFirstVerificationRequestOrThrow: actionResolvers.FindFirstVerificationRequestOrThrowResolver,
        verificationRequests: actionResolvers.FindManyVerificationRequestResolver,
        verificationRequest: actionResolvers.FindUniqueVerificationRequestResolver,
        getVerificationRequest: actionResolvers.FindUniqueVerificationRequestOrThrowResolver,
        groupByVerificationRequest: actionResolvers.GroupByVerificationRequestResolver,
        updateManyVerificationRequest: actionResolvers.UpdateManyVerificationRequestResolver,
        updateOneVerificationRequest: actionResolvers.UpdateOneVerificationRequestResolver,
        upsertOneVerificationRequest: actionResolvers.UpsertOneVerificationRequestResolver
    }
};
const crudResolversInfo = {
    Account: ["aggregateAccount", "createManyAccount", "createManyAndReturnAccount", "createOneAccount", "deleteManyAccount", "deleteOneAccount", "findFirstAccount", "findFirstAccountOrThrow", "accounts", "account", "getAccount", "groupByAccount", "updateManyAccount", "updateOneAccount", "upsertOneAccount"],
    Session: ["aggregateSession", "createManySession", "createManyAndReturnSession", "createOneSession", "deleteManySession", "deleteOneSession", "findFirstSession", "findFirstSessionOrThrow", "sessions", "session", "getSession", "groupBySession", "updateManySession", "updateOneSession", "upsertOneSession"],
    User: ["aggregateUser", "createManyUser", "createManyAndReturnUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
    VerificationRequest: ["aggregateVerificationRequest", "createManyVerificationRequest", "createManyAndReturnVerificationRequest", "createOneVerificationRequest", "deleteManyVerificationRequest", "deleteOneVerificationRequest", "findFirstVerificationRequest", "findFirstVerificationRequestOrThrow", "verificationRequests", "verificationRequest", "getVerificationRequest", "groupByVerificationRequest", "updateManyVerificationRequest", "updateOneVerificationRequest", "upsertOneVerificationRequest"]
};
const argsInfo = {
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
    AggregateVerificationRequestArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyVerificationRequestArgs: ["data", "skipDuplicates"],
    CreateManyAndReturnVerificationRequestArgs: ["data", "skipDuplicates"],
    CreateOneVerificationRequestArgs: ["data"],
    DeleteManyVerificationRequestArgs: ["where"],
    DeleteOneVerificationRequestArgs: ["where"],
    FindFirstVerificationRequestArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstVerificationRequestOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyVerificationRequestArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueVerificationRequestArgs: ["where"],
    FindUniqueVerificationRequestOrThrowArgs: ["where"],
    GroupByVerificationRequestArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyVerificationRequestArgs: ["data", "where"],
    UpdateOneVerificationRequestArgs: ["data", "where"],
    UpsertOneVerificationRequestArgs: ["where", "create", "update"]
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
    Account: relationResolvers.AccountRelationsResolver,
    Session: relationResolvers.SessionRelationsResolver,
    User: relationResolvers.UserRelationsResolver
};
const relationResolversInfo = {
    Account: ["user"],
    Session: ["user"],
    User: ["accounts", "sessions"]
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
    Account: ["id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    Session: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    User: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt"],
    VerificationRequest: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"]
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
    AggregateAccount: ["_count", "_min", "_max"],
    AccountGroupBy: ["id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateSession: ["_count", "_min", "_max"],
    SessionGroupBy: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateUser: ["_count", "_min", "_max"],
    UserGroupBy: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateVerificationRequest: ["_count", "_min", "_max"],
    VerificationRequestGroupBy: ["id", "identifier", "token", "expires", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    AccountCountAggregate: ["id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt", "_all"],
    AccountMinAggregate: ["id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    AccountMaxAggregate: ["id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    SessionCountAggregate: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt", "_all"],
    SessionMinAggregate: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    SessionMaxAggregate: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    UserCount: ["accounts", "sessions"],
    UserCountAggregate: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "_all"],
    UserMinAggregate: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt"],
    UserMaxAggregate: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt"],
    VerificationRequestCountAggregate: ["id", "identifier", "token", "expires", "createdAt", "updatedAt", "_all"],
    VerificationRequestMinAggregate: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestMaxAggregate: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    CreateManyAndReturnAccount: ["id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt", "user"],
    CreateManyAndReturnSession: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt", "user"],
    CreateManyAndReturnUser: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt"],
    CreateManyAndReturnVerificationRequest: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"]
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
    AccountWhereInput: ["AND", "OR", "NOT", "id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt", "user"],
    AccountOrderByWithRelationInput: ["id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt", "user"],
    AccountWhereUniqueInput: ["id", "providerId_providerAccountId", "AND", "OR", "NOT", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt", "user"],
    AccountOrderByWithAggregationInput: ["id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt", "_count", "_max", "_min"],
    AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    SessionWhereInput: ["AND", "OR", "NOT", "id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt", "user"],
    SessionOrderByWithRelationInput: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt", "user"],
    SessionWhereUniqueInput: ["id", "sessionToken", "accessToken", "AND", "OR", "NOT", "userId", "expires", "createdAt", "updatedAt", "user"],
    SessionOrderByWithAggregationInput: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt", "_count", "_max", "_min"],
    SessionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "accounts", "sessions"],
    UserOrderByWithRelationInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "accounts", "sessions"],
    UserWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "name", "emailVerified", "image", "createdAt", "updatedAt", "accounts", "sessions"],
    UserOrderByWithAggregationInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "_count", "_max", "_min"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt"],
    VerificationRequestWhereInput: ["AND", "OR", "NOT", "id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestOrderByWithRelationInput: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestWhereUniqueInput: ["id", "token", "identifier_token", "AND", "OR", "NOT", "identifier", "expires", "createdAt", "updatedAt"],
    VerificationRequestOrderByWithAggregationInput: ["id", "identifier", "token", "expires", "createdAt", "updatedAt", "_count", "_max", "_min"],
    VerificationRequestScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    AccountCreateInput: ["id", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt", "user"],
    AccountUpdateInput: ["id", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt", "user"],
    AccountCreateManyInput: ["id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    AccountUpdateManyMutationInput: ["id", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    SessionCreateInput: ["id", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt", "user"],
    SessionUpdateInput: ["id", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt", "user"],
    SessionCreateManyInput: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    SessionUpdateManyMutationInput: ["id", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    UserCreateInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "accounts", "sessions"],
    UserUpdateInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "accounts", "sessions"],
    UserCreateManyInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt"],
    UserUpdateManyMutationInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt"],
    VerificationRequestCreateInput: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestUpdateInput: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestCreateManyInput: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestUpdateManyMutationInput: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    UserRelationFilter: ["is", "isNot"],
    SortOrderInput: ["sort", "nulls"],
    AccountProviderIdProviderAccountIdCompoundUniqueInput: ["providerId", "providerAccountId"],
    AccountCountOrderByAggregateInput: ["id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    AccountMaxOrderByAggregateInput: ["id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    AccountMinOrderByAggregateInput: ["id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    SessionCountOrderByAggregateInput: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    SessionMaxOrderByAggregateInput: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    SessionMinOrderByAggregateInput: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    AccountListRelationFilter: ["every", "some", "none"],
    SessionListRelationFilter: ["every", "some", "none"],
    AccountOrderByRelationAggregateInput: ["_count"],
    SessionOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt"],
    UserMaxOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt"],
    UserMinOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt"],
    VerificationRequestIdentifierTokenCompoundUniqueInput: ["identifier", "token"],
    VerificationRequestCountOrderByAggregateInput: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestMaxOrderByAggregateInput: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestMinOrderByAggregateInput: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    UserCreateNestedOneWithoutAccountsInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutAccountsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutSessionsInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutSessionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    AccountCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    SessionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    AccountUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    SessionUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    UserCreateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "sessions"],
    UserCreateOrConnectWithoutAccountsInput: ["where", "create"],
    UserUpsertWithoutAccountsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutAccountsInput: ["where", "data"],
    UserUpdateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "sessions"],
    UserCreateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "accounts"],
    UserCreateOrConnectWithoutSessionsInput: ["where", "create"],
    UserUpsertWithoutSessionsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutSessionsInput: ["where", "data"],
    UserUpdateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "accounts"],
    AccountCreateWithoutUserInput: ["id", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    AccountCreateOrConnectWithoutUserInput: ["where", "create"],
    AccountCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    SessionCreateWithoutUserInput: ["id", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    SessionCreateOrConnectWithoutUserInput: ["where", "create"],
    SessionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    AccountUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    AccountUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    AccountUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    AccountScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    SessionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    SessionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    SessionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    SessionScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    AccountCreateManyUserInput: ["id", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    SessionCreateManyUserInput: ["id", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    AccountUpdateWithoutUserInput: ["id", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    SessionUpdateWithoutUserInput: ["id", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"]
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
