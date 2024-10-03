"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByStatusResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByStatusArgs_1 = require("./args/GroupByStatusArgs");
const Status_1 = require("../../../models/Status");
const StatusGroupBy_1 = require("../../outputs/StatusGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByStatusResolver = class GroupByStatusResolver {
    async groupByStatus(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).status.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByStatusResolver = GroupByStatusResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [StatusGroupBy_1.StatusGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByStatusArgs_1.GroupByStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByStatusResolver.prototype, "groupByStatus", null);
exports.GroupByStatusResolver = GroupByStatusResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Status_1.Status)
], GroupByStatusResolver);
