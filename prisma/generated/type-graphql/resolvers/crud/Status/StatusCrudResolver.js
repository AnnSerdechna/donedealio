"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateStatusArgs_1 = require("./args/AggregateStatusArgs");
const CreateManyAndReturnStatusArgs_1 = require("./args/CreateManyAndReturnStatusArgs");
const CreateManyStatusArgs_1 = require("./args/CreateManyStatusArgs");
const CreateOneStatusArgs_1 = require("./args/CreateOneStatusArgs");
const DeleteManyStatusArgs_1 = require("./args/DeleteManyStatusArgs");
const DeleteOneStatusArgs_1 = require("./args/DeleteOneStatusArgs");
const FindFirstStatusArgs_1 = require("./args/FindFirstStatusArgs");
const FindFirstStatusOrThrowArgs_1 = require("./args/FindFirstStatusOrThrowArgs");
const FindManyStatusArgs_1 = require("./args/FindManyStatusArgs");
const FindUniqueStatusArgs_1 = require("./args/FindUniqueStatusArgs");
const FindUniqueStatusOrThrowArgs_1 = require("./args/FindUniqueStatusOrThrowArgs");
const GroupByStatusArgs_1 = require("./args/GroupByStatusArgs");
const UpdateManyStatusArgs_1 = require("./args/UpdateManyStatusArgs");
const UpdateOneStatusArgs_1 = require("./args/UpdateOneStatusArgs");
const UpsertOneStatusArgs_1 = require("./args/UpsertOneStatusArgs");
const helpers_1 = require("../../../helpers");
const Status_1 = require("../../../models/Status");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateStatus_1 = require("../../outputs/AggregateStatus");
const CreateManyAndReturnStatus_1 = require("../../outputs/CreateManyAndReturnStatus");
const StatusGroupBy_1 = require("../../outputs/StatusGroupBy");
let StatusCrudResolver = class StatusCrudResolver {
    async aggregateStatus(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).status.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).status.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).status.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).status.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).status.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).status.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).status.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstStatusOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).status.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async statuses(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).status.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async status(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).status.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).status.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByStatus(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).status.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).status.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).status.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).status.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.StatusCrudResolver = StatusCrudResolver;
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
], StatusCrudResolver.prototype, "aggregateStatus", null);
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
], StatusCrudResolver.prototype, "createManyStatus", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnStatus_1.CreateManyAndReturnStatus], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnStatusArgs_1.CreateManyAndReturnStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusCrudResolver.prototype, "createManyAndReturnStatus", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Status_1.Status, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneStatusArgs_1.CreateOneStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusCrudResolver.prototype, "createOneStatus", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyStatusArgs_1.DeleteManyStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusCrudResolver.prototype, "deleteManyStatus", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Status_1.Status, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneStatusArgs_1.DeleteOneStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusCrudResolver.prototype, "deleteOneStatus", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Status_1.Status, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstStatusArgs_1.FindFirstStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusCrudResolver.prototype, "findFirstStatus", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Status_1.Status, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstStatusOrThrowArgs_1.FindFirstStatusOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusCrudResolver.prototype, "findFirstStatusOrThrow", null);
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
], StatusCrudResolver.prototype, "statuses", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Status_1.Status, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueStatusArgs_1.FindUniqueStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusCrudResolver.prototype, "status", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Status_1.Status, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueStatusOrThrowArgs_1.FindUniqueStatusOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusCrudResolver.prototype, "getStatus", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [StatusGroupBy_1.StatusGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByStatusArgs_1.GroupByStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusCrudResolver.prototype, "groupByStatus", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyStatusArgs_1.UpdateManyStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusCrudResolver.prototype, "updateManyStatus", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Status_1.Status, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneStatusArgs_1.UpdateOneStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusCrudResolver.prototype, "updateOneStatus", null);
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
], StatusCrudResolver.prototype, "upsertOneStatus", null);
exports.StatusCrudResolver = StatusCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Status_1.Status)
], StatusCrudResolver);
