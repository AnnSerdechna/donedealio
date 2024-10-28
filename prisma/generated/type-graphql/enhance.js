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
    VerificationToken: crudResolvers.VerificationTokenCrudResolver,
    Workspace: crudResolvers.WorkspaceCrudResolver,
    File: crudResolvers.FileCrudResolver,
    Task: crudResolvers.TaskCrudResolver,
    Status: crudResolvers.StatusCrudResolver,
    Priority: crudResolvers.PriorityCrudResolver
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
    VerificationToken: {
        aggregateVerificationToken: actionResolvers.AggregateVerificationTokenResolver,
        createManyVerificationToken: actionResolvers.CreateManyVerificationTokenResolver,
        createManyAndReturnVerificationToken: actionResolvers.CreateManyAndReturnVerificationTokenResolver,
        createOneVerificationToken: actionResolvers.CreateOneVerificationTokenResolver,
        deleteManyVerificationToken: actionResolvers.DeleteManyVerificationTokenResolver,
        deleteOneVerificationToken: actionResolvers.DeleteOneVerificationTokenResolver,
        findFirstVerificationToken: actionResolvers.FindFirstVerificationTokenResolver,
        findFirstVerificationTokenOrThrow: actionResolvers.FindFirstVerificationTokenOrThrowResolver,
        verificationTokens: actionResolvers.FindManyVerificationTokenResolver,
        verificationToken: actionResolvers.FindUniqueVerificationTokenResolver,
        getVerificationToken: actionResolvers.FindUniqueVerificationTokenOrThrowResolver,
        groupByVerificationToken: actionResolvers.GroupByVerificationTokenResolver,
        updateManyVerificationToken: actionResolvers.UpdateManyVerificationTokenResolver,
        updateOneVerificationToken: actionResolvers.UpdateOneVerificationTokenResolver,
        upsertOneVerificationToken: actionResolvers.UpsertOneVerificationTokenResolver
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
    },
    File: {
        aggregateFile: actionResolvers.AggregateFileResolver,
        createManyFile: actionResolvers.CreateManyFileResolver,
        createManyAndReturnFile: actionResolvers.CreateManyAndReturnFileResolver,
        createOneFile: actionResolvers.CreateOneFileResolver,
        deleteManyFile: actionResolvers.DeleteManyFileResolver,
        deleteOneFile: actionResolvers.DeleteOneFileResolver,
        findFirstFile: actionResolvers.FindFirstFileResolver,
        findFirstFileOrThrow: actionResolvers.FindFirstFileOrThrowResolver,
        files: actionResolvers.FindManyFileResolver,
        file: actionResolvers.FindUniqueFileResolver,
        getFile: actionResolvers.FindUniqueFileOrThrowResolver,
        groupByFile: actionResolvers.GroupByFileResolver,
        updateManyFile: actionResolvers.UpdateManyFileResolver,
        updateOneFile: actionResolvers.UpdateOneFileResolver,
        upsertOneFile: actionResolvers.UpsertOneFileResolver
    },
    Task: {
        aggregateTask: actionResolvers.AggregateTaskResolver,
        createManyTask: actionResolvers.CreateManyTaskResolver,
        createManyAndReturnTask: actionResolvers.CreateManyAndReturnTaskResolver,
        createOneTask: actionResolvers.CreateOneTaskResolver,
        deleteManyTask: actionResolvers.DeleteManyTaskResolver,
        deleteOneTask: actionResolvers.DeleteOneTaskResolver,
        findFirstTask: actionResolvers.FindFirstTaskResolver,
        findFirstTaskOrThrow: actionResolvers.FindFirstTaskOrThrowResolver,
        tasks: actionResolvers.FindManyTaskResolver,
        task: actionResolvers.FindUniqueTaskResolver,
        getTask: actionResolvers.FindUniqueTaskOrThrowResolver,
        groupByTask: actionResolvers.GroupByTaskResolver,
        updateManyTask: actionResolvers.UpdateManyTaskResolver,
        updateOneTask: actionResolvers.UpdateOneTaskResolver,
        upsertOneTask: actionResolvers.UpsertOneTaskResolver
    },
    Status: {
        aggregateStatus: actionResolvers.AggregateStatusResolver,
        createManyStatus: actionResolvers.CreateManyStatusResolver,
        createManyAndReturnStatus: actionResolvers.CreateManyAndReturnStatusResolver,
        createOneStatus: actionResolvers.CreateOneStatusResolver,
        deleteManyStatus: actionResolvers.DeleteManyStatusResolver,
        deleteOneStatus: actionResolvers.DeleteOneStatusResolver,
        findFirstStatus: actionResolvers.FindFirstStatusResolver,
        findFirstStatusOrThrow: actionResolvers.FindFirstStatusOrThrowResolver,
        statuses: actionResolvers.FindManyStatusResolver,
        status: actionResolvers.FindUniqueStatusResolver,
        getStatus: actionResolvers.FindUniqueStatusOrThrowResolver,
        groupByStatus: actionResolvers.GroupByStatusResolver,
        updateManyStatus: actionResolvers.UpdateManyStatusResolver,
        updateOneStatus: actionResolvers.UpdateOneStatusResolver,
        upsertOneStatus: actionResolvers.UpsertOneStatusResolver
    },
    Priority: {
        aggregatePriority: actionResolvers.AggregatePriorityResolver,
        createManyPriority: actionResolvers.CreateManyPriorityResolver,
        createManyAndReturnPriority: actionResolvers.CreateManyAndReturnPriorityResolver,
        createOnePriority: actionResolvers.CreateOnePriorityResolver,
        deleteManyPriority: actionResolvers.DeleteManyPriorityResolver,
        deleteOnePriority: actionResolvers.DeleteOnePriorityResolver,
        findFirstPriority: actionResolvers.FindFirstPriorityResolver,
        findFirstPriorityOrThrow: actionResolvers.FindFirstPriorityOrThrowResolver,
        priorities: actionResolvers.FindManyPriorityResolver,
        priority: actionResolvers.FindUniquePriorityResolver,
        getPriority: actionResolvers.FindUniquePriorityOrThrowResolver,
        groupByPriority: actionResolvers.GroupByPriorityResolver,
        updateManyPriority: actionResolvers.UpdateManyPriorityResolver,
        updateOnePriority: actionResolvers.UpdateOnePriorityResolver,
        upsertOnePriority: actionResolvers.UpsertOnePriorityResolver
    }
};
const crudResolversInfo = {
    User: ["aggregateUser", "createManyUser", "createManyAndReturnUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
    Account: ["aggregateAccount", "createManyAccount", "createManyAndReturnAccount", "createOneAccount", "deleteManyAccount", "deleteOneAccount", "findFirstAccount", "findFirstAccountOrThrow", "accounts", "account", "getAccount", "groupByAccount", "updateManyAccount", "updateOneAccount", "upsertOneAccount"],
    VerificationToken: ["aggregateVerificationToken", "createManyVerificationToken", "createManyAndReturnVerificationToken", "createOneVerificationToken", "deleteManyVerificationToken", "deleteOneVerificationToken", "findFirstVerificationToken", "findFirstVerificationTokenOrThrow", "verificationTokens", "verificationToken", "getVerificationToken", "groupByVerificationToken", "updateManyVerificationToken", "updateOneVerificationToken", "upsertOneVerificationToken"],
    Workspace: ["aggregateWorkspace", "createManyWorkspace", "createManyAndReturnWorkspace", "createOneWorkspace", "deleteManyWorkspace", "deleteOneWorkspace", "findFirstWorkspace", "findFirstWorkspaceOrThrow", "workspaces", "workspace", "getWorkspace", "groupByWorkspace", "updateManyWorkspace", "updateOneWorkspace", "upsertOneWorkspace"],
    File: ["aggregateFile", "createManyFile", "createManyAndReturnFile", "createOneFile", "deleteManyFile", "deleteOneFile", "findFirstFile", "findFirstFileOrThrow", "files", "file", "getFile", "groupByFile", "updateManyFile", "updateOneFile", "upsertOneFile"],
    Task: ["aggregateTask", "createManyTask", "createManyAndReturnTask", "createOneTask", "deleteManyTask", "deleteOneTask", "findFirstTask", "findFirstTaskOrThrow", "tasks", "task", "getTask", "groupByTask", "updateManyTask", "updateOneTask", "upsertOneTask"],
    Status: ["aggregateStatus", "createManyStatus", "createManyAndReturnStatus", "createOneStatus", "deleteManyStatus", "deleteOneStatus", "findFirstStatus", "findFirstStatusOrThrow", "statuses", "status", "getStatus", "groupByStatus", "updateManyStatus", "updateOneStatus", "upsertOneStatus"],
    Priority: ["aggregatePriority", "createManyPriority", "createManyAndReturnPriority", "createOnePriority", "deleteManyPriority", "deleteOnePriority", "findFirstPriority", "findFirstPriorityOrThrow", "priorities", "priority", "getPriority", "groupByPriority", "updateManyPriority", "updateOnePriority", "upsertOnePriority"]
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
    AggregateVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyVerificationTokenArgs: ["data", "skipDuplicates"],
    CreateManyAndReturnVerificationTokenArgs: ["data", "skipDuplicates"],
    CreateOneVerificationTokenArgs: ["data"],
    DeleteManyVerificationTokenArgs: ["where"],
    DeleteOneVerificationTokenArgs: ["where"],
    FindFirstVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstVerificationTokenOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueVerificationTokenArgs: ["where"],
    FindUniqueVerificationTokenOrThrowArgs: ["where"],
    GroupByVerificationTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyVerificationTokenArgs: ["data", "where"],
    UpdateOneVerificationTokenArgs: ["data", "where"],
    UpsertOneVerificationTokenArgs: ["where", "create", "update"],
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
    UpsertOneWorkspaceArgs: ["where", "create", "update"],
    AggregateFileArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyFileArgs: ["data", "skipDuplicates"],
    CreateManyAndReturnFileArgs: ["data", "skipDuplicates"],
    CreateOneFileArgs: ["data"],
    DeleteManyFileArgs: ["where"],
    DeleteOneFileArgs: ["where"],
    FindFirstFileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstFileOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyFileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueFileArgs: ["where"],
    FindUniqueFileOrThrowArgs: ["where"],
    GroupByFileArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyFileArgs: ["data", "where"],
    UpdateOneFileArgs: ["data", "where"],
    UpsertOneFileArgs: ["where", "create", "update"],
    AggregateTaskArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyTaskArgs: ["data", "skipDuplicates"],
    CreateManyAndReturnTaskArgs: ["data", "skipDuplicates"],
    CreateOneTaskArgs: ["data"],
    DeleteManyTaskArgs: ["where"],
    DeleteOneTaskArgs: ["where"],
    FindFirstTaskArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstTaskOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyTaskArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueTaskArgs: ["where"],
    FindUniqueTaskOrThrowArgs: ["where"],
    GroupByTaskArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyTaskArgs: ["data", "where"],
    UpdateOneTaskArgs: ["data", "where"],
    UpsertOneTaskArgs: ["where", "create", "update"],
    AggregateStatusArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyStatusArgs: ["data", "skipDuplicates"],
    CreateManyAndReturnStatusArgs: ["data", "skipDuplicates"],
    CreateOneStatusArgs: ["data"],
    DeleteManyStatusArgs: ["where"],
    DeleteOneStatusArgs: ["where"],
    FindFirstStatusArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstStatusOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyStatusArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueStatusArgs: ["where"],
    FindUniqueStatusOrThrowArgs: ["where"],
    GroupByStatusArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyStatusArgs: ["data", "where"],
    UpdateOneStatusArgs: ["data", "where"],
    UpsertOneStatusArgs: ["where", "create", "update"],
    AggregatePriorityArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyPriorityArgs: ["data", "skipDuplicates"],
    CreateManyAndReturnPriorityArgs: ["data", "skipDuplicates"],
    CreateOnePriorityArgs: ["data"],
    DeleteManyPriorityArgs: ["where"],
    DeleteOnePriorityArgs: ["where"],
    FindFirstPriorityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstPriorityOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyPriorityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniquePriorityArgs: ["where"],
    FindUniquePriorityOrThrowArgs: ["where"],
    GroupByPriorityArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyPriorityArgs: ["data", "where"],
    UpdateOnePriorityArgs: ["data", "where"],
    UpsertOnePriorityArgs: ["where", "create", "update"]
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
    Workspace: relationResolvers.WorkspaceRelationsResolver,
    File: relationResolvers.FileRelationsResolver,
    Task: relationResolvers.TaskRelationsResolver,
    Status: relationResolvers.StatusRelationsResolver,
    Priority: relationResolvers.PriorityRelationsResolver
};
const relationResolversInfo = {
    User: ["accounts", "workspaces"],
    Account: ["user"],
    Workspace: ["task", "user"],
    File: ["task"],
    Task: ["status", "priority", "files", "workspace"],
    Status: ["task"],
    Priority: ["task"]
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
    User: ["id", "name", "email", "emailVerified", "password", "role", "image", "createdAt", "updatedAt"],
    Account: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    VerificationToken: ["id", "email", "token", "expires"],
    Workspace: ["id", "name", "description", "createdAt", "updatedAt", "userId"],
    File: ["id", "file", "taskId"],
    Task: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "statusId", "priorityId", "workspaceId"],
    Status: ["id", "name", "color"],
    Priority: ["id", "name", "color"]
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
    UserGroupBy: ["id", "name", "email", "emailVerified", "password", "role", "image", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateAccount: ["_count", "_avg", "_sum", "_min", "_max"],
    AccountGroupBy: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateVerificationToken: ["_count", "_min", "_max"],
    VerificationTokenGroupBy: ["id", "email", "token", "expires", "_count", "_min", "_max"],
    AggregateWorkspace: ["_count", "_min", "_max"],
    WorkspaceGroupBy: ["id", "name", "description", "createdAt", "updatedAt", "userId", "_count", "_min", "_max"],
    AggregateFile: ["_count", "_avg", "_sum", "_min", "_max"],
    FileGroupBy: ["id", "file", "taskId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateTask: ["_count", "_avg", "_sum", "_min", "_max"],
    TaskGroupBy: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "statusId", "priorityId", "workspaceId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateStatus: ["_count", "_avg", "_sum", "_min", "_max"],
    StatusGroupBy: ["id", "name", "color", "_count", "_avg", "_sum", "_min", "_max"],
    AggregatePriority: ["_count", "_avg", "_sum", "_min", "_max"],
    PriorityGroupBy: ["id", "name", "color", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UserCount: ["accounts", "workspaces"],
    UserCountAggregate: ["id", "name", "email", "emailVerified", "password", "role", "image", "createdAt", "updatedAt", "_all"],
    UserMinAggregate: ["id", "name", "email", "emailVerified", "password", "role", "image", "createdAt", "updatedAt"],
    UserMaxAggregate: ["id", "name", "email", "emailVerified", "password", "role", "image", "createdAt", "updatedAt"],
    AccountCountAggregate: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "_all"],
    AccountAvgAggregate: ["expires_at"],
    AccountSumAggregate: ["expires_at"],
    AccountMinAggregate: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    AccountMaxAggregate: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    VerificationTokenCountAggregate: ["id", "email", "token", "expires", "_all"],
    VerificationTokenMinAggregate: ["id", "email", "token", "expires"],
    VerificationTokenMaxAggregate: ["id", "email", "token", "expires"],
    WorkspaceCount: ["task"],
    WorkspaceCountAggregate: ["id", "name", "description", "createdAt", "updatedAt", "userId", "_all"],
    WorkspaceMinAggregate: ["id", "name", "description", "createdAt", "updatedAt", "userId"],
    WorkspaceMaxAggregate: ["id", "name", "description", "createdAt", "updatedAt", "userId"],
    FileCountAggregate: ["id", "file", "taskId", "_all"],
    FileAvgAggregate: ["id"],
    FileSumAggregate: ["id"],
    FileMinAggregate: ["id", "file", "taskId"],
    FileMaxAggregate: ["id", "file", "taskId"],
    TaskCount: ["files"],
    TaskCountAggregate: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "statusId", "priorityId", "workspaceId", "_all"],
    TaskAvgAggregate: ["statusId", "priorityId"],
    TaskSumAggregate: ["statusId", "priorityId"],
    TaskMinAggregate: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "statusId", "priorityId", "workspaceId"],
    TaskMaxAggregate: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "statusId", "priorityId", "workspaceId"],
    StatusCount: ["task"],
    StatusCountAggregate: ["id", "name", "color", "_all"],
    StatusAvgAggregate: ["id"],
    StatusSumAggregate: ["id"],
    StatusMinAggregate: ["id", "name", "color"],
    StatusMaxAggregate: ["id", "name", "color"],
    PriorityCount: ["task"],
    PriorityCountAggregate: ["id", "name", "color", "_all"],
    PriorityAvgAggregate: ["id"],
    PrioritySumAggregate: ["id"],
    PriorityMinAggregate: ["id", "name", "color"],
    PriorityMaxAggregate: ["id", "name", "color"],
    CreateManyAndReturnUser: ["id", "name", "email", "emailVerified", "password", "role", "image", "createdAt", "updatedAt"],
    CreateManyAndReturnAccount: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "user"],
    CreateManyAndReturnVerificationToken: ["id", "email", "token", "expires"],
    CreateManyAndReturnWorkspace: ["id", "name", "description", "createdAt", "updatedAt", "userId", "user"],
    CreateManyAndReturnFile: ["id", "file", "taskId", "task"],
    CreateManyAndReturnTask: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "statusId", "priorityId", "workspaceId", "status", "priority", "workspace"],
    CreateManyAndReturnStatus: ["id", "name", "color"],
    CreateManyAndReturnPriority: ["id", "name", "color"]
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
    UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "password", "role", "image", "createdAt", "updatedAt", "accounts", "workspaces"],
    UserOrderByWithRelationInput: ["id", "name", "email", "emailVerified", "password", "role", "image", "createdAt", "updatedAt", "accounts", "workspaces"],
    UserWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "name", "emailVerified", "password", "role", "image", "createdAt", "updatedAt", "accounts", "workspaces"],
    UserOrderByWithAggregationInput: ["id", "name", "email", "emailVerified", "password", "role", "image", "createdAt", "updatedAt", "_count", "_max", "_min"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "password", "role", "image", "createdAt", "updatedAt"],
    AccountWhereInput: ["AND", "OR", "NOT", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "user"],
    AccountOrderByWithRelationInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "user"],
    AccountWhereUniqueInput: ["provider_providerAccountId", "AND", "OR", "NOT", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "user"],
    AccountOrderByWithAggregationInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    VerificationTokenWhereInput: ["AND", "OR", "NOT", "id", "email", "token", "expires"],
    VerificationTokenOrderByWithRelationInput: ["id", "email", "token", "expires"],
    VerificationTokenWhereUniqueInput: ["id", "token", "email_token", "AND", "OR", "NOT", "email", "expires"],
    VerificationTokenOrderByWithAggregationInput: ["id", "email", "token", "expires", "_count", "_max", "_min"],
    VerificationTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "token", "expires"],
    WorkspaceWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "createdAt", "updatedAt", "userId", "task", "user"],
    WorkspaceOrderByWithRelationInput: ["id", "name", "description", "createdAt", "updatedAt", "userId", "task", "user"],
    WorkspaceWhereUniqueInput: ["id", "AND", "OR", "NOT", "name", "description", "createdAt", "updatedAt", "userId", "task", "user"],
    WorkspaceOrderByWithAggregationInput: ["id", "name", "description", "createdAt", "updatedAt", "userId", "_count", "_max", "_min"],
    WorkspaceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "description", "createdAt", "updatedAt", "userId"],
    FileWhereInput: ["AND", "OR", "NOT", "id", "file", "taskId", "task"],
    FileOrderByWithRelationInput: ["id", "file", "taskId", "task"],
    FileWhereUniqueInput: ["id", "AND", "OR", "NOT", "file", "taskId", "task"],
    FileOrderByWithAggregationInput: ["id", "file", "taskId", "_count", "_avg", "_max", "_min", "_sum"],
    FileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "file", "taskId"],
    TaskWhereInput: ["AND", "OR", "NOT", "id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "statusId", "priorityId", "workspaceId", "status", "priority", "files", "workspace"],
    TaskOrderByWithRelationInput: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "statusId", "priorityId", "workspaceId", "status", "priority", "files", "workspace"],
    TaskWhereUniqueInput: ["id", "AND", "OR", "NOT", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "statusId", "priorityId", "workspaceId", "status", "priority", "files", "workspace"],
    TaskOrderByWithAggregationInput: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "statusId", "priorityId", "workspaceId", "_count", "_avg", "_max", "_min", "_sum"],
    TaskScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "statusId", "priorityId", "workspaceId"],
    StatusWhereInput: ["AND", "OR", "NOT", "id", "name", "color", "task"],
    StatusOrderByWithRelationInput: ["id", "name", "color", "task"],
    StatusWhereUniqueInput: ["id", "name", "AND", "OR", "NOT", "color", "task"],
    StatusOrderByWithAggregationInput: ["id", "name", "color", "_count", "_avg", "_max", "_min", "_sum"],
    StatusScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "color"],
    PriorityWhereInput: ["AND", "OR", "NOT", "id", "name", "color", "task"],
    PriorityOrderByWithRelationInput: ["id", "name", "color", "task"],
    PriorityWhereUniqueInput: ["id", "name", "AND", "OR", "NOT", "color", "task"],
    PriorityOrderByWithAggregationInput: ["id", "name", "color", "_count", "_avg", "_max", "_min", "_sum"],
    PriorityScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "color"],
    UserCreateInput: ["id", "name", "email", "emailVerified", "password", "role", "image", "createdAt", "updatedAt", "accounts", "workspaces"],
    UserUpdateInput: ["id", "name", "email", "emailVerified", "password", "role", "image", "createdAt", "updatedAt", "accounts", "workspaces"],
    UserCreateManyInput: ["id", "name", "email", "emailVerified", "password", "role", "image", "createdAt", "updatedAt"],
    UserUpdateManyMutationInput: ["id", "name", "email", "emailVerified", "password", "role", "image", "createdAt", "updatedAt"],
    AccountCreateInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "user"],
    AccountUpdateInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "user"],
    AccountCreateManyInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    AccountUpdateManyMutationInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    VerificationTokenCreateInput: ["id", "email", "token", "expires"],
    VerificationTokenUpdateInput: ["id", "email", "token", "expires"],
    VerificationTokenCreateManyInput: ["id", "email", "token", "expires"],
    VerificationTokenUpdateManyMutationInput: ["id", "email", "token", "expires"],
    WorkspaceCreateInput: ["id", "name", "description", "createdAt", "updatedAt", "task", "user"],
    WorkspaceUpdateInput: ["id", "name", "description", "createdAt", "updatedAt", "task", "user"],
    WorkspaceCreateManyInput: ["id", "name", "description", "createdAt", "updatedAt", "userId"],
    WorkspaceUpdateManyMutationInput: ["id", "name", "description", "createdAt", "updatedAt"],
    FileCreateInput: ["file", "task"],
    FileUpdateInput: ["file", "task"],
    FileCreateManyInput: ["id", "file", "taskId"],
    FileUpdateManyMutationInput: ["file"],
    TaskCreateInput: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "status", "priority", "files", "workspace"],
    TaskUpdateInput: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "status", "priority", "files", "workspace"],
    TaskCreateManyInput: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "statusId", "priorityId", "workspaceId"],
    TaskUpdateManyMutationInput: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt"],
    StatusCreateInput: ["name", "color", "task"],
    StatusUpdateInput: ["name", "color", "task"],
    StatusCreateManyInput: ["id", "name", "color"],
    StatusUpdateManyMutationInput: ["name", "color"],
    PriorityCreateInput: ["name", "color", "task"],
    PriorityUpdateInput: ["name", "color", "task"],
    PriorityCreateManyInput: ["id", "name", "color"],
    PriorityUpdateManyMutationInput: ["name", "color"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    EnumRoleFilter: ["equals", "in", "notIn", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    AccountListRelationFilter: ["every", "some", "none"],
    WorkspaceListRelationFilter: ["every", "some", "none"],
    SortOrderInput: ["sort", "nulls"],
    AccountOrderByRelationAggregateInput: ["_count"],
    WorkspaceOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "name", "email", "emailVerified", "password", "role", "image", "createdAt", "updatedAt"],
    UserMaxOrderByAggregateInput: ["id", "name", "email", "emailVerified", "password", "role", "image", "createdAt", "updatedAt"],
    UserMinOrderByAggregateInput: ["id", "name", "email", "emailVerified", "password", "role", "image", "createdAt", "updatedAt"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    UserRelationFilter: ["is", "isNot"],
    AccountProviderProviderAccountIdCompoundUniqueInput: ["provider", "providerAccountId"],
    AccountCountOrderByAggregateInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    AccountAvgOrderByAggregateInput: ["expires_at"],
    AccountMaxOrderByAggregateInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    AccountMinOrderByAggregateInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    AccountSumOrderByAggregateInput: ["expires_at"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    VerificationTokenEmailTokenCompoundUniqueInput: ["email", "token"],
    VerificationTokenCountOrderByAggregateInput: ["id", "email", "token", "expires"],
    VerificationTokenMaxOrderByAggregateInput: ["id", "email", "token", "expires"],
    VerificationTokenMinOrderByAggregateInput: ["id", "email", "token", "expires"],
    TaskListRelationFilter: ["every", "some", "none"],
    UserNullableRelationFilter: ["is", "isNot"],
    TaskOrderByRelationAggregateInput: ["_count"],
    WorkspaceCountOrderByAggregateInput: ["id", "name", "description", "createdAt", "updatedAt", "userId"],
    WorkspaceMaxOrderByAggregateInput: ["id", "name", "description", "createdAt", "updatedAt", "userId"],
    WorkspaceMinOrderByAggregateInput: ["id", "name", "description", "createdAt", "updatedAt", "userId"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    TaskNullableRelationFilter: ["is", "isNot"],
    FileCountOrderByAggregateInput: ["id", "file", "taskId"],
    FileAvgOrderByAggregateInput: ["id"],
    FileMaxOrderByAggregateInput: ["id", "file", "taskId"],
    FileMinOrderByAggregateInput: ["id", "file", "taskId"],
    FileSumOrderByAggregateInput: ["id"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StatusNullableRelationFilter: ["is", "isNot"],
    PriorityNullableRelationFilter: ["is", "isNot"],
    FileListRelationFilter: ["every", "some", "none"],
    WorkspaceRelationFilter: ["is", "isNot"],
    FileOrderByRelationAggregateInput: ["_count"],
    TaskCountOrderByAggregateInput: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "statusId", "priorityId", "workspaceId"],
    TaskAvgOrderByAggregateInput: ["statusId", "priorityId"],
    TaskMaxOrderByAggregateInput: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "statusId", "priorityId", "workspaceId"],
    TaskMinOrderByAggregateInput: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "statusId", "priorityId", "workspaceId"],
    TaskSumOrderByAggregateInput: ["statusId", "priorityId"],
    StatusCountOrderByAggregateInput: ["id", "name", "color"],
    StatusAvgOrderByAggregateInput: ["id"],
    StatusMaxOrderByAggregateInput: ["id", "name", "color"],
    StatusMinOrderByAggregateInput: ["id", "name", "color"],
    StatusSumOrderByAggregateInput: ["id"],
    PriorityCountOrderByAggregateInput: ["id", "name", "color"],
    PriorityAvgOrderByAggregateInput: ["id"],
    PriorityMaxOrderByAggregateInput: ["id", "name", "color"],
    PriorityMinOrderByAggregateInput: ["id", "name", "color"],
    PrioritySumOrderByAggregateInput: ["id"],
    AccountCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    WorkspaceCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    EnumRoleFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    AccountUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    WorkspaceUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutAccountsInput: ["create", "connectOrCreate", "connect"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserUpdateOneRequiredWithoutAccountsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    TaskCreateNestedManyWithoutWorkspaceInput: ["create", "connectOrCreate", "createMany", "connect"],
    UserCreateNestedOneWithoutWorkspacesInput: ["create", "connectOrCreate", "connect"],
    TaskUpdateManyWithoutWorkspaceNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserUpdateOneWithoutWorkspacesNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    TaskCreateNestedOneWithoutFilesInput: ["create", "connectOrCreate", "connect"],
    TaskUpdateOneWithoutFilesNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    StatusCreateNestedOneWithoutTaskInput: ["create", "connectOrCreate", "connect"],
    PriorityCreateNestedOneWithoutTaskInput: ["create", "connectOrCreate", "connect"],
    FileCreateNestedManyWithoutTaskInput: ["create", "connectOrCreate", "createMany", "connect"],
    WorkspaceCreateNestedOneWithoutTaskInput: ["create", "connectOrCreate", "connect"],
    StatusUpdateOneWithoutTaskNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    PriorityUpdateOneWithoutTaskNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    FileUpdateManyWithoutTaskNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    WorkspaceUpdateOneRequiredWithoutTaskNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    TaskCreateNestedManyWithoutStatusInput: ["create", "connectOrCreate", "createMany", "connect"],
    TaskUpdateManyWithoutStatusNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    TaskCreateNestedManyWithoutPriorityInput: ["create", "connectOrCreate", "createMany", "connect"],
    TaskUpdateManyWithoutPriorityNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    AccountCreateWithoutUserInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    AccountCreateOrConnectWithoutUserInput: ["where", "create"],
    AccountCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    WorkspaceCreateWithoutUserInput: ["id", "name", "description", "createdAt", "updatedAt", "task"],
    WorkspaceCreateOrConnectWithoutUserInput: ["where", "create"],
    WorkspaceCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    AccountUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    AccountUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    AccountUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    AccountScalarWhereInput: ["AND", "OR", "NOT", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    WorkspaceUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    WorkspaceUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    WorkspaceUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    WorkspaceScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "createdAt", "updatedAt", "userId"],
    UserCreateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "password", "role", "image", "createdAt", "updatedAt", "workspaces"],
    UserCreateOrConnectWithoutAccountsInput: ["where", "create"],
    UserUpsertWithoutAccountsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutAccountsInput: ["where", "data"],
    UserUpdateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "password", "role", "image", "createdAt", "updatedAt", "workspaces"],
    TaskCreateWithoutWorkspaceInput: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "status", "priority", "files"],
    TaskCreateOrConnectWithoutWorkspaceInput: ["where", "create"],
    TaskCreateManyWorkspaceInputEnvelope: ["data", "skipDuplicates"],
    UserCreateWithoutWorkspacesInput: ["id", "name", "email", "emailVerified", "password", "role", "image", "createdAt", "updatedAt", "accounts"],
    UserCreateOrConnectWithoutWorkspacesInput: ["where", "create"],
    TaskUpsertWithWhereUniqueWithoutWorkspaceInput: ["where", "update", "create"],
    TaskUpdateWithWhereUniqueWithoutWorkspaceInput: ["where", "data"],
    TaskUpdateManyWithWhereWithoutWorkspaceInput: ["where", "data"],
    TaskScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "statusId", "priorityId", "workspaceId"],
    UserUpsertWithoutWorkspacesInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutWorkspacesInput: ["where", "data"],
    UserUpdateWithoutWorkspacesInput: ["id", "name", "email", "emailVerified", "password", "role", "image", "createdAt", "updatedAt", "accounts"],
    TaskCreateWithoutFilesInput: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "status", "priority", "workspace"],
    TaskCreateOrConnectWithoutFilesInput: ["where", "create"],
    TaskUpsertWithoutFilesInput: ["update", "create", "where"],
    TaskUpdateToOneWithWhereWithoutFilesInput: ["where", "data"],
    TaskUpdateWithoutFilesInput: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "status", "priority", "workspace"],
    StatusCreateWithoutTaskInput: ["name", "color"],
    StatusCreateOrConnectWithoutTaskInput: ["where", "create"],
    PriorityCreateWithoutTaskInput: ["name", "color"],
    PriorityCreateOrConnectWithoutTaskInput: ["where", "create"],
    FileCreateWithoutTaskInput: ["file"],
    FileCreateOrConnectWithoutTaskInput: ["where", "create"],
    FileCreateManyTaskInputEnvelope: ["data", "skipDuplicates"],
    WorkspaceCreateWithoutTaskInput: ["id", "name", "description", "createdAt", "updatedAt", "user"],
    WorkspaceCreateOrConnectWithoutTaskInput: ["where", "create"],
    StatusUpsertWithoutTaskInput: ["update", "create", "where"],
    StatusUpdateToOneWithWhereWithoutTaskInput: ["where", "data"],
    StatusUpdateWithoutTaskInput: ["name", "color"],
    PriorityUpsertWithoutTaskInput: ["update", "create", "where"],
    PriorityUpdateToOneWithWhereWithoutTaskInput: ["where", "data"],
    PriorityUpdateWithoutTaskInput: ["name", "color"],
    FileUpsertWithWhereUniqueWithoutTaskInput: ["where", "update", "create"],
    FileUpdateWithWhereUniqueWithoutTaskInput: ["where", "data"],
    FileUpdateManyWithWhereWithoutTaskInput: ["where", "data"],
    FileScalarWhereInput: ["AND", "OR", "NOT", "id", "file", "taskId"],
    WorkspaceUpsertWithoutTaskInput: ["update", "create", "where"],
    WorkspaceUpdateToOneWithWhereWithoutTaskInput: ["where", "data"],
    WorkspaceUpdateWithoutTaskInput: ["id", "name", "description", "createdAt", "updatedAt", "user"],
    TaskCreateWithoutStatusInput: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "priority", "files", "workspace"],
    TaskCreateOrConnectWithoutStatusInput: ["where", "create"],
    TaskCreateManyStatusInputEnvelope: ["data", "skipDuplicates"],
    TaskUpsertWithWhereUniqueWithoutStatusInput: ["where", "update", "create"],
    TaskUpdateWithWhereUniqueWithoutStatusInput: ["where", "data"],
    TaskUpdateManyWithWhereWithoutStatusInput: ["where", "data"],
    TaskCreateWithoutPriorityInput: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "status", "files", "workspace"],
    TaskCreateOrConnectWithoutPriorityInput: ["where", "create"],
    TaskCreateManyPriorityInputEnvelope: ["data", "skipDuplicates"],
    TaskUpsertWithWhereUniqueWithoutPriorityInput: ["where", "update", "create"],
    TaskUpdateWithWhereUniqueWithoutPriorityInput: ["where", "data"],
    TaskUpdateManyWithWhereWithoutPriorityInput: ["where", "data"],
    AccountCreateManyUserInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    WorkspaceCreateManyUserInput: ["id", "name", "description", "createdAt", "updatedAt"],
    AccountUpdateWithoutUserInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    WorkspaceUpdateWithoutUserInput: ["id", "name", "description", "createdAt", "updatedAt", "task"],
    TaskCreateManyWorkspaceInput: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "statusId", "priorityId"],
    TaskUpdateWithoutWorkspaceInput: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "status", "priority", "files"],
    FileCreateManyTaskInput: ["id", "file"],
    FileUpdateWithoutTaskInput: ["file"],
    TaskCreateManyStatusInput: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "priorityId", "workspaceId"],
    TaskUpdateWithoutStatusInput: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "priority", "files", "workspace"],
    TaskCreateManyPriorityInput: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "statusId", "workspaceId"],
    TaskUpdateWithoutPriorityInput: ["id", "name", "message", "note", "dueDate", "createdAt", "updatedAt", "status", "files", "workspace"]
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
