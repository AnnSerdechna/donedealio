"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const TaskNullableRelationFilter_1 = require("../inputs/TaskNullableRelationFilter");
let FileWhereInput = class FileWhereInput {
};
exports.FileWhereInput = FileWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], FileWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FileWhereInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FileWhereInput.prototype, "fileId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FileWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], FileWhereInput.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskNullableRelationFilter_1.TaskNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskNullableRelationFilter_1.TaskNullableRelationFilter)
], FileWhereInput.prototype, "task", void 0);
exports.FileWhereInput = FileWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FileWhereInput", {})
], FileWhereInput);
