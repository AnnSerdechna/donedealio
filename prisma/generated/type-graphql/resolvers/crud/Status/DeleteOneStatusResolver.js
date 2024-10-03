"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneStatusResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneStatusArgs_1 = require("./args/DeleteOneStatusArgs");
const Status_1 = require("../../../models/Status");
const helpers_1 = require("../../../helpers");
let DeleteOneStatusResolver = class DeleteOneStatusResolver {
    async deleteOneStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).status.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneStatusResolver = DeleteOneStatusResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Status_1.Status, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneStatusArgs_1.DeleteOneStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneStatusResolver.prototype, "deleteOneStatus", null);
exports.DeleteOneStatusResolver = DeleteOneStatusResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Status_1.Status)
], DeleteOneStatusResolver);