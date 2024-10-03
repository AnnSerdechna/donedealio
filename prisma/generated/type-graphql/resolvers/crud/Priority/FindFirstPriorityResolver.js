"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPriorityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstPriorityArgs_1 = require("./args/FindFirstPriorityArgs");
const Priority_1 = require("../../../models/Priority");
const helpers_1 = require("../../../helpers");
let FindFirstPriorityResolver = class FindFirstPriorityResolver {
    async findFirstPriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstPriorityResolver = FindFirstPriorityResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Priority_1.Priority, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPriorityArgs_1.FindFirstPriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstPriorityResolver.prototype, "findFirstPriority", null);
exports.FindFirstPriorityResolver = FindFirstPriorityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Priority_1.Priority)
], FindFirstPriorityResolver);
