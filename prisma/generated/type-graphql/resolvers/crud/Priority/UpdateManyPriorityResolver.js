"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPriorityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyPriorityArgs_1 = require("./args/UpdateManyPriorityArgs");
const Priority_1 = require("../../../models/Priority");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyPriorityResolver = class UpdateManyPriorityResolver {
    async updateManyPriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyPriorityResolver = UpdateManyPriorityResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyPriorityArgs_1.UpdateManyPriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyPriorityResolver.prototype, "updateManyPriority", null);
exports.UpdateManyPriorityResolver = UpdateManyPriorityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Priority_1.Priority)
], UpdateManyPriorityResolver);
