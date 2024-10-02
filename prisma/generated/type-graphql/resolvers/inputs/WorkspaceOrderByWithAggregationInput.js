"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const WorkspaceCountOrderByAggregateInput_1 = require("../inputs/WorkspaceCountOrderByAggregateInput");
const WorkspaceMaxOrderByAggregateInput_1 = require("../inputs/WorkspaceMaxOrderByAggregateInput");
const WorkspaceMinOrderByAggregateInput_1 = require("../inputs/WorkspaceMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let WorkspaceOrderByWithAggregationInput = class WorkspaceOrderByWithAggregationInput {
};
exports.WorkspaceOrderByWithAggregationInput = WorkspaceOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], WorkspaceOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceCountOrderByAggregateInput_1.WorkspaceCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceCountOrderByAggregateInput_1.WorkspaceCountOrderByAggregateInput)
], WorkspaceOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceMaxOrderByAggregateInput_1.WorkspaceMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceMaxOrderByAggregateInput_1.WorkspaceMaxOrderByAggregateInput)
], WorkspaceOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceMinOrderByAggregateInput_1.WorkspaceMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceMinOrderByAggregateInput_1.WorkspaceMinOrderByAggregateInput)
], WorkspaceOrderByWithAggregationInput.prototype, "_min", void 0);
exports.WorkspaceOrderByWithAggregationInput = WorkspaceOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspaceOrderByWithAggregationInput", {})
], WorkspaceOrderByWithAggregationInput);
