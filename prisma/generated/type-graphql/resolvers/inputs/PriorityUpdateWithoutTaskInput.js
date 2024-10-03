"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityUpdateWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let PriorityUpdateWithoutTaskInput = class PriorityUpdateWithoutTaskInput {
};
exports.PriorityUpdateWithoutTaskInput = PriorityUpdateWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PriorityUpdateWithoutTaskInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PriorityUpdateWithoutTaskInput.prototype, "color", void 0);
exports.PriorityUpdateWithoutTaskInput = PriorityUpdateWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriorityUpdateWithoutTaskInput", {})
], PriorityUpdateWithoutTaskInput);
