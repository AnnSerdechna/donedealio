"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateFileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateFileArgs_1 = require("./args/AggregateFileArgs");
const File_1 = require("../../../models/File");
const AggregateFile_1 = require("../../outputs/AggregateFile");
const helpers_1 = require("../../../helpers");
let AggregateFileResolver = class AggregateFileResolver {
    async aggregateFile(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).file.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateFileResolver = AggregateFileResolver;
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
], AggregateFileResolver.prototype, "aggregateFile", null);
exports.AggregateFileResolver = AggregateFileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => File_1.File)
], AggregateFileResolver);
