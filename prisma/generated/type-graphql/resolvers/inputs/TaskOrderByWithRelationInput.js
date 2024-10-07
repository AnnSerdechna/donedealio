"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileOrderByRelationAggregateInput_1 = require("../inputs/FileOrderByRelationAggregateInput");
const PriorityOrderByWithRelationInput_1 = require("../inputs/PriorityOrderByWithRelationInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const StatusOrderByWithRelationInput_1 = require("../inputs/StatusOrderByWithRelationInput");
const WorkspaceOrderByWithRelationInput_1 = require("../inputs/WorkspaceOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TaskOrderByWithRelationInput = class TaskOrderByWithRelationInput {
};
exports.TaskOrderByWithRelationInput = TaskOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], TaskOrderByWithRelationInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], TaskOrderByWithRelationInput.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], TaskOrderByWithRelationInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], TaskOrderByWithRelationInput.prototype, "statusId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], TaskOrderByWithRelationInput.prototype, "priorityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithRelationInput.prototype, "workspaceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusOrderByWithRelationInput_1.StatusOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusOrderByWithRelationInput_1.StatusOrderByWithRelationInput)
], TaskOrderByWithRelationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityOrderByWithRelationInput_1.PriorityOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityOrderByWithRelationInput_1.PriorityOrderByWithRelationInput)
], TaskOrderByWithRelationInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileOrderByRelationAggregateInput_1.FileOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileOrderByRelationAggregateInput_1.FileOrderByRelationAggregateInput)
], TaskOrderByWithRelationInput.prototype, "files", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceOrderByWithRelationInput_1.WorkspaceOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceOrderByWithRelationInput_1.WorkspaceOrderByWithRelationInput)
], TaskOrderByWithRelationInput.prototype, "workspace", void 0);
exports.TaskOrderByWithRelationInput = TaskOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskOrderByWithRelationInput", {})
], TaskOrderByWithRelationInput);
