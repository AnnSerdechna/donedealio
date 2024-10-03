"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Status_1 = require("../../../models/Status");
const Task_1 = require("../../../models/Task");
const StatusTaskArgs_1 = require("./args/StatusTaskArgs");
const helpers_1 = require("../../../helpers");
let StatusRelationsResolver = class StatusRelationsResolver {
    async task(status, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).status.findUniqueOrThrow({
            where: {
                id: status.id,
            },
        }).task({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.StatusRelationsResolver = StatusRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Task_1.Task], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Status_1.Status, Object, Object, StatusTaskArgs_1.StatusTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusRelationsResolver.prototype, "task", null);
exports.StatusRelationsResolver = StatusRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Status_1.Status)
], StatusRelationsResolver);
