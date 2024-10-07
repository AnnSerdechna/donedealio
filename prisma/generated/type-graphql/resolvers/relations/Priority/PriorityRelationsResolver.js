"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Priority_1 = require("../../../models/Priority");
const Task_1 = require("../../../models/Task");
const PriorityTaskArgs_1 = require("./args/PriorityTaskArgs");
const helpers_1 = require("../../../helpers");
let PriorityRelationsResolver = class PriorityRelationsResolver {
    async task(priority, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.findUniqueOrThrow({
            where: {
                id: priority.id,
            },
        }).task({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.PriorityRelationsResolver = PriorityRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Task_1.Task], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Priority_1.Priority, Object, Object, PriorityTaskArgs_1.PriorityTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriorityRelationsResolver.prototype, "task", null);
exports.PriorityRelationsResolver = PriorityRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Priority_1.Priority)
], PriorityRelationsResolver);
