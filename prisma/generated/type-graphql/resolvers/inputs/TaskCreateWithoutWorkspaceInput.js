"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateWithoutWorkspaceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileCreateNestedManyWithoutTaskInput_1 = require("../inputs/FileCreateNestedManyWithoutTaskInput");
const PriorityCreateNestedOneWithoutTaskInput_1 = require("../inputs/PriorityCreateNestedOneWithoutTaskInput");
const StatusCreateNestedOneWithoutTaskInput_1 = require("../inputs/StatusCreateNestedOneWithoutTaskInput");
let TaskCreateWithoutWorkspaceInput = class TaskCreateWithoutWorkspaceInput {
};
exports.TaskCreateWithoutWorkspaceInput = TaskCreateWithoutWorkspaceInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutWorkspaceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutWorkspaceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutWorkspaceInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutWorkspaceInput.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateWithoutWorkspaceInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateWithoutWorkspaceInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateWithoutWorkspaceInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusCreateNestedOneWithoutTaskInput_1.StatusCreateNestedOneWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusCreateNestedOneWithoutTaskInput_1.StatusCreateNestedOneWithoutTaskInput)
], TaskCreateWithoutWorkspaceInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityCreateNestedOneWithoutTaskInput_1.PriorityCreateNestedOneWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityCreateNestedOneWithoutTaskInput_1.PriorityCreateNestedOneWithoutTaskInput)
], TaskCreateWithoutWorkspaceInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileCreateNestedManyWithoutTaskInput_1.FileCreateNestedManyWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileCreateNestedManyWithoutTaskInput_1.FileCreateNestedManyWithoutTaskInput)
], TaskCreateWithoutWorkspaceInput.prototype, "files", void 0);
exports.TaskCreateWithoutWorkspaceInput = TaskCreateWithoutWorkspaceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateWithoutWorkspaceInput", {})
], TaskCreateWithoutWorkspaceInput);
