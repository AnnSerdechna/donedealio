"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateStatusResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateStatusArgs_1 = require("./args/AggregateStatusArgs");
const Status_1 = require("../../../models/Status");
const AggregateStatus_1 = require("../../outputs/AggregateStatus");
const helpers_1 = require("../../../helpers");
let AggregateStatusResolver = class AggregateStatusResolver {
    async aggregateStatus(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).status.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateStatusResolver = AggregateStatusResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateStatus_1.AggregateStatus, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateStatusArgs_1.AggregateStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateStatusResolver.prototype, "aggregateStatus", null);
exports.AggregateStatusResolver = AggregateStatusResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Status_1.Status)
], AggregateStatusResolver);
