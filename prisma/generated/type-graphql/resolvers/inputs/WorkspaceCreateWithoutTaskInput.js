"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceCreateWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutWorkspacesInput_1 = require("../inputs/UserCreateNestedOneWithoutWorkspacesInput");
let WorkspaceCreateWithoutTaskInput = class WorkspaceCreateWithoutTaskInput {
};
exports.WorkspaceCreateWithoutTaskInput = WorkspaceCreateWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceCreateWithoutTaskInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceCreateWithoutTaskInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceCreateWithoutTaskInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], WorkspaceCreateWithoutTaskInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], WorkspaceCreateWithoutTaskInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutWorkspacesInput_1.UserCreateNestedOneWithoutWorkspacesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutWorkspacesInput_1.UserCreateNestedOneWithoutWorkspacesInput)
], WorkspaceCreateWithoutTaskInput.prototype, "user", void 0);
exports.WorkspaceCreateWithoutTaskInput = WorkspaceCreateWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspaceCreateWithoutTaskInput", {})
], WorkspaceCreateWithoutTaskInput);
