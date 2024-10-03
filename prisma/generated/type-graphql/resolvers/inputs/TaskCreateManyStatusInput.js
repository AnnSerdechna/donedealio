"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateManyStatusInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TaskCreateManyStatusInput = class TaskCreateManyStatusInput {
};
exports.TaskCreateManyStatusInput = TaskCreateManyStatusInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateManyStatusInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateManyStatusInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateManyStatusInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateManyStatusInput.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateManyStatusInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateManyStatusInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskCreateManyStatusInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskCreateManyStatusInput.prototype, "priorityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateManyStatusInput.prototype, "workspaceId", void 0);
exports.TaskCreateManyStatusInput = TaskCreateManyStatusInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateManyStatusInput", {})
], TaskCreateManyStatusInput);
