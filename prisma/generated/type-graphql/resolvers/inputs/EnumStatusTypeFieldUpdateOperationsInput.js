"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumStatusTypeFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusType_1 = require("../../enums/StatusType");
let EnumStatusTypeFieldUpdateOperationsInput = class EnumStatusTypeFieldUpdateOperationsInput {
};
exports.EnumStatusTypeFieldUpdateOperationsInput = EnumStatusTypeFieldUpdateOperationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusType_1.StatusType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumStatusTypeFieldUpdateOperationsInput.prototype, "set", void 0);
exports.EnumStatusTypeFieldUpdateOperationsInput = EnumStatusTypeFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumStatusTypeFieldUpdateOperationsInput", {})
], EnumStatusTypeFieldUpdateOperationsInput);
