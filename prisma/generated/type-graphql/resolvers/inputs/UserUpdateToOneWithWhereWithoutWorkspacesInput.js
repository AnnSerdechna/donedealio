"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutWorkspacesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutWorkspacesInput_1 = require("../inputs/UserUpdateWithoutWorkspacesInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutWorkspacesInput = class UserUpdateToOneWithWhereWithoutWorkspacesInput {
};
exports.UserUpdateToOneWithWhereWithoutWorkspacesInput = UserUpdateToOneWithWhereWithoutWorkspacesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutWorkspacesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutWorkspacesInput_1.UserUpdateWithoutWorkspacesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutWorkspacesInput_1.UserUpdateWithoutWorkspacesInput)
], UserUpdateToOneWithWhereWithoutWorkspacesInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutWorkspacesInput = UserUpdateToOneWithWhereWithoutWorkspacesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutWorkspacesInput", {})
], UserUpdateToOneWithWhereWithoutWorkspacesInput);
