"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileCreateNestedManyWithoutTaskInput_1 = require("../inputs/FileCreateNestedManyWithoutTaskInput");
const PriorityCreateNestedOneWithoutTaskInput_1 = require("../inputs/PriorityCreateNestedOneWithoutTaskInput");
const StatusCreateNestedOneWithoutTaskInput_1 = require("../inputs/StatusCreateNestedOneWithoutTaskInput");
const WorkspaceCreateNestedOneWithoutTaskInput_1 = require("../inputs/WorkspaceCreateNestedOneWithoutTaskInput");
let TaskCreateInput = class TaskCreateInput {
};
exports.TaskCreateInput = TaskCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateInput.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusCreateNestedOneWithoutTaskInput_1.StatusCreateNestedOneWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusCreateNestedOneWithoutTaskInput_1.StatusCreateNestedOneWithoutTaskInput)
], TaskCreateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityCreateNestedOneWithoutTaskInput_1.PriorityCreateNestedOneWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityCreateNestedOneWithoutTaskInput_1.PriorityCreateNestedOneWithoutTaskInput)
], TaskCreateInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileCreateNestedManyWithoutTaskInput_1.FileCreateNestedManyWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileCreateNestedManyWithoutTaskInput_1.FileCreateNestedManyWithoutTaskInput)
], TaskCreateInput.prototype, "files", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceCreateNestedOneWithoutTaskInput_1.WorkspaceCreateNestedOneWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceCreateNestedOneWithoutTaskInput_1.WorkspaceCreateNestedOneWithoutTaskInput)
], TaskCreateInput.prototype, "workspace", void 0);
exports.TaskCreateInput = TaskCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateInput", {})
], TaskCreateInput);
