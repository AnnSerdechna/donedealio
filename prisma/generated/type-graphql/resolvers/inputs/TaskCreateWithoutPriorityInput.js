"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateWithoutPriorityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileCreateNestedManyWithoutTaskInput_1 = require("../inputs/FileCreateNestedManyWithoutTaskInput");
const StatusCreateNestedOneWithoutTaskInput_1 = require("../inputs/StatusCreateNestedOneWithoutTaskInput");
const WorkspaceCreateNestedOneWithoutTaskInput_1 = require("../inputs/WorkspaceCreateNestedOneWithoutTaskInput");
let TaskCreateWithoutPriorityInput = class TaskCreateWithoutPriorityInput {
};
exports.TaskCreateWithoutPriorityInput = TaskCreateWithoutPriorityInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutPriorityInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutPriorityInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutPriorityInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutPriorityInput.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateWithoutPriorityInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateWithoutPriorityInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateWithoutPriorityInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusCreateNestedOneWithoutTaskInput_1.StatusCreateNestedOneWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusCreateNestedOneWithoutTaskInput_1.StatusCreateNestedOneWithoutTaskInput)
], TaskCreateWithoutPriorityInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceCreateNestedOneWithoutTaskInput_1.WorkspaceCreateNestedOneWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceCreateNestedOneWithoutTaskInput_1.WorkspaceCreateNestedOneWithoutTaskInput)
], TaskCreateWithoutPriorityInput.prototype, "workspace", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileCreateNestedManyWithoutTaskInput_1.FileCreateNestedManyWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileCreateNestedManyWithoutTaskInput_1.FileCreateNestedManyWithoutTaskInput)
], TaskCreateWithoutPriorityInput.prototype, "files", void 0);
exports.TaskCreateWithoutPriorityInput = TaskCreateWithoutPriorityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateWithoutPriorityInput", {})
], TaskCreateWithoutPriorityInput);
