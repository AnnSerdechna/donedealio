"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Task_1 = require("../../../models/Task");
const User_1 = require("../../../models/User");
const Workspace_1 = require("../../../models/Workspace");
const WorkspaceTaskArgs_1 = require("./args/WorkspaceTaskArgs");
const WorkspaceUserArgs_1 = require("./args/WorkspaceUserArgs");
const helpers_1 = require("../../../helpers");
let WorkspaceRelationsResolver = class WorkspaceRelationsResolver {
    async task(workspace, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).workspace.findUniqueOrThrow({
            where: {
                id: workspace.id,
            },
        }).task({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async user(workspace, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).workspace.findUniqueOrThrow({
            where: {
                id: workspace.id,
            },
        }).user({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.WorkspaceRelationsResolver = WorkspaceRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Task_1.Task], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Workspace_1.Workspace, Object, Object, WorkspaceTaskArgs_1.WorkspaceTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspaceRelationsResolver.prototype, "task", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Workspace_1.Workspace, Object, Object, WorkspaceUserArgs_1.WorkspaceUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspaceRelationsResolver.prototype, "user", null);
exports.WorkspaceRelationsResolver = WorkspaceRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Workspace_1.Workspace)
], WorkspaceRelationsResolver);
