"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateWithoutStatusInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileCreateNestedManyWithoutTaskInput_1 = require("../inputs/FileCreateNestedManyWithoutTaskInput");
const WorkspaceCreateNestedOneWithoutTaskInput_1 = require("../inputs/WorkspaceCreateNestedOneWithoutTaskInput");
let TaskCreateWithoutStatusInput = class TaskCreateWithoutStatusInput {
};
exports.TaskCreateWithoutStatusInput = TaskCreateWithoutStatusInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutStatusInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutStatusInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutStatusInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutStatusInput.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateWithoutStatusInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateWithoutStatusInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateWithoutStatusInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileCreateNestedManyWithoutTaskInput_1.FileCreateNestedManyWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileCreateNestedManyWithoutTaskInput_1.FileCreateNestedManyWithoutTaskInput)
], TaskCreateWithoutStatusInput.prototype, "files", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceCreateNestedOneWithoutTaskInput_1.WorkspaceCreateNestedOneWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspaceCreateNestedOneWithoutTaskInput_1.WorkspaceCreateNestedOneWithoutTaskInput)
], TaskCreateWithoutStatusInput.prototype, "workspace", void 0);
exports.TaskCreateWithoutStatusInput = TaskCreateWithoutStatusInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateWithoutStatusInput", {})
], TaskCreateWithoutStatusInput);
