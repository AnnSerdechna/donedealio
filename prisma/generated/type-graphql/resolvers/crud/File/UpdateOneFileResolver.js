"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneFileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneFileArgs_1 = require("./args/UpdateOneFileArgs");
const File_1 = require("../../../models/File");
const helpers_1 = require("../../../helpers");
let UpdateOneFileResolver = class UpdateOneFileResolver {
    async updateOneFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).file.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneFileResolver = UpdateOneFileResolver;
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
], UpdateOneFileResolver.prototype, "updateOneFile", null);
exports.UpdateOneFileResolver = UpdateOneFileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => File_1.File)
], UpdateOneFileResolver);
