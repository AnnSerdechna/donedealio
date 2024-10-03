"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyStatusResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyStatusArgs_1 = require("./args/DeleteManyStatusArgs");
const Status_1 = require("../../../models/Status");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyStatusResolver = class DeleteManyStatusResolver {
    async deleteManyStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).status.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyStatusResolver = DeleteManyStatusResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyStatusArgs_1.DeleteManyStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyStatusResolver.prototype, "deleteManyStatus", null);
exports.DeleteManyStatusResolver = DeleteManyStatusResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Status_1.Status)
], DeleteManyStatusResolver);
