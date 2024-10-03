"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByFileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByFileArgs_1 = require("./args/GroupByFileArgs");
const File_1 = require("../../../models/File");
const FileGroupBy_1 = require("../../outputs/FileGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByFileResolver = class GroupByFileResolver {
    async groupByFile(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).file.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByFileResolver = GroupByFileResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [FileGroupBy_1.FileGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByFileArgs_1.GroupByFileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByFileResolver.prototype, "groupByFile", null);
exports.GroupByFileResolver = GroupByFileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => File_1.File)
], GroupByFileResolver);
