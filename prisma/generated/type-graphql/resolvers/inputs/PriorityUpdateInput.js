"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let PriorityUpdateInput = class PriorityUpdateInput {
};
exports.PriorityUpdateInput = PriorityUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PriorityUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PriorityUpdateInput.prototype, "color", void 0);
exports.PriorityUpdateInput = PriorityUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriorityUpdateInput", {})
], PriorityUpdateInput);
