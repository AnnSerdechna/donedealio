"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateWorkspaceArgs_1 = require("./args/AggregateWorkspaceArgs");
const CreateManyAndReturnWorkspaceArgs_1 = require("./args/CreateManyAndReturnWorkspaceArgs");
const CreateManyWorkspaceArgs_1 = require("./args/CreateManyWorkspaceArgs");
const CreateOneWorkspaceArgs_1 = require("./args/CreateOneWorkspaceArgs");
const DeleteManyWorkspaceArgs_1 = require("./args/DeleteManyWorkspaceArgs");
const DeleteOneWorkspaceArgs_1 = require("./args/DeleteOneWorkspaceArgs");
const FindFirstWorkspaceArgs_1 = require("./args/FindFirstWorkspaceArgs");
const FindFirstWorkspaceOrThrowArgs_1 = require("./args/FindFirstWorkspaceOrThrowArgs");
const FindManyWorkspaceArgs_1 = require("./args/FindManyWorkspaceArgs");
const FindUniqueWorkspaceArgs_1 = require("./args/FindUniqueWorkspaceArgs");
const FindUniqueWorkspaceOrThrowArgs_1 = require("./args/FindUniqueWorkspaceOrThrowArgs");
const GroupByWorkspaceArgs_1 = require("./args/GroupByWorkspaceArgs");
const UpdateManyWorkspaceArgs_1 = require("./args/UpdateManyWorkspaceArgs");
const UpdateOneWorkspaceArgs_1 = require("./args/UpdateOneWorkspaceArgs");
const UpsertOneWorkspaceArgs_1 = require("./args/UpsertOneWorkspaceArgs");
const helpers_1 = require("../../../helpers");
const Workspace_1 = require("../../../models/Workspace");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateWorkspace_1 = require("../../outputs/AggregateWorkspace");
const CreateManyAndReturnWorkspace_1 = require("../../outputs/CreateManyAndReturnWorkspace");
const WorkspaceGroupBy_1 = require("../../outputs/WorkspaceGroupBy");
let WorkspaceCrudResolver = class WorkspaceCrudResolver {
    async aggregateWorkspace(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).workspace.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyWorkspace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).workspace.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnWorkspace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).workspace.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneWorkspace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).workspace.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyWorkspace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).workspace.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneWorkspace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).workspace.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstWorkspace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).workspace.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstWorkspaceOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).workspace.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async workspaces(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).workspace.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async workspace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).workspace.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getWorkspace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).workspace.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByWorkspace(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).workspace.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyWorkspace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).workspace.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneWorkspace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).workspace.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneWorkspace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).workspace.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.WorkspaceCrudResolver = WorkspaceCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateWorkspace_1.AggregateWorkspace, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateWorkspaceArgs_1.AggregateWorkspaceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspaceCrudResolver.prototype, "aggregateWorkspace", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyWorkspaceArgs_1.CreateManyWorkspaceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspaceCrudResolver.prototype, "createManyWorkspace", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnWorkspace_1.CreateManyAndReturnWorkspace], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnWorkspaceArgs_1.CreateManyAndReturnWorkspaceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspaceCrudResolver.prototype, "createManyAndReturnWorkspace", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Workspace_1.Workspace, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneWorkspaceArgs_1.CreateOneWorkspaceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspaceCrudResolver.prototype, "createOneWorkspace", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyWorkspaceArgs_1.DeleteManyWorkspaceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspaceCrudResolver.prototype, "deleteManyWorkspace", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Workspace_1.Workspace, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneWorkspaceArgs_1.DeleteOneWorkspaceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspaceCrudResolver.prototype, "deleteOneWorkspace", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Workspace_1.Workspace, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstWorkspaceArgs_1.FindFirstWorkspaceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspaceCrudResolver.prototype, "findFirstWorkspace", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Workspace_1.Workspace, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstWorkspaceOrThrowArgs_1.FindFirstWorkspaceOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspaceCrudResolver.prototype, "findFirstWorkspaceOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Workspace_1.Workspace], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyWorkspaceArgs_1.FindManyWorkspaceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspaceCrudResolver.prototype, "workspaces", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Workspace_1.Workspace, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueWorkspaceArgs_1.FindUniqueWorkspaceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspaceCrudResolver.prototype, "workspace", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Workspace_1.Workspace, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueWorkspaceOrThrowArgs_1.FindUniqueWorkspaceOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspaceCrudResolver.prototype, "getWorkspace", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [WorkspaceGroupBy_1.WorkspaceGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByWorkspaceArgs_1.GroupByWorkspaceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspaceCrudResolver.prototype, "groupByWorkspace", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyWorkspaceArgs_1.UpdateManyWorkspaceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspaceCrudResolver.prototype, "updateManyWorkspace", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Workspace_1.Workspace, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneWorkspaceArgs_1.UpdateOneWorkspaceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspaceCrudResolver.prototype, "updateOneWorkspace", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Workspace_1.Workspace, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneWorkspaceArgs_1.UpsertOneWorkspaceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspaceCrudResolver.prototype, "upsertOneWorkspace", null);
exports.WorkspaceCrudResolver = WorkspaceCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Workspace_1.Workspace)
], WorkspaceCrudResolver);
