"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumStatusTypeFilter_1 = require("../inputs/EnumStatusTypeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const TaskListRelationFilter_1 = require("../inputs/TaskListRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let StatusWhereInput = class StatusWhereInput {
};
exports.StatusWhereInput = StatusWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StatusWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StatusWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StatusWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], StatusWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], StatusWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], StatusWhereInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumStatusTypeFilter_1.EnumStatusTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumStatusTypeFilter_1.EnumStatusTypeFilter)
], StatusWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], StatusWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], StatusWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskListRelationFilter_1.TaskListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskListRelationFilter_1.TaskListRelationFilter)
], StatusWhereInput.prototype, "priorityTasks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskListRelationFilter_1.TaskListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskListRelationFilter_1.TaskListRelationFilter)
], StatusWhereInput.prototype, "statusTasks", void 0);
exports.StatusWhereInput = StatusWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusWhereInput", {})
], StatusWhereInput);
