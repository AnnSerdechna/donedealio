"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByFileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileOrderByWithAggregationInput_1 = require("../../../inputs/FileOrderByWithAggregationInput");
const FileScalarWhereWithAggregatesInput_1 = require("../../../inputs/FileScalarWhereWithAggregatesInput");
const FileWhereInput_1 = require("../../../inputs/FileWhereInput");
const FileScalarFieldEnum_1 = require("../../../../enums/FileScalarFieldEnum");
let GroupByFileArgs = class GroupByFileArgs {
};
exports.GroupByFileArgs = GroupByFileArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileWhereInput_1.FileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileWhereInput_1.FileWhereInput)
], GroupByFileArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileOrderByWithAggregationInput_1.FileOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByFileArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileScalarFieldEnum_1.FileScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByFileArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileScalarWhereWithAggregatesInput_1.FileScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileScalarWhereWithAggregatesInput_1.FileScalarWhereWithAggregatesInput)
], GroupByFileArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByFileArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByFileArgs.prototype, "skip", void 0);
exports.GroupByFileArgs = GroupByFileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByFileArgs);
