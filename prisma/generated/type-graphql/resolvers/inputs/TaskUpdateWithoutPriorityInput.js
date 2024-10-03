"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateWithoutPriorityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FileUpdateManyWithoutTaskNestedInput_1 = require("../inputs/FileUpdateManyWithoutTaskNestedInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StatusUpdateOneWithoutTaskNestedInput_1 = require("../inputs/StatusUpdateOneWithoutTaskNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const WorkspaceUpdateOneRequiredWithoutTaskNestedInput_1 = require("../inputs/WorkspaceUpdateOneRequiredWithoutTaskNestedInput");
let TaskUpdateWithoutPriorityInput = class TaskUpdateWithoutPriorityInput {
};
exports.TaskUpdateWithoutPriorityInput = TaskUpdateWithoutPriorityInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TaskUpdateWithoutPriorityInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TaskUpdateWithoutPriorityInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TaskUpdateWithoutPriorityInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TaskUpdateWithoutPriorityInput.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], TaskUpdateWithoutPriorityInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TaskUpdateWithoutPriorityInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TaskUpdateWithoutPriorityInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusUpdateOneWithoutTaskNestedInput_1.StatusUpdateOneWithoutTaskNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusUpdateOneWithoutTaskNestedInput_1.StatusUpdateOneWithoutTaskNestedInput)
], TaskUpdateWithoutPriorityInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileUpdateManyWithoutTaskNestedInput_1.FileUpdateManyWithoutTaskNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileUpdateManyWithoutTaskNestedInput_1.FileUpdateManyWithoutTaskNestedInput)
], TaskUpdateWithoutPriorityInput.prototype, "files", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceUpdateOneRequiredWithoutTaskNestedInput_1.WorkspaceUpdateOneRequiredWithoutTaskNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceUpdateOneRequiredWithoutTaskNestedInput_1.WorkspaceUpdateOneRequiredWithoutTaskNestedInput)
], TaskUpdateWithoutPriorityInput.prototype, "workspace", void 0);
exports.TaskUpdateWithoutPriorityInput = TaskUpdateWithoutPriorityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateWithoutPriorityInput", {})
], TaskUpdateWithoutPriorityInput);
