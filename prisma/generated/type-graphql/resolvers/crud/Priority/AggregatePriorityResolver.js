"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePriorityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregatePriorityArgs_1 = require("./args/AggregatePriorityArgs");
const Priority_1 = require("../../../models/Priority");
const AggregatePriority_1 = require("../../outputs/AggregatePriority");
const helpers_1 = require("../../../helpers");
let AggregatePriorityResolver = class AggregatePriorityResolver {
    async aggregatePriority(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregatePriorityResolver = AggregatePriorityResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePriority_1.AggregatePriority, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePriorityArgs_1.AggregatePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregatePriorityResolver.prototype, "aggregatePriority", null);
exports.AggregatePriorityResolver = AggregatePriorityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Priority_1.Priority)
], AggregatePriorityResolver);
