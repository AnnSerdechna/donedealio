"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWorkspaceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateWorkspaceArgs_1 = require("./args/AggregateWorkspaceArgs");
const Workspace_1 = require("../../../models/Workspace");
const AggregateWorkspace_1 = require("../../outputs/AggregateWorkspace");
const helpers_1 = require("../../../helpers");
let AggregateWorkspaceResolver = class AggregateWorkspaceResolver {
    async aggregateWorkspace(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).workspace.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateWorkspaceResolver = AggregateWorkspaceResolver;
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
], AggregateWorkspaceResolver.prototype, "aggregateWorkspace", null);
exports.AggregateWorkspaceResolver = AggregateWorkspaceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Workspace_1.Workspace)
], AggregateWorkspaceResolver);
