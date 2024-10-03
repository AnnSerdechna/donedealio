"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneFileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneFileArgs_1 = require("./args/DeleteOneFileArgs");
const File_1 = require("../../../models/File");
const helpers_1 = require("../../../helpers");
let DeleteOneFileResolver = class DeleteOneFileResolver {
    async deleteOneFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).file.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneFileResolver = DeleteOneFileResolver;
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
], DeleteOneFileResolver.prototype, "deleteOneFile", null);
exports.DeleteOneFileResolver = DeleteOneFileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => File_1.File)
], DeleteOneFileResolver);
