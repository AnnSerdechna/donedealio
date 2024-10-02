"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueWorkspaceOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueWorkspaceOrThrowArgs_1 = require("./args/FindUniqueWorkspaceOrThrowArgs");
const Workspace_1 = require("../../../models/Workspace");
const helpers_1 = require("../../../helpers");
let FindUniqueWorkspaceOrThrowResolver = class FindUniqueWorkspaceOrThrowResolver {
    async getWorkspace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).workspace.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueWorkspaceOrThrowResolver = FindUniqueWorkspaceOrThrowResolver;
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
], FindUniqueWorkspaceOrThrowResolver.prototype, "getWorkspace", null);
exports.FindUniqueWorkspaceOrThrowResolver = FindUniqueWorkspaceOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Workspace_1.Workspace)
], FindUniqueWorkspaceOrThrowResolver);
