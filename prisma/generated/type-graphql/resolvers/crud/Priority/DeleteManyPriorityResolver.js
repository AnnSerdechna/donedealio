"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPriorityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyPriorityArgs_1 = require("./args/DeleteManyPriorityArgs");
const Priority_1 = require("../../../models/Priority");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyPriorityResolver = class DeleteManyPriorityResolver {
    async deleteManyPriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyPriorityResolver = DeleteManyPriorityResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyPriorityArgs_1.DeleteManyPriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyPriorityResolver.prototype, "deleteManyPriority", null);
exports.DeleteManyPriorityResolver = DeleteManyPriorityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Priority_1.Priority)
], DeleteManyPriorityResolver);
