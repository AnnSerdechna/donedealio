"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutWorkspacesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutWorkspacesInput_1 = require("../inputs/UserCreateWithoutWorkspacesInput");
const UserUpdateWithoutWorkspacesInput_1 = require("../inputs/UserUpdateWithoutWorkspacesInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutWorkspacesInput = class UserUpsertWithoutWorkspacesInput {
};
exports.UserUpsertWithoutWorkspacesInput = UserUpsertWithoutWorkspacesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutWorkspacesInput_1.UserUpdateWithoutWorkspacesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutWorkspacesInput_1.UserUpdateWithoutWorkspacesInput)
], UserUpsertWithoutWorkspacesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutWorkspacesInput_1.UserCreateWithoutWorkspacesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutWorkspacesInput_1.UserCreateWithoutWorkspacesInput)
], UserUpsertWithoutWorkspacesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutWorkspacesInput.prototype, "where", void 0);
exports.UserUpsertWithoutWorkspacesInput = UserUpsertWithoutWorkspacesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutWorkspacesInput", {})
], UserUpsertWithoutWorkspacesInput);
