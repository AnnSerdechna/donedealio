"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutWorkspacesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutWorkspacesInput_1 = require("../inputs/UserCreateOrConnectWithoutWorkspacesInput");
const UserCreateWithoutWorkspacesInput_1 = require("../inputs/UserCreateWithoutWorkspacesInput");
const UserUpdateToOneWithWhereWithoutWorkspacesInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutWorkspacesInput");
const UserUpsertWithoutWorkspacesInput_1 = require("../inputs/UserUpsertWithoutWorkspacesInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutWorkspacesNestedInput = class UserUpdateOneWithoutWorkspacesNestedInput {
};
exports.UserUpdateOneWithoutWorkspacesNestedInput = UserUpdateOneWithoutWorkspacesNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutWorkspacesInput_1.UserCreateWithoutWorkspacesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutWorkspacesInput_1.UserCreateWithoutWorkspacesInput)
], UserUpdateOneWithoutWorkspacesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutWorkspacesInput_1.UserCreateOrConnectWithoutWorkspacesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutWorkspacesInput_1.UserCreateOrConnectWithoutWorkspacesInput)
], UserUpdateOneWithoutWorkspacesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutWorkspacesInput_1.UserUpsertWithoutWorkspacesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutWorkspacesInput_1.UserUpsertWithoutWorkspacesInput)
], UserUpdateOneWithoutWorkspacesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateOneWithoutWorkspacesNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateOneWithoutWorkspacesNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutWorkspacesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutWorkspacesInput_1.UserUpdateToOneWithWhereWithoutWorkspacesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutWorkspacesInput_1.UserUpdateToOneWithWhereWithoutWorkspacesInput)
], UserUpdateOneWithoutWorkspacesNestedInput.prototype, "update", void 0);
exports.UserUpdateOneWithoutWorkspacesNestedInput = UserUpdateOneWithoutWorkspacesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneWithoutWorkspacesNestedInput", {})
], UserUpdateOneWithoutWorkspacesNestedInput);
