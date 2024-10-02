"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyWorkspaceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyWorkspaceArgs_1 = require("./args/CreateManyWorkspaceArgs");
const Workspace_1 = require("../../../models/Workspace");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyWorkspaceResolver = class CreateManyWorkspaceResolver {
    async createManyWorkspace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).workspace.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyWorkspaceResolver = CreateManyWorkspaceResolver;
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
], CreateManyWorkspaceResolver.prototype, "createManyWorkspace", null);
exports.CreateManyWorkspaceResolver = CreateManyWorkspaceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Workspace_1.Workspace)
], CreateManyWorkspaceResolver);
