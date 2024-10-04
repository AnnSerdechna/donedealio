"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusUpdateWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumStatusTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumStatusTypeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let StatusUpdateWithoutTaskInput = class StatusUpdateWithoutTaskInput {
};
exports.StatusUpdateWithoutTaskInput = StatusUpdateWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StatusUpdateWithoutTaskInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StatusUpdateWithoutTaskInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumStatusTypeFieldUpdateOperationsInput_1.EnumStatusTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumStatusTypeFieldUpdateOperationsInput_1.EnumStatusTypeFieldUpdateOperationsInput)
], StatusUpdateWithoutTaskInput.prototype, "type", void 0);
exports.StatusUpdateWithoutTaskInput = StatusUpdateWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusUpdateWithoutTaskInput", {})
], StatusUpdateWithoutTaskInput);
