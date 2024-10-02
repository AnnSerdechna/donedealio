"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnWorkspaceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnWorkspaceArgs_1 = require("./args/CreateManyAndReturnWorkspaceArgs");
const Workspace_1 = require("../../../models/Workspace");
const CreateManyAndReturnWorkspace_1 = require("../../outputs/CreateManyAndReturnWorkspace");
const helpers_1 = require("../../../helpers");
let CreateManyAndReturnWorkspaceResolver = class CreateManyAndReturnWorkspaceResolver {
    async createManyAndReturnWorkspace(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).workspace.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyAndReturnWorkspaceResolver = CreateManyAndReturnWorkspaceResolver;
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
], CreateManyAndReturnWorkspaceResolver.prototype, "createManyAndReturnWorkspace", null);
exports.CreateManyAndReturnWorkspaceResolver = CreateManyAndReturnWorkspaceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Workspace_1.Workspace)
], CreateManyAndReturnWorkspaceResolver);
