"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregatePriorityArgs_1 = require("./args/AggregatePriorityArgs");
const CreateManyAndReturnPriorityArgs_1 = require("./args/CreateManyAndReturnPriorityArgs");
const CreateManyPriorityArgs_1 = require("./args/CreateManyPriorityArgs");
const CreateOnePriorityArgs_1 = require("./args/CreateOnePriorityArgs");
const DeleteManyPriorityArgs_1 = require("./args/DeleteManyPriorityArgs");
const DeleteOnePriorityArgs_1 = require("./args/DeleteOnePriorityArgs");
const FindFirstPriorityArgs_1 = require("./args/FindFirstPriorityArgs");
const FindFirstPriorityOrThrowArgs_1 = require("./args/FindFirstPriorityOrThrowArgs");
const FindManyPriorityArgs_1 = require("./args/FindManyPriorityArgs");
const FindUniquePriorityArgs_1 = require("./args/FindUniquePriorityArgs");
const FindUniquePriorityOrThrowArgs_1 = require("./args/FindUniquePriorityOrThrowArgs");
const GroupByPriorityArgs_1 = require("./args/GroupByPriorityArgs");
const UpdateManyPriorityArgs_1 = require("./args/UpdateManyPriorityArgs");
const UpdateOnePriorityArgs_1 = require("./args/UpdateOnePriorityArgs");
const UpsertOnePriorityArgs_1 = require("./args/UpsertOnePriorityArgs");
const helpers_1 = require("../../../helpers");
const Priority_1 = require("../../../models/Priority");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePriority_1 = require("../../outputs/AggregatePriority");
const CreateManyAndReturnPriority_1 = require("../../outputs/CreateManyAndReturnPriority");
const PriorityGroupBy_1 = require("../../outputs/PriorityGroupBy");
let PriorityCrudResolver = class PriorityCrudResolver {
    async aggregatePriority(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyPriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnPriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOnePriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyPriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOnePriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPriorityOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async priorities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async priority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getPriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByPriority(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyPriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOnePriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOnePriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).priority.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.PriorityCrudResolver = PriorityCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePriority_1.AggregatePriority, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePriorityArgs_1.AggregatePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriorityCrudResolver.prototype, "aggregatePriority", null);
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
], PriorityCrudResolver.prototype, "createManyPriority", null);
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
], PriorityCrudResolver.prototype, "createManyAndReturnPriority", null);
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
], PriorityCrudResolver.prototype, "createOnePriority", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyPriorityArgs_1.DeleteManyPriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriorityCrudResolver.prototype, "deleteManyPriority", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Priority_1.Priority, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOnePriorityArgs_1.DeleteOnePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriorityCrudResolver.prototype, "deleteOnePriority", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Priority_1.Priority, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPriorityArgs_1.FindFirstPriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriorityCrudResolver.prototype, "findFirstPriority", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Priority_1.Priority, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPriorityOrThrowArgs_1.FindFirstPriorityOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriorityCrudResolver.prototype, "findFirstPriorityOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Priority_1.Priority], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyPriorityArgs_1.FindManyPriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriorityCrudResolver.prototype, "priorities", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Priority_1.Priority, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePriorityArgs_1.FindUniquePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriorityCrudResolver.prototype, "priority", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Priority_1.Priority, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePriorityOrThrowArgs_1.FindUniquePriorityOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriorityCrudResolver.prototype, "getPriority", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PriorityGroupBy_1.PriorityGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPriorityArgs_1.GroupByPriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriorityCrudResolver.prototype, "groupByPriority", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyPriorityArgs_1.UpdateManyPriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriorityCrudResolver.prototype, "updateManyPriority", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Priority_1.Priority, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOnePriorityArgs_1.UpdateOnePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriorityCrudResolver.prototype, "updateOnePriority", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Priority_1.Priority, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOnePriorityArgs_1.UpsertOnePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriorityCrudResolver.prototype, "upsertOnePriority", null);
exports.PriorityCrudResolver = PriorityCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Priority_1.Priority)
], PriorityCrudResolver);
