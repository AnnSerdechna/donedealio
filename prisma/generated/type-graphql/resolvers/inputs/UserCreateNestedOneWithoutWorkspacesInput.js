"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutWorkspacesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutWorkspacesInput_1 = require("../inputs/UserCreateOrConnectWithoutWorkspacesInput");
const UserCreateWithoutWorkspacesInput_1 = require("../inputs/UserCreateWithoutWorkspacesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutWorkspacesInput = class UserCreateNestedOneWithoutWorkspacesInput {
};
exports.UserCreateNestedOneWithoutWorkspacesInput = UserCreateNestedOneWithoutWorkspacesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutWorkspacesInput_1.UserCreateWithoutWorkspacesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutWorkspacesInput_1.UserCreateWithoutWorkspacesInput)
], UserCreateNestedOneWithoutWorkspacesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutWorkspacesInput_1.UserCreateOrConnectWithoutWorkspacesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutWorkspacesInput_1.UserCreateOrConnectWithoutWorkspacesInput)
], UserCreateNestedOneWithoutWorkspacesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutWorkspacesInput.prototype, "connect", void 0);
exports.UserCreateNestedOneWithoutWorkspacesInput = UserCreateNestedOneWithoutWorkspacesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutWorkspacesInput", {})
], UserCreateNestedOneWithoutWorkspacesInput);
