"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const StatusCountOrderByAggregateInput_1 = require("../inputs/StatusCountOrderByAggregateInput");
const StatusMaxOrderByAggregateInput_1 = require("../inputs/StatusMaxOrderByAggregateInput");
const StatusMinOrderByAggregateInput_1 = require("../inputs/StatusMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let StatusOrderByWithAggregationInput = class StatusOrderByWithAggregationInput {
};
exports.StatusOrderByWithAggregationInput = StatusOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatusOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], StatusOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatusOrderByWithAggregationInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatusOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatusOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusCountOrderByAggregateInput_1.StatusCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusCountOrderByAggregateInput_1.StatusCountOrderByAggregateInput)
], StatusOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusMaxOrderByAggregateInput_1.StatusMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusMaxOrderByAggregateInput_1.StatusMaxOrderByAggregateInput)
], StatusOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusMinOrderByAggregateInput_1.StatusMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusMinOrderByAggregateInput_1.StatusMinOrderByAggregateInput)
], StatusOrderByWithAggregationInput.prototype, "_min", void 0);
exports.StatusOrderByWithAggregationInput = StatusOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusOrderByWithAggregationInput", {})
], StatusOrderByWithAggregationInput);
