"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusAvgOrderByAggregateInput_1 = require("../inputs/StatusAvgOrderByAggregateInput");
const StatusCountOrderByAggregateInput_1 = require("../inputs/StatusCountOrderByAggregateInput");
const StatusMaxOrderByAggregateInput_1 = require("../inputs/StatusMaxOrderByAggregateInput");
const StatusMinOrderByAggregateInput_1 = require("../inputs/StatusMinOrderByAggregateInput");
const StatusSumOrderByAggregateInput_1 = require("../inputs/StatusSumOrderByAggregateInput");
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
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatusOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatusOrderByWithAggregationInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusCountOrderByAggregateInput_1.StatusCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusCountOrderByAggregateInput_1.StatusCountOrderByAggregateInput)
], StatusOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusAvgOrderByAggregateInput_1.StatusAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusAvgOrderByAggregateInput_1.StatusAvgOrderByAggregateInput)
], StatusOrderByWithAggregationInput.prototype, "_avg", void 0);
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
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusSumOrderByAggregateInput_1.StatusSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusSumOrderByAggregateInput_1.StatusSumOrderByAggregateInput)
], StatusOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.StatusOrderByWithAggregationInput = StatusOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusOrderByWithAggregationInput", {})
], StatusOrderByWithAggregationInput);
