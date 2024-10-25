"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumStatusTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumStatusTypeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TaskUpdateManyWithoutPriorityNestedInput_1 = require("../inputs/TaskUpdateManyWithoutPriorityNestedInput");
const TaskUpdateManyWithoutStatusNestedInput_1 = require("../inputs/TaskUpdateManyWithoutStatusNestedInput");
const UserUpdateOneRequiredWithoutStatusNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutStatusNestedInput");
let StatusUpdateInput = class StatusUpdateInput {
};
exports.StatusUpdateInput = StatusUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], StatusUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StatusUpdateInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumStatusTypeFieldUpdateOperationsInput_1.EnumStatusTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumStatusTypeFieldUpdateOperationsInput_1.EnumStatusTypeFieldUpdateOperationsInput)
], StatusUpdateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutStatusNestedInput_1.UserUpdateOneRequiredWithoutStatusNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutStatusNestedInput_1.UserUpdateOneRequiredWithoutStatusNestedInput)
], StatusUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateManyWithoutPriorityNestedInput_1.TaskUpdateManyWithoutPriorityNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateManyWithoutPriorityNestedInput_1.TaskUpdateManyWithoutPriorityNestedInput)
], StatusUpdateInput.prototype, "priorityTasks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateManyWithoutStatusNestedInput_1.TaskUpdateManyWithoutStatusNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateManyWithoutStatusNestedInput_1.TaskUpdateManyWithoutStatusNestedInput)
], StatusUpdateInput.prototype, "statusTasks", void 0);
exports.StatusUpdateInput = StatusUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusUpdateInput", {})
], StatusUpdateInput);
