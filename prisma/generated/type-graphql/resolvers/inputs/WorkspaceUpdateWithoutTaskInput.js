"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceUpdateWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneWithoutWorkspacesNestedInput_1 = require("../inputs/UserUpdateOneWithoutWorkspacesNestedInput");
let WorkspaceUpdateWithoutTaskInput = class WorkspaceUpdateWithoutTaskInput {
};
exports.WorkspaceUpdateWithoutTaskInput = WorkspaceUpdateWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], WorkspaceUpdateWithoutTaskInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], WorkspaceUpdateWithoutTaskInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], WorkspaceUpdateWithoutTaskInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], WorkspaceUpdateWithoutTaskInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], WorkspaceUpdateWithoutTaskInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutWorkspacesNestedInput_1.UserUpdateOneWithoutWorkspacesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutWorkspacesNestedInput_1.UserUpdateOneWithoutWorkspacesNestedInput)
], WorkspaceUpdateWithoutTaskInput.prototype, "user", void 0);
exports.WorkspaceUpdateWithoutTaskInput = WorkspaceUpdateWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspaceUpdateWithoutTaskInput", {})
], WorkspaceUpdateWithoutTaskInput);
