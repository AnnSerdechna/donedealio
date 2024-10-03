"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TaskUpdateManyWithoutStatusNestedInput_1 = require("../inputs/TaskUpdateManyWithoutStatusNestedInput");
let StatusUpdateInput = class StatusUpdateInput {
};
exports.StatusUpdateInput = StatusUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StatusUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StatusUpdateInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateManyWithoutStatusNestedInput_1.TaskUpdateManyWithoutStatusNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateManyWithoutStatusNestedInput_1.TaskUpdateManyWithoutStatusNestedInput)
], StatusUpdateInput.prototype, "task", void 0);
exports.StatusUpdateInput = StatusUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusUpdateInput", {})
], StatusUpdateInput);
