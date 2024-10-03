"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyStatusResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyStatusArgs_1 = require("./args/FindManyStatusArgs");
const Status_1 = require("../../../models/Status");
const helpers_1 = require("../../../helpers");
let FindManyStatusResolver = class FindManyStatusResolver {
    async statuses(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).status.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyStatusResolver = FindManyStatusResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Status_1.Status], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyStatusArgs_1.FindManyStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyStatusResolver.prototype, "statuses", null);
exports.FindManyStatusResolver = FindManyStatusResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Status_1.Status)
], FindManyStatusResolver);
