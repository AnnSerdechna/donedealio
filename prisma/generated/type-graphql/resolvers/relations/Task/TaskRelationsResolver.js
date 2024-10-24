"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const File_1 = require("../../../models/File");
const Priority_1 = require("../../../models/Priority");
const Status_1 = require("../../../models/Status");
const Task_1 = require("../../../models/Task");
const Workspace_1 = require("../../../models/Workspace");
const TaskFilesArgs_1 = require("./args/TaskFilesArgs");
const TaskPriorityArgs_1 = require("./args/TaskPriorityArgs");
const TaskStatusArgs_1 = require("./args/TaskStatusArgs");
const TaskWorkspaceArgs_1 = require("./args/TaskWorkspaceArgs");
const helpers_1 = require("../../../helpers");
let TaskRelationsResolver = class TaskRelationsResolver {
    async status(task, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.findUniqueOrThrow({
            where: {
                id: task.id,
            },
        }).status({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async priority(task, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.findUniqueOrThrow({
            where: {
                id: task.id,
            },
        }).priority({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async workspace(task, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.findUniqueOrThrow({
            where: {
                id: task.id,
            },
        }).workspace({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async files(task, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.findUniqueOrThrow({
            where: {
                id: task.id,
            },
        }).files({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.TaskRelationsResolver = TaskRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Status_1.Status, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Task_1.Task, Object, Object, TaskStatusArgs_1.TaskStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskRelationsResolver.prototype, "status", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Priority_1.Priority, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Task_1.Task, Object, Object, TaskPriorityArgs_1.TaskPriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskRelationsResolver.prototype, "priority", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Workspace_1.Workspace, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Task_1.Task, Object, Object, TaskWorkspaceArgs_1.TaskWorkspaceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskRelationsResolver.prototype, "workspace", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [File_1.File], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Task_1.Task, Object, Object, TaskFilesArgs_1.TaskFilesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskRelationsResolver.prototype, "files", null);
exports.TaskRelationsResolver = TaskRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Task_1.Task)
], TaskRelationsResolver);
