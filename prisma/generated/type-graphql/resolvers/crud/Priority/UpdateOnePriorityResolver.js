"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOnePriorityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOnePriorityArgs_1 = require("./args/UpdateOnePriorityArgs");
const Priority_1 = require("../../../models/Priority");
const helpers_1 = require("../../../helpers");
let UpdateOnePriorityResolver = class UpdateOnePriorityResolver {
    async updateOnePriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOnePriorityResolver = UpdateOnePriorityResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Priority_1.Priority, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOnePriorityArgs_1.UpdateOnePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOnePriorityResolver.prototype, "updateOnePriority", null);
exports.UpdateOnePriorityResolver = UpdateOnePriorityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Priority_1.Priority)
], UpdateOnePriorityResolver);
