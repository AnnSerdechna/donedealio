"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneFileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneFileArgs_1 = require("./args/CreateOneFileArgs");
const File_1 = require("../../../models/File");
const helpers_1 = require("../../../helpers");
let CreateOneFileResolver = class CreateOneFileResolver {
    async createOneFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).file.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneFileResolver = CreateOneFileResolver;
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
], CreateOneFileResolver.prototype, "createOneFile", null);
exports.CreateOneFileResolver = CreateOneFileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => File_1.File)
], CreateOneFileResolver);
