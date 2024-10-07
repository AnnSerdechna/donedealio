"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnPriorityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnPriorityArgs_1 = require("./args/CreateManyAndReturnPriorityArgs");
const Priority_1 = require("../../../models/Priority");
const CreateManyAndReturnPriority_1 = require("../../outputs/CreateManyAndReturnPriority");
const helpers_1 = require("../../../helpers");
let CreateManyAndReturnPriorityResolver = class CreateManyAndReturnPriorityResolver {
    async createManyAndReturnPriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyAndReturnPriorityResolver = CreateManyAndReturnPriorityResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPriority_1.CreateManyAndReturnPriority], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnPriorityArgs_1.CreateManyAndReturnPriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyAndReturnPriorityResolver.prototype, "createManyAndReturnPriority", null);
exports.CreateManyAndReturnPriorityResolver = CreateManyAndReturnPriorityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Priority_1.Priority)
], CreateManyAndReturnPriorityResolver);
