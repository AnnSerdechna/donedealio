"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueFileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueFileArgs_1 = require("./args/FindUniqueFileArgs");
const File_1 = require("../../../models/File");
const helpers_1 = require("../../../helpers");
let FindUniqueFileResolver = class FindUniqueFileResolver {
    async file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).file.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueFileResolver = FindUniqueFileResolver;
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
], FindUniqueFileResolver.prototype, "file", null);
exports.FindUniqueFileResolver = FindUniqueFileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => File_1.File)
], FindUniqueFileResolver);
