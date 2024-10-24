"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpdateWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let FileUpdateWithoutTaskInput = class FileUpdateWithoutTaskInput {
};
exports.FileUpdateWithoutTaskInput = FileUpdateWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FileUpdateWithoutTaskInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FileUpdateWithoutTaskInput.prototype, "fileId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FileUpdateWithoutTaskInput.prototype, "name", void 0);
exports.FileUpdateWithoutTaskInput = FileUpdateWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FileUpdateWithoutTaskInput", {})
], FileUpdateWithoutTaskInput);
