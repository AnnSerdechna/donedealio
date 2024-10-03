"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyStatusResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyStatusArgs_1 = require("./args/UpdateManyStatusArgs");
const Status_1 = require("../../../models/Status");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyStatusResolver = class UpdateManyStatusResolver {
    async updateManyStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).status.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyStatusResolver = UpdateManyStatusResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyStatusArgs_1.UpdateManyStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyStatusResolver.prototype, "updateManyStatus", null);
exports.UpdateManyStatusResolver = UpdateManyStatusResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Status_1.Status)
], UpdateManyStatusResolver);
