"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutWorkspacesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const StatusCreateNestedManyWithoutUserInput_1 = require("../inputs/StatusCreateNestedManyWithoutUserInput");
const TwoFactorConfirnationCreateNestedOneWithoutUserInput_1 = require("../inputs/TwoFactorConfirnationCreateNestedOneWithoutUserInput");
const Role_1 = require("../../enums/Role");
let UserCreateWithoutWorkspacesInput = class UserCreateWithoutWorkspacesInput {
};
exports.UserCreateWithoutWorkspacesInput = UserCreateWithoutWorkspacesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutWorkspacesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutWorkspacesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutWorkspacesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutWorkspacesInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutWorkspacesInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutWorkspacesInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutWorkspacesInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutWorkspacesInput.prototype, "imageId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutWorkspacesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutWorkspacesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutWorkspacesInput.prototype, "isTwoFactorEnable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TwoFactorConfirnationCreateNestedOneWithoutUserInput_1.TwoFactorConfirnationCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TwoFactorConfirnationCreateNestedOneWithoutUserInput_1.TwoFactorConfirnationCreateNestedOneWithoutUserInput)
], UserCreateWithoutWorkspacesInput.prototype, "twoFactorConfirnation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput)
], UserCreateWithoutWorkspacesInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusCreateNestedManyWithoutUserInput_1.StatusCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusCreateNestedManyWithoutUserInput_1.StatusCreateNestedManyWithoutUserInput)
], UserCreateWithoutWorkspacesInput.prototype, "status", void 0);
exports.UserCreateWithoutWorkspacesInput = UserCreateWithoutWorkspacesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutWorkspacesInput", {})
], UserCreateWithoutWorkspacesInput);
