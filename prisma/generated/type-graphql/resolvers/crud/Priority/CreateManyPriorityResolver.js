"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPriorityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyPriorityArgs_1 = require("./args/CreateManyPriorityArgs");
const Priority_1 = require("../../../models/Priority");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyPriorityResolver = class CreateManyPriorityResolver {
    async createManyPriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyPriorityResolver = CreateManyPriorityResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyPriorityArgs_1.CreateManyPriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyPriorityResolver.prototype, "createManyPriority", null);
exports.CreateManyPriorityResolver = CreateManyPriorityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Priority_1.Priority)
], CreateManyPriorityResolver);
