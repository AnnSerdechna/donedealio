"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TaskUpdateManyWithoutWorkspaceNestedInput_1 = require("../inputs/TaskUpdateManyWithoutWorkspaceNestedInput");
const UserUpdateOneWithoutWorkspacesNestedInput_1 = require("../inputs/UserUpdateOneWithoutWorkspacesNestedInput");
let WorkspaceUpdateInput = class WorkspaceUpdateInput {
};
exports.WorkspaceUpdateInput = WorkspaceUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], WorkspaceUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], WorkspaceUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], WorkspaceUpdateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], WorkspaceUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], WorkspaceUpdateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateManyWithoutWorkspaceNestedInput_1.TaskUpdateManyWithoutWorkspaceNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateManyWithoutWorkspaceNestedInput_1.TaskUpdateManyWithoutWorkspaceNestedInput)
], WorkspaceUpdateInput.prototype, "task", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutWorkspacesNestedInput_1.UserUpdateOneWithoutWorkspacesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutWorkspacesNestedInput_1.UserUpdateOneWithoutWorkspacesNestedInput)
], WorkspaceUpdateInput.prototype, "user", void 0);
exports.WorkspaceUpdateInput = WorkspaceUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspaceUpdateInput", {})
], WorkspaceUpdateInput);
