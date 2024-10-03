"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueFileOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueFileOrThrowArgs_1 = require("./args/FindUniqueFileOrThrowArgs");
const File_1 = require("../../../models/File");
const helpers_1 = require("../../../helpers");
let FindUniqueFileOrThrowResolver = class FindUniqueFileOrThrowResolver {
    async getFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).file.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueFileOrThrowResolver = FindUniqueFileOrThrowResolver;
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
], FindUniqueFileOrThrowResolver.prototype, "getFile", null);
exports.FindUniqueFileOrThrowResolver = FindUniqueFileOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => File_1.File)
], FindUniqueFileOrThrowResolver);
