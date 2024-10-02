"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutWorkspacesInput_1 = require("../inputs/UserCreateNestedOneWithoutWorkspacesInput");
let WorkspaceCreateInput = class WorkspaceCreateInput {
};
exports.WorkspaceCreateInput = WorkspaceCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], WorkspaceCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], WorkspaceCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutWorkspacesInput_1.UserCreateNestedOneWithoutWorkspacesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutWorkspacesInput_1.UserCreateNestedOneWithoutWorkspacesInput)
], WorkspaceCreateInput.prototype, "user", void 0);
exports.WorkspaceCreateInput = WorkspaceCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspaceCreateInput", {})
], WorkspaceCreateInput);
