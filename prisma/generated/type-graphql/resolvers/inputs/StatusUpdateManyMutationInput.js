"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumStatusTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumStatusTypeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let StatusUpdateManyMutationInput = class StatusUpdateManyMutationInput {
};
exports.StatusUpdateManyMutationInput = StatusUpdateManyMutationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StatusUpdateManyMutationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StatusUpdateManyMutationInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumStatusTypeFieldUpdateOperationsInput_1.EnumStatusTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumStatusTypeFieldUpdateOperationsInput_1.EnumStatusTypeFieldUpdateOperationsInput)
], StatusUpdateManyMutationInput.prototype, "type", void 0);
exports.StatusUpdateManyMutationInput = StatusUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusUpdateManyMutationInput", {})
], StatusUpdateManyMutationInput);
