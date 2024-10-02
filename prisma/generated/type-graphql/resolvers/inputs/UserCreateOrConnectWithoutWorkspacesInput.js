"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutWorkspacesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutWorkspacesInput_1 = require("../inputs/UserCreateWithoutWorkspacesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutWorkspacesInput = class UserCreateOrConnectWithoutWorkspacesInput {
};
exports.UserCreateOrConnectWithoutWorkspacesInput = UserCreateOrConnectWithoutWorkspacesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutWorkspacesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutWorkspacesInput_1.UserCreateWithoutWorkspacesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutWorkspacesInput_1.UserCreateWithoutWorkspacesInput)
], UserCreateOrConnectWithoutWorkspacesInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutWorkspacesInput = UserCreateOrConnectWithoutWorkspacesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutWorkspacesInput", {})
], UserCreateOrConnectWithoutWorkspacesInput);
