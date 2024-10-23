"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileWhereInput_1 = require("../inputs/FileWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const TaskNullableRelationFilter_1 = require("../inputs/TaskNullableRelationFilter");
let FileWhereUniqueInput = class FileWhereUniqueInput {
};
exports.FileWhereUniqueInput = FileWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FileWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileWhereUniqueInput.prototype, "fileId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileWhereInput_1.FileWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileWhereInput_1.FileWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileWhereInput_1.FileWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FileWhereUniqueInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FileWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], FileWhereUniqueInput.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskNullableRelationFilter_1.TaskNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskNullableRelationFilter_1.TaskNullableRelationFilter)
], FileWhereUniqueInput.prototype, "task", void 0);
exports.FileWhereUniqueInput = FileWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FileWhereUniqueInput", {})
], FileWhereUniqueInput);
