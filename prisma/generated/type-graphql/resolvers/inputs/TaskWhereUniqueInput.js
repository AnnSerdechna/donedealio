"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskWhereUniqueInput = void 0;
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
const TaskWhereInput_1 = require("../inputs/TaskWhereInput");
const WorkspaceRelationFilter_1 = require("../inputs/WorkspaceRelationFilter");
let TaskWhereUniqueInput = class TaskWhereUniqueInput {
};
exports.TaskWhereUniqueInput = TaskWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereInput_1.TaskWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereInput_1.TaskWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereInput_1.TaskWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TaskWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TaskWhereUniqueInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TaskWhereUniqueInput.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], TaskWhereUniqueInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TaskWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TaskWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], TaskWhereUniqueInput.prototype, "statusId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], TaskWhereUniqueInput.prototype, "priorityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TaskWhereUniqueInput.prototype, "workspaceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusNullableRelationFilter_1.StatusNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusNullableRelationFilter_1.StatusNullableRelationFilter)
], TaskWhereUniqueInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityNullableRelationFilter_1.PriorityNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityNullableRelationFilter_1.PriorityNullableRelationFilter)
], TaskWhereUniqueInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileListRelationFilter_1.FileListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileListRelationFilter_1.FileListRelationFilter)
], TaskWhereUniqueInput.prototype, "files", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceRelationFilter_1.WorkspaceRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceRelationFilter_1.WorkspaceRelationFilter)
], TaskWhereUniqueInput.prototype, "workspace", void 0);
exports.TaskWhereUniqueInput = TaskWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskWhereUniqueInput", {})
], TaskWhereUniqueInput);
