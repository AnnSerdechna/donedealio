"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateWithoutWorkspaceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FileUpdateManyWithoutTaskNestedInput_1 = require("../inputs/FileUpdateManyWithoutTaskNestedInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PriorityUpdateOneWithoutTaskNestedInput_1 = require("../inputs/PriorityUpdateOneWithoutTaskNestedInput");
const StatusUpdateOneWithoutTaskNestedInput_1 = require("../inputs/StatusUpdateOneWithoutTaskNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let TaskUpdateWithoutWorkspaceInput = class TaskUpdateWithoutWorkspaceInput {
};
exports.TaskUpdateWithoutWorkspaceInput = TaskUpdateWithoutWorkspaceInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TaskUpdateWithoutWorkspaceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TaskUpdateWithoutWorkspaceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TaskUpdateWithoutWorkspaceInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TaskUpdateWithoutWorkspaceInput.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], TaskUpdateWithoutWorkspaceInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TaskUpdateWithoutWorkspaceInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TaskUpdateWithoutWorkspaceInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusUpdateOneWithoutTaskNestedInput_1.StatusUpdateOneWithoutTaskNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusUpdateOneWithoutTaskNestedInput_1.StatusUpdateOneWithoutTaskNestedInput)
], TaskUpdateWithoutWorkspaceInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityUpdateOneWithoutTaskNestedInput_1.PriorityUpdateOneWithoutTaskNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityUpdateOneWithoutTaskNestedInput_1.PriorityUpdateOneWithoutTaskNestedInput)
], TaskUpdateWithoutWorkspaceInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileUpdateManyWithoutTaskNestedInput_1.FileUpdateManyWithoutTaskNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileUpdateManyWithoutTaskNestedInput_1.FileUpdateManyWithoutTaskNestedInput)
], TaskUpdateWithoutWorkspaceInput.prototype, "files", void 0);
exports.TaskUpdateWithoutWorkspaceInput = TaskUpdateWithoutWorkspaceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateWithoutWorkspaceInput", {})
], TaskUpdateWithoutWorkspaceInput);
