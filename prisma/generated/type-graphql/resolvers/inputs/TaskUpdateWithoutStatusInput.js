"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateWithoutStatusInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FileUpdateManyWithoutTaskNestedInput_1 = require("../inputs/FileUpdateManyWithoutTaskNestedInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PriorityUpdateOneWithoutTaskNestedInput_1 = require("../inputs/PriorityUpdateOneWithoutTaskNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const WorkspaceUpdateOneWithoutTaskNestedInput_1 = require("../inputs/WorkspaceUpdateOneWithoutTaskNestedInput");
let TaskUpdateWithoutStatusInput = class TaskUpdateWithoutStatusInput {
};
exports.TaskUpdateWithoutStatusInput = TaskUpdateWithoutStatusInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TaskUpdateWithoutStatusInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TaskUpdateWithoutStatusInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TaskUpdateWithoutStatusInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TaskUpdateWithoutStatusInput.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], TaskUpdateWithoutStatusInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TaskUpdateWithoutStatusInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TaskUpdateWithoutStatusInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityUpdateOneWithoutTaskNestedInput_1.PriorityUpdateOneWithoutTaskNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityUpdateOneWithoutTaskNestedInput_1.PriorityUpdateOneWithoutTaskNestedInput)
], TaskUpdateWithoutStatusInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceUpdateOneWithoutTaskNestedInput_1.WorkspaceUpdateOneWithoutTaskNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceUpdateOneWithoutTaskNestedInput_1.WorkspaceUpdateOneWithoutTaskNestedInput)
], TaskUpdateWithoutStatusInput.prototype, "workspace", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileUpdateManyWithoutTaskNestedInput_1.FileUpdateManyWithoutTaskNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileUpdateManyWithoutTaskNestedInput_1.FileUpdateManyWithoutTaskNestedInput)
], TaskUpdateWithoutStatusInput.prototype, "files", void 0);
exports.TaskUpdateWithoutStatusInput = TaskUpdateWithoutStatusInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateWithoutStatusInput", {})
], TaskUpdateWithoutStatusInput);
