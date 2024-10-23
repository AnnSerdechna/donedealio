"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TaskUpdateOneWithoutFilesNestedInput_1 = require("../inputs/TaskUpdateOneWithoutFilesNestedInput");
let FileUpdateInput = class FileUpdateInput {
};
exports.FileUpdateInput = FileUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FileUpdateInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FileUpdateInput.prototype, "fileId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FileUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateOneWithoutFilesNestedInput_1.TaskUpdateOneWithoutFilesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateOneWithoutFilesNestedInput_1.TaskUpdateOneWithoutFilesNestedInput)
], FileUpdateInput.prototype, "task", void 0);
exports.FileUpdateInput = FileUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FileUpdateInput", {})
], FileUpdateInput);
