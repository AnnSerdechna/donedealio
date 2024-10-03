"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityAvgOrderByAggregateInput_1 = require("../inputs/PriorityAvgOrderByAggregateInput");
const PriorityCountOrderByAggregateInput_1 = require("../inputs/PriorityCountOrderByAggregateInput");
const PriorityMaxOrderByAggregateInput_1 = require("../inputs/PriorityMaxOrderByAggregateInput");
const PriorityMinOrderByAggregateInput_1 = require("../inputs/PriorityMinOrderByAggregateInput");
const PrioritySumOrderByAggregateInput_1 = require("../inputs/PrioritySumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PriorityOrderByWithAggregationInput = class PriorityOrderByWithAggregationInput {
};
exports.PriorityOrderByWithAggregationInput = PriorityOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriorityOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriorityOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriorityOrderByWithAggregationInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityCountOrderByAggregateInput_1.PriorityCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityCountOrderByAggregateInput_1.PriorityCountOrderByAggregateInput)
], PriorityOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityAvgOrderByAggregateInput_1.PriorityAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityAvgOrderByAggregateInput_1.PriorityAvgOrderByAggregateInput)
], PriorityOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityMaxOrderByAggregateInput_1.PriorityMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityMaxOrderByAggregateInput_1.PriorityMaxOrderByAggregateInput)
], PriorityOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityMinOrderByAggregateInput_1.PriorityMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityMinOrderByAggregateInput_1.PriorityMinOrderByAggregateInput)
], PriorityOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PrioritySumOrderByAggregateInput_1.PrioritySumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PrioritySumOrderByAggregateInput_1.PrioritySumOrderByAggregateInput)
], PriorityOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.PriorityOrderByWithAggregationInput = PriorityOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriorityOrderByWithAggregationInput", {})
], PriorityOrderByWithAggregationInput);
