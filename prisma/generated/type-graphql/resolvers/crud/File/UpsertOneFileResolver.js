"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneFileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneFileArgs_1 = require("./args/UpsertOneFileArgs");
const File_1 = require("../../../models/File");
const helpers_1 = require("../../../helpers");
let UpsertOneFileResolver = class UpsertOneFileResolver {
    async upsertOneFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).file.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneFileResolver = UpsertOneFileResolver;
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
], UpsertOneFileResolver.prototype, "upsertOneFile", null);
exports.UpsertOneFileResolver = UpsertOneFileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => File_1.File)
], UpsertOneFileResolver);
