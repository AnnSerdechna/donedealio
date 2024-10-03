"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let PriorityUpdateManyMutationInput = class PriorityUpdateManyMutationInput {
};
exports.PriorityUpdateManyMutationInput = PriorityUpdateManyMutationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PriorityUpdateManyMutationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PriorityUpdateManyMutationInput.prototype, "color", void 0);
exports.PriorityUpdateManyMutationInput = PriorityUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriorityUpdateManyMutationInput", {})
], PriorityUpdateManyMutationInput);
