"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyFileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyFileArgs_1 = require("./args/FindManyFileArgs");
const File_1 = require("../../../models/File");
const helpers_1 = require("../../../helpers");
let FindManyFileResolver = class FindManyFileResolver {
    async files(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).file.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyFileResolver = FindManyFileResolver;
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
], FindManyFileResolver.prototype, "files", null);
exports.FindManyFileResolver = FindManyFileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => File_1.File)
], FindManyFileResolver);
