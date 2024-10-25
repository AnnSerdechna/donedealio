"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumStatusTypeFilter_1 = require("../inputs/EnumStatusTypeFilter");
const StatusWhereInput_1 = require("../inputs/StatusWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const TaskListRelationFilter_1 = require("../inputs/TaskListRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let StatusWhereUniqueInput = class StatusWhereUniqueInput {
};
exports.StatusWhereUniqueInput = StatusWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StatusWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusWhereInput_1.StatusWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StatusWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusWhereInput_1.StatusWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StatusWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusWhereInput_1.StatusWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StatusWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], StatusWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], StatusWhereUniqueInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumStatusTypeFilter_1.EnumStatusTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumStatusTypeFilter_1.EnumStatusTypeFilter)
], StatusWhereUniqueInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], StatusWhereUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], StatusWhereUniqueInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskListRelationFilter_1.TaskListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskListRelationFilter_1.TaskListRelationFilter)
], StatusWhereUniqueInput.prototype, "priorityTasks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskListRelationFilter_1.TaskListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskListRelationFilter_1.TaskListRelationFilter)
], StatusWhereUniqueInput.prototype, "statusTasks", void 0);
exports.StatusWhereUniqueInput = StatusWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusWhereUniqueInput", {})
], StatusWhereUniqueInput);
