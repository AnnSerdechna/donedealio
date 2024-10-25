"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateWithoutFilesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusCreateNestedOneWithoutPriorityTasksInput_1 = require("../inputs/StatusCreateNestedOneWithoutPriorityTasksInput");
const StatusCreateNestedOneWithoutStatusTasksInput_1 = require("../inputs/StatusCreateNestedOneWithoutStatusTasksInput");
const WorkspaceCreateNestedOneWithoutTaskInput_1 = require("../inputs/WorkspaceCreateNestedOneWithoutTaskInput");
let TaskCreateWithoutFilesInput = class TaskCreateWithoutFilesInput {
};
exports.TaskCreateWithoutFilesInput = TaskCreateWithoutFilesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutFilesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutFilesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutFilesInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutFilesInput.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateWithoutFilesInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateWithoutFilesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateWithoutFilesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusCreateNestedOneWithoutStatusTasksInput_1.StatusCreateNestedOneWithoutStatusTasksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusCreateNestedOneWithoutStatusTasksInput_1.StatusCreateNestedOneWithoutStatusTasksInput)
], TaskCreateWithoutFilesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusCreateNestedOneWithoutPriorityTasksInput_1.StatusCreateNestedOneWithoutPriorityTasksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusCreateNestedOneWithoutPriorityTasksInput_1.StatusCreateNestedOneWithoutPriorityTasksInput)
], TaskCreateWithoutFilesInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceCreateNestedOneWithoutTaskInput_1.WorkspaceCreateNestedOneWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceCreateNestedOneWithoutTaskInput_1.WorkspaceCreateNestedOneWithoutTaskInput)
], TaskCreateWithoutFilesInput.prototype, "workspace", void 0);
exports.TaskCreateWithoutFilesInput = TaskCreateWithoutFilesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateWithoutFilesInput", {})
], TaskCreateWithoutFilesInput);
