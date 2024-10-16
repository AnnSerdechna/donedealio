"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TaskUpdateManyWithoutWorkspaceNestedInput_1 = require("../inputs/TaskUpdateManyWithoutWorkspaceNestedInput");
let WorkspaceUpdateWithoutUserInput = class WorkspaceUpdateWithoutUserInput {
};
exports.WorkspaceUpdateWithoutUserInput = WorkspaceUpdateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], WorkspaceUpdateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], WorkspaceUpdateWithoutUserInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], WorkspaceUpdateWithoutUserInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], WorkspaceUpdateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], WorkspaceUpdateWithoutUserInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateManyWithoutWorkspaceNestedInput_1.TaskUpdateManyWithoutWorkspaceNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateManyWithoutWorkspaceNestedInput_1.TaskUpdateManyWithoutWorkspaceNestedInput)
], WorkspaceUpdateWithoutUserInput.prototype, "task", void 0);
exports.WorkspaceUpdateWithoutUserInput = WorkspaceUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspaceUpdateWithoutUserInput", {})
], WorkspaceUpdateWithoutUserInput);
