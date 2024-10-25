"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountListRelationFilter_1 = require("../inputs/AccountListRelationFilter");
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const EnumRoleFilter_1 = require("../inputs/EnumRoleFilter");
const StatusListRelationFilter_1 = require("../inputs/StatusListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const TwoFactorConfirnationNullableRelationFilter_1 = require("../inputs/TwoFactorConfirnationNullableRelationFilter");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
const WorkspaceListRelationFilter_1 = require("../inputs/WorkspaceListRelationFilter");
let UserWhereUniqueInput = class UserWhereUniqueInput {
};
exports.UserWhereUniqueInput = UserWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserWhereUniqueInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1.UserWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1.UserWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1.UserWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], UserWhereUniqueInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereUniqueInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumRoleFilter_1.EnumRoleFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumRoleFilter_1.EnumRoleFilter)
], UserWhereUniqueInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereUniqueInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereUniqueInput.prototype, "imageId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], UserWhereUniqueInput.prototype, "isTwoFactorEnable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TwoFactorConfirnationNullableRelationFilter_1.TwoFactorConfirnationNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TwoFactorConfirnationNullableRelationFilter_1.TwoFactorConfirnationNullableRelationFilter)
], UserWhereUniqueInput.prototype, "twoFactorConfirnation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountListRelationFilter_1.AccountListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountListRelationFilter_1.AccountListRelationFilter)
], UserWhereUniqueInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceListRelationFilter_1.WorkspaceListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceListRelationFilter_1.WorkspaceListRelationFilter)
], UserWhereUniqueInput.prototype, "workspaces", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusListRelationFilter_1.StatusListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusListRelationFilter_1.StatusListRelationFilter)
], UserWhereUniqueInput.prototype, "status", void 0);
exports.UserWhereUniqueInput = UserWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserWhereUniqueInput", {})
], UserWhereUniqueInput);
