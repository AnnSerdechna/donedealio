"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOnePriorityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOnePriorityArgs_1 = require("./args/CreateOnePriorityArgs");
const Priority_1 = require("../../../models/Priority");
const helpers_1 = require("../../../helpers");
let CreateOnePriorityResolver = class CreateOnePriorityResolver {
    async createOnePriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOnePriorityResolver = CreateOnePriorityResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Priority_1.Priority, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOnePriorityArgs_1.CreateOnePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOnePriorityResolver.prototype, "createOnePriority", null);
exports.CreateOnePriorityResolver = CreateOnePriorityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Priority_1.Priority)
], CreateOnePriorityResolver);
