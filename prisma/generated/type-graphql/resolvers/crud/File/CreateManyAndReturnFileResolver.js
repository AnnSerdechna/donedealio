"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnFileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnFileArgs_1 = require("./args/CreateManyAndReturnFileArgs");
const File_1 = require("../../../models/File");
const CreateManyAndReturnFile_1 = require("../../outputs/CreateManyAndReturnFile");
const helpers_1 = require("../../../helpers");
let CreateManyAndReturnFileResolver = class CreateManyAndReturnFileResolver {
    async createManyAndReturnFile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).file.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyAndReturnFileResolver = CreateManyAndReturnFileResolver;
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
], CreateManyAndReturnFileResolver.prototype, "createManyAndReturnFile", null);
exports.CreateManyAndReturnFileResolver = CreateManyAndReturnFileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => File_1.File)
], CreateManyAndReturnFileResolver);
