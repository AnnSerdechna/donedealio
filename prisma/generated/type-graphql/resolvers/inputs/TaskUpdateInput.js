"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FileUpdateManyWithoutTaskNestedInput_1 = require("../inputs/FileUpdateManyWithoutTaskNestedInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PriorityUpdateOneWithoutTaskNestedInput_1 = require("../inputs/PriorityUpdateOneWithoutTaskNestedInput");
const StatusUpdateOneWithoutTaskNestedInput_1 = require("../inputs/StatusUpdateOneWithoutTaskNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const WorkspaceUpdateOneWithoutTaskNestedInput_1 = require("../inputs/WorkspaceUpdateOneWithoutTaskNestedInput");
let TaskUpdateInput = class TaskUpdateInput {
};
exports.TaskUpdateInput = TaskUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TaskUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TaskUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TaskUpdateInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TaskUpdateInput.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], TaskUpdateInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TaskUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TaskUpdateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusUpdateOneWithoutTaskNestedInput_1.StatusUpdateOneWithoutTaskNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusUpdateOneWithoutTaskNestedInput_1.StatusUpdateOneWithoutTaskNestedInput)
], TaskUpdateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityUpdateOneWithoutTaskNestedInput_1.PriorityUpdateOneWithoutTaskNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityUpdateOneWithoutTaskNestedInput_1.PriorityUpdateOneWithoutTaskNestedInput)
], TaskUpdateInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceUpdateOneWithoutTaskNestedInput_1.WorkspaceUpdateOneWithoutTaskNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceUpdateOneWithoutTaskNestedInput_1.WorkspaceUpdateOneWithoutTaskNestedInput)
], TaskUpdateInput.prototype, "workspace", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileUpdateManyWithoutTaskNestedInput_1.FileUpdateManyWithoutTaskNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileUpdateManyWithoutTaskNestedInput_1.FileUpdateManyWithoutTaskNestedInput)
], TaskUpdateInput.prototype, "files", void 0);
exports.TaskUpdateInput = TaskUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateInput", {})
], TaskUpdateInput);
