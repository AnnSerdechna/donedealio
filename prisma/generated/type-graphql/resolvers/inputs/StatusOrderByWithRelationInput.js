"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const TaskOrderByRelationAggregateInput_1 = require("../inputs/TaskOrderByRelationAggregateInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let StatusOrderByWithRelationInput = class StatusOrderByWithRelationInput {
};
exports.StatusOrderByWithRelationInput = StatusOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatusOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], StatusOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatusOrderByWithRelationInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatusOrderByWithRelationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatusOrderByWithRelationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], StatusOrderByWithRelationInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskOrderByRelationAggregateInput_1.TaskOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskOrderByRelationAggregateInput_1.TaskOrderByRelationAggregateInput)
], StatusOrderByWithRelationInput.prototype, "priorityTasks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskOrderByRelationAggregateInput_1.TaskOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskOrderByRelationAggregateInput_1.TaskOrderByRelationAggregateInput)
], StatusOrderByWithRelationInput.prototype, "statusTasks", void 0);
exports.StatusOrderByWithRelationInput = StatusOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusOrderByWithRelationInput", {})
], StatusOrderByWithRelationInput);
