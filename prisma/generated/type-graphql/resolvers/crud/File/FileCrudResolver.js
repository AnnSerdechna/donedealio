"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateFileArgs_1 = require("./args/AggregateFileArgs");
const CreateManyAndReturnFileArgs_1 = require("./args/CreateManyAndReturnFileArgs");
const CreateManyFileArgs_1 = require("./args/CreateManyFileArgs");
const CreateOneFileArgs_1 = require("./args/CreateOneFileArgs");
const DeleteManyFileArgs_1 = require("./args/DeleteManyFileArgs");
const DeleteOneFileArgs_1 = require("./args/DeleteOneFileArgs");
const FindFirstFileArgs_1 = require("./args/FindFirstFileArgs");
const FindFirstFileOrThrowArgs_1 = require("./args/FindFirstFileOrThrowArgs");
const FindManyFileArgs_1 = require("./args/FindManyFileArgs");
const FindUniqueFileArgs_1 = require("./args/FindUniqueFileArgs");
const FindUniqueFileOrThrowArgs_1 = require("./args/FindUniqueFileOrThrowArgs");
const GroupByFileArgs_1 = require("./args/GroupByFileArgs");
const UpdateManyFileArgs_1 = require("./args/UpdateManyFileArgs");
const UpdateOneFileArgs_1 = require("./args/UpdateOneFileArgs");
const UpsertOneFileArgs_1 = require("./args/UpsertOneFileArgs");
const helpers_1 = require("../../../helpers");
const File_1 = require("../../../models/File");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateFile_1 = require("../../outputs/AggregateFile");
const CreateManyAndReturnFile_1 = require("../../outputs/CreateManyAndReturnFile");
const FileGroupBy_1 = require("../../outputs/FileGroupBy");
let FileCrudResolver = class FileCrudResolver {
    async aggregateFile(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).file.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).file.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).file.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).file.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).file.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).file.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).file.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstFileOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).file.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async files(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).file.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).file.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).file.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByFile(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).file.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).file.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).file.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).file.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FileCrudResolver = FileCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateFile_1.AggregateFile, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateFileArgs_1.AggregateFileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FileCrudResolver.prototype, "aggregateFile", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyFileArgs_1.CreateManyFileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FileCrudResolver.prototype, "createManyFile", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnFile_1.CreateManyAndReturnFile], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnFileArgs_1.CreateManyAndReturnFileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FileCrudResolver.prototype, "createManyAndReturnFile", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => File_1.File, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneFileArgs_1.CreateOneFileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FileCrudResolver.prototype, "createOneFile", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyFileArgs_1.DeleteManyFileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FileCrudResolver.prototype, "deleteManyFile", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => File_1.File, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneFileArgs_1.DeleteOneFileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FileCrudResolver.prototype, "deleteOneFile", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => File_1.File, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstFileArgs_1.FindFirstFileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FileCrudResolver.prototype, "findFirstFile", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => File_1.File, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstFileOrThrowArgs_1.FindFirstFileOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FileCrudResolver.prototype, "findFirstFileOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [File_1.File], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyFileArgs_1.FindManyFileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FileCrudResolver.prototype, "files", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => File_1.File, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueFileArgs_1.FindUniqueFileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FileCrudResolver.prototype, "file", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => File_1.File, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueFileOrThrowArgs_1.FindUniqueFileOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FileCrudResolver.prototype, "getFile", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [FileGroupBy_1.FileGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByFileArgs_1.GroupByFileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FileCrudResolver.prototype, "groupByFile", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyFileArgs_1.UpdateManyFileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FileCrudResolver.prototype, "updateManyFile", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => File_1.File, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneFileArgs_1.UpdateOneFileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FileCrudResolver.prototype, "updateOneFile", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => File_1.File, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneFileArgs_1.UpsertOneFileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FileCrudResolver.prototype, "upsertOneFile", null);
exports.FileCrudResolver = FileCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => File_1.File)
], FileCrudResolver);
