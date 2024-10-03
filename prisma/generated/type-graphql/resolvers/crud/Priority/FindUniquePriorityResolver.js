"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePriorityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniquePriorityArgs_1 = require("./args/FindUniquePriorityArgs");
const Priority_1 = require("../../../models/Priority");
const helpers_1 = require("../../../helpers");
let FindUniquePriorityResolver = class FindUniquePriorityResolver {
    async priority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniquePriorityResolver = FindUniquePriorityResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Priority_1.Priority, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePriorityArgs_1.FindUniquePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniquePriorityResolver.prototype, "priority", null);
exports.FindUniquePriorityResolver = FindUniquePriorityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Priority_1.Priority)
], FindUniquePriorityResolver);
