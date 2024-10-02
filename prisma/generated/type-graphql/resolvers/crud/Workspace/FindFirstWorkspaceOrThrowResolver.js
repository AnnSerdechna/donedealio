"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstWorkspaceOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstWorkspaceOrThrowArgs_1 = require("./args/FindFirstWorkspaceOrThrowArgs");
const Workspace_1 = require("../../../models/Workspace");
const helpers_1 = require("../../../helpers");
let FindFirstWorkspaceOrThrowResolver = class FindFirstWorkspaceOrThrowResolver {
    async findFirstWorkspaceOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).workspace.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstWorkspaceOrThrowResolver = FindFirstWorkspaceOrThrowResolver;
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
], FindFirstWorkspaceOrThrowResolver.prototype, "findFirstWorkspaceOrThrow", null);
exports.FindFirstWorkspaceOrThrowResolver = FindFirstWorkspaceOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Workspace_1.Workspace)
], FindFirstWorkspaceOrThrowResolver);
