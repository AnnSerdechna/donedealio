"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyStatusResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyStatusArgs_1 = require("./args/CreateManyStatusArgs");
const Status_1 = require("../../../models/Status");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyStatusResolver = class CreateManyStatusResolver {
    async createManyStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).status.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyStatusResolver = CreateManyStatusResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyStatusArgs_1.CreateManyStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyStatusResolver.prototype, "createManyStatus", null);
exports.CreateManyStatusResolver = CreateManyStatusResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Status_1.Status)
], CreateManyStatusResolver);
