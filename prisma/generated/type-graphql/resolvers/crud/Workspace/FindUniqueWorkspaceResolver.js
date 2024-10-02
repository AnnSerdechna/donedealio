"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueWorkspaceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueWorkspaceArgs_1 = require("./args/FindUniqueWorkspaceArgs");
const Workspace_1 = require("../../../models/Workspace");
const helpers_1 = require("../../../helpers");
let FindUniqueWorkspaceResolver = class FindUniqueWorkspaceResolver {
    async workspace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).workspace.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueWorkspaceResolver = FindUniqueWorkspaceResolver;
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
], FindUniqueWorkspaceResolver.prototype, "workspace", null);
exports.FindUniqueWorkspaceResolver = FindUniqueWorkspaceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Workspace_1.Workspace)
], FindUniqueWorkspaceResolver);
