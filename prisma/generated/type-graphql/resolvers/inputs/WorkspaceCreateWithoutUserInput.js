"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateNestedManyWithoutWorkspaceInput_1 = require("../inputs/TaskCreateNestedManyWithoutWorkspaceInput");
let WorkspaceCreateWithoutUserInput = class WorkspaceCreateWithoutUserInput {
};
exports.WorkspaceCreateWithoutUserInput = WorkspaceCreateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceCreateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceCreateWithoutUserInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceCreateWithoutUserInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], WorkspaceCreateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], WorkspaceCreateWithoutUserInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutWorkspaceInput_1.TaskCreateNestedManyWithoutWorkspaceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateNestedManyWithoutWorkspaceInput_1.TaskCreateNestedManyWithoutWorkspaceInput)
], WorkspaceCreateWithoutUserInput.prototype, "task", void 0);
exports.WorkspaceCreateWithoutUserInput = WorkspaceCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspaceCreateWithoutUserInput", {})
], WorkspaceCreateWithoutUserInput);
