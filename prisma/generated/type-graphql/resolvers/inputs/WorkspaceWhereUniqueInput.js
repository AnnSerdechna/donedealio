"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const TaskListRelationFilter_1 = require("../inputs/TaskListRelationFilter");
const UserNullableRelationFilter_1 = require("../inputs/UserNullableRelationFilter");
const WorkspaceWhereInput_1 = require("../inputs/WorkspaceWhereInput");
let WorkspaceWhereUniqueInput = class WorkspaceWhereUniqueInput {
};
exports.WorkspaceWhereUniqueInput = WorkspaceWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceWhereInput_1.WorkspaceWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkspaceWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceWhereInput_1.WorkspaceWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkspaceWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceWhereInput_1.WorkspaceWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkspaceWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], WorkspaceWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], WorkspaceWhereUniqueInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], WorkspaceWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], WorkspaceWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], WorkspaceWhereUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskListRelationFilter_1.TaskListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskListRelationFilter_1.TaskListRelationFilter)
], WorkspaceWhereUniqueInput.prototype, "task", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserNullableRelationFilter_1.UserNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserNullableRelationFilter_1.UserNullableRelationFilter)
], WorkspaceWhereUniqueInput.prototype, "user", void 0);
exports.WorkspaceWhereUniqueInput = WorkspaceWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspaceWhereUniqueInput", {})
], WorkspaceWhereUniqueInput);
