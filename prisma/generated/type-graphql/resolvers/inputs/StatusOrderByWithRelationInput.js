"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskOrderByRelationAggregateInput_1 = require("../inputs/TaskOrderByRelationAggregateInput");
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
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
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
    TypeGraphQL.Field(_type => TaskOrderByRelationAggregateInput_1.TaskOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskOrderByRelationAggregateInput_1.TaskOrderByRelationAggregateInput)
], StatusOrderByWithRelationInput.prototype, "task", void 0);
exports.StatusOrderByWithRelationInput = StatusOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusOrderByWithRelationInput", {})
], StatusOrderByWithRelationInput);
