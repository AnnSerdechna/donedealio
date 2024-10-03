"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPriorityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByPriorityArgs_1 = require("./args/GroupByPriorityArgs");
const Priority_1 = require("../../../models/Priority");
const PriorityGroupBy_1 = require("../../outputs/PriorityGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByPriorityResolver = class GroupByPriorityResolver {
    async groupByPriority(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByPriorityResolver = GroupByPriorityResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PriorityGroupBy_1.PriorityGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPriorityArgs_1.GroupByPriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByPriorityResolver.prototype, "groupByPriority", null);
exports.GroupByPriorityResolver = GroupByPriorityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Priority_1.Priority)
], GroupByPriorityResolver);
