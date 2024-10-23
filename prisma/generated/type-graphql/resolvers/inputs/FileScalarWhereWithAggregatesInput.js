"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntWithAggregatesFilter_1 = require("../inputs/IntWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let FileScalarWhereWithAggregatesInput = class FileScalarWhereWithAggregatesInput {
};
exports.FileScalarWhereWithAggregatesInput = FileScalarWhereWithAggregatesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], FileScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], FileScalarWhereWithAggregatesInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], FileScalarWhereWithAggregatesInput.prototype, "fileId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], FileScalarWhereWithAggregatesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], FileScalarWhereWithAggregatesInput.prototype, "taskId", void 0);
exports.FileScalarWhereWithAggregatesInput = FileScalarWhereWithAggregatesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FileScalarWhereWithAggregatesInput", {})
], FileScalarWhereWithAggregatesInput);
