"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountWhereInput_1 = require("../inputs/AccountWhereInput");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let AccountWhereUniqueInput = class AccountWhereUniqueInput {
};
exports.AccountWhereUniqueInput = AccountWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountWhereInput_1.AccountWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountWhereInput_1.AccountWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountWhereInput_1.AccountWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AccountWhereUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AccountWhereUniqueInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AccountWhereUniqueInput.prototype, "providerAccountId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AccountWhereUniqueInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AccountWhereUniqueInput.prototype, "access_token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], AccountWhereUniqueInput.prototype, "expires_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], AccountWhereUniqueInput.prototype, "user", void 0);
exports.AccountWhereUniqueInput = AccountWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountWhereUniqueInput", {})
], AccountWhereUniqueInput);
