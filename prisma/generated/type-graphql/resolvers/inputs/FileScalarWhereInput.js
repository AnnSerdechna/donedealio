"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let FileScalarWhereInput = class FileScalarWhereInput {
};
exports.FileScalarWhereInput = FileScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], FileScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FileScalarWhereInput.prototype, "file", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], FileScalarWhereInput.prototype, "taskId", void 0);
exports.FileScalarWhereInput = FileScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FileScalarWhereInput", {})
], FileScalarWhereInput);
