"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePriorityOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniquePriorityOrThrowArgs_1 = require("./args/FindUniquePriorityOrThrowArgs");
const Priority_1 = require("../../../models/Priority");
const helpers_1 = require("../../../helpers");
let FindUniquePriorityOrThrowResolver = class FindUniquePriorityOrThrowResolver {
    async getPriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniquePriorityOrThrowResolver = FindUniquePriorityOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Priority_1.Priority, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePriorityOrThrowArgs_1.FindUniquePriorityOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniquePriorityOrThrowResolver.prototype, "getPriority", null);
exports.FindUniquePriorityOrThrowResolver = FindUniquePriorityOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Priority_1.Priority)
], FindUniquePriorityOrThrowResolver);
