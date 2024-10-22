"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const FileListRelationFilter_1 = require("../inputs/FileListRelationFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const PriorityNullableRelationFilter_1 = require("../inputs/PriorityNullableRelationFilter");
const StatusNullableRelationFilter_1 = require("../inputs/StatusNullableRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const WorkspaceNullableRelationFilter_1 = require("../inputs/WorkspaceNullableRelationFilter");
let TaskWhereInput = class TaskWhereInput {
};
exports.TaskWhereInput = TaskWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TaskWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TaskWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TaskWhereInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TaskWhereInput.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], TaskWhereInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TaskWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TaskWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], TaskWhereInput.prototype, "statusId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], TaskWhereInput.prototype, "priorityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TaskWhereInput.prototype, "workspaceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusNullableRelationFilter_1.StatusNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusNullableRelationFilter_1.StatusNullableRelationFilter)
], TaskWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityNullableRelationFilter_1.PriorityNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityNullableRelationFilter_1.PriorityNullableRelationFilter)
], TaskWhereInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileListRelationFilter_1.FileListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileListRelationFilter_1.FileListRelationFilter)
], TaskWhereInput.prototype, "files", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceNullableRelationFilter_1.WorkspaceNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceNullableRelationFilter_1.WorkspaceNullableRelationFilter)
], TaskWhereInput.prototype, "workspace", void 0);
exports.TaskWhereInput = TaskWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskWhereInput", {})
], TaskWhereInput);
