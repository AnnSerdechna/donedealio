"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneStatusResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneStatusArgs_1 = require("./args/UpsertOneStatusArgs");
const Status_1 = require("../../../models/Status");
const helpers_1 = require("../../../helpers");
let UpsertOneStatusResolver = class UpsertOneStatusResolver {
    async upsertOneStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).status.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneStatusResolver = UpsertOneStatusResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Status_1.Status, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneStatusArgs_1.UpsertOneStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneStatusResolver.prototype, "upsertOneStatus", null);
exports.UpsertOneStatusResolver = UpsertOneStatusResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Status_1.Status)
], UpsertOneStatusResolver);
