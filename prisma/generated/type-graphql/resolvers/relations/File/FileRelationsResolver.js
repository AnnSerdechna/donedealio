"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const File_1 = require("../../../models/File");
const Task_1 = require("../../../models/Task");
const FileTaskArgs_1 = require("./args/FileTaskArgs");
const helpers_1 = require("../../../helpers");
let FileRelationsResolver = class FileRelationsResolver {
    async task(file, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).file.findUniqueOrThrow({
            where: {
                id: file.id,
            },
        }).task({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FileRelationsResolver = FileRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Task_1.Task, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [File_1.File, Object, Object, FileTaskArgs_1.FileTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FileRelationsResolver.prototype, "task", null);
exports.FileRelationsResolver = FileRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => File_1.File)
], FileRelationsResolver);
