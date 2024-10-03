"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateWithoutFilesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PriorityUpdateOneWithoutTaskNestedInput_1 = require("../inputs/PriorityUpdateOneWithoutTaskNestedInput");
const StatusUpdateOneWithoutTaskNestedInput_1 = require("../inputs/StatusUpdateOneWithoutTaskNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const WorkspaceUpdateOneRequiredWithoutTaskNestedInput_1 = require("../inputs/WorkspaceUpdateOneRequiredWithoutTaskNestedInput");
let TaskUpdateWithoutFilesInput = class TaskUpdateWithoutFilesInput {
};
exports.TaskUpdateWithoutFilesInput = TaskUpdateWithoutFilesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TaskUpdateWithoutFilesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TaskUpdateWithoutFilesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TaskUpdateWithoutFilesInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TaskUpdateWithoutFilesInput.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], TaskUpdateWithoutFilesInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TaskUpdateWithoutFilesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TaskUpdateWithoutFilesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusUpdateOneWithoutTaskNestedInput_1.StatusUpdateOneWithoutTaskNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusUpdateOneWithoutTaskNestedInput_1.StatusUpdateOneWithoutTaskNestedInput)
], TaskUpdateWithoutFilesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityUpdateOneWithoutTaskNestedInput_1.PriorityUpdateOneWithoutTaskNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityUpdateOneWithoutTaskNestedInput_1.PriorityUpdateOneWithoutTaskNestedInput)
], TaskUpdateWithoutFilesInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceUpdateOneRequiredWithoutTaskNestedInput_1.WorkspaceUpdateOneRequiredWithoutTaskNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceUpdateOneRequiredWithoutTaskNestedInput_1.WorkspaceUpdateOneRequiredWithoutTaskNestedInput)
], TaskUpdateWithoutFilesInput.prototype, "workspace", void 0);
exports.TaskUpdateWithoutFilesInput = TaskUpdateWithoutFilesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateWithoutFilesInput", {})
], TaskUpdateWithoutFilesInput);
