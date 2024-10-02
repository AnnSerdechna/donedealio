"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let WorkspaceScalarWhereInput = class WorkspaceScalarWhereInput {
};
exports.WorkspaceScalarWhereInput = WorkspaceScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkspaceScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkspaceScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkspaceScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], WorkspaceScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], WorkspaceScalarWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], WorkspaceScalarWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], WorkspaceScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], WorkspaceScalarWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], WorkspaceScalarWhereInput.prototype, "userId", void 0);
exports.WorkspaceScalarWhereInput = WorkspaceScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspaceScalarWhereInput", {})
], WorkspaceScalarWhereInput);
