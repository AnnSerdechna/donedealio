"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneWorkspaceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneWorkspaceArgs_1 = require("./args/CreateOneWorkspaceArgs");
const Workspace_1 = require("../../../models/Workspace");
const helpers_1 = require("../../../helpers");
let CreateOneWorkspaceResolver = class CreateOneWorkspaceResolver {
    async createOneWorkspace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).workspace.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneWorkspaceResolver = CreateOneWorkspaceResolver;
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
], CreateOneWorkspaceResolver.prototype, "createOneWorkspace", null);
exports.CreateOneWorkspaceResolver = CreateOneWorkspaceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Workspace_1.Workspace)
], CreateOneWorkspaceResolver);
